'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Target, Shuffle, ShieldCheck, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const INTENT_PILLARS: { icon: LucideIcon; title: string; description: string; gradient: string }[] = [
  {
    icon: Target,
    title: 'Revenue Alignment',
    description: 'Every system is mapped to a measurable revenue outcome. No decorative builds.',
    gradient: 'from-nebula-500/20 to-transparent',
  },
  {
    icon: Shuffle,
    title: 'Decision Flow Control',
    description: 'User pathways engineered to guide decisions — not just display content.',
    gradient: 'from-stellar-400/20 to-transparent',
  },
  {
    icon: ShieldCheck,
    title: 'Trust Architecture',
    description: 'Credibility signals built into structure — social proof, authority markers, consistency.',
    gradient: 'from-aurora-violet/20 to-transparent',
  },
  {
    icon: TrendingUp,
    title: 'Scalability Planning',
    description: 'From day one, every system is designed to grow with your business trajectory.',
    gradient: 'from-aurora-cyan/20 to-transparent',
  },
]

export default function BusinessIntentSection() {
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
    <section ref={sectionRef} id="intent" className="section-container py-32 nebula-bg">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div data-reveal className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #22D3EE, transparent)' }} />
          <span className="act-label mb-0">Commercial Foundation</span>
        </div>

        <h2 data-reveal className="headline-lg mb-6">
          Built Around{' '}
          <span className="gradient-text">Commercial Intent.</span>
        </h2>

        <p data-reveal className="body-text max-w-2xl mb-16">
          A digital system without commercial alignment is an expense without return.
          Every component we build serves a measurable business function.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTENT_PILLARS.map((pillar, i) => (
            <div
              key={i}
              data-reveal
              className="glass-card p-8 group relative overflow-hidden"
            >
              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, #7B61FF, #22D3EE)' }} />

              {(() => { const Icon = pillar.icon; return <Icon className="w-7 h-7 mb-4" style={{ color: '#22D3EE' }} /> })()}
              <h3 className="text-lg font-semibold text-fg mb-3">{pillar.title}</h3>
              <p className="body-text text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}