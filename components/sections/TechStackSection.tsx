'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { TECH_STACK } from '@/lib/constants'

const CATEGORY_COLORS: Record<string, string> = {
  Frontend:       '#7B61FF',
  Backend:        '#22D3EE',
  Database:       '#A855F7',
  Infrastructure: '#34D399',
}

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-container py-32 nebula-bg">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 60%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div data-reveal className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #22D3EE, transparent)' }} />
          <span className="act-label mb-0">Technology Stack</span>
        </div>

        <h2 data-reveal className="headline-lg mb-6">
          Powered by{' '}
          <span className="gradient-text">Proven Technology.</span>
        </h2>

        <p data-reveal className="body-text max-w-2xl mb-16">
          We select tools based on project requirements — not trends. Every technology earns its place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_STACK.map((stack, i) => {
            const color = CATEGORY_COLORS[stack.category] || '#7B61FF'
            return (
              <div key={i} data-reveal className="glass-card p-8 group relative overflow-hidden">
                {/* Category glow */}
                <div className="absolute top-0 left-0 h-full w-[2px] transition-all duration-500"
                  style={{ background: `linear-gradient(180deg, ${color}, transparent)`, opacity: 0.5 }} />

                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}40` }} />
                    <h3 className="font-mono text-sm tracking-widest uppercase font-semibold" style={{ color }}>{stack.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-3 py-2 rounded-lg transition-all duration-300 cursor-default"
                        style={{
                          background: 'rgba(17,19,41,0.8)',
                          border: `1px solid ${color}20`,
                          color: 'var(--fg-muted)',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = `${color}50`
                          e.currentTarget.style.color = color
                          e.currentTarget.style.boxShadow = `0 0 16px ${color}15`
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = `${color}20`
                          e.currentTarget.style.color = 'var(--fg-muted)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}