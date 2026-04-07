'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, animate, Variants, useInView } from 'framer-motion'
import { AUTHORITY_STATS } from '@/lib/data'

const TECH_STRATEGY = [
  { label: 'Platform Architecture', items: ['Next.js 15', 'React Server Components', 'Edge Computing'] },
  { label: 'Technical SEO Engine',   items: ['Metadata Systems', 'Structured Data', 'Performance Indexing'] },
  { label: 'Data Infrastructure',    items: ['PostgreSQL', 'Prisma', 'Real-time Sync', 'Scalable Auth'] },
  { label: 'Visual Engineering',     items: ['GSAP 3', 'Three.js', 'Framer Motion', 'Precision UI'] },
]

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

export default function Act4Engineering() {
  return (
    <section
      id="engineering"
      aria-label="Engineering metrics and authority"
      className="section-container"
      style={{ background: '#F7F7F7' }}
    >
      <motion.div
        className="max-w-6xl w-full mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-black/15" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#6B7280]">
              Results
            </span>
            <span className="w-8 h-px bg-black/15" />
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-section-heading text-[#111111] mb-6">
            Measurable Impact. Verified Data.
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {AUTHORITY_STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white border border-black/[0.04]">
              <Counter value={stat.value} />
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#6B7280] text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_STRATEGY.map((stack, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col gap-5 p-6 rounded-2xl bg-white border border-black/[0.04] group hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#111111] pb-3 border-b border-black/[0.06]">
                {stack.label}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {stack.items.map((item) => (
                  <li key={item} className="text-sm text-[#6B7280] group-hover:text-[#111111] transition-colors duration-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState('0')
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    const numericMatch = value.match(/[\d.]+/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const num = parseFloat(numericMatch[0])
    const suffix = value.replace(numericMatch[0], '')
    const prefix = value.startsWith('₹') ? '₹' : ''
    const cleanSuffix = suffix.replace('₹', '')

    const controls = animate(0, num, {
      duration: 2,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (latest) => {
        const rounded = num % 1 === 0 ? Math.round(latest) : latest.toFixed(1)
        setDisplayValue(`${prefix}${rounded}${cleanSuffix}`)
      },
    })

    return () => controls.stop()
  }, [value, isInView])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-semibold tracking-tight text-[#111111]">
      {displayValue}
    </span>
  )
}