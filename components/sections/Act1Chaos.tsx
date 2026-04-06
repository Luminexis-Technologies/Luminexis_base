'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

import { motion } from 'framer-motion'

export default function Act1Chaos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animations handled by Framer Motion
  }, [])

  return (
    <section id="hero" aria-label="Hero section — Luminexis Technologies" className="relative min-h-screen flex flex-col pt-32 pb-20 overflow-hidden hero-bg">
      {/* Light overlay for text visibility */}
      <div className="absolute inset-0 hero-overlay pointer-events-none"></div>

      <div ref={containerRef} className="flex-1 flex flex-col justify-center items-center text-center max-w-5xl w-full mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-fg mb-6 tracking-tighter leading-[1.05] max-w-4xl"
        >
          Build Scalable Web & Software Products
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-xl md:text-2xl font-semibold text-fg-muted mb-8 tracking-tight max-w-4xl"
        >
          Web development company delivering custom software, SaaS platforms, and high-performance applications.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-fg-muted max-w-3xl mx-auto mb-12 leading-relaxed font-normal"
        >
          We help startups and enterprises build fast, secure, and scalable digital products with modern technologies and proven development processes.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
        >
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="cta-secondary" 
            aria-label="View Our Work"
          >
            VIEW OUR WORK
          </motion.a>
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="cta-primary" 
            aria-label="Get Free Consultation"
          >
            GET FREE CONSULTATION
          </motion.a>
        </motion.div>

        {/* Services Row */}
        <div data-reveal className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left w-full max-w-6xl mt-auto border-t border-black/10 pt-16">
          <div className="flex flex-col gap-4">
            <div className="text-2xl mb-2">
               {/* Simplified icon representation, can use an SVG */}
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3 className="text-xl font-bold text-fg">Web Development Services</h3>
            <p className="text-fg-muted leading-relaxed text-sm">
              Custom software development and scalable SaaS platforms designed for long-term growth.
            </p>
            <span className="text-xs font-mono text-fg-muted mt-2 border-b border-black/10 pb-2">01</span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-2xl mb-2">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
            </div>
            <h3 className="text-xl font-bold text-fg">Brand Identity</h3>
            <p className="text-fg-muted leading-relaxed text-sm">
              Premium UI/UX design and corporate brand identity tailored for enterprises.
            </p>
            <span className="text-xs font-mono text-fg-muted mt-2 border-b border-black/10 pb-2">02</span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-2xl mb-2">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h3 className="text-xl font-bold text-fg">SEO & Marketing</h3>
            <p className="text-fg-muted leading-relaxed text-sm">
               Technical SEO, optimized architectures, and performance strategies to rank at the top.
            </p>
            <span className="text-xs font-mono text-fg-muted mt-2 border-b border-black/10 pb-2">03</span>
          </div>
        </div>

      </div>
    </section>
  )
}
