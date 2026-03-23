'use client'

/**
 * Luminexis — Cinematic 3D Canvas
 *
 * Apple AirPods / Tesla storytelling level.
 * Stack: React Three Fiber · Three.js · @react-three/drei
 *
 * Architecture:
 *   • Scroll-driven camera (Z-travel + cursor parallax)
 *   • Custom GLSL ShaderMaterial — neon glow, Fresnel, noise, u_time
 *   • Instanced star field (1,600 particles, zero GC)
 *   • Orbital rings with emissive gradient
 *   • Node constellation (systems section)
 *   • Floating nebula orb (hero centrepiece)
 *   • Scroll-progress-keyed opacity for each act
 *   • WebGL unavailable → silent graceful skip
 */

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// ─── Types ────────────────────────────────────────────────────────────────────
interface CanvasProps { scrollProgress: number }
interface ProgressProp { progress: number }

// ─── GLSL shaders ─────────────────────────────────────────────────────────────

/** Fresnel + neon glow ShaderMaterial for the hero orb */
const ORB_VERT = /* glsl */`
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;
  uniform float u_time;

  // Simplex noise helper (3D)
  vec3 mod289(vec3 x){ return x - floor(x*(1./289.))*289.; }
  vec4 mod289(vec4 x){ return x - floor(x*(1./289.))*289.; }
  vec4 permute(vec4 x){ return mod289(((x*34.)+1.)*x); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314*r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1./6., 1./3.);
    const vec4 D = vec4(0., .5, 1., 2.);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1. - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
    float n_ = .142857142857;
    vec3 ns = n_* D.wyz - D.xzx;
    vec4 j = p - 49.*floor(p*ns.z*ns.z);
    vec4 x_ = floor(j*ns.z);
    vec4 y_ = floor(j - 7.*x_);
    vec4 x = x_*ns.x + ns.yyyy;
    vec4 y = y_*ns.x + ns.yyyy;
    vec4 h = 1. - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.+1.;
    vec4 s1 = floor(b1)*2.+1.;
    vec4 sh = -step(h, vec4(0.));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.);
    m = m*m;
    return 42.*dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  void main() {
    vNormal   = normalize(normalMatrix * normal);
    vUv       = uv;
    float noise = snoise(position * 0.8 + vec3(0., 0., u_time * 0.18)) * 0.22;
    vec3 displaced = position + normal * noise;
    vPosition = displaced;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.);
  }
`

const ORB_FRAG = /* glsl */`
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;
  uniform float u_time;
  uniform vec2  u_mouse;
  uniform float u_opacity;

  void main() {
    // Fresnel rim
    vec3 viewDir   = normalize(cameraPosition - vPosition);
    float fresnel  = pow(1. - max(dot(vNormal, viewDir), 0.), 3.5);

    // Colour bands — cyan core, violet rim
    vec3 coreColor = vec3(0.13, 0.83, 0.93);   // #22D3EE
    vec3 rimColor  = vec3(0.48, 0.38, 1.0);    // #7B61FF
    vec3 col       = mix(coreColor, rimColor, fresnel);

    // Pulsing brightness
    float pulse    = 0.75 + 0.25 * sin(u_time * 1.2);

    // Mouse-reactive shimmer
    float shimmer  = dot(normalize(vNormal), vec3(u_mouse, 0.5)) * 0.18;

    float alpha = u_opacity * (fresnel * 0.7 + 0.25) * pulse;
    gl_FragColor  = vec4(col * (1.2 + shimmer) * pulse, alpha);
  }
`

/** Minimal glow ring shader */
const RING_VERT = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
`
const RING_FRAG = /* glsl */`
  varying vec2 vUv;
  uniform float u_time;
  uniform vec3  u_color;
  uniform float u_opacity;
  void main() {
    float pulse = 0.6 + 0.4 * sin(u_time * 0.9);
    gl_FragColor = vec4(u_color, u_opacity * pulse);
  }
`

// ─── Scroll Camera ────────────────────────────────────────────────────────────
/**
 * Drives camera Z + cursor parallax.
 * Z travels from +10 → +3 as scroll 0→1.
 * Cursor moves camera X/Y ±0.6 units.
 */
function ScrollCamera({ progress }: ProgressProp) {
  const { camera } = useThree()
  const mouse = useRef<[number, number]>([0, 0])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth  - 0.5) * 2,
        (e.clientY / window.innerHeight - 0.5) * 2,
      ]
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const currentZ   = useRef(10)
  const currentX   = useRef(0)
  const currentY   = useRef(0)

  useFrame(() => {
    // Target Z: 10 → 3 over full scroll
    const targetZ = 10 - progress * 7
    const targetX = mouse.current[0] * 0.6
    const targetY = -mouse.current[1] * 0.4

    currentZ.current += (targetZ - currentZ.current) * 0.05
    currentX.current += (targetX - currentX.current) * 0.04
    currentY.current += (targetY - currentY.current) * 0.04

    camera.position.set(currentX.current, currentY.current, currentZ.current)
    camera.lookAt(0, 0, 0)
  })

  return null
}

// ─── Hero Orb (centrepiece with custom shader) ────────────────────────────────
function HeroOrb({ progress }: ProgressProp) {
  const meshRef  = useRef<THREE.Mesh>(null!)
  const mouseRef = useRef<[number, number]>([0, 0])

  // fade out after 30% scroll
  const opacity = Math.max(0, 1 - progress / 0.35)

  const uniforms = useMemo(() => ({
    u_time:    { value: 0 },
    u_mouse:   { value: new THREE.Vector2(0, 0) },
    u_opacity: { value: opacity },
  }), [])  // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = [
        (e.clientX / window.innerWidth  - 0.5),
        (e.clientY / window.innerHeight - 0.5),
      ]
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    uniforms.u_time.value    = t
    uniforms.u_mouse.value.set(mouseRef.current[0], mouseRef.current[1])
    uniforms.u_opacity.value = Math.max(0, 1 - progress / 0.35)
    meshRef.current.rotation.y = t * 0.12
    meshRef.current.rotation.x = t * 0.06
    // Scale up slightly with scroll (0→0.3)
    const s = 1 + Math.min(progress / 0.3, 1) * 0.25
    meshRef.current.scale.setScalar(s)
  })

  if (opacity <= 0.01) return null

  return (
    <Float speed={0.6} floatIntensity={0.4} rotationIntensity={0.05}>
      <mesh ref={meshRef} position={[0, 0, -2]}>
        <sphereGeometry args={[1.4, 64, 64]} />
        <shaderMaterial
          vertexShader={ORB_VERT}
          fragmentShader={ORB_FRAG}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  )
}

// ─── Instanced Star Field ─────────────────────────────────────────────────────
function StarField({ progress }: ProgressProp) {
  const ref    = useRef<THREE.Points>(null!)
  const COUNT  = 1600

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3)
    const col = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      pos[i*3]   = (Math.random() - 0.5) * 60
      pos[i*3+1] = (Math.random() - 0.5) * 60
      pos[i*3+2] = (Math.random() - 0.5) * 30 - 5
      const r = Math.random()
      if (r < 0.3) {
        col[i*3] = 0.48; col[i*3+1] = 0.38; col[i*3+2] = 1.0  // violet
      } else if (r < 0.5) {
        col[i*3] = 0.13; col[i*3+1] = 0.83; col[i*3+2] = 0.93 // cyan
      } else {
        col[i*3] = 0.92; col[i*3+1] = 0.90; col[i*3+2] = 1.0  // white-blue
      }
    }
    return { positions: pos, colors: col }
  }, [])

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3))
    g.setAttribute('color',    new THREE.BufferAttribute(colors, 3))
    return g
  }, [positions, colors])

  // Cache original Y positions for wave animation
  const origY = useMemo(() => positions.filter((_, i) => i % 3 === 1), [positions])

  useFrame((state) => {
    if (!ref.current) return
    const t   = state.clock.elapsedTime
    const arr = ref.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < COUNT; i++) {
      arr[i*3+1] = origY[i] + Math.sin(t * 0.12 + i * 0.35) * 0.1
    }
    ref.current.geometry.attributes.position.needsUpdate = true
    ref.current.rotation.y = t * 0.006
    ref.current.rotation.x = progress * 0.25
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.055}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

// ─── Glow Orbital Rings ────────────────────────────────────────────────────────
function OrbitalRings({ progress }: ProgressProp) {
  const groupRef = useRef<THREE.Group>(null!)

  const rings = useMemo(() => [
    { radius: 3.8,  color: new THREE.Color('#7B61FF') },
    { radius: 5.2,  color: new THREE.Color('#22D3EE') },
    { radius: 6.8,  color: new THREE.Color('#A855F7') },
  ], [])

  const uniformSets = useMemo(() =>
    rings.map((r) => ({
      u_time:    { value: 0 },
      u_color:   { value: r.color },
      u_opacity: { value: 0.09 },
    })), [rings])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.z = t * 0.04
    groupRef.current.rotation.x = 0.38 + progress * 0.55
    uniformSets.forEach((u, i) => {
      u.u_time.value    = t + i
      u.u_opacity.value = 0.09 * (1 - progress * 0.8)
    })
  })

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, i * 0.3]}>
          <torusGeometry args={[ring.radius, 0.025, 8, 120]} />
          <shaderMaterial
            vertexShader={RING_VERT}
            fragmentShader={RING_FRAG}
            uniforms={uniformSets[i]}
            transparent
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  )
}

// ─── Nebula Cloud ─────────────────────────────────────────────────────────────
function NebulaCloud({ progress }: ProgressProp) {
  const ref = useRef<THREE.Mesh>(null!)
  // visible in mid Nebula section (20%–60%)
  const enter = Math.max(0, Math.min((progress - 0.18) / 0.12, 1))
  const exit  = progress > 0.6 ? Math.max(0, 1 - (progress - 0.6) / 0.15) : 1
  const opacity = enter * exit * 0.055

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.x = t * 0.015
    ref.current.rotation.y = t * 0.01
    ref.current.position.y = Math.sin(t * 0.07) * 0.4 - progress * 2.5
  })

  if (opacity < 0.002) return null
  return (
    <Float speed={0.4} floatIntensity={0.15} rotationIntensity={0.08}>
      <Sphere ref={ref} args={[4, 32, 32]} position={[0, 0, -6]}>
        <MeshDistortMaterial
          color="#7B61FF"
          distort={0.5}
          speed={1.0}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={opacity}
        />
      </Sphere>
    </Float>
  )
}

// ─── Floating Accent Orbs ─────────────────────────────────────────────────────
function FloatingOrbs({ progress }: ProgressProp) {
  const orbs = useMemo(() => [
    { pos: [-5,  2, -3] as [number,number,number], color: '#A855F7', scale: 0.6 },
    { pos: [ 6, -1, -2] as [number,number,number], color: '#22D3EE', scale: 0.4 },
    { pos: [ 3,  3, -4] as [number,number,number], color: '#7B61FF', scale: 0.3 },
  ], [])

  const enter = Math.max(0, Math.min((progress - 0.15) / 0.15, 1))
  const exit  = progress > 0.7 ? Math.max(0, 1 - (progress - 0.7) / 0.2) : 1
  const opacity = enter * exit

  if (opacity < 0.01) return null
  return (
    <group>
      {orbs.map((orb, i) => (
        <Float key={i} speed={0.5 + i * 0.15} floatIntensity={0.4} rotationIntensity={0.15}>
          <Sphere args={[orb.scale, 32, 32]} position={orb.pos}>
            <MeshDistortMaterial
              color={orb.color}
              distort={0.18}
              speed={1.5}
              roughness={0.2}
              metalness={0.75}
              transparent
              opacity={opacity * 0.22}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}

// ─── Node Constellation (Systems act) ─────────────────────────────────────────
function Constellation({ progress }: ProgressProp) {
  const NODE_COUNT = 16
  const enter = Math.max(0, Math.min((progress - 0.4) / 0.1, 1))
  const exit  = progress > 0.75 ? Math.max(0, 1 - (progress - 0.75) / 0.1) : 1
  const opacity = enter * exit

  const { nodes, lineGeometries } = useMemo(() => {
    const n = Array.from({ length: NODE_COUNT }, () => ({
      pos: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 5,
      ] as [number, number, number],
    }))
    const edges: [number, number][] = []
    for (let i = 0; i < NODE_COUNT; i++)
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = n[i].pos[0] - n[j].pos[0]
        const dy = n[i].pos[1] - n[j].pos[1]
        const dz = n[i].pos[2] - n[j].pos[2]
        if (Math.sqrt(dx*dx + dy*dy + dz*dz) < 5.5) edges.push([i, j])
      }
    const lg = edges.map(([a, b]) => {
      const pts = [new THREE.Vector3(...n[a].pos), new THREE.Vector3(...n[b].pos)]
      return new THREE.BufferGeometry().setFromPoints(pts)
    })
    return { nodes: n, lineGeometries: lg }
  }, [])

  if (opacity < 0.01) return null
  return (
    <group>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshBasicMaterial color="#7B61FF" transparent opacity={opacity * 0.65} />
        </mesh>
      ))}
      {lineGeometries.map((g, i) => {
        const line = new THREE.Line(
          g,
          new THREE.LineBasicMaterial({ color: '#22D3EE', transparent: true, opacity: opacity * 0.14 })
        )
        return <primitive key={i} object={line} />
      })}
    </group>
  )
}

// ─── Launch Energy Burst (last act) ──────────────────────────────────────────
function LaunchBurst({ progress }: ProgressProp) {
  const groupRef = useRef<THREE.Group>(null!)
  const enter = Math.max(0, Math.min((progress - 0.82) / 0.1, 1))
  const opacity = enter

  const spokes = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    angle: (i / 8) * Math.PI * 2,
    length: 3 + Math.random() * 2,
  })), [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.z = t * 0.25
  })

  if (opacity < 0.01) return null
  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {spokes.map((s, i) => {
        const dir = new THREE.Vector3(Math.cos(s.angle), Math.sin(s.angle), 0)
        const mid = dir.clone().multiplyScalar(s.length / 2)
        const pts = [new THREE.Vector3(0, 0, 0), dir.clone().multiplyScalar(s.length)]
        const g   = new THREE.BufferGeometry().setFromPoints(pts)
        return (
          <primitive
            key={i}
            object={new THREE.Line(
              g,
              new THREE.LineBasicMaterial({ color: '#22D3EE', transparent: true, opacity: opacity * 0.55 })
            )}
          />
        )
      })}
      <mesh>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={opacity * 3}
          transparent
          opacity={opacity * 0.9}
        />
      </mesh>
    </group>
  )
}

// ─── Ambient Reactive Light ───────────────────────────────────────────────────
function ReactiveLight({ progress }: ProgressProp) {
  const ref = useRef<THREE.PointLight>(null!)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    // Slowly orbit
    ref.current.position.set(
      Math.sin(t * 0.4) * 8,
      Math.cos(t * 0.3) * 5,
      5
    )
    // Colour shifts: violet → cyan → violet
    const phase = (Math.sin(t * 0.15) + 1) * 0.5
    ref.current.color.setRGB(
      0.48 - phase * 0.35,
      0.38 + phase * 0.45,
      1.0
    )
    ref.current.intensity = 1.5 + Math.sin(t * 0.8) * 0.4
  })
  return <pointLight ref={ref} intensity={1.5} distance={30} />
}

// ─── WebGL capability check ───────────────────────────────────────────────────
function useWebGLSupported() {
  const [supported, setSupported] = useState(true)
  useEffect(() => {
    try {
      const c  = document.createElement('canvas')
      const gl = c.getContext('webgl') || c.getContext('experimental-webgl')
      if (!gl) setSupported(false)
    } catch { setSupported(false) }
  }, [])
  return supported
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function MainCanvas({ scrollProgress }: CanvasProps) {
  const webglOk = useWebGLSupported()

  // Graceful static fallback
  if (!webglOk) {
    return (
      <div
        id="luminexis-canvas"
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123,97,255,0.18) 0%, #05070F 70%)',
        }}
      />
    )
  }

  return (
    <div id="luminexis-canvas" aria-hidden="true">
      <Canvas
        camera={{ fov: 52, near: 0.1, far: 120, position: [0, 0, 10] }}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance',
          stencil: false,
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        {/* Scene background */}
        <color attach="background" args={[new THREE.Color('#05070F')]} />

        {/* Fog for depth illusion */}
        <fog attach="fog" args={['#05070F', 18, 45]} />

        {/* Static lights */}
        <ambientLight intensity={0.12} />
        <pointLight position={[10, 10, 8]}  intensity={1.0} color="#7B61FF" />
        <pointLight position={[-8, -6, -4]} intensity={0.5} color="#22D3EE" />
        <pointLight position={[0, -10, 6]}  intensity={0.25} color="#A855F7" />

        {/* Reactive animated light */}
        <ReactiveLight progress={scrollProgress} />

        {/* Scroll-driven camera */}
        <ScrollCamera progress={scrollProgress} />

        {/* Scene objects — each keyed to scroll progress */}
        <StarField       progress={scrollProgress} />
        <HeroOrb         progress={scrollProgress} />
        <NebulaCloud     progress={scrollProgress} />
        <OrbitalRings    progress={scrollProgress} />
        <FloatingOrbs    progress={scrollProgress} />
        <Constellation   progress={scrollProgress} />
        <LaunchBurst     progress={scrollProgress} />
      </Canvas>
    </div>
  )
}