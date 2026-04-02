import type { Metadata } from 'next'
import ContactPage from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us for Custom Software & Web Dev | Luminexis',
  description: 'Reach out to Luminexis for high-performance software and web development projects in India. Partner with us for your next digital engineering journey.',
  keywords: [
    'Hire web developers India',
    'Contact software company Bangalore',
    'Luminexis Technologies address',
    'start a project India',
    'digital agency contact'
  ],
  openGraph: {
    title: 'Contact Luminexis | Start Your Project',
    description: 'Ready to build high-performance digital systems? Contact us today.',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com/contact',
  },
}

export default function Page() {
  return <ContactPage />
}
