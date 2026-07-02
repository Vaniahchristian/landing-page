'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STEPS = [
  {
    n: '01',
    title: 'Discover',
    description:
      'Search hotels, safaris, transport, and activities across East Africa. Every listing is verified before it goes live.',
  },
  {
    n: '02',
    title: 'Book Instantly',
    description:
      'Select your dates, see full pricing. No hidden fees. Real-time availability from every operator on the platform.',
  },
  {
    n: '03',
    title: 'Pay & Confirm',
    description:
      'Mobile money via MTN or Airtel. Confirmation in under 60 seconds. Your itinerary, instantly delivered.',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="how-it-works" className="bg-[#FAFAF8] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-16"
        >
          How it Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.12,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="block text-[88px] font-bold text-black/[0.05] leading-none mb-5 select-none tabular-nums">
                {step.n}
              </span>
              <h3 className="text-[18px] font-semibold text-[#1A1A1A] mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-[#1A1A1A]/70 leading-[1.75]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
