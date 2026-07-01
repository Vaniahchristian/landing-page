const NAV_LINKS = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'For Operators', href: '#for-operators' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Contact', href: 'mailto:safaris.dirttrails@gmail.com' },
]

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#F5F0E8]/[0.06] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[15px] font-semibold text-[#F5F0E8]">DirtTrails</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B3A2D]" />
            </div>
            <p className="text-sm text-[#F5F0E8]/38 leading-relaxed max-w-[240px]">
              Intelligent Safari Technology. The digital infrastructure powering East Africa's
              tourism industry.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] text-[#F5F0E8]/25 tracking-[0.15em] uppercase mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-[#F5F0E8]/45 hover:text-[#F5F0E8] transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] text-[#F5F0E8]/25 tracking-[0.15em] uppercase mb-5">
              Connect
            </p>
            <a
              href="mailto:safaris.dirttrails@gmail.com"
              className="text-sm text-[#F5F0E8]/45 hover:text-[#8B6914] transition-colors duration-200 block mb-5"
            >
              safaris.dirttrails@gmail.com
            </a>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-8 h-8 rounded-lg border border-[#F5F0E8]/[0.08] flex items-center justify-center text-[#F5F0E8]/35 hover:text-[#F5F0E8] hover:border-[#F5F0E8]/20 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-[#F5F0E8]/[0.055]">
          <p className="text-[12px] text-[#F5F0E8]/22">
            © 2026 Dirt Trails. Built in Uganda. Intelligent Safari Technology.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="text-[11px] text-[#F5F0E8]/18">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
