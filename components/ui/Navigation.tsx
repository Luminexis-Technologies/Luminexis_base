'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'About',       href: '/about' },
  { label: 'Projects',    href: '/projects' },
  { label: 'Services',    href: '/services' },
  { label: 'Process',     href: '/process' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Contact',     href: '/contact' },
]

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()
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

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
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
        <Link href="/" className="flex items-center gap-3 group">
          <SpaceLogo />
          <span className="font-semibold text-sm tracking-wide transition-colors duration-200 text-white group-hover:text-[#7B61FF]">
            Luminexis
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-mono text-xs tracking-widest uppercase transition-colors duration-200 group"
              style={{ color: pathname === link.href ? '#7B61FF' : 'var(--fg-muted)' }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(90deg, #7B61FF, #22D3EE)',
                  width: pathname === link.href ? '100%' : '0'
                }}
              />
              <span
                className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: 'linear-gradient(90deg, #7B61FF, #22D3EE)' }}
              />
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:flex cta-primary text-xs py-2.5 px-5"
          >
            Start a Project
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center"
            style={{ color: 'var(--fg)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
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
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-mono text-xs tracking-widest uppercase w-full text-left py-2 transition-colors duration-200"
              style={{ color: pathname === link.href ? '#7B61FF' : 'var(--fg-muted)', borderBottom: '1px solid rgba(123,97,255,0.1)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="cta-primary w-full justify-center text-xs py-3 mt-2">
            Start a Project
          </Link>
        </div>
      </div>
    </nav>
  )
}

function SpaceLogo() {
  return (
    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 group-hover:border-[#7B61FF]/40 transition-all duration-300">
      <div className="adaptive-logo-container">
        <Image
          src="/logo-light.png"
          alt="Luminexis Platform Mode Light"
          width={36}
          height={36}
          className="adaptive-logo-light"
          priority
        />
        <Image
          src="/logo-dark.png"
          alt="UI UX design company in India"
          width={36}
          height={36}
          className="adaptive-logo-dark"
          priority
        />
      </div>
    </div>
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