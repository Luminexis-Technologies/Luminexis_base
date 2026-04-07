'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Act1Chaos() {
  return (
    <section
      id="hero"
      aria-label="Hero section — Luminexis Technologies"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row items-center overflow-hidden"
      style={{ background: '#F7F7F7' }}
    >
      {/* ── Visual Area ── */}
      <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen lg:min-h-screen">
        <Image
          src="/hero-workspace-coding.png"
          alt="Modern coding workspace"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay for mobile (top to bottom) */}
        <div
          className="absolute inset-0 z-10 lg:hidden"
          style={{
            background: 'linear-gradient(to bottom, transparent 60%, #F7F7F7 100%)',
          }}
        />
        {/* Gradient overlay for desktop (left to right) */}
        <div
          className="absolute inset-0 z-10 hidden lg:block"
          style={{
            background: 'linear-gradient(to right, transparent 40%, #F7F7F7 95%)',
          }}
        />
      </div>

      {/* ── Content Area ── */}
      <div className="relative z-20 w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 xl:px-24 py-12 sm:py-20 lg:py-0">
        <div className="max-w-xl mx-auto lg:mx-0 flex flex-col gap-8">

          {/* Subtle label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-px bg-black/20" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-fg-muted">
              Software Development Company
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-hero-display text-[#111111]"
          >
            Build Scalable Software & Automate Your Business
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-[#6B7280] leading-relaxed"
          >
            We design, develop, and automate systems that help businesses grow faster.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <motion.a
              href="tel:+91841077234"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary min-w-[180px] justify-center"
              aria-label="Get Free Strategy Call with Luminexis"
            >
              Get Free Strategy Call
            </motion.a>
            <motion.a
              href="https://luminexistechnologies.com/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary min-w-[180px] justify-center"
              aria-label="Book a Consultation"
            >
              Book Consultation
            </motion.a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[11px] tracking-[0.15em] uppercase text-[#6B7280]/50 font-medium pt-4"
          >
            Trusted by startups & scaling businesses worldwide
          </motion.p>
        </div>
      </div>

      {/* Mobile: subtle background pattern */}
      <div className="absolute inset-0 lg:hidden z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
    </section>
  )
}
