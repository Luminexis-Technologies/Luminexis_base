import type { Metadata } from 'next'
import ProjectsPageContent from './ProjectsPageContent'

export const metadata: Metadata = {
  title: 'Our Work | Web & Software Development Portfolio | Luminexis',
  description: 'Explore our portfolio of high-performance web applications, custom software solutions, and user-centric UI/UX designs for global brands and startups.',
  keywords: [
    'web development portfolio',
    'software engineering case studies',
    'custom web application projects',
    'UI/UX design portfolio',
    'Luminexis technologies work',
    'enterprise software portfolio',
  ],
  openGraph: {
    title: 'Our Work | Luminexis technologies Portfolio',
    description: 'A showcased portfolio of high-performance digital systems and scalable software solutions.',
    url: 'https://luminexistechnologies.com/projects',
  },
  alternates: {
    canonical: 'https://luminexistechnologies.com/projects',
  },
}

export default function Page() {
  return <ProjectsPageContent />
}
