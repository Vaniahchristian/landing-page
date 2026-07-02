import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Operators | Dirt Trails — List Your Safari Business',
  description:
    'Reach travelers from London to Dubai. List your lodge, tour, or transport business on East Africa\'s smartest booking platform. Mobile money. Zero setup fee.',
  metadataBase: new URL('https://www.dirt-trails.com'),
  openGraph: {
    title: 'For Operators | Dirt Trails',
    description:
      'Reach travelers from London to Dubai. Mobile money payments. Real-time dashboard. Zero setup fee.',
    url: 'https://www.dirt-trails.com/operators',
    siteName: 'Dirt Trails',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Operators | Dirt Trails',
    description: 'List your safari business. Get paid via mobile money. Zero setup fee.',
  },
}

export default function OperatorsLayout({ children }: { children: React.ReactNode }) {
  return children
}
