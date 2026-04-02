import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // PERF: swap for faster FCP
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap', // PERF: swap for faster FCP
  preload: false,
})

// ── Viewport (Next 14 best practice — separate from metadata) ──
export const viewport: Viewport = {
  themeColor: '#06060F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://luminexistechnologies.com'),
  title: {
    default: 'Luminexis Technologies — Web Development Company in India | UI/UX & Software Engineering',
    template: '%s | Luminexis Technologies',
  },
  description:
    'Leading web development company in India. We architect high-performance digital ecosystems — custom software development, UI/UX design, SaaS development & enterprise solutions for ambitious brands.',
  keywords: [
    'web development company in India',
    'UI/UX design company in India',
    'software development company in India',
    'SaaS development India',
    'enterprise software India',
    'custom web development India',
    'best web developers India',
    'digital product engineering',
    'Luminexis Technologies',
    'web development Bangalore',
    'full stack development India',
  ],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo-light.png', media: '(prefers-color-scheme: dark)' },
      { url: '/logo-dark.png', media: '(prefers-color-scheme: light)' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Luminexis Technologies',
    description: 'UI/UX, Web & Software Development Company in India',
    url: 'https://luminexistechnologies.com',
    siteName: 'Luminexis Technologies',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'UI/UX, Web & Software Development Company in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luminexis Technologies | Web Development & Software Engineering India',
    description: 'Leading web development company in India. Custom software, UI/UX design, and enterprise solutions.',
    images: ['/logo-dark.png'],
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
  alternates: {
    canonical: 'https://luminexistechnologies.com',
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Luminexis Technologies",
  "url": "https://luminexistechnologies.com",
  "sameAs": [
    "https://www.linkedin.com/company/yourpage"
  ],
  "knowsAbout": [
    "UI/UX Design",
    "Web Development",
    "Software Development",
    "SEO Services",
    "SaaS Development"
  ]
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Luminexis Technologies provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide UI/UX design, web development, software development, and SEO services across India."
      }
    },
    {
      "@type": "Question",
      "name": "Which cities do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Bangalore, Mumbai, Delhi, Hyderabad, Chennai, Pune, and other major cities in India."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with startups or enterprises?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with startups, growing businesses, and enterprise organizations."
      }
    }
  ]
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://luminexistechnologies.com"
  }]
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Luminexis Technologies",
  "url": "https://luminexistechnologies.com",
  "description": "Leading web development & software engineering company in India",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://luminexistechnologies.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon system */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/icon-192x192.png" sizes="192x192" />
        <link rel="icon" href="/logo-dark.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/logo-light.png" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Breadcrumbs structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        {/* WebSite structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
