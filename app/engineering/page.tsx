'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import Act4Engineering from '@/components/sections/Act4Engineering'
import TechStackSection from '@/components/sections/TechStackSection'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'

const MainCanvas = dynamic(() => import('@/components/canvas/MainCanvas'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#05070F]" />,
})

export default function EngineeringPage() {
  return (
    <>
      <MainCanvas scrollProgress={0.65} />
      <Navigation />
      <main className="relative z-10 pt-16">
        <Act4Engineering />
        <TechStackSection />
        <Footer />
      </main>
      <Chatbot />
    </>
  )
}
