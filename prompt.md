Build a premium landing page for Dirt Trails, a Ugandan travel technology company

DESIGN PHILOSOPHY
Use Emil Kowalski's design principles: impeccable taste, restraint, purposeful whitespace, smooth micro-interactions, and typography-first layouts. Every element must earn its place. No clutter. No generic templates. This should feel like a premium product — think Linear, Stripe, or Vercel but for East Africa safari technology.

BRAND
Name: Dirt Trails
Tagline: Intelligent Safari Technology
Sub-tagline: The digital infrastructure powering East Africa's tourism industry
Colors:
  - Primary dark: #1B3A2D (deep forest green)
  - Accent: #8B6914 (warm gold)
  - Background: #0A0A0A (near black) for hero, #FAFAF8 (warm off-white) for light sections
  - Text: #F5F0E8 on dark, #1A1A1A on light
Font stack: "Geist", "Inter", system-ui — clean, modern, readable
Booking platform URL: bookings.dirt-trails.com

SECTIONS — build in this order:

1. NAV
Sticky. Minimal. Logo left (DirtTrails wordmark + small green dot). Links center: How it Works, For Operators, Sustainability, Partners. CTA right: "Book a Safari" button (gold, small, rounded). Blur backdrop on scroll. Mobile hamburger.

2. HERO
Full viewport height. Dark background (#1B3A2D gradient to #0A0A0A). Large bold headline split across two lines:
Line 1: "East Africa's Safari"
Line 2: "Starts Here." (gold accent on "Here.")
Subheadline: "Verified operators. Mobile money payments. Instant confirmation."
Two CTAs: "Explore Experiences" (gold filled) + "List Your Business" (outlined white)
Animated stat counter below CTAs: 15+ Operators | 30+ Services | 3+ Partners | 150kg+ Carbon Offset
Background: subtle animated particle or gradient mesh — NOT a stock photo

3. HOW IT WORKS
Light section. 3 steps in a horizontal card row with icons:
Step 1 — "Discover" — Search hotels, safaris, transport, activities across Uganda
Step 2 — "Book Instantly" — Select your dates, see full pricing, no hidden fees
Step 3 — "Pay & Confirm" — Mobile money via MTN or Airtel. Confirmation in 60 seconds.
Cards: soft shadow, rounded corners, hover lift animation

4. CATEGORIES
Dark section. Horizontal scroll or 3x2 grid of experience categories with minimal icons:
Hotels & Stays | Safari Tours | Transport | Events | Activities | Restaurant Reservations
Each card: icon top, category name, short one-line description, hover: gold border glow

5. WHY DIRT TRAILS
Split layout. Left: bold headline "Built for this market. Not adapted for it." Right: 4 feature rows with icon + title + one line:
- Mobile Money First — MTN and Airtel built in natively, not bolted on
- Verified Operators — Every listing is reviewed and approved before going live
- Instant Settlement — Vendors paid automatically. No chasing. No delays.
- Offline Ready — Vendor dashboard works in low-connectivity safari areas

6. SUSTAINABILITY
Full-width dark green section. Centered. Headline: "Every booking plants a tree." Subheadline: "GPS-tagged. Carbon tracked. Verified." Small animated tree icon or counter showing trees planted. One-liner: "150+ kg of carbon offset and counting."

7. FOR OPERATORS (VENDOR CTA)
Light background. Two-column layout:
Left: headline "Join Uganda's fastest growing safari marketplace." Body: "15+ operators are already reaching travelers from London, Houston, and Dubai. Get paid via mobile money. No setup fee." CTA: "List Your Business"
Right: a clean mockup card showing the vendor dashboard stat — bookings, earnings, pending payouts

8. PARTNERS
Minimal row. Headline: "Trusted by" then logo placeholders or text wordmarks: SafariIntel | MarzPay | MIIC

9. FOOTER
Dark. Logo left. Links: How it Works, For Operators, Sustainability, Contact. Social icons: LinkedIn, Instagram, X. Email: safaris.dirttrails@gmail.com. Bottom line: "© 2026 Dirt Trails. Built in Uganda. Intelligent Safari Technology."

TECHNICAL REQUIREMENTS
- Next.js 14 with App Router
- Tailwind CSS for styling
- Framer Motion for all animations (page load, scroll reveal, counter animation, hover states)
- TypeScript
- Mobile first, fully responsive
- Smooth scroll between sections
- SEO: proper meta tags, OG tags, title "Dirt Trails | Intelligent Safari Technology"
- Deploy ready for Vercel with environment pointing to www.dirt-trails.com
- No placeholder lorem ipsum — use real Dirt Trails copy throughout
- Performance: lazy load images, optimize for Core Web Vitals

ANIMATIONS
- Hero headline: word-by-word fade up on load
- Stat counters: count up animation when scrolled into view
- Section cards: staggered fade up on scroll
- Nav: blur + border appears on scroll
- Buttons: subtle scale on hover, gold shimmer effect on primary CTA
- Category cards: smooth border glow on hover

COPY TONE
Direct. Confident. No fluff. Sounds like a founder who knows the market, not a marketing agency. Short sentences. Real numbers only.