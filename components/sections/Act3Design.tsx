'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { SERVICES } from '@/lib/data'

// Optimized Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
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

export default function Act3Design() {
  return (
    <section id="act3" aria-label="Our services" className="section-container py-32 overflow-hidden">
      {/* Background - Simplified */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)' }} />
      </div>

      <motion.div 
        className="max-w-6xl w-full mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px"  />
          <span className="act-label mb-0" >What We Build</span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="headline-lg mb-6">
          Every System,{' '}
          <span className="text-black">Structurally Accountable.</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="body-text max-w-2xl mb-16Leading-relaxed">
          Interface decisions are made after structural planning — not before.
          Every component is accountable to a commercial objective.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Content = (
              <motion.div 
                key={service.id} 
                variants={itemVariants} 
                className="service-module p-8 group relative overflow-hidden glass-card h-full"
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Subtle hover glow reduced for perf */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.15) 0%, transparent 70%)' }} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 font-bold text-black group-hover:scale-110 transition-transform duration-300 origin-left">
                    {(() => { const Icon = service.icon; return <Icon className="w-8 h-8"  /> })()}
                  </div>
                  <h3 className="text-xl font-semibold text-fg mb-3 group-hover:text-black transition-colors">{service.title}</h3>
                  <p className="body-text text-sm mb-6 leading-relaxed">{service.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full transition-all duration-300"
                        style={{
                          border: '1px solid rgba(0,0,0,0.05)',
                          color: '#666',
                          background: '#f9f9f9',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out bg-black/10" />
              </motion.div>
            )

            return service.href ? (
              <Link key={service.id} href={service.href} className="block transition-transform hover:-translate-y-1 duration-300">
                {Content}
              </Link>
            ) : (
              <div key={service.id}>{Content}</div>
            )
          })}
        </div>
        <div className="mt-16 flex justify-center">
          <a href="/contact" className="cta-primary">
            Discuss Your Project with Us
          </a>
        </div>
      </motion.div>
    </section>
  )
}