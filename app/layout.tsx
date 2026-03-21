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
  title: 'Luminexis Technologies — Engineered Beyond Limits',
  description:
    'We build digital systems with cosmic precision — structured, scalable, and built to orbit. Space-themed engineering studio.',
  keywords: ['web engineering', 'digital product design', 'frontend engineering', 'space-themed portfolio'],
  openGraph: {
    title: 'Luminexis Technologies',
    description: 'Engineered Beyond Limits. Built for Orbit.',
    type: 'website',
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
