'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const STATS = [
  { value: 15, suffix: '+', label: 'Operators' },
  { value: 30, suffix: '+', label: 'Services' },
  { value: 3, suffix: '+', label: 'Partners' },
  { value: 150, suffix: 'kg+', label: 'Carbon Offset' },
]

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1.5">
      <span className="text-2xl md:text-3xl font-bold text-[#F5F0E8] tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-[10px] text-[#F5F0E8]/40 tracking-[0.15em] uppercase">
        {label}
      </span>
    </div>
  )
}

const wordVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.15 + i * 0.09,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const line1Words = ['East', "Africa's", 'Safari']
const line2Words = [{ text: 'Starts', accent: false }, { text: 'Here.', accent: true }]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        {/* Forest green orb – top left */}
        <div
          className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.18]"
          style={{
            background: 'radial-gradient(circle, #1B3A2D 0%, transparent 68%)',
            animation: 'meshMove 14s ease-in-out infinite',
          }}
        />
        {/* Gold orb – bottom right */}
        <div
          className="absolute -bottom-[10%] -right-[10%] w-[55vw] h-[55vw] max-w-[550px] max-h-[550px] rounded-full opacity-[0.12]"
          style={{
            background: 'radial-gradient(circle, #8B6914 0%, transparent 68%)',
            animation: 'meshMove 18s ease-in-out infinite reverse',
          }}
        />
        {/* Center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[45vw] max-w-[900px] opacity-[0.07]"
          style={{
            background: 'radial-gradient(ellipse, #1B3A2D 0%, transparent 65%)',
            animation: 'meshMove 22s ease-in-out infinite',
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #F5F0E8 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2.5 mb-10 px-4 py-1.5 rounded-full border border-[#1B3A2D]/60 bg-[#1B3A2D]/[0.15] text-[11px] text-[#F5F0E8]/55 tracking-[0.14em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B6914] animate-pulse" />
          Intelligent Safari Technology
        </motion.div>

        {/* Headline line 1 */}
        <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold tracking-[-0.02em] leading-[0.88] mb-1">
          <span className="flex flex-wrap justify-center gap-x-[0.25em]">
            {line1Words.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-[#F5F0E8]"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Headline line 2 */}
        <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold tracking-[-0.02em] leading-[0.88] mb-10">
          <span className="flex flex-wrap justify-center gap-x-[0.2em]">
            {line2Words.map((word, i) => (
              <motion.span
                key={word.text}
                custom={line1Words.length + i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block ${word.accent ? 'text-[#8B6914]' : 'text-[#F5F0E8]'}`}
              >
                {word.text}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-[#F5F0E8]/55 mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Verified operators. Mobile money payments. Instant confirmation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
        >
          <a
            href="https://bookings.dirt-trails.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#8B6914] text-[#F5F0E8] font-semibold text-[15px] hover:bg-[#A07820] active:scale-[0.97] transition-all duration-150 btn-shimmer text-center"
          >
            Explore Experiences
          </a>
          <a
            href="#for-operators"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#F5F0E8]/18 text-[#F5F0E8] font-medium text-[15px] hover:border-[#F5F0E8]/35 hover:bg-[#F5F0E8]/[0.04] active:scale-[0.97] transition-all duration-150 text-center"
          >
            List Your Business
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-8 md:gap-14 border-t border-[#F5F0E8]/[0.07] pt-10 pb-16"
        >
          {STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
