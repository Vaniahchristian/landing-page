'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Experiences', href: '#categories' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'For Operators', href: '/operators' },
  { label: 'Sustainability', href: '#sustainability' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group flex-shrink-0">
          <span className="text-[15px] font-semibold tracking-tight text-[#F5F0E8]">
            Dirt Trails
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B6914] opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://bookings.dirt-trails.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#8B6914] text-[#F5F0E8] text-sm font-medium hover:bg-[#A07820] active:scale-[0.97] transition-all duration-150 btn-shimmer"
          >
            Book a Safari
          </a>

          <button
            className="md:hidden p-1.5 text-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-[1.5px] bg-current transition-all duration-250 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-250 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-250 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#0A0A0A]/96 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a
                href="https://bookings.dirt-trails.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[#8B6914] text-[#F5F0E8] text-sm font-medium btn-shimmer"
                onClick={() => setMenuOpen(false)}
              >
                Book a Safari
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
