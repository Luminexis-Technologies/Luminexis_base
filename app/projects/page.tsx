'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import Act5Impact from '@/components/sections/Act5Impact'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'

const MainCanvas = dynamic(() => import('@/components/canvas/MainCanvas'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#05070F]" />,
})

export default function ProjectsPage() {
  return (
    <>
      <MainCanvas scrollProgress={0.77} />
      <Navigation />
      <main className="relative z-10 pt-16">
        <Act5Impact />
        <Footer />
      </main>
      <Chatbot />
    </>
  )
}
