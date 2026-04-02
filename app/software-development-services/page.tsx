import type { Metadata } from 'next'
import SoftwareDevContent from './SoftwareDevContent'

export const metadata: Metadata = {
  title: 'Custom Software Development Company in India | SaaS & Enterprise Solutions',
  description: 'Top custom software development company in India. Luminexis engineers scalable SaaS platforms, enterprise applications, and high-performance software solutions in Bangalore, Mumbai, Delhi, Hyderabad, Chennai, and Pune.',
  keywords: [
    'custom software development company India',
    'software development company in India',
    'SaaS development company India',
    'enterprise software solutions India',
    'custom software development Bangalore',
    'dedicated software engineering India',
    'high-performance software development',
    'software development company Mumbai',
    'software development company Delhi',
    'software development company Hyderabad',
    'full stack software development India',
    'cloud software development India',
    'Luminexis software development',
  ],
  openGraph: {
    title: 'Custom Software Development Company in India | Luminexis Technologies',
    description: 'Scalable SaaS, enterprise applications, and custom software solutions. Premium software engineering studio in India.',
    url: 'https://luminexistechnologies.com/software-development-services',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com/software-development-services',
  },
}

export default function Page() {
  return <SoftwareDevContent />
}
