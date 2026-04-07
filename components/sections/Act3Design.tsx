'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { SERVICES } from '@/lib/data'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Act3Design() {
  // Show up to 4 services
  const displayServices = SERVICES.slice(0, 4);

  return (
    <section
      id="services"
      aria-label="Our services"
      className="section-container"
      style={{ background: '#FFFFFF' }}
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
              What We Do
            </span>
            <span className="w-8 h-px bg-black/15" />
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-section-heading text-[#111111] mb-6">
            High-Performance Digital Systems.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            We eliminate technical debt and design systems built for long-term commercial success. No templates, just engineering precision.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayServices.map((service) => (
            <motion.a
              key={service.id}
              href={service.href || '#'}
              variants={itemVariants}
              className="card-premium group cursor-pointer block"
            >
              <div className="flex flex-col gap-6">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-[#111111] text-white rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {(() => { const Icon = service.icon; return <Icon className="w-5 h-5" /> })()}
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-[#111111] group-hover:text-black transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-full bg-[#F7F7F7] text-[#6B7280] border border-black/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}