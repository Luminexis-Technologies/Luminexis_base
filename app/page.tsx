import type { Metadata } from 'next'
import LuminexisPage from './ClientHome'

export const metadata: Metadata = {
  title: 'Web Development & Custom Software Company | Luminexis Technologies',
  description: 'Luminexis Technologies is a web development company delivering custom software, SaaS platforms, and scalable digital solutions for startups and enterprises.',
  keywords: [
    'web development company',
    'custom software development company',
    'full stack development services',
    'AI chatbot development company',
    'SaaS development company',
    'scalable web applications',
    'enterprise software solutions',
    'modern UI/UX development',
    'cloud-based applications',
    'software solutions for businesses',
    'Next.js development company',
    'Luminexis Technologies',
  ],
  openGraph: {
    title: 'Web Development & Software Solutions Company | Luminexis Technologies',
    description: 'We architect high-performance digital systems — custom software, AI-powered solutions, and scalable SaaS platforms for startups and enterprises.',
    url: 'https://luminexistechnologies.com',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com',
  },
}

export default function Page() {
  return <LuminexisPage />
}
