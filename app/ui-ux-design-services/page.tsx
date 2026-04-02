import type { Metadata } from 'next'
import UIUXContent from './UIUXContent'

export const metadata: Metadata = {
  title: 'Premium UI/UX Design Company in India | User-Centric Design Services',
  description: 'Best UI/UX design company in India. Luminexis creates immersive, conversion-focused digital experiences with premium interface design, UX research, and design systems in Bangalore, Mumbai, Delhi, Hyderabad, Chennai, and Pune.',
  keywords: [
    'UI/UX design company in India',
    'UI UX design services India',
    'best UI designers Bangalore',
    'user-centric UX design studio India',
    'immersive digital experiences India',
    'web and mobile UI design India',
    'UI/UX design company Mumbai',
    'UI/UX design company Delhi',
    'UI/UX design company Hyderabad',
    'conversion-focused design India',
    'design systems India',
    'Luminexis UI/UX design',
  ],
  openGraph: {
    title: 'Premium UI/UX Design Company in India | Luminexis Technologies',
    description: 'Immersive, user-centric design services. Premium UI/UX design studio serving Bangalore, Mumbai, Delhi, and all major Indian cities.',
    url: 'https://luminexistechnologies.com/ui-ux-design-services',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com/ui-ux-design-services',
  },
}

export default function Page() {
  return <UIUXContent />
}
