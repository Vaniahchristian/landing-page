'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

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

const line1Words = ['East', "Africa's", 'Safari']
const line2Words = [{ text: 'Starts', accent: false }, { text: 'Here.', accent: true }]
const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(150deg, #1B3A2D 0%, #0E1A12 30%, #0A0A0A 62%)',
        }}
      >
        <div
          className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.45]"
          style={{
            background: 'radial-gradient(circle, #1B3A2D 0%, transparent 68%)',
            animation: 'meshMove 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -bottom-[10%] -right-[10%] w-[55vw] h-[55vw] max-w-[550px] max-h-[550px] rounded-full opacity-[0.22]"
          style={{
            background: 'radial-gradient(circle, #8B6914 0%, transparent 68%)',
            animation: 'meshMove 18s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[45vw] max-w-[900px] opacity-[0.18]"
          style={{
            background: 'radial-gradient(ellipse, #1B3A2D 0%, transparent 65%)',
            animation: 'meshMove 22s ease-in-out infinite',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #F5F0E8 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 mb-10 px-4 py-1.5 rounded-full border border-[#1B3A2D]/60 bg-[#1B3A2D]/[0.15] text-[11px] text-[#F5F0E8]/55 tracking-[0.14em] uppercase"
          style={{
            animation: `heroFadeUpTiny 0.5s ${ease} 0.05s both`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B6914] animate-pulse" />
          Intelligent Safari Technology
        </div>

        {/* Headline line 1 */}
        <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold tracking-[-0.02em] leading-[0.88] mb-1">
          <span className="flex flex-wrap justify-center gap-x-[0.25em]">
            {line1Words.map((word, i) => (
              <span
                key={word}
                className="inline-block text-[#F5F0E8]"
                style={{
                  animation: `heroFadeUp 0.65s ${ease} ${0.15 + i * 0.09}s both`,
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Headline line 2 */}
        <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold tracking-[-0.02em] leading-[0.88] mb-10">
          <span className="flex flex-wrap justify-center gap-x-[0.2em]">
            {line2Words.map((word, i) => (
              <span
                key={word.text}
                className={`inline-block ${word.accent ? 'text-[#8B6914]' : 'text-[#F5F0E8]'}`}
                style={{
                  animation: `heroFadeUp 0.65s ${ease} ${0.15 + (line1Words.length + i) * 0.09}s both`,
                }}
              >
                {word.text}
              </span>
            ))}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-[#F5F0E8]/55 mb-10 max-w-lg mx-auto leading-relaxed"
          style={{
            animation: `heroFadeUpSmall 0.6s ${ease} 0.72s both`,
          }}
        >
          Verified operators. Mobile money payments. Instant confirmation.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
          style={{
            animation: `heroFadeUpSmall 0.55s ${ease} 0.9s both`,
          }}
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
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap justify-center gap-8 md:gap-14 border-t border-[#F5F0E8]/[0.07] pt-10 pb-16"
          style={{
            animation: `heroFadeUpTiny 0.5s ${ease} 1.1s both`,
          }}
        >
          {STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
