'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Rocket, Telescope, Handshake, Gem } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const STANDARDS: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Growth-Stage Companies',
    description: 'Businesses ready to invest in digital infrastructure that compounds value over time.',
    icon: Rocket,
  },
  {
    title: 'Clarity-Driven Leaders',
    description: 'Decision-makers who value structure, transparency, and measurable outcomes.',
    icon: Telescope,
  },
  {
    title: 'Long-Term Partnerships',
    description: 'We build relationships, not transactions. Our best work comes from ongoing collaboration.',
    icon: Handshake,
  },
  {
    title: 'Quality Over Quantity',
    description: 'We take on limited engagements to ensure every project receives our full attention.',
    icon: Gem,
  },
]

export default function EngagementStandardSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.85, stagger: 0.13, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} aria-label="Who we work with" className="section-container py-32 nebula-bg">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[15%] left-[15%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 60%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div data-reveal className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px"  />
          <span className="act-label mb-0">Engagement Standard</span>
        </div>

        <h2 data-reveal className="headline-lg mb-6">
          Who We{' '}
          <span className="text-black">Work With.</span>
        </h2>

        <p data-reveal className="body-text max-w-2xl mb-16">
          We partner with businesses that share our commitment to quality, clarity, and long-term thinking.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STANDARDS.map((item, i) => (
            <div key={i} data-reveal className="glass-card p-8 group relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)' }} />

              <div className="relative z-10">
                {(() => { const Icon = item.icon; return <Icon className="w-7 h-7 mb-4"  /> })()}
                <h3 className="text-lg font-semibold text-fg mb-3">{item.title}</h3>
                <p className="body-text text-sm">{item.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                 />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}