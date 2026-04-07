'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { Rocket, Send } from 'lucide-react'
import { LUMINEXIS_PRINCIPLES } from '@/lib/data'

const ENGAGEMENT_TYPES = ['Interface Design', 'Frontend Engineering', 'Backend Systems', 'Full Digital Platform', 'SEO', 'Other']

export default function Act6Future() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: '', email: '', company: '', engagement: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending,   setSending]   = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) {
      setSendError('Please fill in all mandatory fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formState.email)) {
      setSendError('Please enter a valid email address.')
      return
    }

    setSending(true)
    setSendError(null)

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setSendError('Email service is not configured. Please contact us directly.')
      setSending(false)
      return
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject:    `[Luminexis] New inquiry from ${formState.name}`,
          from_name:  'Luminexis Contact Form',
          ...formState,
        }),
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
        setFormState({ name: '', email: '', company: '', engagement: '', message: '' })
      } else {
        setSendError(data.message ?? 'Submission failed. Please try again.')
      }
    } catch {
      setSendError('Network error. Please try again later.')
    } finally {
      setSending(false)
    }
  }

  const updateField = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section ref={sectionRef} id="contact" aria-label="Contact and Principles" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col gap-32">
        
        {/* ── Contact Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Contact Form */}
          <div data-reveal className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2 font-mono text-xs tracking-widest uppercase text-[#6B7280]">
                <span className="w-8 h-px bg-black/10"  />
                <span>Connect</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#111111] leading-tight tracking-tighter">
                Ready to{' '}
                <span className="text-[#6B7280]">Launch?</span>
              </h2>
              <p className="text-base md:text-lg text-[#6B7280] leading-relaxed max-w-md">
                Connect with our engineering studio and start your journey towards a scalable digital future.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#F7F7F7] p-12 rounded-[32px] text-center border border-black/5">
                <div className="flex justify-center mb-6">
                  <Rocket className="w-12 h-12 text-[#111111]" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-4">Transmission Received</h3>
                <p className="text-sm text-[#6B7280] max-w-sm mx-auto">
                  Our engineering team will review your project details and respond within 24-48 hours. Expect a thoughtful reply.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Name" value={formState.name} onChange={(v) => updateField('name', v)} placeholder="John Doe" required />
                  <FormField label="Email" value={formState.email} onChange={(v) => updateField('email', v)} placeholder="john@company.com" type="email" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Company" value={formState.company} onChange={(v) => updateField('company', v)} placeholder="Acme Inc." />
                  <div className="flex flex-col gap-3">
                    <label htmlFor="engagement" className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#111111]">
                      Project Scope
                    </label>
                    <select
                      id="engagement"
                      value={formState.engagement}
                      onChange={(e) => updateField('engagement', e.target.value)}
                      className="w-full px-5 py-4 rounded-[16px] bg-[#F7F7F7] text-[#111111] text-sm outline-none transition-all duration-300 border border-black/5 focus:border-black/20 focus:bg-white"
                    >
                      <option value="">Select scope</option>
                      {ENGAGEMENT_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#111111]">
                    Tell us about your goals
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Project details, timeline, and current pain points..."
                    rows={5}
                    className="w-full px-5 py-4 rounded-[20px] bg-[#F7F7F7] text-[#111111] text-sm outline-none resize-none transition-all duration-300 border border-black/5 focus:border-black/20 focus:bg-white"
                  />
                </div>

                {sendError && (
                  <p className="text-xs font-bold text-red-500 bg-red-50 px-4 py-3 rounded-lg border border-red-100">
                    {sendError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="bg-black text-white px-10 py-5 rounded-full font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.03] disabled:opacity-50 flex items-center justify-center gap-3 active:scale-95"
                >
                  {sending ? 'Sending...' : 'Send Transmission'}
                  {!sending && <Send className="w-4 h-4"  />}
                </button>
              </form>
            )}
          </div>

          {/* Right: Principles */}
          <div data-reveal className="bg-[#F7F7F7] p-12 md:p-16 rounded-[40px] border border-black/5 flex flex-col gap-12">
            <div className="flex flex-col gap-4">
               <h3 className="text-2xl font-bold text-[#111111]">Our Operating Principles</h3>
               <p className="text-sm text-[#6B7280] leading-relaxed">
                  We believe in structural integrity, commercial intent, and minimalist delivery. These principles guide every line of code we write.
               </p>
            </div>

            <div className="flex flex-col gap-6">
              {LUMINEXIS_PRINCIPLES.map((principle, i) => (
                <div key={principle.id} className="flex flex-col gap-2 group">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-black/5 group-hover:text-black/10 transition-colors" >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="text-lg font-bold text-[#111111] ">{principle.text}</h4>
                  </div>
                  <p className="text-sm text-[#6B7280] pl-14 leading-relaxed group-hover:text-[#111111] transition-colors">{principle.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, value, onChange, placeholder, type = 'text', required = false }: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string; required?: boolean
}) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={`field-${label.toLowerCase()}`} className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#111111]">
        {label} {required && <span className="text-[#6B7280] opacity-50" >*</span>}
      </label>
      <input
        id={`field-${label.toLowerCase()}`}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-5 py-4 rounded-[16px] bg-[#F7F7F7] text-[#111111] text-sm outline-none transition-all duration-300 border border-black/5 focus:border-black/20 focus:bg-white"
      />
    </div>
  )
}