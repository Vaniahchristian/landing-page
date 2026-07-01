'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CATEGORIES = [
  {
    title: 'Hotels & Stays',
    description: 'Lodges, boutique hotels, tented camps',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Safari Tours',
    description: 'Gorilla trekking, game drives, birding',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Transport',
    description: 'Airport transfers, safari vehicles, boat rides',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Events',
    description: 'Cultural festivals, corporate retreats',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Activities',
    description: 'Hiking, white-water rafting, community visits',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Restaurants',
    description: 'Local dining, sunset dinners, food tours',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" strokeLinecap="round" />
        <line x1="10" y1="1" x2="10" y2="4" strokeLinecap="round" />
        <line x1="14" y1="1" x2="14" y2="4" strokeLinecap="round" />
      </svg>
    ),
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function Categories() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="categories" className="py-28 px-6" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #0C1510 50%, #0A0A0A 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] text-[#8B6914] tracking-[0.16em] uppercase font-medium mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F0E8] tracking-tight">
            Every Experience,{' '}
            <span className="text-[#F5F0E8]/40">One Platform</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group relative p-5 md:p-7 rounded-2xl border border-[#F5F0E8]/[0.055] bg-[#F5F0E8]/[0.02] hover:border-[#8B6914]/45 hover:bg-[#8B6914]/[0.04] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: '0 0 40px rgba(139,105,20,0.06) inset' }}
              />
              <div className="text-[#F5F0E8]/35 group-hover:text-[#8B6914] transition-colors duration-300 mb-4">
                {cat.icon}
              </div>
              <h3 className="text-[14px] md:text-[15px] font-semibold text-[#F5F0E8] mb-1.5 leading-snug">
                {cat.title}
              </h3>
              <p className="text-[12px] text-[#F5F0E8]/38 leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
