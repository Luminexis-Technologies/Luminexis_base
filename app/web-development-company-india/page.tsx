import type { Metadata } from 'next'
import WebDevIndiaContent from './WebDevIndiaContent'

export const metadata: Metadata = {
  title: 'Best Web Development Company in India | Custom Software & UI/UX Design',
  description: 'Looking for a top-rated web development company in India? Luminexis Technologies offers custom web development, software engineering, SaaS solutions, and premium UI/UX design services in Bangalore, Mumbai, Delhi, Hyderabad, Chennai, and Pune.',
  keywords: [
    'web development company in India',
    'best web developers Bangalore',
    'custom website development India',
    'responsive web design services India',
    'software development company India',
    'SaaS development company India',
    'UI/UX design company India',
    'enterprise software development India',
    'full stack web development India',
    'web development company Mumbai',
    'web development company Delhi',
    'web development company Hyderabad',
    'web development company Chennai',
    'web development company Pune',
    'Luminexis web development',
  ],
  openGraph: {
    title: 'Best Web Development Company in India | Luminexis Technologies',
    description: 'Custom web development, software engineering, and premium UI/UX design services. Serving Bangalore, Mumbai, Delhi, and all major Indian cities.',
    url: 'https://luminexistechnologies.com/web-development-company-india',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com/web-development-company-india',
  },
}

export default function Page() {
  return <WebDevIndiaContent />
}
