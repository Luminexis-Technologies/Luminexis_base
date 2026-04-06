'use client'

import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import type { Project } from '@/lib/types'

// Optimized Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function Act5Impact() {
  const liveProjects = PROJECTS.filter(p => p.status === 'Live')
  const ongoingProjects = PROJECTS.filter(p => p.status === 'Ongoing')

  return (
    <section id="work" aria-label="Our projects and case studies" className="section-container py-32  overflow-hidden">
      {/* Background effects - Simplified for performance */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 60%)' }} />
        <div className="absolute bottom-[15%] left-[8%] w-[350px] h-[350px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 60%)' }} />
      </div>

      <motion.div 
        className="max-w-6xl w-full mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px"  />
          <span className="act-label mb-0">Strategic Work</span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="headline-lg mb-6">
          Built with Intent,{' '}
          <span className="text-black">Shipped with Precision.</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="body-text max-w-2xl mb-16">
          A focused portfolio of digital systems engineered for real business outcomes —
          each one live, measurable, and built to last.
        </motion.p>

        {/* ── Live Projects ── */}
        {liveProjects.length > 0 && (
          <div className="mb-12">
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase text-green-400">Live Systems</span>
            </motion.div>
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
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full animate-pulse"  />
              <span className="font-mono text-xs tracking-widest uppercase" >In Development</span>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      variants={itemVariants}
      className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-400"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* ── Hero banner ── */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.thumbnail ?? project.bgGradient}
          alt={`Professional web development project - ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(6,6,15,0.1) 0%, rgba(6,6,15,0.4) 60%, rgba(6,6,15,0.85) 100%)',
          }}
        />
        {/* Status badge */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className="font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full backdrop-blur-sm"
            style={{
              background: project.status === 'Live' ? 'rgba(34,197,94,0.1)' : 'rgba(123,97,255,0.1)',
              border: `1px solid ${project.status === 'Live' ? 'rgba(34,197,94,0.3)' : 'rgba(123,97,255,0.3)'}`,
              color: project.status === 'Live' ? '#4ade80' : '#a78bfa',
            }}
          >
            {project.status === 'Live' ? '● Live' : '◌ Building'}
          </span>
        </div>
        {/* Bottom-left icon + year */}
        <div className="absolute bottom-4 left-5 z-10 flex items-center gap-2">
          {(() => { const Icon = project.icon; return <Icon className="w-5 h-5" style={{ color: project.accentColor }} /> })()}
          <span className="font-mono text-[10px] text-fg-muted">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-fg transition-colors duration-200 mb-1">{project.title}</h3>

        <span className="font-mono text-[10px] tracking-wider uppercase mb-4 block opacity-80" style={{ color: project.accentColor }}>
          {project.category}
        </span>

        <p className="body-text text-sm mb-5 leading-relaxed">{project.description}</p>

        {project.metrics && (
          <div className="mb-4">
            <span
              className="inline-block font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md"
              style={{ background: `${project.accentColor}10`, border: `1px solid ${project.accentColor}25`, color: project.accentColor }}
            >
              {project.metrics}
            </span>
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
    </motion.div>
  )
}