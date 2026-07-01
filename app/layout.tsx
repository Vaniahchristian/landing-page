import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dirt Trails | Intelligent Safari Technology',
  description:
    "The digital infrastructure powering East Africa's tourism industry. Verified operators. Mobile money payments. Instant confirmation.",
  metadataBase: new URL('https://www.dirt-trails.com'),
  openGraph: {
    title: 'Dirt Trails | Intelligent Safari Technology',
    description:
      "The digital infrastructure powering East Africa's tourism industry.",
    url: 'https://www.dirt-trails.com',
    siteName: 'Dirt Trails',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dirt Trails | Intelligent Safari Technology',
    description:
      "The digital infrastructure powering East Africa's tourism industry.",
  },
  keywords: [
    'safari',
    'Uganda',
    'East Africa',
    'tourism',
    'booking',
    'travel technology',
    'mobile money',
    'gorilla trekking',
  ],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
