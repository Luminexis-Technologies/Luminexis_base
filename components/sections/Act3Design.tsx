'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { SERVICES } from '@/lib/data'

export default function Act3Design() {
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
    <section ref={sectionRef} id="act3" className="section-container py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div data-reveal className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #7B61FF, transparent)' }} />
          <span className="act-label mb-0" style={{ color: '#7B61FF' }}>What We Build</span>
        </div>

        <h2 data-reveal className="headline-lg mb-6">
          Every System,{' '}
          <span className="gradient-text">Structurally Accountable.</span>
        </h2>

        <p data-reveal className="body-text max-w-2xl mb-16">
          Interface decisions are made after structural planning — not before.
          Every component is accountable to a commercial objective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <div key={service.id} data-reveal className="service-module p-8 group relative overflow-hidden">
              {/* Glow effect on hover */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.15) 0%, transparent 70%)' }} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  {(() => { const Icon = service.icon; return <Icon className="w-8 h-8" style={{ color: '#7B61FF' }} /> })()}
                </div>
                <h3 className="text-xl font-semibold text-fg mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="body-text text-sm mb-5">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full transition-all duration-300"
                      style={{
                        border: '1px solid rgba(123,97,255,0.2)',
                        color: 'var(--fg-muted)',
                        background: 'rgba(123,97,255,0.04)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-600"
                style={{ background: 'linear-gradient(90deg, #7B61FF, #22D3EE, #A855F7)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}