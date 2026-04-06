import type { Metadata } from 'next'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Chatbot from '@/components/ui/Chatbot'

export const metadata: Metadata = {
  title: 'Blog & Insights | Luminexis Technologies',
  description: 'Read the latest insights on web development in India, custom software engineering, and AI chatbot integration on our technology blog.',
  alternates: {
    canonical: 'https://luminexistechnologies.com/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto text-fg">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-black">
            Technology <span className="text-black">Insights & Blog</span>
          </h1>
          <p className="text-xl text-fg-muted max-w-3xl mx-auto">
            Deep dives into web development trends, SaaS architectures, and engineering best practices in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Why Bangalore is the Global Hub for Custom Software Development',
              category: 'Business Strategy',
              excerpt: 'Explore why global enterprises are choosing Bangalore to scale their custom software and digital infrastructure securely...',
              date: 'April 2, 2026'
            },
            {
              title: 'Integrating AI Chatbots for 24/7 Enterprise Customer Support',
              category: 'AI & Automation',
              excerpt: 'Learn how to deploy intelligent, context-aware AI chatbots that connect directy to your corporate data systems...',
              date: 'March 28, 2026'
            },
            {
              title: 'Next.js Performance: The Keys to a Lightning-Fast E-Commerce Platform',
              category: 'Engineering',
              excerpt: 'Deep-dive into server-sider rendering, edge caching, and bundle optimization methodologies for top SEO rankings...',
              date: 'March 15, 2026'
            }
          ].map((post, i) => (
            <div key={i} className="glass-card p-6 flex flex-col border border-black/10 transition-transform duration-300 hover:-translate-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-fg-muted mb-3">{post.category}</span>
              <h2 className="text-xl font-bold text-black mb-3 leading-tight">{post.title}</h2>
              <p className="text-sm text-fg-muted mb-6 leading-relaxed flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/10">
                <span className="text-xs font-mono text-fg-muted">{post.date}</span>
                <a href="#" className="text-xs font-bold uppercase tracking-widest hover:underline text-black">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <Chatbot />
    </>
  )
}
