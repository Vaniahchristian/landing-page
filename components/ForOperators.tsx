'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function DashboardCard() {
  return (
    <div className="bg-[#0F0F0F] rounded-2xl p-5 border border-[#F5F0E8]/[0.07] shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] text-[#F5F0E8]/35 mb-0.5">Operator Dashboard</p>
          <p className="text-sm font-semibold text-[#F5F0E8]">Bwindi Safari Lodge</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
          <span className="text-[10px] text-[#4ade80] font-medium">Live</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {[
          { label: 'Bookings', value: '48', delta: '+12%', up: true },
          { label: 'Earnings', value: '$3.2k', delta: '+8%', up: true },
          { label: 'Pending', value: '$420', delta: 'Fri', up: null },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl bg-[#F5F0E8]/[0.04] border border-[#F5F0E8]/[0.05] p-3"
          >
            <p className="text-[10px] text-[#F5F0E8]/35 mb-1.5">{stat.label}</p>
            <p className="text-[15px] font-bold text-[#F5F0E8] leading-none mb-1">
              {stat.value}
            </p>
            <p
              className={`text-[10px] font-medium ${
                stat.up === true
                  ? 'text-[#4ade80]'
                  : stat.up === false
                  ? 'text-red-400'
                  : 'text-[#8B6914]'
              }`}
            >
              {stat.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Recent */}
      <p className="text-[10px] text-[#F5F0E8]/30 tracking-[0.1em] uppercase mb-3">
        Recent Bookings
      </p>
      <div className="space-y-0.5">
        {[
          { name: 'James K.', flag: '🇬🇧', service: 'Gorilla Trek', amount: '$350' },
          { name: 'Sarah M.', flag: '🇺🇸', service: 'Game Drive', amount: '$180' },
          { name: 'Omar A.', flag: '🇦🇪', service: '3-Night Stay', amount: '$620' },
        ].map((b, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2.5 border-b border-[#F5F0E8]/[0.04] last:border-0"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-sm">{b.flag}</span>
              <div>
                <p className="text-xs font-medium text-[#F5F0E8]">{b.name}</p>
                <p className="text-[11px] text-[#F5F0E8]/35">{b.service}</p>
              </div>
            </div>
            <span className="text-[12px] font-semibold text-[#8B6914]">{b.amount}</span>
          </div>
        ))}
      </div>

      {/* Payout bar */}
      <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-[#1B3A2D]/35 border border-[#1B3A2D]/60">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#4ade80]/15 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
          </div>
          <span className="text-[12px] text-[#F5F0E8]/60">Next payout Friday</span>
        </div>
        <span className="text-[12px] font-bold text-[#4ade80]">$420 ready</span>
      </div>
    </div>
  )
}

export default function ForOperators() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="for-operators" className="bg-[#FAFAF8] py-28 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] text-[#8B6914] tracking-[0.16em] uppercase font-medium mb-5">
              For Operators
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight leading-tight mb-5">
              Join Uganda&apos;s fastest growing safari marketplace.
            </h2>
            <p className="text-[#1A1A1A]/55 leading-[1.75] text-[15px] mb-8">
              15+ operators are already reaching travelers from London, Houston, and Dubai.
              Get paid via mobile money. No setup fee. Go live in 48 hours.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1B3A2D] text-[#F5F0E8] font-semibold text-[14px] hover:bg-[#244d3c] active:scale-[0.97] transition-all duration-150"
            >
              List Your Business
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4"
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 blur-3xl bg-[#1B3A2D]/12 rounded-3xl scale-110 pointer-events-none" />
            <div className="relative">
              <DashboardCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
