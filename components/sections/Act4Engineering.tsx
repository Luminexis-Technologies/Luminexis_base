'use client'

import React, { useEffect, useState } from 'react'
import { motion, useSpring, useTransform, animate, Variants } from 'framer-motion'
import { METRICS } from '@/lib/data'

const STACK_LAYERS = [
  { label: 'Rendering',    items: ['Next.js 14', 'RSC', 'Streaming'],                  color: '#7B61FF' },
  { label: 'Interactions',  items: ['GSAP 3', 'React Three Fiber', 'Framer Motion'],    color: '#A855F7' },
  { label: 'API Layer',    items: ['REST', 'GraphQL', 'Server Actions', 'tRPC'],       color: '#22D3EE' },
  { label: 'Database',     items: ['PostgreSQL', 'Prisma', 'Redis', 'Supabase'],       color: '#34D399' },
  { label: 'DevOps',       items: ['Vercel', 'Docker', 'GitHub Actions', 'Sentry'],    color: '#EC4899' },
]

// Optimized Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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

export default function Act4Engineering() {
  return (
    <section id="act4" className="section-container py-32 overflow-hidden">
      {/* Background - Simplified */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.06) 0%, transparent 60%)' }} />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 60%)' }} />
      </div>

      <motion.div 
        className="max-w-6xl w-full mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #A855F7, transparent)' }} />
          <span className="act-label mb-0" style={{ color: '#A855F7' }}>Act 04 — Engineering</span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="headline-lg mb-6">
          Engineered for{' '}
          <span className="gradient-text">Performance.</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="body-text max-w-2xl mb-16 leading-relaxed">
          Architecture decisions made before the first line of code. Measured outcomes. Zero compromise.
        </motion.p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {METRICS.map((metric, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants} 
              className="glass-card p-6 text-center group hover:scale-[1.02] transition-transform duration-300"
              style={{ willChange: 'transform, opacity' }}
            >
              <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              <span className="font-mono text-[10px] tracking-widest uppercase text-fg-muted font-bold opacity-60">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stack layers */}
        <div className="space-y-3">
          {STACK_LAYERS.map((layer, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3 group"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="flex items-center gap-3 sm:w-40 flex-shrink-0">
                <div className="w-2 h-2 rounded-full" style={{ background: layer.color, boxShadow: `0 0 10px ${layer.color}30` }} />
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold" style={{ color: layer.color }}>
                  {layer.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span key={item} className="font-mono text-[11px] px-3 py-1.5 rounded-md transition-colors" style={{
                    background: 'rgba(17,19,41,0.6)',
                    border: `1px solid ${layer.color}20`,
                    color: 'rgba(232, 230, 240, 0.65)',
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function Counter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(latest),
    })
    return () => controls.stop()
  }, [value])

  return (
    <span className="block font-mono text-3xl md:text-4xl font-bold mb-2 gradient-text">
      {prefix}{Math.round(displayValue * 10) / 10}{suffix}
    </span>
  )
}