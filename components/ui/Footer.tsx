'use client'

import Link from 'next/link'
import { Instagram, Linkedin, Mail, MessageSquare, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/projects' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const contactLinks = [
    { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { label: 'WhatsApp', icon: MessageSquare, href: 'https://wa.me/918431077234' },
    { label: 'Email', icon: Mail, href: 'mailto:info@luminexistechnologies.com' },
  ]

  return (
    <footer
      className="px-6 md:px-12 lg:px-24 border-t border-black/[0.06]"
      style={{ background: '#FFFFFF' }}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="text-lg font-semibold tracking-[-0.02em] text-[#111111]">
              Luminexis
            </Link>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-sm">
              An engineering-first studio building high-performance digital systems that generate measurable revenue and scale effortlessly.
            </p>
            <div className="flex gap-3 mt-2">
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F7F7F7] text-[#6B7280] hover:bg-[#111111] hover:text-white transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#111111]/40">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between text-sm text-[#6B7280] hover:text-[#111111] transition-colors duration-300"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#111111]/40">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:info@luminexistechnologies.com" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors duration-300">
                info@luminexistechnologies.com
              </a>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-[#111111]/30 font-medium uppercase tracking-wider">Location</span>
                <span className="text-sm text-[#111111]">Remote / Global</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-[#111111]/30 font-medium uppercase tracking-wider">Availability</span>
                <span className="text-sm text-[#111111]">Accepting New Projects</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B7280]">
            © {currentYear} Luminexis Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-[#6B7280] hover:text-[#111111] transition-colors duration-300">Privacy</Link>
            <Link href="/terms" className="text-xs text-[#6B7280] hover:text-[#111111] transition-colors duration-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
