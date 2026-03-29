/**
 * Luminexis Design System — Data Layer
 *
 * Production-ready, icon-driven, animation-ready data for all UI sections.
 * Icons:   lucide-react  (semantic, context-matched — zero emojis)
 * Types:   ./types.ts
 * Theme:   Dark (#05070F) · Neon Cyan/Blue · Glassmorphism
 *
 * Usage:
 *   const Icon = step.icon
 *   <Icon className="w-6 h-6 text-cyan-400" />
 */

import {
  // Process Steps
  Telescope,   // Discovery  — research & exploration
  Workflow,    // Architecture — system design & structure
  Sparkles,    // Design     — UI polish & creativity
  Cpu,         // Engineering — technical execution
  CheckCircle, // Launch     — completion & success

  // Services
  Layers,      // Interface Design  — UI systems & layering
  Code2,       // Frontend Engineering — code / dev
  Server,      // Backend Systems   — infra / server
  Rocket,      // Full Platforms    — deployment & scale

  // Projects
  Truck,       // Automotive / Roadside Assistance
  Home,        // Interior Design / Home Décor
  Globe,       // Web Application
} from 'lucide-react'

import type {
  AuthorityStat,
  ProcessStep,
  TechStackCategory,
  Testimonial,
  Act,
  Principle,
  Service,
  Metric,
  Project,
} from './types'

// ─────────────────────────────────────────────────────────────────────────────
// AUTHORITY STATS
// ─────────────────────────────────────────────────────────────────────────────
export const AUTHORITY_STATS: AuthorityStat[] = [
  {
    value: '20+',
    label: 'Projects Delivered',
    variant: 'scale',
    delay: 0,
  },
  {
    value: '8+',
    label: 'Industries Served',
    variant: 'scale',
    delay: 0.1,
  },
  {
    value: '3+',
    label: 'Years Engineering',
    variant: 'scale',
    delay: 0.2,
  },
  {
    value: '100%',
    label: 'Client Retention',
    variant: 'scale',
    delay: 0.3,
    hoverEffect: 'glow',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PROCESS STEPS
// Icon mapping:
//   Discovery    → Telescope  (scanning the landscape)
//   Architecture → Workflow   (connecting structural nodes)
//   Design       → Sparkles   (polish & visual creativity)
//   Engineering  → Cpu        (precision technical execution)
//   Launch       → CheckCircle (completion & verification)
// ─────────────────────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We map your universe — business goals, user needs, and the competitive landscape. No assumptions.',
    icon: Telescope,
    variant: 'slide',
    delay: 0,
    duration: 0.5,
    hoverEffect: 'lift',
  },
  {
    number: '02',
    title: 'Architecture',
    description:
      'System design, information hierarchy, and technical blueprints crystallize before a single pixel is placed.',
    icon: Workflow,
    variant: 'slide',
    delay: 0.1,
    duration: 0.5,
    hoverEffect: 'lift',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Visual systems built from structural decisions — interfaces that create clarity, not just aesthetics.',
    icon: Sparkles,
    variant: 'slide',
    delay: 0.2,
    duration: 0.5,
    hoverEffect: 'glow',
  },
  {
    number: '04',
    title: 'Engineering',
    description:
      'Precision execution with performance targets enforced. Every component built for orbital longevity.',
    icon: Cpu,
    variant: 'slide',
    delay: 0.3,
    duration: 0.5,
    hoverEffect: 'lift',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Performance audited. Accessibility verified. Your system enters orbit with confidence.',
    icon: CheckCircle,
    variant: 'slide',
    delay: 0.4,
    duration: 0.5,
    hoverEffect: 'glow',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// TECH STACK
// ─────────────────────────────────────────────────────────────────────────────
export const TECH_STACK: TechStackCategory[] = [
  {
    category: 'Frontend',
    items: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Three.js'],
    variant: 'fade',
    delay: 0,
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'tRPC', 'GraphQL', 'REST APIs', 'Prisma ORM'],
    variant: 'fade',
    delay: 0.1,
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'PlanetScale'],
    variant: 'fade',
    delay: 0.2,
  },
  {
    category: 'Infrastructure',
    items: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Sentry', 'Cloudflare'],
    variant: 'fade',
    delay: 0.3,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      "What we received wasn’t just a website — it was a complete operational system. Sri Hari Towing Services now runs on a fast, structured digital foundation that consistently brings in real customer inquiries.",
    author: 'Pruthvi',
    role: 'Owner',
    company: 'Sri Hari Towing Services',
    engagement: 'Digital System & Lead Infrastructure',
    rating: 5,
    variant: 'fade',
    delay: 0,
    hoverEffect: 'lift',
  },
  {
    id: 't2',
    quote:
      "Trimai Interiors needed more than a visual presence — we needed a digital identity. The final product reflects precision, clarity, and a level of refinement our clients immediately notice.",
    author: 'Imran',
    role: 'Founder',
    company: 'Trimai Interiors',
    engagement: 'Brand Experience Architecture',
    rating: 5,
    variant: 'fade',
    delay: 0.15,
    hoverEffect: 'lift',
  },
  {
    id: 't3',
    quote:
      "Quest Neon stands as a high-performance interface system. Every interaction feels intentional — fast, fluid, and engineered with attention to detail that’s rare to find.",
    author: 'Ravi B',
    role: 'CEO',
    company: 'Quest ',
    engagement: 'Frontend System Engineering',
    rating: 5,
    variant: 'fade',
    delay: 0.3,
    hoverEffect: 'lift',
  },
]
// ─────────────────────────────────────────────────────────────────────────────
// ACTS (Section navigation)
// ─────────────────────────────────────────────────────────────────────────────
export const ACTS: Act[] = [
  { id: 'act1', number: '01', label: 'Home',        theme: 'Cosmos',   anchor: '#home'        },
  { id: 'act2', number: '02', label: 'Mission',     theme: 'Nebula',   anchor: '#mission'     },
  { id: 'act3', number: '03', label: 'Systems',     theme: 'Stellar',  anchor: '#systems'     },
  { id: 'act4', number: '04', label: 'Engineering', theme: 'Orbital',  anchor: '#engineering' },
  { id: 'act5', number: '05', label: 'Portfolio',   theme: 'Aurora',   anchor: '#portfolio'   },
  { id: 'act6', number: '06', label: 'Contact',     theme: 'Beyond',   anchor: '#contact'     },
]

// ─────────────────────────────────────────────────────────────────────────────
// LUMINEXIS PRINCIPLES
// ─────────────────────────────────────────────────────────────────────────────
export const LUMINEXIS_PRINCIPLES: Principle[] = [
  {
    id: 'p1',
    text: 'Clarity precedes creativity.',
    subtext: 'Every decision starts with understanding, not expression.',
    variant: 'slide',
    delay: 0,
  },
  {
    id: 'p2',
    text: 'Structure precedes styling.',
    subtext: 'Architecture is designed before aesthetics are applied.',
    variant: 'slide',
    delay: 0.1,
  },
  {
    id: 'p3',
    text: 'Performance precedes animation.',
    subtext: 'Speed is a feature; motion must earn its place.',
    variant: 'slide',
    delay: 0.2,
  },
  {
    id: 'p4',
    text: 'Longevity precedes trend.',
    subtext: 'Systems built to outlast the design cycle.',
    variant: 'slide',
    delay: 0.3,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// Icon mapping:
//   Interface Design      → Layers   (layered UI systems)
//   Frontend Engineering  → Code2    (frontend source code)
//   Backend Systems       → Server   (server / infra)
//   Full Digital Platforms → Rocket  (deployment at scale)
// ─────────────────────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: 'digital-product',
    icon: Layers,
    title: 'Interface Design',
    description:
      'UX research, information architecture, and interface systems crafted around user behavior and commercial intent.',
    tags: ['UX Research', 'UI Systems', 'Conversion Design'],
    highlight: false,
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.06) 0%, rgba(99,102,241,0.04) 100%)',
    variant: 'fade',
    delay: 0,
    hoverEffect: 'glow',
  },
  {
    id: 'frontend',
    icon: Code2,
    title: 'Frontend Engineering',
    description:
      'Component architecture, performance-first rendering pipelines, and interaction systems built for interstellar scale.',
    tags: ['React', 'Next.js', 'GSAP', 'Three.js'],
    highlight: true,
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.10) 0%, rgba(99,102,241,0.07) 100%)',
    variant: 'fade',
    delay: 0.1,
    hoverEffect: 'glow',
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend Systems',
    description:
      'Scalable API design, database architecture, and infrastructure built to support long-term platform growth.',
    tags: ['Node.js', 'PostgreSQL', 'REST', 'GraphQL'],
    highlight: false,
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(168,85,247,0.04) 100%)',
    variant: 'fade',
    delay: 0.2,
    hoverEffect: 'lift',
  },
  {
    id: 'platforms',
    icon: Rocket,
    title: 'Full Digital Platforms',
    description:
      'End-to-end system engineering — from structural planning through deployment and performance validation.',
    tags: ['Full-Stack', 'DevOps', 'CI/CD'],
    highlight: false,
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.06) 0%, rgba(34,211,238,0.04) 100%)',
    variant: 'fade',
    delay: 0.3,
    hoverEffect: 'lift',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// METRICS
// Normalized into structured numeric form for countUp / chart consumption.
// ─────────────────────────────────────────────────────────────────────────────
export const METRICS: Metric[] = [
  {
    value: 95,
    suffix: '+',
    label: 'Lighthouse Score',
    variant: 'scale',
    delay: 0,
    duration: 0.6,
    hoverEffect: 'glow',
  },
  {
    value: 60,
    suffix: 'FPS',
    label: 'FPS Target',
    variant: 'scale',
    delay: 0.1,
    duration: 0.6,
    hoverEffect: 'glow',
  },
  {
    value: 1.0,
    prefix: '<',
    suffix: 's',
    label: 'LCP',
    variant: 'scale',
    delay: 0.2,
    duration: 0.6,
    hoverEffect: 'glow',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Accessibility',
    variant: 'scale',
    delay: 0.3,
    duration: 0.6,
    hoverEffect: 'glow',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS
// Icon mapping (semantic, category-driven):
//   Automotive / Roadside Assistance → Truck   (vehicles & transport)
//   Interior Design / Home Décor     → Home    (residential context)
//   Web Application                  → Globe   (web-native product)
// ─────────────────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 'sri-hari-towing',
    title: 'Sri Hari Towing Services',
    url: 'https://sriharitowingservices.com/',
    category: 'Automotive / Roadside Assistance',
    description:
      'We partnered with Sri Hari Towing Service to build a structured digital presence across multiple districts. Our approach focused on creating a 6-page website, each dedicated to a specific service area to improve local search visibility. A clean, conversion-focused interface was designed for emergency users. Location-based SEO captures high-intent "near me" searches, while an optimised Google Business Profile strengthens Maps visibility — driving consistent inbound calls.',
    tags: ['Next.js', 'SEO', 'Google Business'],
    status: 'Live',
    year: '2025',
    bgGradient: 'linear-gradient(135deg, #0B0D17 0%, #111329 40%, #1A1D3A 70%, #0E0F1F 100%)',
    accentColor: '#22D3EE',
    icon: Truck,
    featured: true,
    metrics: '+340% inbound calls',
    thumbnail: '/assets/sriharitowing.png',
    variant: 'fade',
    delay: 0,
    hoverEffect: 'tilt',
  },
  {
    id: 'trimai-interiors',
    title: 'Trimai Interiors',
    url: 'https://www.trimaiinteriors.com/',
    category: 'Interior Design / Home Décor',
    description:
      'We built a structured digital presence for Trimai Interiors aligned with industry standards. Our focus was a clean, portfolio-driven website that highlights projects and services effectively. The platform was optimised for user experience and high-intent search visibility — a conversion-focused system designed to attract quality interior design clients.',
    tags: ['Next.js', 'Tailwind CSS', 'SEO'],
    status: 'Live',
    year: '2025',
    bgGradient: 'linear-gradient(135deg, #0D0A1A 0%, #1A1040 40%, #251560 70%, #120A28 100%)',
    accentColor: '#A855F7',
    icon: Home,
    featured: false,
    metrics: '+220% organic reach',
    thumbnail: '/assets/trimai.png',
    variant: 'fade',
    delay: 0.15,
    hoverEffect: 'tilt',
  },
  {
    id: 'quest',
    title: 'Quest',
    url: 'https://quest-neon.vercel.app/',
    category: 'Web Application',
    description:
      'For Quest Pharma Solutions, we engineered a platform reflecting the precision and authority of global GMP compliance. Complex service offerings were structured into a seamless, user-friendly experience emphasising clarity, trust signals, and global positioning. Built to align with international standards and high-value client expectations — currently in final testing.',
    tags: ['Next.js', 'Tailwind CSS'],
    status: 'Ongoing',
    year: '2025',
    bgGradient: 'linear-gradient(135deg, #06060F 0%, #0D1030 40%, #151845 70%, #0A0B20 100%)',
    accentColor: '#7B61FF',
    icon: Globe,
    featured: false,
    metrics: 'GMP-compliant platform',
    thumbnail: '/assets/quest.png',
    variant: 'fade',
    delay: 0.3,
    hoverEffect: 'tilt',
  },
]
