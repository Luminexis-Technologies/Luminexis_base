'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import Act3Design from '@/components/sections/Act3Design'
import TechStackSection from '@/components/sections/TechStackSection'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'

const MainCanvas = dynamic(() => import('@/components/canvas/MainCanvas'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#05070F]" />,
})

export default function ServicesPage() {
  return (
    <>
      <MainCanvas scrollProgress={0.4} />
      <Navigation />
      <main className="relative z-10 pt-16">
        <Act3Design />
        <TechStackSection />
        <Footer />
      </main>
      <Chatbot />
    </>
  )
}
