'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'HOME',       href: '/' },
  { label: 'SERVICES',   href: '/services' },
  { label: 'WORK',       href: '/projects' },
  { label: 'PROCESS',    href: '/process' },
  { label: 'CONTACT',    href: '/contact' },
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
        background: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.03)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
            <span className="text-xl font-bold tracking-[0.15em] uppercase text-black">
              LUMINEXIS.
            </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-bold text-xs tracking-[0.15em] uppercase transition-colors duration-200 group"
              style={{ color: pathname === link.href ? '#000000' : 'var(--fg-muted)' }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                style={{ 
                  background: '#000',
                  width: pathname === link.href ? '100%' : '0'
                }}
              />
              <span
                className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: '#000' }}
              />
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-6">
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
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          borderBottom: menuOpen ? '1px solid rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <div className="px-6 py-5 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-bold text-xs tracking-widest uppercase w-full text-left py-3 transition-colors duration-200"
              style={{ color: pathname === link.href ? '#000000' : 'var(--fg-muted)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
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