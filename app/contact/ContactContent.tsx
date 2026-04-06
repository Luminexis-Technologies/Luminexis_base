'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import Act6Future from '@/components/sections/Act6Future'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'



export default function ContactPage() {
  return (
    <>
      
      <Navigation />
      <main className="relative z-10 pt-16">
        <Act6Future />
        <Footer />
      </main>
      <Chatbot />
    </>
  )
}
