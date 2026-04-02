import type { Metadata } from 'next'
import WebDevIndiaContent from './WebDevIndiaContent'

export const metadata: Metadata = {
  title: 'Web Development Company in India | Top Rated Web Developers',
  description: 'Looking for a reliable Web Development Company in India? Luminexis offers high-performance, custom web development services for businesses globally.',
  keywords: [
    'Web Development Company in India',
    'Best Web Developers Bangalore',
    'Custom Website Development India',
    'Responsive Web Design Services India',
    'Luminexis Web Development'
  ],
}

export default function Page() {
  return <WebDevIndiaContent />
}
