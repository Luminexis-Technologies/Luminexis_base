'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { METRICS } from '@/lib/constants'

const STACK_LAYERS = [
  { label: 'Rendering',    items: ['Next.js 14', 'RSC', 'Streaming'],                  color: '#7B61FF' },
  { label: 'Interactions',  items: ['GSAP 3', 'React Three Fiber', 'Framer Motion'],    color: '#A855F7' },
  { label: 'API Layer',    items: ['REST', 'GraphQL', 'Server Actions', 'tRPC'],       color: '#22D3EE' },
  { label: 'Database',     items: ['PostgreSQL', 'Prisma', 'Redis', 'Supabase'],       color: '#34D399' },
  { label: 'DevOps',       items: ['Vercel', 'Docker', 'GitHub Actions', 'Sentry'],    color: '#EC4899' },
]

export default function Act4Engineering() {
  const sectionRef = useRef<HTMLElement>(null)
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      )

      // Animate counters
      METRICS.forEach((metric, i) => {
        const el = counterRefs.current[i]
        if (!el) return
        const numericValue = parseFloat(metric.value.replace(/[^0-9.]/g, ''))
        const obj = { val: 0 }
        gsap.to(obj, {
          val: numericValue,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => {
            const prefix = metric.value.startsWith('<') ? '<' : ''
            el.textContent = prefix + Math.round(obj.val * 10) / 10 + metric.suffix
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="act4" className="section-container py-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.05) 0%, transparent 60%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 60%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div data-reveal className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #A855F7, transparent)' }} />
          <span className="act-label mb-0" style={{ color: '#A855F7' }}>Act 04 — Engineering</span>
        </div>

        <h2 data-reveal className="headline-lg mb-6">
          Engineered for{' '}
          <span className="gradient-text">Performance.</span>
        </h2>

        <p data-reveal className="body-text max-w-2xl mb-16">
          Architecture decisions made before the first line of code. Measured outcomes. Zero compromise.
        </p>

        {/* Metrics */}
        <div data-reveal className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {METRICS.map((metric, i) => (
            <div key={i} className="glass-card p-6 text-center group hover:scale-[1.02] transition-transform duration-300">
              <span
                ref={(el) => { counterRefs.current[i] = el }}
                className="block font-mono text-3xl md:text-4xl font-bold mb-2 gradient-text"
              >
                {metric.value}{metric.suffix}
              </span>
              <span className="font-mono text-xs tracking-widest uppercase text-fg-muted">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Stack layers */}
        <div data-reveal className="space-y-3">
          {STACK_LAYERS.map((layer, i) => (
            <div
              key={i}
              className="glass-card px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3 group"
            >
              <div className="flex items-center gap-3 sm:w-40 flex-shrink-0">
                <div className="w-2 h-2 rounded-full" style={{ background: layer.color, boxShadow: `0 0 8px ${layer.color}40` }} />
                <span className="font-mono text-xs tracking-widest uppercase font-semibold" style={{ color: layer.color }}>
                  {layer.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span key={item} className="font-mono text-xs px-3 py-1.5 rounded-md" style={{
                    background: 'rgba(17,19,41,0.8)',
                    border: `1px solid ${layer.color}20`,
                    color: 'var(--fg-muted)',
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}