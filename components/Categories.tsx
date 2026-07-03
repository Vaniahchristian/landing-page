'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CATEGORIES = [
  {
    title: 'Safari Tours',
    description: 'Gorilla trekking, game drives, birding',
    image: 'https://images.unsplash.com/photo-1673624522244-8de0d50b8492?auto=format&fit=crop&w=800&q=80',
    alt: 'Mountain gorilla in Bwindi Impenetrable Forest',
    href: 'https://bookings.dirt-trails.com/category/tours',
    featured: true,
    wide: false,
  },
  {
    title: 'Hotels & Stays',
    description: 'Lodges, boutique hotels, tented camps',
    image: 'https://images.unsplash.com/photo-1741850821150-58b56e0e6156?auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury tented safari camp in natural landscape',
    href: 'https://bookings.dirt-trails.com/category/hotels',
  },
  {
    title: 'Transport',
    description: 'Airport transfers, safari vehicles, boat rides',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    alt: 'Safari jeep on dusty track at sunset',
    href: 'https://bookings.dirt-trails.com/category/transport',
  },
  {
    title: 'Events',
    description: 'Cultural festivals, corporate retreats',
    image: 'https://images.unsplash.com/photo-1497271679421-ce9c3d6a31da?auto=format&fit=crop&w=800&q=80',
    alt: 'Traditional East African cultural festival',
    href: 'https://bookings.dirt-trails.com/category/events',
  },
  {
    title: 'Shops',
    description: 'Suvenoirs, Crafts, Memories',
    image: 'https://images.unsplash.com/photo-1595637729313-783aed662e9b?auto=format&fit=crop&w=800&q=80',
    alt: 'Memories that last for ever',
    href: 'https://bookings.dirt-trails.com/category/shops',
  },
  {
    title: 'Restaurants',
    description: 'Local dining, sunset dinners, food tours',
    image: 'https://images.unsplash.com/photo-1766547325390-44833aa5675b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Outdoor dining with panoramic view',
    href: 'https://bookings.dirt-trails.com/category/restaurants',
    wide: true,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Categories() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="categories" className="py-28 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F0E8] tracking-tight">
            Thinking Travel,
            <span className="text-[#F5F0E8]/25"> Book all services with Dirt Trails.</span>
          </h2>
        </motion.div>

        {/* Asymmetric image grid — Safari Tours spans 2 rows as the featured card */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[230px] gap-3">
          {CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={cat.href}
              target={cat.href?.startsWith('http') ? '_blank' : undefined}
              rel={cat.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className={`group relative overflow-hidden rounded-2xl ${
                cat.featured ? 'row-span-2' : ''
              } ${'wide' in cat && cat.wide ? 'col-span-2 md:col-span-3' : ''}`}
            >
              <img
                src={cat.image}
                alt={cat.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
              {/* Base overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/20 to-transparent" />
              {/* Gold border glow */}
              <div className="absolute inset-0 rounded-2xl ring-inset ring-0 group-hover:ring-[1.5px] group-hover:ring-[#8B6914]/55 transition-all duration-300 pointer-events-none" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3
                  className={`font-semibold text-[#F5F0E8] leading-tight mb-0.5 ${
                    cat.featured ? 'text-xl md:text-2xl' : 'text-[14px] md:text-[15px]'
                  }`}
                >
                  {cat.title}
                </h3>
                <p className="text-[12px] text-[#F5F0E8]/50 leading-snug">{cat.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
