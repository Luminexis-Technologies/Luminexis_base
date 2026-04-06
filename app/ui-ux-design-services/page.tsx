import type { Metadata } from 'next'
import UIUXContent from './UIUXContent'

export const metadata: Metadata = {
  title: 'Premium UI/UX Design Services | User-Centric Digital Experiences',
  description: 'Luminexis creates immersive, conversion-focused digital experiences with premium interface design, UX research, and scalable design systems for startups and enterprises across industries.',
  keywords: [
    'UI/UX design services',
    'modern UI development',
    'user-centric digital experiences',
    'premium UX research',
    'interface design studio',
    'conversion-focused design',
    'scalable design systems',
    'web and mobile UI design',
    'Luminexis UI/UX design',
  ],
  openGraph: {
    title: 'Premium UI/UX Design Services | Luminexis Technologies',
    description: 'Immersive, user-centric design services. Premium UI/UX design studio for modern digital businesses.',
    url: 'https://luminexistechnologies.com/ui-ux-design-services',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com/ui-ux-design-services',
  },
}

export default function Page() {
  return <UIUXContent />
}
