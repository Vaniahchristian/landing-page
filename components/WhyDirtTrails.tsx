'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FEATURES = [
  {
    title: 'Mobile Money First',
    description: 'MTN and Airtel built in natively, not bolted on',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4.5 h-4.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: 'Verified Operators',
    description: 'Every listing is reviewed and approved before going live',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4.5 h-4.5">
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: 'Instant Settlement',
    description: 'Vendors paid automatically. No chasing. No delays.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4.5 h-4.5">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Offline Ready',
    description: 'Vendor dashboard works in low-connectivity safari areas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4.5 h-4.5">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" strokeLinecap="round" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" strokeLinecap="round" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" strokeLinecap="round" />
        <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export default function WhyDirtTrails() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-dirt-trails" className="bg-[#FAFAF8] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] text-[#8B6914] tracking-[0.16em] uppercase font-medium mb-5">
              Why Dirt Trails
            </p>
            <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#1A1A1A] tracking-tight leading-[1.1] mb-6">
              Built for this market.{' '}
              <span className="text-[#1B3A2D]">Not adapted</span> for it.
            </h2>
            <p className="text-[#1A1A1A]/55 leading-[1.75] text-[15px]">
              Every other platform was built for Europe or the US, then patched to work here.
              Dirt Trails is built ground-up for East Africa — the infrastructure, the payment
              rails, the connectivity constraints that matter on the ground.
            </p>
          </motion.div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.1 + i * 0.1,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1B3A2D]/[0.07] flex items-center justify-center text-[#1B3A2D] flex-shrink-0 group-hover:bg-[#1B3A2D] group-hover:text-white transition-all duration-250">
                  {feature.icon}
                </div>
                <div className="pt-1">
                  <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-0.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/55">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
