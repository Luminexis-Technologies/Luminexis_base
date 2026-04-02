'use client'

import { useEffect, useRef, useState, memo } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Act1Chaos from '@/components/sections/Act1Chaos'

// ── Lazy-load below-fold sections for performance (code splitting) ──
const BusinessIntentSection = dynamic(() => import('@/components/sections/BusinessIntentSection'), { ssr: true })
const RiskReductionSection = dynamic(() => import('@/components/sections/RiskReductionSection'), { ssr: true })
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'), { ssr: true })
const Act3Design = dynamic(() => import('@/components/sections/Act3Design'), { ssr: true })
const TechStackSection = dynamic(() => import('@/components/sections/TechStackSection'), { ssr: true })
const Act4Engineering = dynamic(() => import('@/components/sections/Act4Engineering'), { ssr: true })
const Act5Impact = dynamic(() => import('@/components/sections/Act5Impact'), { ssr: true })
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { ssr: true })
const EngagementStandardSection = dynamic(() => import('@/components/sections/EngagementStandardSection'), { ssr: true })
const Act6Future = dynamic(() => import('@/components/sections/Act6Future'), { ssr: true })
const Footer = dynamic(() => import('@/components/ui/Footer'), { ssr: true })
const Chatbot = dynamic(() => import('@/components/ui/Chatbot'), { ssr: false, loading: () => null })

const MainCanvas = dynamic(() => import('@/components/canvas/MainCanvas'), {
  ssr: false,
  loading: () => null,
})

function LuminexisPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    const update = () => {
      const scrollTop = window.scrollY
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? Math.min(scrollTop / totalHeight, 1) : 0
      setScrollProgress(progress)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    ScrollTrigger.refresh()

    return () => {
      window.removeEventListener('scroll', onScroll)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <>
      <MainCanvas scrollProgress={scrollProgress} />
      <Navigation />
      <ScrollProgress progress={scrollProgress} />

      <main ref={mainRef} className="scroll-content" role="main">
        {/* Hero — Above the Fold (LCP critical) */}
        <Act1Chaos />

        {/* Business Intent — Commercial Foundation */}
        <BusinessIntentSection />

        {/* Risk Reduction — Structural Integrity */}
        <RiskReductionSection />

        {/* Luminexis Method — 5-step process */}
        <ProcessSection />

        {/* Services — What we do */}
        <Act3Design />

        {/* Tech Stack */}
        <TechStackSection />

        {/* Engineering / Metrics */}
        <Act4Engineering />

        {/* Strategic Work — Case Studies */}
        <Act5Impact />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Engagement Standard — Who we work with */}
        <EngagementStandardSection />

        {/* Authority Signal + Contact */}
        <Act6Future />
        <Footer />
      </main>

      {/* Chatbot Widget — non-critical, lazy loaded */}
      <Chatbot />
    </>
  )
}

export default memo(LuminexisPage)
