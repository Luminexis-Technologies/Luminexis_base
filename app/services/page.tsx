import type { Metadata } from 'next'
import ServicesPage from './ServicesContent'

export const metadata: Metadata = {
  title: 'Web & Software Development Services | Luminexis India',
  description: 'Premium Web & Software Development Services in India. Custom Full Stack Apps, Native UI/UX Design, and High-Performance Engineering for Scale.',
  keywords: [
    'Custom Web Development',
    'Full Stack App Development',
    'UI/UX Design services',
    'Custom Software Solutions',
    'Web Engineering India',
    'Bangalore software studio'
  ],
  openGraph: {
    title: 'Custom Web & Software Development Services | Luminexis India',
    description: 'Scalable software and web systems designed for performance and rank. Leading Indian development studio.',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com/services',
  },
}

export default function Page() {
  return <ServicesPage />
}
