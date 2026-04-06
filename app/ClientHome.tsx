'use client'

import { useEffect, useRef, memo } from 'react'
import { ScrollTrigger } from '@/lib/gsap'
import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import Act1Chaos from '@/components/sections/Act1Chaos'

// ── Lazy-load below-fold sections for maximum speed and FCP compliance ──
const SectionSkeleton = () => <section className="min-h-[50vh] bg-transparent flex items-center justify-center"><div className="w-8 h-8 border-2 border-black/10 border-t-black rounded-full animate-spin"></div></section>

const BusinessIntentSection = dynamic(() => import('@/components/sections/BusinessIntentSection'), { ssr: true, loading: () => <SectionSkeleton /> })
const RiskReductionSection = dynamic(() => import('@/components/sections/RiskReductionSection'), { ssr: true, loading: () => <SectionSkeleton /> })
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'), { ssr: true, loading: () => <SectionSkeleton /> })
const Act3Design = dynamic(() => import('@/components/sections/Act3Design'), { ssr: true, loading: () => <SectionSkeleton /> })
const TechStackSection = dynamic(() => import('@/components/sections/TechStackSection'), { ssr: true, loading: () => <SectionSkeleton /> })
const Act4Engineering = dynamic(() => import('@/components/sections/Act4Engineering'), { ssr: true, loading: () => <SectionSkeleton /> })
const Act5Impact = dynamic(() => import('@/components/sections/Act5Impact'), { ssr: true, loading: () => <SectionSkeleton /> })
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { ssr: true, loading: () => <SectionSkeleton /> })
const EngagementStandardSection = dynamic(() => import('@/components/sections/EngagementStandardSection'), { ssr: true, loading: () => <SectionSkeleton /> })
const Act6Future = dynamic(() => import('@/components/sections/Act6Future'), { ssr: true, loading: () => <SectionSkeleton /> })
const Footer = dynamic(() => import('@/components/ui/Footer'), { ssr: true })
const Chatbot = dynamic(() => import('@/components/ui/Chatbot'), { ssr: false })

function LuminexisPage() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Defer greensock refresh for below-fold animations
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <>
      <Navigation />

      <main ref={mainRef} className="scroll-content" role="main">
        {/* Hero — Above the Fold (LCP critical) */}
        <Act1Chaos />

        {/* Business Intent */}
        <BusinessIntentSection />

        {/* Risk Reduction */}
        <RiskReductionSection />

        {/* Process */}
        <ProcessSection />

        {/* Services */}
        <Act3Design />

        {/* Tech Stack */}
        <TechStackSection />

        {/* Engineering / Metrics */}
        <Act4Engineering />

        {/* Case Studies */}
        <Act5Impact />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Engagement Standard */}
        <EngagementStandardSection />

        {/* Contact */}
        <Act6Future />
        <Footer />
      </main>

      {/* Chatbot Widget */}
      <Chatbot />
    </>
  )
}

export default memo(LuminexisPage)
