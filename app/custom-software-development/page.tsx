import type { Metadata } from 'next'
import SoftwareDevContent from './SoftwareDevContent'

export const metadata: Metadata = {
  title: 'Custom Software Development Services | SaaS & Enterprise Solutions',
  description: 'Luminexis Technologies delivers scalable SaaS platforms, enterprise applications, and high-performance custom software development services for startups and modern businesses across industries.',
  keywords: [
    'custom software development services',
    'SaaS development solutions',
    'enterprise software solutions',
    'high-performance software development',
    'dedicated software engineering',
    'full stack software development',
    'cloud software development',
    'Luminexis software development',
    'software solutions for modern businesses',
  ],
  openGraph: {
    title: 'Custom Software Development Services | Luminexis Technologies',
    description: 'Scalable SaaS, enterprise applications, and custom software development services for modern digital businesses.',
    url: 'https://luminexistechnologies.com/custom-software-development',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com/custom-software-development',
  },
}

export default function Page() {
  return <SoftwareDevContent />
}
