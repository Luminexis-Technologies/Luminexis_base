'use client'

import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Act5Impact() {
  return (
    <section
      id="work"
      aria-label="Our projects and case studies"
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
              Selected Work
            </span>
            <span className="w-8 h-px bg-black/15" />
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-section-heading text-[#111111] mb-6">
            Digital Systems Built for Scale.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Every project is a study in precision engineering and commercial outcome.
          </motion.p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl border border-black/[0.04] overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className={`relative aspect-[16/10] overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <Image
                  src={project.thumbnail ?? '/hero-workspace-apple.png'}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-start gap-6 p-8 md:p-12">
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#6B7280]">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#111111] tracking-tight">
                  {project.title}
                </h3>

                <div className="flex flex-col gap-4">
                  {project.description.split('. ').map((point, idx) => {
                    const [label, content] = point.split(': ')
                    if (!content) return null
                    return (
                      <div key={idx} className="flex flex-col gap-1">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#111111]/30">
                          {label}
                        </span>
                        <p className="text-sm text-[#6B7280] leading-relaxed">{content}</p>
                      </div>
                    )
                  })}
                </div>

                <div className="flex items-center gap-8 mt-2">
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold text-[#111111]">{project.metrics}</span>
                    <span className="text-[10px] font-medium text-[#6B7280] tracking-wider uppercase">Verified Result</span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[#111111] px-4 py-2 rounded-full border border-black/10 hover:bg-[#111111] hover:text-white transition-all duration-300"
                  >
                    View <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div variants={itemVariants} className="flex justify-center pt-12">
          <a href="/projects" className="btn-secondary">
            Explore All Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}