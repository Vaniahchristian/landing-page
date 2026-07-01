'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STEPS = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Search hotels, safaris, transport, and activities across Uganda. Every listing is verified before it goes live.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="11" cy="11" r="7.5" />
        <path d="m21 21-4.4-4.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Book Instantly',
    description:
      'Select your dates, see full pricing, no hidden fees. Real-time availability from every operator on the platform.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Pay & Confirm',
    description:
      'Mobile money via MTN or Airtel. Confirmation lands in your inbox in under 60 seconds. Your itinerary, instantly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.13,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="bg-[#FAFAF8] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[11px] text-[#8B6914] tracking-[0.16em] uppercase font-medium mb-3">
            Simple Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            How it Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group bg-white rounded-2xl p-8 border border-black/[0.055] shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="flex items-center justify-between mb-7">
                <div className="w-11 h-11 rounded-xl bg-[#1B3A2D]/[0.07] flex items-center justify-center text-[#1B3A2D] group-hover:bg-[#1B3A2D] group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <span className="text-5xl font-bold text-black/[0.05] font-mono leading-none select-none">
                  {step.step}
                </span>
              </div>
              <h3 className="text-[17px] font-semibold text-[#1A1A1A] mb-2.5">
                {step.title}
              </h3>
              <p className="text-sm text-[#1A1A1A]/55 leading-[1.65]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
