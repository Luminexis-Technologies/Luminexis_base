'use client'

import { motion, Variants } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/data'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function ProcessSection() {
  const steps = PROCESS_STEPS.slice(0, 4)

  return (
    <section
      id="process"
      aria-label="Our development process"
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
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-black/15" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#6B7280]">
              Our Process
            </span>
            <span className="w-8 h-px bg-black/15" />
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-section-heading text-[#111111] mb-6">
            From Strategy to Scale.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            A systematic engineering lifecycle designed to transform your vision into a scalable, revenue-generating digital system.
          </motion.p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative p-8 rounded-2xl bg-white border border-black/[0.04] group hover:shadow-lg transition-all duration-300"
              >
                {/* Step number */}
                <div className="text-5xl font-bold text-black/[0.04] absolute top-4 right-6 select-none">
                  {step.number}
                </div>

                <div className="flex flex-col gap-5 relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#111111] text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#111111]">{step.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}