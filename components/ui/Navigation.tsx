'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Services',  href: '/services' },
  { label: 'Work',      href: '/projects' },
  { label: 'Process',   href: '/process' },
  { label: 'About',     href: '/about' },
]

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(247, 247, 247, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        height: scrolled ? '64px' : '80px',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-lg font-semibold tracking-[-0.02em] text-[#111111]">
            Luminexis
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium transition-all duration-300"
              style={{ color: pathname === link.href ? '#111111' : '#6B7280' }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-[1.5px] rounded-full bg-[#111111] transition-all duration-300"
                style={{ width: pathname === link.href ? '100%' : '0' }}
              />
            </Link>
          ))}

          <Link
            href="/contact"
            className="px-6 py-2.5 bg-[#111111] text-white text-[13px] font-medium transition-all duration-300 rounded-full hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.97]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-[#111111]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-400 border-b ${
          menuOpen
            ? 'max-h-[420px] opacity-100 border-black/[0.06]'
            : 'max-h-0 opacity-0 border-transparent'
        }`}
        style={{
          background: 'rgba(247, 247, 247, 0.95)',
          backdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className="px-6 py-8 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-[#111111] py-3 px-4 rounded-2xl hover:bg-black/[0.03] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 w-full text-center py-3.5 px-6 bg-[#111111] text-white font-medium rounded-full active:scale-[0.97] transition-transform"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </>
      )}
    </svg>
  )
}