import type { Metadata } from 'next'
import LuminexisPage from './ClientHome'

export const metadata: Metadata = {
  title: 'Web Development Company in India | Luminexis Technologies',
  description: 'Leading Web Development Company in India. We build high-performance digital ecosystems, custom software, and premium UI/UX designs for global brands.',
  keywords: [
    'Web Development Company in India',
    'Custom Software Development Bangalore',
    'Full Stack Web Development',
    'UI/UX Design India',
    'Luminexis Technologies',
    'Best Web Developers in India',
    'Digital Product Engineering'
  ],
  openGraph: {
    title: 'Web Development Company in India | Luminexis Technologies',
    description: 'We architect high-performance digital systems that outperform and outrank. Premium Web Engineering Studio in India.',
  }
}

export default function Page() {
  return <LuminexisPage />
}
