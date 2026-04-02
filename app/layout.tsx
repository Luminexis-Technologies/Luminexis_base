import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'optional',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://luminexistechnologies.com'),
  title: {
    default: 'Luminexis Technologies — High-Performance Digital & UI/UX Engineering',
    template: '%s | Luminexis Technologies',
  },
  description:
    'We architect high-performance digital ecosystems with structural integrity and cosmic precision. Premium UI/UX Engineering & Global SEO Scaling for ambitious brands.',
  keywords: ['high-performance web engineering', 'UI/UX design studio', 'SEO growth scaling', 'Luminexis Technologies', 'digital product ecosystem'],
  icons: {
    icon: '/static/img/user_logo.png',
    apple: '/static/img/user_logo.png',
  },
  openGraph: {
    title: 'Luminexis Technologies | Engineered for Impact',
    description: 'Architecting high-performance digital systems that outperform and outrank. Premium Engineering Studio.',
    url: 'https://luminexistechnologies.com',
    siteName: 'Luminexis Technologies',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/static/img/user_logo.png',
        width: 1200,
        height: 630,
        alt: 'Luminexis Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luminexis Technologies | High-Performance Engineering',
    description: 'Architecting high-performance digital systems that outperform and outrank.',
    images: ['/static/img/user_logo.png'],
    creator: '@luminexis',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Luminexis Technologies",
  "url": "https://luminexistechnologies.com",
  "logo": "https://luminexistechnologies.com/static/img/user_logo.png",
  "sameAs": [
    "https://twitter.com/luminexis",
    "https://www.linkedin.com/company/luminexis"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "en"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
