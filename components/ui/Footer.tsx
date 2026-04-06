'use client'

import Link from 'next/link'
import { Instagram, Linkedin, Mail, MessageSquare } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer
      className="bg-[#fafafa] px-6 md:px-12 lg:px-24"
      role="contentinfo"
      aria-label="Site footer"
      style={{ borderTop: '1px solid #eaeaea' }}
    >
      {/* Main Grid */}
      <div className="max-w-6xl mx-auto pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12">

          {/* Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <span className="text-xl font-bold tracking-[0.15em] uppercase text-black">
              LUMINEXIS.
            </span>
            <p className="text-sm text-[#6e6e73] leading-relaxed max-w-[240px]">
              High-performance digital ecosystems built with structural integrity and precision.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#86868b]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#424245] hover:text-black transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#86868b]">
              Connect
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://www.instagram.com/luminexis_technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#424245] hover:text-black transition-colors duration-200 group"
                >
                  <Instagram className="w-4 h-4 text-[#86868b] group-hover:text-black transition-colors duration-200" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/luminexis-technologies-0a331b3b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#424245] hover:text-black transition-colors duration-200 group"
                >
                  <Linkedin className="w-4 h-4 text-[#86868b] group-hover:text-black transition-colors duration-200" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#86868b]">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@luminexistechnologies.com"
                className="flex items-center gap-3 text-sm text-[#424245] hover:text-black transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 text-[#86868b] group-hover:text-black transition-colors duration-200" />
                info@luminexistechnologies.com
              </a>
              <a
                href="https://wa.me/918431077234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#424245] hover:text-black transition-colors duration-200 group"
              >
                <MessageSquare className="w-4 h-4 text-[#86868b] group-hover:text-black transition-colors duration-200" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="max-w-6xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid #eaeaea' }}
      >
        <p className="text-xs text-[#86868b]">
          © {currentYear} Luminexis Technologies. All rights reserved.
        </p>
        <p className="text-xs text-[#86868b]">
          Structural Integrity · Cosmic Precision
        </p>
      </div>
    </footer>
  )
}
