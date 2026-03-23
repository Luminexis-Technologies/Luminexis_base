'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { PROJECTS } from '@/lib/data'
import type { Project } from '@/lib/types'

const PROJECT_IMAGES: Record<string, string> = {
  'sri-hari-towing': '/assets/sriharitowing.png',
  'trimai-interiors': '/assets/trimai.png',
  'quest': '/assets/quest.png',
}

export default function Act5Impact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const liveProjects = PROJECTS.filter(p => p.status === 'Live')
  const ongoingProjects = PROJECTS.filter(p => p.status === 'Ongoing')

  return (
    <section ref={sectionRef} id="work" className="section-container py-32 nebula-bg">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 60%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[15%] left-[8%] w-[350px] h-[350px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 60%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div data-reveal className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #22D3EE, transparent)' }} />
          <span className="act-label mb-0">Strategic Work</span>
        </div>

        <h2 data-reveal className="headline-lg mb-6">
          Built with Intent,{' '}
          <span className="gradient-text">Shipped with Precision.</span>
        </h2>

        <p data-reveal className="body-text max-w-2xl mb-16">
          A focused portfolio of digital systems engineered for real business outcomes —
          each one live, measurable, and built to last.
        </p>

        {/* ── Live Projects ── */}
        {liveProjects.length > 0 && (
          <div className="mb-12">
            <div data-reveal className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase text-green-400">Live Systems</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {liveProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* ── Ongoing Projects ── */}
        {ongoingProjects.length > 0 && (
          <div>
            <div data-reveal className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7B61FF' }} />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#7B61FF' }}>In Development</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div data-reveal className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-400 hover:shadow-card-hover">
      {/* ── Hero banner — real screenshot ── */}
      <div className="relative h-56 overflow-hidden">
        {/* Actual site screenshot */}
        <Image
          src={PROJECT_IMAGES[project.id] ?? project.bgGradient}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(6,6,15,0.15) 0%, rgba(6,6,15,0.5) 60%, rgba(6,6,15,0.92) 100%)',
          }}
        />
        {/* Accent colour tint overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${project.accentColor}18 0%, transparent 60%)` }}
        />
        {/* Status badge */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className="font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full backdrop-blur-sm"
            style={{
              background: project.status === 'Live' ? 'rgba(34,197,94,0.18)' : 'rgba(123,97,255,0.18)',
              border: `1px solid ${project.status === 'Live' ? 'rgba(34,197,94,0.4)' : 'rgba(123,97,255,0.4)'}`,
              color: project.status === 'Live' ? '#4ade80' : '#a78bfa',
            }}
          >
            {project.status === 'Live' ? '● Live' : '◌ Building'}
          </span>
        </div>
        {/* Bottom-left icon + year */}
        <div className="absolute bottom-4 left-5 z-10 flex items-center gap-2">
          {(() => { const Icon = project.icon; return <Icon className="w-5 h-5" style={{ color: project.accentColor, filter: `drop-shadow(0 0 6px ${project.accentColor}80)` }} /> })()}
          <span className="font-mono text-[10px] text-white/50">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold text-fg group-hover:text-white transition-colors duration-200">{project.title}</h3>
        </div>

        <span className="font-mono text-[10px] tracking-wider uppercase mb-4 block" style={{ color: project.accentColor }}>
          {project.category}
        </span>

        <p className="body-text text-sm mb-5 line-clamp-3">{project.description}</p>

        {project.metrics && (
          <div className="mb-4">
            <span
              className="inline-block font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md"
              style={{ background: `${project.accentColor}18`, border: `1px solid ${project.accentColor}40`, color: project.accentColor }}
            >
              {project.metrics}
            </span>
          </div>
        )}

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md"
                style={{ background: 'rgba(123,97,255,0.06)', border: '1px solid rgba(123,97,255,0.12)', color: 'var(--fg-muted)' }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase transition-all duration-200 group/link py-2"
          style={{ color: project.accentColor }}
        >
          {project.status === 'Live' ? 'Visit Live Site' : 'Preview Site'}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover/link:translate-x-1">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  )
}