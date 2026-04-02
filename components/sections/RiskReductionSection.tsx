'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Lock, Blocks, Zap, Globe } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const RISK_ITEMS: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'No Spec Work',
    description: 'We don\'t gamble with your budget. Every engagement starts with a defined scope and clear deliverables.',
    icon: Lock,
  },
  {
    title: 'Architecture First',
    description: 'Structure is validated before development begins. No expensive pivots mid-build.',
    icon: Blocks,
  },
  {
    title: 'Performance Guaranteed',
    description: 'Every system ships with verified performance benchmarks — not promises.',
    icon: Zap,
  },
  {
    title: 'Long-Term Viability',
    description: 'Built on proven standards and maintainable patterns. No vendor lock-in. No tech debt.',
    icon: Globe,
  },
]

export default function RiskReductionSection() {
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
    <section ref={sectionRef} aria-label="Risk reduction and structural integrity" className="section-container py-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div data-reveal className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #A855F7, transparent)' }} />
          <span className="act-label mb-0" style={{ color: '#A855F7' }}>Structural Integrity</span>
        </div>

        <h2 data-reveal className="headline-lg mb-6">
          Risk Reduced.{' '}
          <span className="gradient-text">Confidence Built.</span>
        </h2>

        <p data-reveal className="body-text max-w-2xl mb-16">
          Every engagement is structured to minimize risk and maximize clarity from the first conversation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RISK_ITEMS.map((item, i) => (
            <div key={i} data-reveal className="glass-card p-8 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.1) 0%, transparent 70%)' }} />
              <div className="flex items-start gap-4">
                {(() => { const Icon = item.icon; return <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#7B61FF' }} /> })()}
                <div>
                  <h3 className="text-lg font-semibold text-fg mb-2">{item.title}</h3>
                  <p className="body-text text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}