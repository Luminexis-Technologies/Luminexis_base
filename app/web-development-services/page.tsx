import type { Metadata } from 'next'
import WebDevContent from './WebDevContent'

export const metadata: Metadata = {
  title: 'Professional Web Development Services | Custom Software & UI/UX Design',
  description: 'Luminexis Technologies delivers professional web development, custom software engineering, SaaS solutions, and premium UI/UX design services for modern digital businesses and startups.',
  keywords: [
    'web development services',
    'custom web development',
    'responsive web design services',
    'software development company',
    'SaaS development company',
    'UI/UX design company',
    'enterprise software development',
    'full stack web development',
    'Luminexis Technologies',
  ],
  openGraph: {
    title: 'Professional Web Development Services | Luminexis Technologies',
    description: 'Custom web development, software engineering, and premium UI/UX design services for startups and modern businesses.',
    url: 'https://luminexistechnologies.com/web-development-services',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com/web-development-services',
  },
}

export default function Page() {
  return <WebDevContent />
}
