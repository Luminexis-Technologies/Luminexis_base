'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import ProcessSection from '@/components/sections/ProcessSection'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'



export default function ProcessPage() {
  return (
    <>
      
      <Navigation />
      <main className="relative z-10 pt-16">
        <ProcessSection />
        <Footer />
      </main>
      <Chatbot />
    </>
  )
}
