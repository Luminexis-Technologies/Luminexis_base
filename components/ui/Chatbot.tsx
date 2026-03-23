'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { CHAT_NODES, type ChatNode } from '@/lib/chatbot-flow'

// ── Types ──
type BubbleRole = 'bot' | 'user'
type Bubble = { id: number; role: BubbleRole; text: string }

// ── Validation helpers ──
function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}
function isValidPhone(v: string) {
  return /^[\d+\-()\s]{7,15}$/.test(v)
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
      return
    }
    if (currentNode?.inputField === 'whatsapp' && !isValidPhone(val)) {
      setError('Please enter a valid phone number.')
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

  // Auto-trigger submission when arriving at thank_you node
  useEffect(() => {
    if (currentNode?.id === 'thank_you' && submissionStatus === null) {
      submitLeadData(answers)
    }
  }, [currentNode, answers, submissionStatus])

  // ── Restart ──
  const handleRestart = () => {
    setBubbles([])
    setCurrentNode(null)
    setIsTyping(false)
    setAnswers({})
    setInputValue('')
    setStarted(false)
    setHistory([])
    setSubmissionStatus(null)
    setError('')
    idCounter.current = 0
    setTimeout(() => {
      setStarted(true)
      goToNode('start')
    }, 100)
  }

  // ── Input placeholder based on field type ──
  const getPlaceholder = () => {
    if (currentNode?.inputField === 'name') return 'Your name...'
    if (currentNode?.inputField === 'email') return 'your@email.com'
    if (currentNode?.inputField === 'whatsapp') return '+91 XXXXX XXXXX'
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
          background: 'linear-gradient(135deg, #7B61FF 0%, #5B3DD9 50%, #A855F7 100%)',
          boxShadow: open
            ? '0 4px 20px rgba(123,97,255,0.3)'
            : '0 4px 24px rgba(123,97,255,0.4), 0 0 48px rgba(123,97,255,0.15)',
        }}
      >
        {/* Chat / Close icon */}
        <svg
          width="24" height="24" viewBox="0 0 24 24" fill="none"
          className="transition-transform duration-300"
          style={{ transform: open ? 'rotate(90deg)' : 'rotate(0)' }}
        >
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <>
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </>
          )}
        </svg>

        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ background: 'linear-gradient(135deg, #7B61FF, #A855F7)' }} />
        )}
      </button>

      {/* ── Chat Window ── */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-[9998] flex flex-col overflow-hidden"
          style={{
            width: 'min(380px, calc(100vw - 48px))',
            height: 'min(560px, calc(100vh - 140px))',
            background: 'rgba(11, 13, 23, 0.95)',
            border: '1px solid rgba(123, 97, 255, 0.2)',
            borderRadius: '20px',
            boxShadow: '0 16px 80px rgba(0,0,0,0.5), 0 0 60px rgba(123,97,255,0.08), inset 0 1px 0 rgba(180,160,255,0.06)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            animation: 'chatOpen 0.35s cubic-bezier(0.16,1,0.3,1) forwards',
          }}
        >
          {/* ── Header ── */}
          <div
            className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
            style={{
              borderBottom: '1px solid rgba(123,97,255,0.15)',
              background: 'linear-gradient(135deg, rgba(123,97,255,0.08) 0%, transparent 100%)',
            }}
          >
            {/* Pulsing status dot */}
            <div className="relative flex-shrink-0">
              <div className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7B61FF, #22D3EE)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
                style={{ background: '#22c55e', borderColor: 'rgba(11,13,23,0.95)' }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white leading-tight">Luminexis</p>
              <p className="text-[11px] leading-tight" style={{ color: 'rgba(34,211,238,0.8)' }}>
                Online · replies instantly
              </p>
            </div>
            {history.length > 0 && (
              <button 
                onClick={handleBack} 
                title="Go back"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors text-white/50 hover:text-white"
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(123,97,255,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
            <button onClick={handleRestart} title="Restart"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors text-white/50 hover:text-white"
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(123,97,255,0.15)')}
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
                    background: 'rgba(17, 19, 41, 0.8)',
                    border: '1px solid rgba(123,97,255,0.12)',
                    borderRadius: '4px 16px 16px 16px',
                    color: 'var(--fg)',
                  } : {
                    background: 'linear-gradient(135deg, #7B61FF, #5B3DD9)',
                    borderRadius: '16px 4px 16px 16px',
                    color: '#fff',
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
                    background: 'rgba(17, 19, 41, 0.8)',
                    border: '1px solid rgba(123,97,255,0.12)',
                    borderRadius: '4px 16px 16px 16px',
                  }}>
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#7B61FF', animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#7B61FF', animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#7B61FF', animationDelay: '300ms' }} />
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
                      background: 'rgba(123,97,255,0.08)',
                      border: '1px solid rgba(123,97,255,0.25)',
                      color: '#c4b5fd',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(123,97,255,0.2)'
                      e.currentTarget.style.borderColor = 'rgba(123,97,255,0.5)'
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(123,97,255,0.08)'
                      e.currentTarget.style.borderColor = 'rgba(123,97,255,0.25)'
                      e.currentTarget.style.color = '#c4b5fd'
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
                {history.length > 0 && (
                  <div className="w-full pt-1">
                    <button 
                      onClick={handleBack}
                      className="text-[11px] text-white/40 hover:text-white/70 flex items-center gap-1.5 transition-colors"
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
                  <p className="text-[10px] text-white/40 flex items-center gap-2">
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

          {/* ── Input bar ── */}
          {showInput && !isTyping && (
            <div className="flex flex-col flex-shrink-0" style={{ borderTop: '1px solid rgba(123,97,255,0.12)' }}>
              {error && (
                <div className="px-4 py-1.5 bg-red-500 text-[10px] text-white font-bold animate-pulse">
                  {error}
                </div>
              )}
              {history.length > 0 && (
                <div className="px-4 pt-3">
                  <button 
                    onClick={handleBack}
                    className="text-[11px] text-white/40 hover:text-white/70 flex items-center gap-1.5 transition-colors"
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Go back & change answer
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
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 outline-none border-none"
                  autoComplete={currentNode?.inputField === 'email' ? 'email' : currentNode?.inputField === 'whatsapp' ? 'tel' : 'off'}
                />
                <button
                  onClick={handleSubmit}
                  disabled={!inputValue.trim()}
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 disabled:opacity-30"
                  style={{
                    background: inputValue.trim()
                      ? 'linear-gradient(135deg, #7B61FF, #5B3DD9)'
                      : 'rgba(123,97,255,0.1)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* ── Branding footer ── */}
          <div className="px-4 py-2 flex-shrink-0 text-center"
            style={{ borderTop: '1px solid rgba(123,97,255,0.06)' }}>
            <span className="text-[10px] tracking-wider" style={{ color: 'rgba(232,230,240,0.2)' }}>
              Powered by Luminexis
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
      `}</style>
    </>
  )
}
