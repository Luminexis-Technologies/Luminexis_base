'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/data'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const slideVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: 'easeIn' } },
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = TESTIMONIALS[active]

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="section-container overflow-hidden"
      style={{ background: '#F7F7F7' }}
    >
      <motion.div
        className="max-w-4xl w-full mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-black/15" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#6B7280]">
              Testimonials
            </span>
            <span className="w-8 h-px bg-black/15" />
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-section-heading text-[#111111]">
            What Our{' '}
            <span className="text-[#6B7280]">Partners Say.</span>
          </motion.h2>
        </div>

        {/* Testimonial Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-10 md:p-14 rounded-3xl border border-black/[0.04] relative overflow-hidden"
          style={{
            boxShadow: '0 4px 32px rgba(0,0,0,0.04)',
            willChange: 'transform, opacity',
          }}
        >
          {/* Decorative quotation mark */}
          <div className="absolute top-4 left-8 text-8xl font-serif leading-none pointer-events-none select-none text-black/[0.04]">
            &ldquo;
          </div>

          <div className="relative z-10 min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={slideVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="flex flex-col"
              >
                <p className="text-xl md:text-2xl leading-relaxed mb-10 text-[#111111] font-medium tracking-tight">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center text-lg font-semibold flex-shrink-0 text-white">
                    {t.author ? t.author[0].toUpperCase() : '✦'}
                  </div>
                  <div>
                    {t.author && <p className="font-semibold text-[#111111]">{t.author}</p>}
                    <p className="text-[12px] font-medium tracking-wide text-[#6B7280] uppercase">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2.5 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300 outline-none focus:ring-2 focus:ring-black/20 ring-offset-2"
                style={{
                  width: i === active ? '28px' : '8px',
                  height: '8px',
                  background: i === active ? '#111111' : 'rgba(0,0,0,0.1)',
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}