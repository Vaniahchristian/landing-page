'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

const HERO_IMG =
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1920&q=85'

const STATS = [
  { value: 15, suffix: '+', label: 'Businesses' },
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
    <div ref={ref} className="flex flex-col gap-1">
      <span className="text-2xl md:text-3xl font-bold text-[#F5F0E8] tabular-nums leading-none">
        {count}
        {suffix}
      </span>
      <span className="text-[11px] text-[#F5F0E8]/38 tracking-wide">{label}</span>
    </div>
  )
}

const HEADLINE = ['One Stop For all Your Travel Needs..']
const CATEGORIES = ['Hotels & Stays', 'Safari Tours', 'Transport', 'Events', 'Activities', 'Restaurants']
const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-16">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Acacia tree on the East African savanna at golden hour"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/55 to-[#0A0A0A]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/30 to-transparent" />
      </div>

      {/* Sky spacer — min 50px of clear sky, max 160px */}
      <div className="flex-1 min-h-[50px] max-h-[160px]" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pb-6">
        {/* Headline */}
        <h1 className="text-[clamp(2.8rem,7.5vw,5.5rem)] font-bold tracking-[-0.025em] leading-[0.9] mb-4">
          <span className="flex flex-wrap gap-x-[0.22em]">
            {HEADLINE.map((word, i) => (
              <span
                key={word}
                className="inline-block text-[#F5F0E8]"
                style={{ animation: `heroFadeUp 0.65s ${ease} ${0.08 + i * 0.08}s both` }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        <p
          className="text-[#F5F0E8]/58 text-lg mb-5 max-w-sm leading-relaxed"
          style={{ animation: `heroFadeUpSmall 0.55s ${ease} 0.6s both` }}
        >
          Verified operators. Real-time booking.
        </p>

        {/* Search bar */}
        <div
          className="bg-[#0A0A0A]/80 backdrop-blur-xl rounded-2xl p-1.5 flex flex-col sm:flex-row gap-1 mb-4 max-w-2xl border border-white/[0.07] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          style={{ animation: `heroFadeUpSmall 0.5s ${ease} 0.75s both` }}
        >
          <select
            defaultValue=""
            className="flex-1 bg-transparent px-4 py-3 text-[#F5F0E8] text-sm outline-none border-b sm:border-b-0 sm:border-r border-white/[0.07] cursor-pointer appearance-none min-w-0"
          >
            <option value="" disabled className="bg-[#0F0F0F]">
              Destination
            </option>
            <option className="bg-[#0F0F0F]">Bwindi Forest</option>
            <option className="bg-[#0F0F0F]">Lake Victoria</option>
            <option className="bg-[#0F0F0F]">Murchison Falls</option>
            <option className="bg-[#0F0F0F]">Kampala</option>
            <option className="bg-[#0F0F0F]">Kidepo Valley</option>
            <option className="bg-[#0F0F0F]">Nile River</option>
          </select>
          <input
            type="date"
            className="flex-1 bg-transparent px-4 py-3 text-[#F5F0E8] text-sm outline-none border-b sm:border-b-0 sm:border-r border-white/[0.07] [color-scheme:dark] min-w-0"
          />
          <select
            defaultValue=""
            className="flex-1 bg-transparent px-4 py-3 text-[#F5F0E8] text-sm outline-none appearance-none cursor-pointer min-w-0"
          >
            <option value="" disabled className="bg-[#0F0F0F]">
              Category
            </option>
            {CATEGORIES.map((c) => (
              <option key={c} className="bg-[#0F0F0F]">
                {c}
              </option>
            ))}
          </select>
          <a
            href="https://bookings.dirt-trails.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#8B6914] text-[#F5F0E8] font-semibold text-sm hover:bg-[#A07820] active:scale-[0.97] transition-all duration-150 btn-shimmer text-center whitespace-nowrap flex-shrink-0"
          >
            Search
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="flex flex-wrap gap-8 md:gap-12 pt-4 border-t border-white/[0.06]"
          style={{ animation: `heroFadeUpTiny 0.45s ${ease} 1s both` }}
        >
          {STATS.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
