'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, animate, Variants } from 'framer-motion'
import { METRICS } from '@/lib/data'

const STACK_LAYERS = [
  { label: 'Rendering',    items: ['Next.js 14', 'RSC', 'Streaming'] },
  { label: 'Interactions',  items: ['GSAP 3', 'React Three Fiber', 'Framer Motion'] },
  { label: 'API Layer',    items: ['REST', 'GraphQL', 'Server Actions', 'tRPC'] },
  { label: 'Database',     items: ['PostgreSQL', 'Prisma', 'Redis', 'Supabase'] },
  { label: 'DevOps',       items: ['Vercel', 'Docker', 'GitHub Actions', 'Sentry'] },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Act4Engineering() {
  return (
    <section id="act4" aria-label="Engineering metrics and tech stack" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <motion.div
        className="max-w-5xl w-full mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        {/* Section Label */}
        <motion.p variants={itemVariants} className="text-xs font-medium tracking-[0.2em] uppercase text-[#86868b] mb-4">
          Performance
        </motion.p>

        {/* Heading */}
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.08] mb-5">
          Engineered for Performance.
        </motion.h2>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#6e6e73] max-w-xl mb-20 leading-relaxed">
          Architecture decisions made before the first line of code. Measured outcomes. Zero compromise.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-24">
          {METRICS.map((metric, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{
                boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#86868b]">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack — Clean Horizontal Rows */}
        <motion.p variants={itemVariants} className="text-xs font-medium tracking-[0.2em] uppercase text-[#86868b] mb-8">
          Technology Stack
        </motion.p>

        <div className="divide-y divide-black/[0.06]">
          {STACK_LAYERS.map((layer, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:items-center gap-4 py-6"
            >
              {/* Left — Label */}
              <div className="flex items-center gap-3 sm:w-44 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                <span className="text-sm font-semibold tracking-wide text-black">
                  {layer.label}
                </span>
              </div>

              {/* Right — Tags */}
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#f5f5f7] text-black/80 transition-colors duration-200 hover:bg-[#e8e8ed] cursor-default"
                  >
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
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const controls = animate(0, value, {
            duration: 2,
            ease: 'easeOut',
            onUpdate: (latest) => setDisplayValue(latest),
          })
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="block text-3xl md:text-4xl font-bold mb-3 text-black tracking-tight">
      {prefix}{Math.round(displayValue * 10) / 10}{suffix}
    </span>
  )
}