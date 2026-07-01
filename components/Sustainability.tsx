'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

function TreeSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 60" fill="none" className={className}>
      <rect x="21" y="45" width="6" height="13" rx="1.5" fill="currentColor" opacity="0.55" />
      <polygon points="24,22 7,45 41,45" fill="currentColor" opacity="0.7" />
      <polygon points="24,12 10,34 38,34" fill="currentColor" opacity="0.85" />
      <polygon points="24,2 13,24 35,24" fill="currentColor" />
    </svg>
  )
}

function KgCounter() {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, 150, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView])

  return <span ref={ref}>{count}</span>
}

export default function Sustainability() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sustainability" className="relative bg-[#1B3A2D] py-32 px-6 overflow-hidden">
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #F5F0E8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Flanking tree silhouettes */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 opacity-[0.07] pointer-events-none">
        <TreeSVG className="w-64 h-80 text-[#F5F0E8]" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.07] pointer-events-none scale-x-[-1]">
        <TreeSVG className="w-64 h-80 text-[#F5F0E8]" />
      </div>
      {/* Top fade */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#FAFAF8] to-transparent pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Tree icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center mb-9"
        >
          <div className="relative" style={{ animation: 'floatTree 5s ease-in-out infinite' }}>
            <TreeSVG className="w-14 h-[4.5rem] text-[#8B6914]" />
            <div className="absolute inset-0 blur-2xl bg-[#8B6914]/25 -z-10 scale-150" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold text-[#F5F0E8] tracking-tight mb-4"
        >
          Every booking plants a tree.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.32, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-[#F5F0E8]/55 mb-12"
        >
          GPS-tagged. Carbon tracked. Verified.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-4 px-7 py-3.5 rounded-full border border-[#F5F0E8]/15 bg-[#F5F0E8]/[0.06]"
        >
          <span className="text-2xl font-bold text-[#8B6914] tabular-nums">
            <KgCounter />kg+
          </span>
          <span className="text-sm text-[#F5F0E8]/55">carbon offset and counting</span>
        </motion.div>
      </div>
    </section>
  )
}
