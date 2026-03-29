'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import Act6Future from '@/components/sections/Act6Future'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'

const MainCanvas = dynamic(() => import('@/components/canvas/MainCanvas'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#05070F]" />,
})

export default function ContactPage() {
  return (
    <>
      <MainCanvas scrollProgress={0.9} />
      <Navigation />
      <main className="relative z-10 pt-16">
        <Act6Future />
        <Footer />
      </main>
      <Chatbot />
    </>
  )
}
