'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/ui/Navigation'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'
import { motion } from 'framer-motion'

const MainCanvas = dynamic(() => import('@/components/canvas/MainCanvas'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#05070F]" />,
})

export default function WebDevIndiaContent() {
  return (
    <>
      <MainCanvas scrollProgress={0.4} />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-20 px-6 max-w-5xl mx-auto text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-tight">
            Leading <span className="text-[#7B61FF]">Web Development Company</span> in India
          </h1>

          <div className="space-y-12 text-lg text-white/80 leading-relaxed">
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-white">Top-Tier Web Developers in Bangalore for Global Brands</h2>
              <p>
                As a premier web development company in India, Luminexis Technologies provides cutting-edge digital solutions tailored for high-growth enterprises. Headquartered in Bangalore, we leverage our deep technical expertise to build responsive, light-speed, and secure websites. Our team of expert web developers is committed to delivering digital products that not only look stunning but are engineered to scale perfectly across all platforms and devices.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 text-white">Custom Web Development Solutions in India</h2>
              <p>
                Every brand is unique, and so should be its digital presence. We specialize in custom web development that focuses on your specific business goals. From e-commerce platforms to enterprise-level portals, our websites are built with performance and security at their core. We use modern frameworks like Next.js and React to ensure your site is fast, SEO-friendly, and provides an unparalleled user experience.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#7B61FF]/30 transition-all">
                <h3 className="text-xl font-bold mb-3 text-white">Scalable Architecture</h3>
                <p className="text-sm">We build with future growth in mind. Our code is clean, modular, and easy to maintain, ensuring your web investment lasts for years.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#22D3EE]/30 transition-all">
                <h3 className="text-xl font-bold mb-3 text-white">Performance-First Design</h3>
                <p className="text-sm">Faster loading times mean better conversions. We optimize every image and script for lightning-fast speeds.</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 text-white">Why Outsource Your Website to India?</h2>
              <p>
                India has become the global hub for high-quality, cost-effective tech talent. By partnering with a top-rated web development company in India like Luminexis, you gain access to a pool of world-class engineers who understand global design standards and emerging tech trends. We provide transparent communication, 24/7 support, and a commitment to quality that is unmatched in the industry.
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
