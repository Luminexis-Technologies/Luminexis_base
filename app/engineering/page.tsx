'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import Act4Engineering from '@/components/sections/Act4Engineering'
import TechStackSection from '@/components/sections/TechStackSection'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'



export default function EngineeringPage() {
  return (
    <>
      
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
