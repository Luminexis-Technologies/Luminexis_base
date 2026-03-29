'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import ProcessSection from '@/components/sections/ProcessSection'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'

const MainCanvas = dynamic(() => import('@/components/canvas/MainCanvas'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#05070F]" />,
})

export default function ProcessPage() {
  return (
    <>
      <MainCanvas scrollProgress={0.3} />
      <Navigation />
      <main className="relative z-10 pt-16">
        <ProcessSection />
        <Footer />
      </main>
      <Chatbot />
    </>
  )
}
