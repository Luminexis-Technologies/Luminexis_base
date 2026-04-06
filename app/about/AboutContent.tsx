'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import TechStackSection from '@/components/sections/TechStackSection'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'
import { motion } from 'framer-motion'



export default function AboutContent() {
  return (
    <>
      
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-20 px-6 max-w-5xl mx-auto text-black">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">
            About <span className="text-black">Luminexis</span>
          </h1>

          <div className="space-y-12 text-lg text-fg-muted leading-relaxed">
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-black">Our Mission: High-Performance Digital Engineering</h2>
              <p>
                Luminexis Technologies is a premium digital engineering studio dedicated to architecting high-performance ecosystems with structural integrity and precision for global brands and startups. We don't just build websites; we engineer digital experiences that outperform and outrank competitors across multiple markets. Our mission is to bridge the gap between complex software engineering and immersive UI/UX design.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 text-black">Our Expertise & Design Philosophy</h2>
              <p>
                With years of expertise in full stack development and custom software solutions, our team focuses on building scalable, secure, and fast applications. We follow a strict "Performance First" philosophy, ensuring that every line of code contributes to a faster, more reliable user journey. Our design studio combines aesthetic excellence with technical rigor, resulting in interfaces that are both beautiful and functionally superior.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 text-black">The Tech Stack We Trust</h2>
              <p>
                We leverage modern technologies to solve complex problems. Our core stack includes Next.js for high-speed delivery, React for interactive components, Three.js for immersive 3D experiences, and Framer Motion for cinematic animations. For the backend, we architect robust systems that scale seamlessly as your business grows.
              </p>
              <div className="mt-8">
                <TechStackSection />
              </div>
            </section>

            <section className="bg-black/[0.02] p-8 rounded-2xl border border-black/10">
              <h3 className="text-2xl font-semibold mb-4 text-black">Why Choose Luminexis?</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Custom-built solutions tailored to your unique business goals.</li>
                <li>Global SEO scaling strategies integrated into the core architecture.</li>
                <li>Award-winning UI/UX design that converts users into customers.</li>
                <li>Transparent development process with a focus on risk reduction.</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
      <Chatbot />
    </>
  )
}
