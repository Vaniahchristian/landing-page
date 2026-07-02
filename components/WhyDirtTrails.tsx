'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FEATURES = [
  {
    title: 'Mobile Money First',
    description: 'MTN and Airtel built in natively. Not bolted on.',
  },
  {
    title: 'Verified Operators',
    description: 'Every listing reviewed and approved before going live.',
  },
  {
    title: 'Instant Settlement',
    description: 'Vendors paid automatically. No chasing. No delays.',
  },
  {
    title: 'Offline Ready',
    description: 'Vendor dashboard works in low-connectivity safari areas.',
  },
]

export default function WhyDirtTrails() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-dirt-trails" className="bg-[#FAFAF8] py-28 px-6 border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#1A1A1A] tracking-tight leading-[1.08] mb-6">
              Built for this market.
              <br />
              <span className="text-[#1B3A2D]">Not adapted</span> for it.
            </h2>
            <p className="text-[#1A1A1A]/70 leading-[1.8] text-[15px] max-w-sm">
              Every other platform was built for Europe or the US, then patched to work here.
              Dirt Trails is built ground-up for East Africa — the infrastructure, the payment
              rails, the connectivity constraints that matter on the ground.
            </p>
          </motion.div>

          {/* Right — feature rows */}
          <div className="flex flex-col divide-y divide-black/[0.06]">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.12 + i * 0.09,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-start gap-5 py-5 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B6914] mt-[9px] flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                <div>
                  <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-0.5">{f.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/65">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
