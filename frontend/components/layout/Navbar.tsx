'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Patient Portal', href: '/portal' },
  { label: 'News', href: '/news' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glassmorphic-nav' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-gradient-primary' : 'bg-white/10 border border-white/20'
            }`}>
              <span
                className={`material-symbols-outlined transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-white'}`}
                style={{ fontSize: '18px' }}
                aria-hidden="true"
              >
                local_hospital
              </span>
            </div>
            <div>
              <div className={`font-heading font-bold text-[16px] leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-on-surface' : 'text-white'
              }`}>
                Clinical Excellence
              </div>
              <div className={`text-[9px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                isScrolled ? 'text-on-surface-variant/60' : 'text-white/40'
              }`}>
                Est. 1984
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                  isScrolled
                    ? 'text-on-surface-variant hover:text-on-surface'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0.5 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full origin-left ${
                  isScrolled ? 'bg-on-surface' : 'bg-white/50'
                }`} />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/appointment" className={`btn-primary-gold text-sm py-2.5 px-5 ${!isScrolled ? 'shadow-none' : ''}`}>
              Book Appointment
            </Link>
            <a
              href="tel:+18005550911"
              className={`flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'border border-tertiary/30 text-tertiary hover:bg-tertiary hover:text-white'
                  : 'border border-white/20 text-white/70 hover:bg-white/10'
              }`}
            >
              <Phone size={14} aria-hidden="true" />
              Emergency
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className={`lg:hidden p-2.5 rounded-xl transition-colors duration-300 ${
              isScrolled
                ? 'text-on-surface hover:bg-surface-container'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-premium ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface-lowest/98 backdrop-blur-nav border-t border-outline-variant/40 px-6 pt-4 pb-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-4 py-3 rounded-2xl text-on-surface-variant hover:bg-surface-low hover:text-on-surface font-medium transition-all duration-200 text-sm"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 space-y-2.5 border-t border-outline-variant/40 mt-3">
            <Link
              href="/appointment"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary-gold w-full text-sm py-3.5"
            >
              Book Appointment
            </Link>
            <a href="tel:+18005550911" className="btn-emergency w-full text-sm py-3.5">
              <Phone size={14} aria-hidden="true" />
              Emergency · 1-800-555-0911
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
