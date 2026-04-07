'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { TECH_STACK } from '@/lib/data'

const CATEGORY_COLORS: Record<string, string> = {
  Frontend:       '#000000',
  Backend:        '#000000',
  Database:       '#000000',
  Infrastructure: '#000000',
}

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} aria-label="Technology stack" className="section-container py-32">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div data-reveal className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px"  />
          <span className="act-label mb-0">Technology Stack</span>
        </div>

        <h2 data-reveal className="headline-lg mb-6">
          Powered by{' '}
          <span className="text-black">Proven Technology.</span>
        </h2>

        <p data-reveal className="body-text max-w-2xl mb-16">
          We select tools based on project requirements — not trends. Every technology earns its place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_STACK.map((stack, i) => {
            const color = CATEGORY_COLORS[stack.category] || '#000000'
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
                          background: '#f9f9f9',
                          border: `1px solid rgba(0,0,0,0.05)`,
                          color: '#000000',
                          fontWeight: '500'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = `rgba(0,0,0,0.2)`
                          e.currentTarget.style.boxShadow = `0 4px 12px rgba(0,0,0,0.05)`
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = `rgba(0,0,0,0.05)`
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