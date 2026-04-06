'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

const SECTIONS = [
  { id: 'hero',    label: 'Home'     },
  { id: 'process', label: 'Process'  },
  { id: 'act3',    label: 'Services' },
  { id: 'act4',    label: 'Build'    },
  { id: 'work',    label: 'Projects' },
  { id: 'act6',    label: 'Contact'  },
]

export default function ScrollProgress({ progress }: { progress: number }) {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lineRef.current) {
      gsap.to(lineRef.current, { scaleY: progress, duration: 0.3, ease: 'power2.out' })
    }
  }, [progress])

  const activeSection = Math.min(Math.floor(progress * 6), 5)

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      <div
        className="relative w-px h-48 rounded-full overflow-hidden"
        style={{ background: 'rgba(123,97,255,0.15)' }}
      >
        <div
          ref={lineRef}
          className="absolute top-0 left-0 right-0 origin-top rounded-full"
          style={{
            height: '100%',
            background: 'linear-gradient(180deg, #7B61FF 0%, #22D3EE 100%)',
            transform: 'scaleY(0)',
            boxShadow: '0 0 8px rgba(123,97,255,0.6)',
          }}
        />
      </div>

      {SECTIONS.map((section, i) => (
        <button
          key={section.id}
          onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 group"
          title={section.label}
        >
          <span
            className="rounded-full transition-all duration-300"
            style={{
              width:     i === activeSection ? '8px' : '6px',
              height:    i === activeSection ? '8px' : '6px',
              background: i === activeSection
                ? 'linear-gradient(135deg, #7B61FF, #22D3EE)'
                : 'rgba(123,97,255,0.25)',
              boxShadow: i === activeSection ? '0 0 10px rgba(123,97,255,0.5)' : 'none',
            }}
          />
          <span
            className="font-mono text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            
          >
            {section.label}
          </span>
        </button>
      ))}
    </div>
  )
}