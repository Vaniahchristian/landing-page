'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PARTNERS = [
  { name: 'SafariIntel', tagline: 'Data Intelligence' },
  { name: 'MarzPay', tagline: 'Payment Rails' },
  { name: 'MIIC', tagline: 'Infrastructure' },
]

export default function Partners() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="partners" className="bg-[#0A0A0A] py-20 px-6 border-t border-[#F5F0E8]/[0.04]">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-[10px] text-[#F5F0E8]/25 tracking-[0.18em] uppercase mb-12"
        >
          Trusted by
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="group text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-[#F5F0E8]/20 group-hover:text-[#F5F0E8]/55 transition-colors duration-300 tracking-tight">
                {partner.name}
              </p>
              <p className="text-[10px] text-[#F5F0E8]/15 mt-1.5 group-hover:text-[#F5F0E8]/35 transition-colors duration-300 tracking-wider uppercase">
                {partner.tagline}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
