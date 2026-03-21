'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { PROCESS_STEPS } from '@/lib/constants'

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="process" className="section-container py-32 nebula-bg">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.06) 0%, transparent 60%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div data-reveal className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #22D3EE, transparent)' }} />
          <span className="act-label mb-0">The Luminexis Method</span>
        </div>

        <h2 data-reveal className="headline-lg mb-6">
          Structure Before{' '}
          <span className="gradient-text">Execution.</span>
        </h2>

        <p data-reveal className="body-text max-w-2xl mb-16">
          Every engagement follows the same disciplined sequence — from deep discovery through validated launch.
        </p>

        {/* ── Timeline (desktop) ── */}
        <div data-reveal className="hidden lg:flex items-center justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
            style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(123,97,255,0.3) 20%, rgba(34,211,238,0.3) 80%, transparent 100%)' }} />
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center gap-3 z-10">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(123,97,255,0.15), rgba(17,19,41,0.8))',
                  borderColor: 'rgba(123,97,255,0.3)',
                  color: '#7B61FF',
                  boxShadow: '0 0 20px rgba(123,97,255,0.15)',
                }}
              >
                {step.number}
              </div>
              <span className="font-mono text-xs tracking-widest text-fg-muted uppercase">{step.title}</span>
            </div>
          ))}
        </div>

        {/* ── Step cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} data-reveal className="glass-card p-8 group relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(123,97,255,0.06) 0%, transparent 70%)' }} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="font-mono text-sm font-bold" style={{ color: '#7B61FF' }}>{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-fg mb-3">{step.title}</h3>
                <p className="body-text text-sm">{step.description}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, #7B61FF, #22D3EE)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}