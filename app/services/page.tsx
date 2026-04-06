import type { Metadata } from 'next'
import ServicesPage from './ServicesContent'

export const metadata: Metadata = {
  title: 'Web & Software Development Services | Luminexis Technologies',
  description: 'Scalable web development, custom software engineering, and premium UI/UX design services for startups and modern digital businesses worldwide.',
  keywords: [
    'Custom Web Development',
    'Full Stack App Development',
    'UI/UX Design services',
    'Custom Software Solutions',
    'AI Chatbot Development',
    'SaaS Development',
    'Enterprise Software',
  ],
  openGraph: {
    title: 'Custom Web & Software Development Services | Luminexis Technologies',
    description: 'Scalable software and web systems designed for performance and global scale.',
    url: 'https://luminexistechnologies.com/services',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com/services',
  },
}

export default function Page() {
  return <ServicesPage />
}
