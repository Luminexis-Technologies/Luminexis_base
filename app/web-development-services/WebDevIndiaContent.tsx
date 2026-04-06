'use client'

import Navigation from '@/components/ui/Navigation'
import Chatbot from '@/components/ui/Chatbot'
import Footer from '@/components/ui/Footer'
import { motion } from 'framer-motion'

export default function WebDevIndiaContent() {
  return (
    <>
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto text-fg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-black">
              Leading Web Development Company in India
            </h1>
            <p className="text-xl text-fg-muted max-w-3xl mx-auto">
              Empowering startups and enterprises with custom software development, modern web architectures, and premium AI integrations.
            </p>
          </div>

          <div className="space-y-16 text-lg text-fg-muted leading-relaxed">
            {/* Detailed Content Sectons */}
            <section>
              <h2 className="text-3xl font-semibold mb-6 text-black">Top-Tier Web Developers in Bangalore for Global Brands</h2>
              <p className="mb-4">
                As a premier <strong>web development company in Bangalore</strong>, Luminexis Technologies provides cutting-edge digital solutions tailored for high-growth enterprises. We leverage our deep technical expertise to build responsive, light-speed, and highly secure web applications. Our dedicated team of expert web developers is committed to delivering digital products that not only look visually stunning but are engineered to scale flawlessly across all platforms and devices, handling intense traffic spikes without breaking a sweat.
              </p>
              <p>
                Whether you're looking for an expansive e-commerce platform, a corporate informational portal, or complex highly-interactive dashboards, our architectural approach guarantees a product that acts as a powerhouse for your business logic. We seamlessly blend intuitive UI/UX design with robust backend technologies to maximize your conversion rates and operational efficiency.
              </p>
              <p className="mt-4">
                 Our web development approach in Bangalore is uniquely equipped to manage complex enterprise requirements. Because we have local presence but global standards, we can interface deeply with technical stakeholders while executing on best-in-class deployment pipelines. Combining robust architectural methodologies, we guarantee a foundation that sets you years ahead of your competitors.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-black">Mastering Custom Software Development India</h2>
              <p className="mb-4">
                Off-the-shelf software rarely fits the ambitious, highly-specific processes of a scaling corporation. This is why our <strong>custom software development India</strong> services focus strictly on building bespoke tools, CRM integrations, and SaaS platforms from the ground up. Over the years, we've realized that the strongest differentiator in business operations is proprietary software that adapts entirely to the nuances of your industry instead of forcing your team to adapt to rigid external formulas.
              </p>
              <p className="mb-4">
                We believe that every technical architecture should reflect the nuanced demands of the business model. By combining modern frameworks such as Next.js, React, Node.js, and sophisticated cloud infrastructure, we build applications that accelerate workflows rather than hinder them. From high availability database modeling to sub-second API resolution, our teams master every layer of modern software development.
              </p>
              <p>
                From custom API development and deep third-party integrations to migrating legacy systems into state-of-the-art microservices, our technical team works as an extension of your own operations. When you entrust us with your custom software development journey, you receive enterprise-grade security protocols, robust access management, and code beautifully designed for ultimate extensibility.
              </p>
            </section>

            <section className="bg-bg-alt p-10 rounded-2xl border border-black/10">
              <h2 className="text-2xl font-bold mb-6 text-black">The Core Benefits of Partnering With Us</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Uncompromising Quality:</strong> Clean, maintainable, self-documenting code built for the long term.</li>
                <li><strong>Performance Mastery:</strong> Server-side rendering and edge computing capabilities for ultimate speed.</li>
                <li><strong>Scalability at the Core:</strong> Architectures that easily adjust to a massive influx of users in real-time.</li>
                <li><strong>Comprehensive Security:</strong> Bulletproof validation, strict authorization, and data-protection protocols.</li>
                <li><strong>Seamless Digital Experiences:</strong> Responsive designs matched with butter-smooth micro-animations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-black">AI Chatbot Services & Future-Proof Technologies</h2>
              <p className="mb-4">
                Step into the era of modern customer interaction with our specialized <strong>AI chatbot services</strong>. Rather than relying on generic auto-responders, we create intelligent, context-aware digital assistants capable of understanding nuance, guiding user journeys, and accurately resolving customer inquires 24/7.
              </p>
              <p className="mb-4">
                By linking advanced language models with your own internal knowledge bases, our AI chatbot integrations serve as highly effective lead-generation and customer-support tools. This drastically reduces manual support overhead while maintaining incredibly high customer satisfaction rates. They aren't just FAQ bots—they act as virtual sales representatives uniquely trained on your business data.
              </p>
              <p>
                Investing in AI now means securing a competitive moat. We implement retrieval-augmented generation (RAG) methodologies ensuring our chatbots don't hallucinate but strictly rely on your corporate literature to deliver flawless solutions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-black">Our Streamlined Development Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="glass-card p-6 border-black/10">
                  <h3 className="text-xl font-bold mb-2 text-black">1. Discovery & Strategy</h3>
                  <p className="text-sm">We deep dive into your business model, target audience, and key technical requirements to align our strategy perfectly with your goals.</p>
                </div>
                <div className="glass-card p-6 border-black/10">
                  <h3 className="text-xl font-bold mb-2 text-black">2. UI/UX Design Prototyping</h3>
                  <p className="text-sm">We craft elegant, user-centric wireframes and high-fidelity prototypes ensuring the layout is intuitive before a single line of code is written.</p>
                </div>
                <div className="glass-card p-6 border-black/10">
                  <h3 className="text-xl font-bold mb-2 text-black">3. Agile Engineering</h3>
                  <p className="text-sm">Using sprint-based development, we build out the backend logic and frontend interfaces, ensuring constant transparency.</p>
                </div>
                <div className="glass-card p-6 border-black/10">
                  <h3 className="text-xl font-bold mb-2 text-black">4. Testing & Deployment</h3>
                  <p className="text-sm">Rigorous QA, automated testing, and secure deployment to your optimized cloud hosting environment.</p>
                </div>
              </div>
            </section>

            <section className="my-16">
              <h2 className="text-3xl font-semibold mb-8 text-black">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <h3 className="text-xl font-bold text-black mb-2">How long does custom web development take?</h3>
                  <p>Typical business portals take 4–8 weeks, whereas complex SaaS applications and custom software development projects can range from 3 to 6 months depending on requirements.</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <h3 className="text-xl font-bold text-black mb-2">Do you provide ongoing maintenance?</h3>
                  <p>Absolutely. We offer competitive retainer packages to ensure your systems remain up-to-date, secure, and optimized as your business scales.</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <h3 className="text-xl font-bold text-black mb-2">Are your AI chatbot services easily integrated?</h3>
                  <p>Yes. Our AI chatbot solutions can securely hook into any modern webpage or software ecosystem via scalable APIs, requiring virtually no downtime during implementation.</p>
                </div>
              </div>
            </section>

            <div className="text-center mt-20 pb-10">
               <a href="/contact" className="cta-primary">
                 Start Your Project Now
               </a>
            </div>

          </div>
        </motion.div>
      </main>

      <Footer />
      <Chatbot />
    </>
  )
}
