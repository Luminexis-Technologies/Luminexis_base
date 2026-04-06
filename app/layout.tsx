import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // PERF: swap for faster FCP
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap", // PERF: swap for faster FCP
  preload: false,
});

// ── Viewport (Next 14 best practice — separate from metadata) ──
export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://luminexistechnologies.com"),
  title: {
    default:
      "Web Development & Custom Software Company | Luminexis Technologies",
    template: "%s | Luminexis Technologies",
  },
  description:
    "Luminexis Technologies is a web development company delivering custom software, SaaS platforms, and scalable digital solutions for startups and enterprises.",
  keywords: [
    "web development company",
    "custom software development company",
    "full stack development services",
    "AI chatbot development company",
    "SaaS development company",
    "scalable web applications",
    "enterprise software solutions",
    "modern UI/UX development",
    "cloud-based applications",
    "software solutions for businesses",
    "Luminexis Technologies",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo-light.png", media: "(prefers-color-scheme: dark)" },
      { url: "/logo-dark.png", media: "(prefers-color-scheme: light)" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Web Development & Software Solutions | Luminexis Technologies",
    description: "Scalable web development, custom software, and AI-powered solutions for startups and enterprises.",
    url: "https://luminexistechnologies.com",
    siteName: "Luminexis Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo-dark.png",
        width: 1200,
        height: 630,
        alt: "Luminexis Technologies — Web Development & Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Luminexis Technologies | Web Development & Custom Software Solutions",
    description:
      "Scalable web development, AI chatbot solutions, and enterprise software for modern businesses.",
    images: ["/logo-dark.png"],
    creator: "@luminexis",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://luminexistechnologies.com",
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Luminexis Technologies",
  url: "https://luminexistechnologies.com",
  sameAs: ["https://www.linkedin.com/company/yourpage"],
  knowsAbout: [
    "Web Development",
    "Custom Software Development",
    "AI Chatbot Development",
    "SaaS Development",
    "UI/UX Design",
    "Cloud-Based Applications",
    "Full Stack Development",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Luminexis Technologies provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide web development, custom software development, AI chatbot solutions, SaaS platforms, and UI/UX design for startups and enterprises across industries.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve businesses across e-commerce, fintech, healthcare, education, SaaS, and enterprise sectors worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups or enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with startups, scale-ups, and enterprise organizations, delivering scalable solutions built for long-term growth.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://luminexistechnologies.com",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Luminexis Technologies",
  url: "https://luminexistechnologies.com",
  description:
    "Scalable web development, custom software, and AI-powered solutions for modern businesses",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://luminexistechnologies.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon system */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/icon-192x192.png" sizes="192x192" />
        <link
          rel="icon"
          href="/logo-dark.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/logo-light.png"
          media="(prefers-color-scheme: dark)"
        />
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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
