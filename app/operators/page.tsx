'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const VENDOR_IMG =
  'https://images.unsplash.com/photo-1709402606682-400133d92ab2?auto=format&fit=crop&w=1920&q=85'

const ease = [0.16, 1, 0.3, 1] as const
const cssEase = 'cubic-bezier(0.16, 1, 0.3, 1)'

// ── Hero ─────────────────────────────────────────────────────────────────────

function VendorHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={VENDOR_IMG}
          alt="Safari vehicle with tourists next to a lion at sunset in East Africa"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/35 to-transparent" />
      </div>

      {/* Sky spacer — min 50px of clear sky, max 160px */}
      <div className="flex-1 min-h-[50px] max-h-[160px]" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pb-10">
        <h1
          className="text-[clamp(2.6rem,7vw,5rem)] font-bold tracking-[-0.025em] leading-[0.92] mb-5 text-[#F5F0E8]"
          style={{ animation: `heroFadeUp 0.7s ${cssEase} 0.1s both` }}
        >
          Reach Travelers
          <br />
          from London to Dubai.
        </h1>

        <p
          className="text-[#F5F0E8]/58 text-lg mb-6 max-w-md leading-relaxed"
          style={{ animation: `heroFadeUpSmall 0.55s ${cssEase} 0.4s both` }}
        >
          List your business. Get paid via mobile money. Zero setup fee.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3"
          style={{ animation: `heroFadeUpSmall 0.5s ${cssEase} 0.58s both` }}
        >
          <a
            href="https://bookings.dirt-trails.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#8B6914] text-[#F5F0E8] font-semibold text-[15px] hover:bg-[#A07820] active:scale-[0.97] transition-all duration-150 btn-shimmer"
          >
            Get Started
          </a>
          <a
            href="#how-it-works-vendor"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-[#F5F0E8]/16 text-[#F5F0E8] font-medium text-[15px] hover:border-[#F5F0E8]/32 hover:bg-[#F5F0E8]/[0.04] active:scale-[0.97] transition-all duration-150"
          >
            See How it Works
          </a>
        </div>
      </div>
    </section>
  )
}


// ── Benefits ──────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    title: 'Global Reach',
    description:
      'Get discovered by travelers booking from London, Houston, Dubai, and Nairobi. We bring the audience. You bring the experience.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Mobile Money Payments',
    description:
      'MTN and Airtel built in natively. Travelers pay in seconds. You receive instantly. No card terminals. No bank friction.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Dashboard',
    description:
      'See bookings, revenue, and upcoming confirmations from anywhere. Works on 2G. No app download required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
        <path d="M7 10l3 3 3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Automatic Settlement',
    description:
      'Payouts processed automatically after each booking completes. No invoicing. No chasing. Every Friday, paid.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function Benefits() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#FAFAF8] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-16"
        >
          Built to grow your business.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.09, duration: 0.5, ease }}
              className="p-7 rounded-2xl border border-black/[0.06] bg-white hover:border-[#1B3A2D]/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="text-[#1B3A2D] mb-4">{b.icon}</div>
              <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-2 tracking-tight">{b.title}</h3>
              <p className="text-sm text-[#1A1A1A]/70 leading-[1.75]">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How it Works (vendor) ─────────────────────────────────────────────────────

const VENDOR_STEPS = [
  {
    n: '01',
    title: 'Create Your Listing',
    description:
      'Add your service in minutes. Photos, pricing, availability, and contact details. Our team reviews and approves within 48 hours.',
  },
  {
    n: '02',
    title: 'Get Discovered',
    description:
      'Your listing appears to travelers searching across Uganda and East Africa. Tourists from every time zone can book you directly.',
  },
  {
    n: '03',
    title: 'Get Paid',
    description:
      'Bookings confirmed in real time. Payments processed automatically via mobile money. Settlement every Friday, no exceptions.',
  },
]

function VendorHowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="how-it-works-vendor" className="bg-[#0A0A0A] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="text-4xl md:text-5xl font-bold text-[#F5F0E8] tracking-tight mb-16"
        >
          List. Get discovered. Get paid.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {VENDOR_STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.55, ease }}
            >
              <span className="block text-[88px] font-bold text-white/[0.05] leading-none mb-5 select-none tabular-nums">
                {step.n}
              </span>
              <h3 className="text-[18px] font-semibold text-[#F5F0E8] mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-[#F5F0E8]/60 leading-[1.75]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Testimonial + Stats ───────────────────────────────────────────────────────

function SocialProof() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#FAFAF8] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <span className="block text-[80px] font-bold text-[#1B3A2D]/10 leading-none mb-2 select-none">
              &ldquo;
            </span>
            <blockquote className="text-[#1A1A1A] text-xl md:text-2xl font-medium leading-[1.45] tracking-tight mb-6 -mt-4">
              DirtTrails cut our manual partner bookings and sped up confirmations significantly.
            </blockquote>
            <cite className="not-italic">
              <span className="block text-sm font-semibold text-[#1A1A1A]">SafariIntel</span>
              <span className="block text-[12px] text-[#1A1A1A]/40 mt-0.5">Data Intelligence Partner</span>
            </cite>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.6, ease }}
            className="flex flex-col gap-8"
          >
            <div className="border-b border-black/[0.06] pb-8">
              <p className="text-[56px] md:text-[72px] font-bold text-[#1A1A1A] leading-none tracking-tight mb-2">
                15+
              </p>
              <p className="text-sm text-[#1A1A1A]/65">operators already live on the platform</p>
            </div>
            <div>
              <p className="text-[56px] md:text-[72px] font-bold text-[#1B3A2D] leading-none tracking-tight mb-2">
                £0
              </p>
              <p className="text-sm text-[#1A1A1A]/65">setup fee. Zero paid acquisition needed.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Final CTA ─────────────────────────────────────────────────────────────────

function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#0A0A0A] py-32 px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-4xl md:text-5xl font-bold text-[#F5F0E8] tracking-tight mb-5"
        >
          Join the Marketplace.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.14, duration: 0.5, ease }}
          className="text-[#F5F0E8]/45 text-lg mb-10 max-w-sm mx-auto"
        >
          Go live in 48 hours. Reach travelers from day one.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.26, duration: 0.45, ease }}
        >
          <a
            href="https://bookings.dirt-trails.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#8B6914] text-[#F5F0E8] font-semibold text-[15px] hover:bg-[#A07820] active:scale-[0.97] transition-all duration-150 btn-shimmer"
          >
            Get Started Free
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function OperatorsPage() {
  return (
    <main>
      <Nav />
      <VendorHero />
      <Benefits />
      <VendorHowItWorks />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  )
}
