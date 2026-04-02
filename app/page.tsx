import type { Metadata } from 'next'
import LuminexisPage from './ClientHome'

export const metadata: Metadata = {
  title: 'Luminexis Technologies | #1 UI/UX, Web & Software Development Company in India',
  description: 'Luminexis Technologies is a premium UI/UX design, web development, software development, and SEO company in India serving Bangalore, Mumbai, Delhi, Hyderabad, Chennai, and Pune. We build high-conversion digital products for startups and enterprises.',
  keywords: [
    'web development company in India',
    'software development company in India',
    'UI/UX design company in India',
    'SaaS development India',
    'enterprise software India',
    'custom web development Bangalore',
    'best web developers in India',
    'full stack development India',
    'React development India',
    'Next.js development company',
    'web development company Bangalore',
    'web development company Mumbai',
    'web development company Delhi',
    'digital product engineering India',
    'Luminexis Technologies',
  ],
  openGraph: {
    title: 'Web Development Company in India | Luminexis Technologies',
    description: 'We architect high-performance digital systems — custom software, UI/UX design, and SaaS solutions. Premium web engineering studio serving India and global brands.',
    url: 'https://luminexistechnologies.com',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com',
  },
}

export default function Page() {
  return <LuminexisPage />
}
