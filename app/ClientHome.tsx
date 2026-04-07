'use client'

import { useEffect, useRef, memo } from 'react'
import { ScrollTrigger } from '@/lib/gsap'
import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import Act1Chaos from '@/components/sections/Act1Chaos'

// ── Optimized Lazy-Loading ──
const SectionSkeleton = () => <section className="min-h-[40vh] bg-[#F7F7F7] flex items-center justify-center" />

// Above-fold critical components (Direct imports)
import Act3Design from '@/components/sections/Act3Design'
import Act5Impact from '@/components/sections/Act5Impact'

// Below-fold dynamic components (Lazy-loaded)
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'), { ssr: true, loading: () => <SectionSkeleton /> })
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { ssr: true, loading: () => <SectionSkeleton /> })
const Act4Engineering = dynamic(() => import('@/components/sections/Act4Engineering'), { ssr: true, loading: () => <SectionSkeleton /> })
const AboutSection = dynamic(() => import('@/components/sections/BusinessIntentSection'), { ssr: true, loading: () => <SectionSkeleton /> })
const CTASection = dynamic(() => import('@/components/sections/CTASection'), { ssr: true, loading: () => <SectionSkeleton /> })
const Footer = dynamic(() => import('@/components/ui/Footer'), { ssr: true })
const Chatbot = dynamic(() => import('@/components/ui/Chatbot'), { ssr: false })

function LuminexisPage() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <>
      <Navigation />

      <main ref={mainRef} className="scroll-content" role="main">
        {/* 01. HERO — Strategic Positioning */}
        <Act1Chaos />

        {/* 02. SERVICES — Core Offerings */}
        <Act3Design />

        {/* 03. PORTFOLIO — Selected Work */}
        <Act5Impact />

        {/* 04. PROCESS — Engineering Lifecycle */}
        <ProcessSection />

        {/* 05. TESTIMONIALS — Social Proof */}
        <TestimonialsSection />

        {/* 06. AUTHORITY — Verified Metrics */}
        <Act4Engineering />

        {/* 07. ABOUT — Brand Identity */}
        <AboutSection />

        {/* 08. CTA — High-Conversion Finale */}
        <CTASection />

        {/* FOOTER */}
        <Footer />
      </main>

      <Chatbot />
    </>
  )
}

export default memo(LuminexisPage)
