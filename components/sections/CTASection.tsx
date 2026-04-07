'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section
      id="contact"
      aria-label="Final Call to Action"
      className="section-container"
      style={{ background: '#F7F7F7' }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden text-center flex flex-col items-center gap-10 px-8 py-20 md:px-16 md:py-28"
          style={{
            background: '#111111',
            borderRadius: '32px',
          }}
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>

          {/* Gradient orbs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/40">
              Start Your Project
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
              Let&apos;s Build Something{' '}
              <br className="hidden md:block" />
              That Actually Scales.
            </h2>
            <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed">
              Connect with our team to discuss high-performance architectures and revenue-focused engineering for your digital platform.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="tel:+91841077234"
              className="group inline-flex items-center justify-center px-10 py-4 bg-white text-[#111111] font-medium text-sm tracking-wide transition-all duration-300 rounded-full hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(255,255,255,0.15)] active:scale-[0.97]"
            >
              Get Free Strategy Call
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent border border-white/15 text-white font-medium text-sm tracking-wide transition-all duration-300 rounded-full hover:bg-white/5 hover:border-white/30 active:scale-[0.97]"
            >
              View Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
