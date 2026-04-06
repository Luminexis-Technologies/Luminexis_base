'use client'

import Navigation from '@/components/ui/Navigation'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'
import { motion } from 'framer-motion'

export default function UIUXContent() {
  return (
    <>
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-20 px-6 max-w-5xl mx-auto text-black">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-tight">
            Premium <span className="text-black">UI/UX Design</span> Services
          </h1>

          <div className="space-y-12 text-lg text-fg-muted leading-relaxed">
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-black">User-Centric Design for Global Impact</h2>
              <p>
                At Luminexis Technologies, we believe that great design is more than just aesthetics; it's about creating intuitive, seamless, and memorable user journeys. Our UI/UX design services are centered around the user, ensuring that every digital interaction is logical and delightful for startups and enterprises across industries. We combine deep user research with high-fidelity prototyping to deliver designs that resonate with your target audience across multiple markets.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 text-black">Our Holistic Approach to Digital Product Design</h2>
              <p>
                From mobile apps to complex web dashboards, our design philosophy remains consistent: clarity, efficiency, and beauty. We start by understanding your brand identity and business objectives, then translate them into a visual language that communicates clearly and effectively. Our designs are optimized for accessibility and performance, ensuring that your digital product reaches and engages everyone in the modern digital landscape.
              </p>
            </section>

            <section className="bg-black/[0.02] p-12 rounded-[2rem] border border-black/10 my-16 text-center">
              <h3 className="text-3xl font-bold mb-8 text-black">Why Our Design Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="text-left">
                  <h4 className="text-xl font-semibold mb-3 text-black">Enhanced Conversion Rates</h4>
                  <p className="text-sm">We design for results. Intuitive UI reduces friction and guides users effortlessly toward your desired call to action.</p>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-semibold mb-3 text-black">Stronger Brand Loyalty</h4>
                  <p className="text-sm">Consistency and beauty build trust. We ensure your brand's digital presence reflects its core values at every touchpoint.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 text-black">Experience Immersive Design Today</h2>
              <p>
                Ready to elevate your brand's digital presence? Our premium UI/UX design services are designed to help you stand out in a crowded marketplace for businesses across industries. Whether you need a complete redesign or a new product built from scratch, our team of expert designers will work closely with you to create a digital experience that is as functional as it is beautiful. Don't settle for mediocre design; choose Luminexis for excellence across multiple markets.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
      <Chatbot />
    </>
  )
}
