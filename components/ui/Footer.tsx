'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Mail, MessageSquare } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Engineering', href: '/engineering' },
    { label: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/luminexis_technologies/', id: '@luminexis_technologies' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/luminexis-technologies-0a331b3b9', id: 'Luminexis Technologies' },
  ]

  return (
    <footer className="mt-32 pt-20 pb-12 px-6 md:px-12 lg:px-24 bg-[#05060F] relative overflow-hidden" role="contentinfo" aria-label="Site footer" style={{ borderTop: '1px solid rgba(123,97,255,0.1)' }}>
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(123,97,255,0.3), transparent)' }} aria-hidden="true" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-[100px] pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle, #7B61FF 0%, transparent 70%)' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <SpaceLogo />
              <span className="font-bold text-lg tracking-tight text-white">Luminexis</span>
            </div>
            <p className="text-sm text-fg-muted font-medium leading-relaxed max-w-xs">
              Architecting high-performance digital ecosystems with structural integrity and cosmic precision.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-mono text-xs tracking-widest uppercase text-white opacity-40">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-fg-muted hover:text-[#7B61FF] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-mono text-xs tracking-widest uppercase text-white opacity-40">Connect</h4>
            <ul className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm text-fg-muted hover:text-white transition-colors duration-200">
                    <social.icon className="w-4 h-4 text-[#7B61FF] group-hover:scale-110 transition-transform duration-200" />
                    <span className="flex flex-col leading-tight">
                      <span className="text-[10px] opacity-40 uppercase tracking-tighter">{social.label}</span>
                      <span className="font-medium">{social.id}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiries Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-mono text-xs tracking-widest uppercase text-white opacity-40">Direct Inquiries</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:info@luminexistechnologies.com" className="group flex items-center gap-3 text-sm text-fg-muted hover:text-white transition-colors duration-200">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#7B61FF]/30 transition-colors">
                  <Mail className="w-4 h-4 text-[#7B61FF]" />
                </div>
                <span>info@luminexistechnologies.com</span>
              </a>
              <a href="https://wa.me/918431077234" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm text-fg-muted hover:text-white transition-colors duration-200">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#7B61FF]/30 transition-colors">
                  <MessageSquare className="w-4 h-4 text-[#22D3EE]" />
                </div>
                <span>Sync via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">
            © {currentYear} Luminexis Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
              Structural Integrity.
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
              Cosmic Precision.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SpaceLogo() {
  return (
    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 transition-all duration-300">
      <Image
        src="/static/img/user_logo.png"
        alt="software development company in Bangalore"
        width={32}
        height={32}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}
