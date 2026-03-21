'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'

const NAV_LINKS = [
  { label: 'Projects',    href: '#work' },
  { label: 'Services',    href: '#act3' },
  { label: 'Process',     href: '#process' },
  { label: 'Engineering', href: '#act4' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
    )
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(6, 6, 15, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(123,97,255,0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(123,97,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3 group">
          <SpaceLogo />
          <span className="font-semibold text-sm tracking-wide transition-colors duration-200 text-white group-hover:text-[#7B61FF]">
            Luminexis
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="relative font-mono text-xs tracking-widest uppercase transition-colors duration-200 group"
              style={{ color: 'var(--fg-muted)' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#7B61FF' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg-muted)' }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: 'linear-gradient(90deg, #7B61FF, #22D3EE)' }}
              />
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:flex cta-primary text-xs py-2.5 px-5"
          >
            Start a Project
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center"
            style={{ color: 'var(--fg)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(6, 6, 15, 0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: menuOpen ? '1px solid rgba(123,97,255,0.15)' : 'none',
        }}
      >
        <div className="px-6 py-5 space-y-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block font-mono text-xs tracking-widest uppercase w-full text-left py-2 transition-colors duration-200"
              style={{ color: 'var(--fg-muted)', borderBottom: '1px solid rgba(123,97,255,0.1)' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#7B61FF' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg-muted)' }}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo('#contact')} className="cta-primary w-full justify-center text-xs py-3 mt-2">
            Start a Project
          </button>
        </div>
      </div>
    </nav>
  )
}

function SpaceLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      {/* Outer ring */}
      <circle cx="14" cy="14" r="12" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" />
      {/* Orbital path */}
      <ellipse cx="14" cy="14" rx="8" ry="3" transform="rotate(-30 14 14)" stroke="#22D3EE" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Inner core */}
      <circle cx="14" cy="14" r="4" fill="url(#coreGrad)" opacity="0.7" />
      {/* Center dot */}
      <circle cx="14" cy="14" r="2" fill="#7B61FF" style={{ filter: 'drop-shadow(0 0 4px rgba(123,97,255,0.8))' }} />
      {/* Small orbiting dot */}
      <circle cx="22" cy="10" r="1.5" fill="#22D3EE" style={{ filter: 'drop-shadow(0 0 3px rgba(34,211,238,0.8))' }} />
      <defs>
        <linearGradient id="logoGrad" x1="2" y1="2" x2="26" y2="26">
          <stop offset="0%" stopColor="#7B61FF" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.1" />
        </radialGradient>
      </defs>
    </svg>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      {open ? (
        <>
          <line x1="3" y1="3" x2="15" y2="15"/>
          <line x1="15" y1="3" x2="3" y2="15"/>
        </>
      ) : (
        <>
          <line x1="3" y1="5" x2="15" y2="5"/>
          <line x1="3" y1="9" x2="15" y2="9"/>
          <line x1="3" y1="13" x2="15" y2="13"/>
        </>
      )}
    </svg>
  )
}