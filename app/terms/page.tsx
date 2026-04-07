'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'

export default function TermsPage() {
  const sections = [
    {
      title: '01. Service Delivery',
      content: 'Luminexis provides high-performance custom software, automation, and SaaS engineering. All deliverables are subject to the project-specific Statement of Work (SOW).',
    },
    {
      title: '02. Intellectual Property',
      content: 'Upon full payment, the ownership of developed code and visual design assets is transferred to the client, while we retain rights to our underlying reusable frameworks and foundational libraries.',
    },
    {
      title: '03. Payment & Milestones',
      content: 'Projects follow a milestone-based billing cycle. Delays in feedback or assets may impact delivery timelines. All payments are non-refundable once engineering sprints have commenced.',
    },
    {
      title: '04. Limitation of Liability',
      content: 'We engineer with high precision but do not guarantee revenue outcomes, market performance, or third-party platform stability. Our liability is limited to the fees paid for specific project phases.',
    },
    {
      title: '05. Governing Law',
      content: 'All disputes are subject to the jurisdiction of our registered business location. Use of our services constitutes acceptance of these terms and any future modifications.',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 bg-[#F7F7F7] min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-16"
          >
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#6B7280] mb-4 block">
              Global Standards
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#111111] tracking-tight leading-tight">
              Terms & Conditions
            </h1>
            <p className="mt-8 text-lg text-[#6B7280] max-w-2xl leading-relaxed">
              These terms define our engineering partnership. We aim for transparency, accountability, and high-performance collaboration.
            </p>
          </motion.div>

          <div className="flex flex-col gap-12 pt-12 border-t border-black/[0.06]">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col gap-4"
              >
                <h2 className="text-xs font-semibold uppercase tracking-widest text-[#111111]">
                  {section.title}
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed max-w-3xl">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-3xl bg-white border border-black/[0.04]"
          >
            <p className="text-sm text-[#111111]">
              Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              <br />
              Questions? <a href="mailto:legal@luminexistechnologies.com" className="underline decoration-black/20 hover:decoration-black transition-all">legal@luminexistechnologies.com</a>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
