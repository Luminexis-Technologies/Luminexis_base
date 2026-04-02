import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Luminexis Technologies | Premium Engineering Studio',
  description: 'Learn about Luminexis Technologies, a leading high-performance digital engineering studio in India. Our mission, tech stack, and commitment to excellence.',
  keywords: [
    'About Luminexis',
    'mission',
    'digital engineering expertise',
    'high-performance tech stack',
    'full stack development India',
    'Indian digital studio'
  ],
  openGraph: {
    title: 'About Luminexis Technologies | Our Mission & Expertise',
    description: 'Bridging the gap between software engineering and immersive UI/UX design. Learn our story.',
  }
}

export default function Page() {
  return <AboutContent />
}
