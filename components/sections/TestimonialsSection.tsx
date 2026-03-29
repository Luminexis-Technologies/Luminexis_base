'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/data'

// Optimized Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const slideVariants: Variants = {
  initial: { opacity: 0, x: 10 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, x: -10, transition: { duration: 0.3, ease: 'easeIn' } },
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  // Auto-cycle optimized
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = TESTIMONIALS[active]

  return (
    <section className="section-container py-32 overflow-hidden">
      {/* Background glow simplified */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.08) 0%, transparent 60%)' }} />
      </div>

      <motion.div 
        className="max-w-4xl w-full mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #7B61FF, transparent)' }} />
          <span className="act-label mb-0" style={{ color: '#7B61FF' }}>Testimonials</span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="headline-lg mb-16">
          What Our{' '}
          <span className="gradient-text">Partners Say.</span>
        </motion.h2>

        <motion.div 
          variants={itemVariants} 
          className="honor-card p-10 md:p-14 relative overflow-hidden"
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Decorative quotation mark */}
          <div className="absolute top-6 left-8 text-8xl font-serif leading-none pointer-events-none select-none opacity-5 text-[#7B61FF]">&ldquo;</div>

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
                <p className="text-lg md:text-xl leading-relaxed mb-10 text-fg/90 italic font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar optimized */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #7B61FF, #22D3EE)', color: '#fff' }}>
                    {t.author ? t.author[0].toUpperCase() : '✦'}
                  </div>
                  <div>
                    {t.author && <p className="font-semibold text-fg">{t.author}</p>}
                    <p className="font-mono text-[11px] tracking-wide text-fg-muted uppercase">{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2 mt-12">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300 relative group h-2 ring-offset-[#0B0D17] focus:ring-1 focus:ring-[#7B61FF] outline-none"
                style={{
                  width: i === active ? '24px' : '8px',
                  background: i === active
                    ? 'linear-gradient(90deg, #7B61FF, #22D3EE)'
                    : 'rgba(123,97,255,0.15)',
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