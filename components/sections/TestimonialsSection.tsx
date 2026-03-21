'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

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

  // Auto-cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = TESTIMONIALS[active]

  return (
    <section ref={sectionRef} className="section-container py-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.04) 0%, transparent 60%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10">
        <div data-reveal className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #7B61FF, transparent)' }} />
          <span className="act-label mb-0" style={{ color: '#7B61FF' }}>Testimonials</span>
        </div>

        <h2 data-reveal className="headline-lg mb-16">
          What Our{' '}
          <span className="gradient-text">Partners Say.</span>
        </h2>

        <div data-reveal className="honor-card p-10 md:p-14 relative overflow-hidden">
          {/* Decorative quotation mark */}
          <div className="absolute top-6 left-8 text-8xl font-serif leading-none pointer-events-none select-none"
            style={{ color: 'rgba(123,97,255,0.08)' }}>&ldquo;</div>

          <div className="relative z-10 min-h-[200px]">
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-fg/90 italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #7B61FF, #22D3EE)', color: '#fff' }}>
                {t.author ? t.author[0].toUpperCase() : '✦'}
              </div>
              <div>
                {t.author && <p className="font-semibold text-fg">{t.author}</p>}
                <p className="font-mono text-xs text-fg-muted">{t.role} · {t.company}</p>
              </div>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width:  i === active ? '24px' : '8px',
                  height: '8px',
                  background: i === active
                    ? 'linear-gradient(90deg, #7B61FF, #22D3EE)'
                    : 'rgba(123,97,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}