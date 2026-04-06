'use client'

import Navigation from '@/components/ui/Navigation'
import Act5Impact from '@/components/sections/Act5Impact'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'

export default function ProjectsPageContent() {
  return (
    <>
      <Navigation />
      <main className="relative z-10 pt-16">
        <Act5Impact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
