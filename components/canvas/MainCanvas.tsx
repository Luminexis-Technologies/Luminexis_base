'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei'
import * as THREE from 'three'

interface CanvasProps {
  scrollProgress: number
}

/* ─── Star Field ──────────────────────────────────── */
function StarField({ progress }: { progress: number }) {
  const ref = useRef<THREE.Points>(null!)
  const count = 600

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 40
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5
      const r = Math.random()
      if (r < 0.3) {
        col[i * 3] = 0.48; col[i * 3 + 1] = 0.38; col[i * 3 + 2] = 1.0
      } else if (r < 0.5) {
        col[i * 3] = 0.13; col[i * 3 + 1] = 0.83; col[i * 3 + 2] = 0.93
      } else {
        col[i * 3] = 0.9; col[i * 3 + 1] = 0.88; col[i * 3 + 2] = 1.0
      }
      sz[i] = Math.random() * 0.06 + 0.02
    }
    return { positions: pos, colors: col, sizes: sz }
  }, [])

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3))
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return g
  }, [positions, colors])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const posArr = ref.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      const ix = i * 3
      posArr[ix + 1] = positions[ix + 1] + Math.sin(t * 0.15 + i * 0.4) * 0.08
    }
    ref.current.geometry.attributes.position.needsUpdate = true
    ref.current.rotation.y = t * 0.008
    ref.current.rotation.x = progress * 0.3
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

/* ─── Nebula Cloud ────────────────────────────────── */
function NebulaCloud({ progress }: { progress: number }) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.x = t * 0.02
    ref.current.rotation.y = t * 0.015
    ref.current.position.y = Math.sin(t * 0.08) * 0.5 - progress * 3
  })

  return (
    <Float speed={0.5} floatIntensity={0.2} rotationIntensity={0.1}>
      <Sphere ref={ref} args={[3, 32, 32]} position={[0, 0, -4]}>
        <MeshDistortMaterial
          color="#7B61FF"
          attach="material"
          distort={0.45}
          speed={1.2}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.04}
          wireframe={false}
        />
      </Sphere>
    </Float>
  )
}

/* ─── Orbital Rings ───────────────────────────────── */
function OrbitalRings({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.z = t * 0.05
    groupRef.current.rotation.x = 0.4 + progress * 0.5
  })

  const rings = useMemo(() => [
    { radius: 4,   color: '#7B61FF', opacity: 0.08 },
    { radius: 5.5, color: '#22D3EE', opacity: 0.05 },
    { radius: 7,   color: '#A855F7', opacity: 0.04 },
  ], [])

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, i * 0.3]}>
          <torusGeometry args={[ring.radius, 0.02, 8, 100]} />
          <meshBasicMaterial
            color={ring.color}
            transparent
            opacity={ring.opacity}
          />
        </mesh>
      ))}
    </group>
  )
}

/* ─── Floating Planets ────────────────────────────── */
function FloatingPlanets({ progress }: { progress: number }) {
  const enter = Math.max(0, Math.min((progress - 0.15) / 0.15, 1))
  const opacity = enter * (progress < 0.7 ? 1 : Math.max(0, 1 - (progress - 0.7) / 0.2))

  if (opacity <= 0.01) return null

  return (
    <group>
      <Float speed={0.6} floatIntensity={0.5} rotationIntensity={0.2}>
        <Sphere args={[0.6, 32, 32]} position={[-5, 2, -3]}>
          <MeshDistortMaterial
            color="#A855F7"
            distort={0.2}
            speed={2}
            roughness={0.3}
            metalness={0.7}
            transparent
            opacity={opacity * 0.25}
          />
        </Sphere>
      </Float>
      <Float speed={0.4} floatIntensity={0.3} rotationIntensity={0.15}>
        <Sphere args={[0.4, 32, 32]} position={[6, -1, -2]}>
          <MeshDistortMaterial
            color="#22D3EE"
            distort={0.15}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={opacity * 0.2}
          />
        </Sphere>
      </Float>
      <Float speed={0.7} floatIntensity={0.4} rotationIntensity={0.1}>
        <Sphere args={[0.3, 32, 32]} position={[3, 3, -4]}>
          <meshStandardMaterial
            color="#7B61FF"
            transparent
            opacity={opacity * 0.3}
            emissive="#7B61FF"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>
    </group>
  )
}

/* ─── Node Constellation (mid-page) ──────────────── */
function Constellation({ progress }: { progress: number }) {
  const enter = Math.max(0, Math.min((progress - 0.4) / 0.1, 1))
  const exit  = progress > 0.75 ? Math.max(0, 1 - (progress - 0.75) / 0.1) : 1
  const opacity = enter * exit

  const nodeCount = 16
  const { nodes, edges, lineGeometries } = useMemo(() => {
    const n = Array.from({ length: nodeCount }, () => ({
      pos: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
      ] as [number, number, number],
    }))
    const e: [number, number][] = []
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = n[i].pos[0] - n[j].pos[0]
        const dy = n[i].pos[1] - n[j].pos[1]
        const dz = n[i].pos[2] - n[j].pos[2]
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 5) e.push([i, j])
      }
    }
    const lg = e.map(([a, b]) => {
      const pts = [new THREE.Vector3(...n[a].pos), new THREE.Vector3(...n[b].pos)]
      return new THREE.BufferGeometry().setFromPoints(pts)
    })
    return { nodes: n, edges: e, lineGeometries: lg }
  }, [])

  if (opacity <= 0.01) return null

  return (
    <group>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#7B61FF" transparent opacity={opacity * 0.6} />
        </mesh>
      ))}
      {lineGeometries.map((g, i) => {
        const line = new THREE.Line(
          g,
          new THREE.LineBasicMaterial({ color: '#22D3EE', transparent: true, opacity: opacity * 0.12 })
        )
        return <primitive key={i} object={line} />
      })}
    </group>
  )
}

/* ─── Main Canvas ────────────────────────────────── */
export default function MainCanvas({ scrollProgress }: CanvasProps) {
  return (
    <div id="luminexis-canvas" aria-hidden="true">
      <Canvas
        camera={{ fov: 55, near: 0.1, far: 100, position: [0, 0, 10] }}
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance', stencil: false }}
        dpr={1}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={[new THREE.Color('#06060F')]} />
        <ambientLight intensity={0.15} />
        <pointLight position={[10, 10, 10]}  intensity={1.2} color="#7B61FF" />
        <pointLight position={[-8, -6, -5]}  intensity={0.6} color="#22D3EE" />
        <pointLight position={[0, -10, 5]}   intensity={0.3} color="#A855F7" />

        <StarField        progress={scrollProgress} />
        <NebulaCloud      progress={scrollProgress} />
        <OrbitalRings     progress={scrollProgress} />
        <FloatingPlanets  progress={scrollProgress} />
        <Constellation    progress={scrollProgress} />

        <Environment preset="night" />
      </Canvas>
    </div>
  )
}