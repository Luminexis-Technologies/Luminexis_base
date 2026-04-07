'use client'

import { motion, Variants } from 'framer-motion'
import { Zap, Activity, Target, ShieldCheck } from 'lucide-react'

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

const VALUES = [
  {
    icon: Zap,
    title: 'Performance Focused',
    description: 'System speed is a commercial requirement for ranking and conversion.',
  },
  {
    icon: Activity,
    title: 'Data Driven',
    description: 'Decisions based on architectural best practices and measurable business objectives.',
  },
  {
    icon: Target,
    title: 'Outcome Oriented',
    description: 'Every system we build is measured by the revenue and growth it generates.',
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    description: 'Enterprise-grade security hardened into every layer of the architecture.',
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Luminexis"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="w-8 h-px bg-black/15" />
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#6B7280]">
                About Us
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-section-heading text-[#111111]">
              Technical Precision.{' '}
              <span className="text-[#6B7280]">Strategic Outcomes.</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-[#6B7280] leading-relaxed">
              At Luminexis, we engineer high-performance systems for long-term scalability and commercial impact. We partner with serious businesses that require architectural integrity.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-semibold text-[#111111]">100%</span>
                <span className="text-xs text-[#6B7280]">Structural Accuracy</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-semibold text-[#111111]">₹10L+</span>
                <span className="text-xs text-[#6B7280]">Average Project Value</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-[#F7F7F7] border border-black/[0.04] group hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#111111] text-white group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#111111]">{item.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  )
}