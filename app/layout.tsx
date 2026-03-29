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
  title: 'Luminexis Technologies — High-Performance Digital & UI/UX Engineering',
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
    type: 'website',
    images: ['/static/img/user_logo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
