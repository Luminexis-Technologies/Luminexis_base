/**
 * Luminexis Design System — Type Definitions
 * Production-ready, strict TypeScript types for all UI data structures.
 * Designed for dark-theme, glassmorphism SaaS with Framer Motion / GSAP animation support.
 */

import type { LucideIcon } from 'lucide-react'

// ─────────────────────────────────────────────
// ANIMATION SHIM
// Composable animation metadata attached to any data node.
// Drives Framer Motion variants or GSAP stagger timelines.
// ─────────────────────────────────────────────
export interface AnimationMeta {
  /** Stagger delay in seconds (e.g., 0.1 per card) */
  delay?: number
  /** Transition duration in seconds */
  duration?: number
  /** Framer Motion entry variant preset */
  variant?: 'fade' | 'slide' | 'scale'
  /** Pointer-interaction effect on the element */
  hoverEffect?: 'glow' | 'lift' | 'tilt'
}

// ─────────────────────────────────────────────
// AUTHORITY STATS
// ─────────────────────────────────────────────
export interface AuthorityStat extends AnimationMeta {
  /** Numeric display value including suffix, e.g. "20+" */
  value: string
  /** Short label beneath the stat */
  label: string
}

// ─────────────────────────────────────────────
// PROCESS STEPS
// ─────────────────────────────────────────────
export interface ProcessStep extends AnimationMeta {
  /** Zero-padded step number, e.g. "01" */
  number: string
  title: string
  description: string
  /** Semantic Lucide icon component */
  icon: LucideIcon
}

// ─────────────────────────────────────────────
// TECH STACK
// ─────────────────────────────────────────────
export interface TechStackCategory extends AnimationMeta {
  /** Category label, e.g. "Frontend" */
  category: string
  /** Array of technology / library names */
  items: string[]
}

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────
export interface Testimonial extends AnimationMeta {
  id: string
  quote: string
  author: string
  role: string
  company: string
  /** Engagement type label, e.g. "Full-Stack Digital System" */
  engagement: string
  /** Optional star rating (1–5) for structured display */
  rating?: number
  /** URL to author avatar image */
  avatarUrl?: string
}

// ─────────────────────────────────────────────
// ACTS (Navigation / Section anchors)
// ─────────────────────────────────────────────
export interface Act extends AnimationMeta {
  id: string
  /** Zero-padded index, e.g. "01" */
  number: string
  /** Human-readable section label */
  label: string
  /** Thematic name powering background/color shifts */
  theme: string
  /** Optional fragment for scroll-spy anchors */
  anchor?: string
}

// ─────────────────────────────────────────────
// LUMINEXIS PRINCIPLES
// ─────────────────────────────────────────────
export interface Principle extends AnimationMeta {
  id: string
  text: string
  /** Optional explanatory sub-copy */
  subtext?: string
}

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────
export interface Service extends AnimationMeta {
  id: string
  /** Semantic Lucide icon component */
  icon: LucideIcon
  title: string
  description: string
  /** Capability tags rendered as chips / badges */
  tags: string[]
  /** Whether this card should receive visual prominence (e.g. border glow) */
  highlight?: boolean
  /** CSS gradient string for the card's ambient background */
  gradient?: string
}

// ─────────────────────────────────────────────
// METRICS
// ─────────────────────────────────────────────
export interface Metric extends AnimationMeta {
  /** Raw numeric value (can be countUp target) */
  value: number
  /** Formatted prefix, e.g. "<" for LCP */
  prefix?: string
  /** Formatted suffix, e.g. "+", "FPS", "s", "%" */
  suffix: string
  /** Label displayed beneath the value */
  label: string
}

// ─────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────
export type ProjectStatus = 'Live' | 'Ongoing' | 'Archived'

export interface Project extends AnimationMeta {
  id: string
  title: string
  url: string
  /** Industry / category label */
  category: string
  description: string
  tags: string[]
  status: ProjectStatus
  year: string
  /** CSS gradient for the card background */
  bgGradient: string
  /** Primary accent hex color for borders, glows, icons */
  accentColor: string
  /** Semantic Lucide icon component */
  icon: LucideIcon
  /** Pin this project at the top of the portfolio grid */
  featured?: boolean
  /** Headline performance metric copy, e.g. "+340% engagement" */
  metrics?: string
}
