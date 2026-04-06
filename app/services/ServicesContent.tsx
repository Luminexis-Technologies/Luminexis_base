'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import Act3Design from '@/components/sections/Act3Design'
import TechStackSection from '@/components/sections/TechStackSection'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'



export default function ServicesPage() {
  return (
    <>
      
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
