'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'

export default function PrivacyPage() {
  const sections = [
    {
      title: '01. Data Collection',
      content: 'We collect minimal data necessary to provide our services and improve your experience. This includes personal information provided voluntarily through contact forms and technical data such as browser type, device info, and page interactions.',
    },
    {
      title: '02. How We Use Data',
      content: 'Your data is used solely to deliver high-performance digital systems, communicate about project progress, and optimize our platform. We never sell your personal information to third parties.',
    },
    {
      title: '03. Security Standards',
      content: 'We implement industry-standard encryption and security protocols to safeguard your intellectual property and personal data. Our engineering processes prioritize data integrity and privacy by design.',
    },
    {
      title: '04. Third-Party Services',
      content: 'We may use trusted third-party partners (e.g., Vercel for hosting, Google for analytics) to infrastructure our services. These partners are compliant with global privacy standards.',
    },
    {
      title: '05. Your Rights',
      content: 'You have the right to request access to, correction of, or deletion of your personal data at any time. Contact our engineering team for any compliance-related inquiries.',
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
              Legal Compliance
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#111111] tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-8 text-lg text-[#6B7280] max-w-2xl leading-relaxed">
              At Luminexis Technologies, privacy is an engineering priority. This policy outlines how we handle data with transparency and security.
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
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              <br />
              Contact: <a href="mailto:info@luminexistechnologies.com" className="underline decoration-black/20 hover:decoration-black transition-all">info@luminexistechnologies.com</a>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
