'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { CHAT_NODES, type ChatNode } from '@/lib/chatbot-flow'

// ── Types ──
type BubbleRole = 'bot' | 'user'
type Bubble = { id: number; role: BubbleRole; text: string }

// ── Validation helpers ──
// -email
function isValidEmail(v: string) {
  const email = v.trim().toLowerCase()

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

  if (!regex.test(email)) return false

  // ❌ No consecutive dots
  if (email.includes('..')) return false

  // ❌ No leading/trailing dot
  if (email.startsWith('.') || email.endsWith('.')) return false

  // ❌ Prevent invalid domain patterns
  const [local, domain] = email.split('@')

  if (!local || !domain) return false

  // ❌ Domain must have at least one dot
  if (!domain.includes('.')) return false

  // ❌ Prevent domains like ".com" or "com."
  if (domain.startsWith('.') || domain.endsWith('.')) return false

  return true
}

//mobile no

function isValidPhone(v: string) {
  // Broad international support: 7 to 15 digits
  const cleaned = v.replace(/\D/g, '')
  return cleaned.length >= 7 && cleaned.length <= 15
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [currentNode, setCurrentNode] = useState<ChatNode | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [started, setStarted] = useState(false)
  const [history, setHistory] = useState<{ node: ChatNode | null; bubbles: Bubble[]; answers: Record<string, string> }[]>([])
  const [submissionStatus, setSubmissionStatus] = useState<null | 'sending' | 'success' | 'error'>(null)
  const [error, setError] = useState('')
  const [shouldShake, setShouldShake] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const idCounter = useRef(0)

  // ── Helpers ──
  const nextId = () => ++idCounter.current

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
    })
  }, [])

  const addBotBubble = useCallback((text: string) => {
    setBubbles(prev => [...prev, { id: nextId(), role: 'bot', text }])
  }, [])

  const addUserBubble = useCallback((text: string) => {
    setBubbles(prev => [...prev, { id: nextId(), role: 'user', text }])
  }, [])

  // ── Navigate to a node with typing animation ──
  const goToNode = useCallback((nodeId: string) => {
    const node = CHAT_NODES[nodeId]
    if (!node) return

    setIsTyping(true)
    setCurrentNode(null) // hide options while "typing"

    const delay = Math.min(600 + node.message.length * 8, 1500)
    setTimeout(() => {
      addBotBubble(node.message)
      setCurrentNode(node)
      setIsTyping(false)

      // Auto-open external link on terminal nodes
      if (node.externalLink) {
        setTimeout(() => {
          window.open(node.externalLink, '_blank', 'noopener,noreferrer')
        }, 600)
      }
    }, delay)
  }, [addBotBubble])

  // ── Start conversation ──
  useEffect(() => {
    if (open && !started) {
      setStarted(true)
      goToNode('start')
    }
  }, [open, started, goToNode])

  // ── Auto-scroll ──
  useEffect(() => {
    scrollToBottom()
  }, [bubbles, isTyping, currentNode, scrollToBottom])

  // ── Focus input when node has input ──
  useEffect(() => {
    if (currentNode?.inputField || currentNode?.freeText) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [currentNode])

  // ── Handle option click ──
  const handleOption = (label: string, next: string) => {
    // Save current state to history before moving forward
    setHistory(prev => [...prev, { node: currentNode, bubbles, answers }])
    
    addUserBubble(label)
    setAnswers(prev => ({ ...prev, [currentNode?.id ?? '']: label }))
    setCurrentNode(null)
    setError('')
    setTimeout(() => goToNode(next), 200)
  }

  // ── Handle text input submit ──
  const handleSubmit = () => {
    const val = inputValue.trim()
    if (!val) return

    // Validate input fields
    if (currentNode?.inputField === 'email' && !isValidEmail(val)) {
      setError('Please enter a valid email address.')
      setShouldShake(true)
      setTimeout(() => setShouldShake(false), 500)
      return
    }
    if (currentNode?.inputField === 'whatsapp' && !isValidPhone(val)) {
      setError('Please enter a valid phone number.')
      setShouldShake(true)
      setTimeout(() => setShouldShake(false), 500)
      return
    }

    setError('')
    // Save current state to history before moving forward
    setHistory(prev => [...prev, { node: currentNode, bubbles, answers }])

    addUserBubble(val)
    setAnswers(prev => ({ ...prev, [currentNode?.id ?? '']: val }))
    setInputValue('')

    const nextNodeId = currentNode?.inputNext ?? currentNode?.freeTextNext
    if (nextNodeId) {
      setCurrentNode(null)
      setTimeout(() => goToNode(nextNodeId), 200)
    }
  }

  // ── Back Navigation ──
  const handleBack = () => {
    if (history.length === 0) return
    setIsTyping(false)
    const lastState = history[history.length - 1]
    setHistory(prev => prev.slice(0, -1))

    setCurrentNode(lastState.node)
    setBubbles(lastState.bubbles)
    setAnswers(lastState.answers)
    setError('')
  }

  // ── Lead Data Submission ──
  const submitLeadData = async (data: Record<string, string>) => {
    if (submissionStatus === 'success' || submissionStatus === 'sending') return
    
    setSubmissionStatus('sending')
    console.log('--- SUBMITTING LEAD DATA ---', data)

    try {
      // 🚀 Using Web3Forms for direct email delivery (configured in .env.local)
      const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
      
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `[Luminexis ChatBot] New Lead: ${data.lead_name || 'N/A'}`,
        from_name: 'Luminexis ChatBot',
        ...data,
        full_conversation: Object.entries(data)
          .map(([key, val]) => `${key.toUpperCase().replace(/_/g, ' ')}: ${val}`)
          .join('\n'),
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Failed to send data')
      
      setSubmissionStatus('success')
      console.log('Lead data captured successfully.')
    } catch (err) {
      console.error('Submission error:', err)
      setSubmissionStatus('error')
    }
  }

  // Auto-trigger submission when lead info is arriving to avoid missing out on dropoffs
  useEffect(() => {
    const hasName = !!answers['lead_name']
    const hasEmail = !!answers['lead_email']
    const hasZap = !!answers['lead_whatsapp']
    
    // Trigger if we have at least Name & Email, or once they get to the final node
    if (currentNode?.id === 'thank_you' || (hasName && hasEmail)) {
      submitLeadData(answers)
    }
  }, [currentNode, answers]) // eslint-disable-line react-hooks/exhaustive-deps

    // --- Restart ---
const handleRestart = () => {
  // 🧹 CLEAR EVERYTHING
  setBubbles([]);              // ✅ remove old messages
  setHistory([]);              // ✅ clear navigation history
  setAnswers({});              // ✅ clear collected answers
  setSubmissionStatus(null);   // ✅ reset submission state
  setCurrentNode(null);        // ✅ reset node
  setInputValue('');           // ✅ clear input
  setError('');                // ✅ clear errors
  setIsTyping(false);          // ✅ stop typing animation
  idCounter.current = 0;       // ✅ reset IDs

  // 🚀 Restart fresh
  setTimeout(() => {
    goToNode('start');
  }, 200);
};
  // ── Input placeholder based on field type ──
  const getPlaceholder = () => {
    if (currentNode?.inputField === 'name') return 'Your name...'
    if (currentNode?.inputField === 'email') return 'your@email.com'
    if (currentNode?.inputField === 'whatsapp') return 'Your phone number...'
    return 'Type your message...'
  }

  const getInputType = () => {
    if (currentNode?.inputField === 'email') return 'email'
    if (currentNode?.inputField === 'whatsapp') return 'tel'
    return 'text'
  }

  const showInput = currentNode?.freeText || currentNode?.inputField

  return (
    <>
      {/* ── Floating Trigger Button ── */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
        style={{
          background: '#000000',
          boxShadow: open
            ? '0 10px 30px rgba(0,0,0,0.15)'
            : '0 10px 40px rgba(0,0,0,0.2)',
        }}
      >
        {/* Chat / Close icon */}
        {/* User Logo */}
        <div className="relative w-full h-full flex items-center justify-center p-1.5 adaptive-logo-container">
          <img src="/logo-light.png" alt="Luminexis Tech Solutions Logo" className="w-full h-full object-contain rounded-full adaptive-logo-light" />
          <img src="/logo-dark.png" alt="Luminexis Tech Solutions Logo" className="w-full h-full object-contain rounded-full adaptive-logo-dark" />
        </div>

        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-20"
             style={{ background: '#000000' }} />
        )}
      </button>

      {/* ── Chat Window ── */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-[9998] flex flex-col overflow-hidden"
          style={{
            width: 'min(380px, calc(100vw - 48px))',
            height: 'min(560px, calc(100vh - 140px))',
            background: '#ffffff',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 0 1px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            animation: 'chatOpen 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
          }}
        >
          {/* ── Header ── */}
          <div
            className="flex items-center gap-3 px-6 py-5 flex-shrink-0"
            style={{
              borderBottom: '1px solid rgba(0,0,0,0.05)',
              background: 'rgba(255,255,255,0.8)',
            }}
          >
            {/* User Logo Status */}
            <div className="relative flex-shrink-0 w-9 h-9">
               <div className="adaptive-logo-container border border-black/20 rounded-full overflow-hidden">
                 <img src="/logo-light.png" alt="Luminexis Brand Identity" className="adaptive-logo-light" />
                 <img src="/logo-dark.png" alt="Luminexis Brand Identity" className="adaptive-logo-dark" />
               </div>
               <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
                style={{ background: '#22c55e', borderColor: '#ffffff' }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-black leading-tight">Luminexis</p>
              <p className="text-[11px] leading-tight text-[#6e6e73]">
                Online · replies instantly
              </p>
            </div>
            {history.length > 0 && (
              <button 
                onClick={handleBack} 
                title="Go back"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors text-fg-muted hover:text-black"
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
            <button onClick={handleRestart} title="Restart"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors text-fg-muted hover:text-black"
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M1 4v6h6M23 20v-6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* ── Messages ── */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: 'thin' }}>
            {bubbles.map((b) => (
              <div key={b.id} className={`flex ${b.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[85%] px-4 py-3 text-[13px] leading-relaxed whitespace-pre-line"
                  style={b.role === 'bot' ? {
                    background: '#F2F2F7',
                    border: '1px solid rgba(0,0,0,0.03)',
                    borderRadius: '18px 18px 18px 4px',
                    color: '#000000',
                  } : {
                    background: '#000000',
                    borderRadius: '18px 18px 4px 18px',
                    color: '#ffffff',
                  }}
                >
                  {b.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 px-4 py-3"
                  style={{
                    background: '#F2F2F7',
                    borderRadius: '18px 18px 18px 4px',
                  }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8e8e93] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8e8e93] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8e8e93] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            {/* ── Options (buttons) ── */}
            {currentNode?.options && !isTyping && (
              <div className="flex flex-wrap gap-2 pt-1">
                {currentNode.options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleOption(opt.label, opt.next)}
                    className="text-[12px] font-medium tracking-wide px-4 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(0,0,0,0.1)',
                      color: '#000000',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#f5f5f7'
                      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#ffffff'
                      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
                {history.length > 0 && (
                  <div className="w-full pt-1">
                    <button 
                      onClick={handleBack}
                      className="text-[11px] text-fg-muted hover:text-black/70 flex items-center gap-1.5 transition-colors"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Go back to previous step
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ── End state: restart option ── */}
            {currentNode?.end && !isTyping && (
              <div className="pt-2">
                <button
                  onClick={handleRestart}
                  className="text-[11px] font-mono tracking-wider uppercase transition-colors"
                  style={{ color: '#94a3b8' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#22D3EE')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
                >
                  ↻ Start over
                </button>
              </div>
            )}
            
            {/* ── Status Indicator ── */}
            {currentNode?.id === 'thank_you' && (
              <div className="pt-4 border-t border-white/5">
                {submissionStatus === 'sending' && (
                  <p className="text-[10px] text-fg-muted flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" /> Capturing project details...
                  </p>
                )}
                {submissionStatus === 'success' && (
                  <p className="text-[10px] text-emerald-400/80 flex items-center gap-2">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Requirement received securely
                  </p>
                )}
                {submissionStatus === 'error' && (
                  <p className="text-[10px] text-red-400/80">
                    Failed to sync. Please use WhatsApp.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Input bar */}
          {showInput && !isTyping && (
            <div 
              className={`flex flex-col flex-shrink-0 transition-all duration-200 ${shouldShake ? 'animate-shake' : ''}`} 
              style={{ borderTop: '1px solid rgba(0,0,0,0.05)', background: '#ffffff' }}
            >
              {error && (
                <div className="px-4 py-2 bg-red-500/10 text-[11px] text-red-400 font-medium flex items-center gap-2" style={{ borderBottom: '1px solid rgba(239,68,68,0.1)' }}>
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                     <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                   </svg>
                   {error}
                </div>
              )}
              {history.length > 0 && (
                <div className="px-4 pt-3">
                  <button 
                    onClick={handleBack}
                    className="text-[11px] text-fg-muted hover:text-black/70 flex items-center gap-1.5 transition-colors"
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Go back to previous step
                  </button>
                </div>
              )}
              <div className="flex items-center gap-2 px-4 py-3">
                <input
                  ref={inputRef}
                  type={getInputType()}
                  value={inputValue}
                  onChange={e => {
                    setInputValue(e.target.value)
                    if (error) setError('')
                  }}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  placeholder={getPlaceholder()}
                  className="flex-1 bg-transparent text-sm text-black placeholder:text-fg-muted opacity-60 outline-none border-none"
                  autoComplete={currentNode?.inputField === 'email' ? 'email' : currentNode?.inputField === 'whatsapp' ? 'tel' : 'off'}
                />
                <button
                  onClick={handleSubmit}
                  disabled={!inputValue.trim()}
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 disabled:opacity-30"
                  style={{
                    background: inputValue.trim()
                      ? '#000000'
                      : 'rgba(0,0,0,0.05)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke={inputValue.trim() ? "#fff" : "#8e8e93"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* ── Branding footer ── */}
          <div className="px-4 py-3 flex-shrink-0 text-center"
            style={{ borderTop: '1px solid rgba(0,0,0,0.03)', background: '#FAFAFA' }}>
            <span className="text-[10px] tracking-wider text-[#86868b] font-medium opacity-60">
              SECURE END-TO-END ENCRYPTED
            </span>
          </div>
        </div>
      )}

      {/* ── Keyframe for chat open animation ── */}
      <style jsx>{`
        @keyframes chatOpen {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.2s cubic-bezier(.36,.07,.19,.97) both;
          animation-iteration-count: 2;
        }
      `}</style>
    </>
  )
}
