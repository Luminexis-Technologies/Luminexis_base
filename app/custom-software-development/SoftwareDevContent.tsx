'use client'

import Navigation from '@/components/ui/Navigation'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'
import { motion } from 'framer-motion'

export default function SoftwareDevContent() {
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
            High-Performance <span className="text-black">Software Development</span> Services
          </h1>

          <div className="space-y-12 text-lg text-fg-muted leading-relaxed">
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-black">Customized Enterprise Software Solutions for Global Growth</h2>
              <p>
                As a leading software development company, Luminexis Technologies provides comprehensive software engineering services designed to solve your most complex business challenges across multiple markets. Our team specializes in building high-performance, custom software solutions that are tailored to your unique requirements for startups and enterprises, ensuring that every piece of software contributes directly to your business revenue and operational efficiency.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 text-black">Our Software Development Capabilities</h2>
              <p>
                From SaaS products to internal ERP systems, we cover the full spectrum of software development for modern digital businesses. We follow an agile development process that allows for iterative progress and rapid feedback cycles, ensuring that the final product is exactly what your business needs. Our engineers use industry-standard technology stacks to build systems that are not only performant and secure but also easy to scale as your company grows across diverse industries.
              </p>
            </section>

            <section className="bg-black/[0.02] p-10 rounded-3xl border border-black/10 my-16">
              <h3 className="text-2xl font-bold mb-6 text-black text-center">Software Engineering Pillars</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-2 text-black">Security First</h4>
                  <p className="text-sm">We implement top-tier encryption and security protocols from day one.</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-2 text-black">Scalability</h4>
                  <p className="text-sm">Our systems are designed to handle thousands of concurrent users with ease.</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-2 text-black">Maintainability</h4>
                  <p className="text-sm">Clean, well-documented code that any expert developer can pick up.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 text-black">The Future of Software in Business</h2>
              <p>
                The digital landscape is changing, and so should your business software. We focus on integrating AI, machine learning, and advanced analytics into our custom software projects, providing your company with a competitive edge across multiple markets. Partner with us for a future-proofed digital infrastructure that is engineered for long-term success and built for scalability and performance.
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
