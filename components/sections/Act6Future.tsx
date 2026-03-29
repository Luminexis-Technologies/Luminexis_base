'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { Rocket } from 'lucide-react'
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
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) {
      setSendError('Please fill in all mandatory fields.')
      setSending(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formState.email)) {
      setSendError('Please enter a valid email address.')
      setSending(false)
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
      setSendError('Network error. Please check your connection and try again.')
    } finally {
      setSending(false)
    }
  }

  const updateField = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section ref={sectionRef} id="act6" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-[50%] -translate-x-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.06) 0%, transparent 50%)', filter: 'blur(100px)' }} />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 60%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* ── Principles ── */}
        <div data-reveal className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #7B61FF, transparent)' }} />
          <span className="act-label mb-0" style={{ color: '#7B61FF' }}>The Luminexis Principles</span>
        </div>

        <h2 data-reveal className="headline-lg mb-6">
          If your digital presence requires{' '}
          <span className="gradient-text">structural clarity</span>{' '}
          rather than surface improvement.
        </h2>

        <p data-reveal className="body-text max-w-2xl mb-12">
          We build digital systems that are structured, measurable, and built to hold — not to be replaced.
        </p>

        <div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          {LUMINEXIS_PRINCIPLES.map((principle, i) => (
            <div key={principle.id} className="glass-card px-6 py-5 flex items-center gap-4 group">
              <span className="font-mono text-sm font-bold flex-shrink-0" style={{ color: '#7B61FF' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-fg text-sm font-medium">{principle.text}</p>
            </div>
          ))}
        </div>

        {/* ── Contact Form ── */}
        <div id="contact" data-reveal className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #22D3EE, transparent)' }} />
            <span className="act-label mb-0">Get in Touch</span>
          </div>

          <h2 className="headline-lg mb-12">
            Ready to{' '}
            <span className="gradient-text">Launch?</span>
          </h2>

          {submitted ? (
            <div data-reveal className="honor-card p-12 text-center">
              <div className="flex justify-center mb-6">
                <Rocket className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_16px_rgba(34,211,238,0.5)]" />
              </div>
              <h3 className="text-2xl font-bold text-fg mb-4">Message Received</h3>
              <p className="body-text max-w-md mx-auto">
                We&apos;ll review your inquiry and respond within 24-48 hours. Expect a thoughtful reply.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="honor-card p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <FormField label="Name" value={formState.name} onChange={(v) => updateField('name', v)} placeholder="Your name" required />
                <FormField label="Email" value={formState.email} onChange={(v) => updateField('email', v)} placeholder="you@company.com" type="email" required />
                <FormField label="Company" value={formState.company} onChange={(v) => updateField('company', v)} placeholder="Company name" />
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--fg-muted)' }}>
                    Engagement Type
                  </label>
                  <select
                    value={formState.engagement}
                    onChange={(e) => updateField('engagement', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-transparent text-fg text-sm outline-none transition-all duration-200"
                    style={{ border: '1px solid rgba(123,97,255,0.2)', background: 'rgba(6,6,15,0.6)' }}
                  >
                    <option value="" style={{ background: '#0B0D17' }}>Select type</option>
                    {ENGAGEMENT_TYPES.map((type) => (
                      <option key={type} value={type} style={{ background: '#0B0D17' }}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: 'var(--fg-muted)' }}>
                  Project Details
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-transparent text-fg text-sm outline-none resize-none transition-all duration-200"
                  style={{
                    border: '1px solid rgba(123,97,255,0.2)',
                    background: 'rgba(6,6,15,0.6)',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(123,97,255,0.5)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(123,97,255,0.08)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(123,97,255,0.2)'; e.currentTarget.style.boxShadow = 'none' }}
                />
              </div>

              {/* Error message */}
              {sendError && (
                <p className="mb-4 text-sm font-mono px-4 py-3 rounded-lg" style={{
                  background: 'rgba(239,68,68,0.08)',
                  border: '1px solid rgba(239,68,68,0.25)',
                  color: '#f87171',
                }}>
                  {sendError}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="cta-primary w-full sm:w-auto justify-center"
              >
                {sending ? 'Sending...' : 'Send Transmission'}
                {!sending && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function FormField({ label, value, onChange, placeholder, type = 'text', required = false }: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string; required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--fg-muted)' }}>
        {label} {required && <span style={{ color: '#7B61FF' }}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-transparent text-fg text-sm outline-none transition-all duration-200"
        style={{ border: '1px solid rgba(123,97,255,0.2)', background: 'rgba(6,6,15,0.6)' }}
        onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(123,97,255,0.5)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(123,97,255,0.08)' }}
        onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(123,97,255,0.2)'; e.currentTarget.style.boxShadow = 'none' }}
      />
    </div>
  )
}