import type { Metadata } from 'next'
import LuminexisPage from './ClientHome'

export const metadata: Metadata = {
  title: 'Software Development Company | Business Automation Services | Luminexis',
  description: 'Luminexis Technologies is a software development company delivering business automation services, custom software, SaaS platforms, and scalable digital solutions for startups and enterprises.',
  keywords: [
    'software development company',
    'business automation services',
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
    title: 'Software Development & Business Automation | Luminexis Technologies',
    description: 'We build scalable software and automate business systems — custom software, AI-powered solutions, and SaaS platforms for startups and enterprises.',
    url: 'https://luminexistechnologies.com',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com',
  },
}

export default function Page() {
  return <LuminexisPage />
}
