/**
 * Luminexis Brand Strategy — Premium Data Layer
 * 
 * Positioning: World-Class Digital Engineering & SEO Systems
 * Tone: Structured, Technical, High-Ticket, Precise
 */

import {
  Code2,
  Database,
  BarChart3,
  Search,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Globe,
  ArrowUpRight,
  Target,
  Telescope,
  Workflow,
  Sparkles,
  CheckCircle,
  Truck,
  Home
} from 'lucide-react'

import type {
  AuthorityStat,
  ProcessStep,
  Testimonial,
  Act,
  Principle,
  Service,
  Project,
} from './types'

// ─────────────────────────────────────────────────────────────────────────────
// BRAND STRATEGY: HERO HEADLINES
// ─────────────────────────────────────────────────────────────────────────────
export const HERO_HEADLINES = [
  "Not Just Websites. Scalable Digital Systems That Convert",
  "High-Performance Websites & SaaS Systems for Scaling Businesses",
  "We Build Digital Products That Generate Revenue"
]

// ─────────────────────────────────────────────────────────────────────────────
// TRUST & AUTHORITY METRICS
// ─────────────────────────────────────────────────────────────────────────────
export const AUTHORITY_STATS: AuthorityStat[] = [
  {
    value: '₹10M+',
    label: 'Revenue Generated for Clients',
    variant: 'scale',
    delay: 0,
  },
  {
    value: '99.9%',
    label: 'System Uptime & Stability',
    variant: 'scale',
    delay: 0.1,
  },
  {
    value: '2.4s',
    label: 'Average LCP Improvement',
    variant: 'scale',
    delay: 0.2,
  },
  {
    value: '100%',
    label: 'High-Ticket Success Rate',
    variant: 'scale',
    delay: 0.3,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// CORE SERVICES (REVENUE FOCUSED)
// ─────────────────────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    icon: Code2,
    title: 'Web Development',
    description: 'High-performance architecture built for speed, conversion, and global scale. No templates. No compromises.',
    tags: ['Next.js', 'Typescript', 'Core Web Vitals'],
    href: '/web-development-services',
    highlight: false,
    variant: 'fade',
    delay: 0,
  },
  {
    id: 'saas-dev',
    icon: Database,
    title: 'SaaS Development',
    description: 'Full-cycle system engineering and technical architecture designed to handle thousands of concurrent users.',
    tags: ['System Design', 'API Architecture', 'Automation'],
    href: '/custom-software-development',
    highlight: true,
    variant: 'fade',
    delay: 0.1,
  },
  {
    id: 'seo-systems',
    icon: BarChart3,
    title: 'SEO Systems',
    description: 'Strategic organic growth engines focused on high-intent revenue generation, not just vanity rankings.',
    tags: ['Market Dominance', 'Technical SEO', 'Lead Gen'],
    href: '/seo-services',
    highlight: false,
    variant: 'fade',
    delay: 0.2,
  },
  {
    id: 'business-automation',
    icon: Sparkles,
    title: 'Business Automation',
    description: 'Custom automation workflows that eliminate repetitive tasks and streamline your business operations.',
    tags: ['Workflows', 'Efficiency', 'Internal Tools'],
    href: '/automation-services',
    highlight: false,
    variant: 'fade',
    delay: 0.3,
  }
]

// ─────────────────────────────────────────────────────────────────────────────
// STRATEGIC PROCESS (5-STEP)
// ─────────────────────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Strategy & Research',
    description: 'Deconstruct business goals to identify revenue-driving digital opportunities.',
    icon: Telescope,
    delay: 0,
    duration: 0.5,
  },
  {
    number: '02',
    title: 'System Architecture',
    description: 'Blueprinting scalable foundations before a single line of code is written.',
    icon: Workflow,
    delay: 0.1,
    duration: 0.5,
  },
  {
    number: '03',
    title: 'UI/UX Engineering',
    description: 'Precision-crafted interfaces designed for conversion and professional trust.',
    icon: Sparkles,
    delay: 0.2,
    duration: 0.5,
  },
  {
    number: '04',
    title: 'Development & Optimization',
    description: 'High-velocity technical execution with performance as a hard requirement.',
    icon: Cpu,
    delay: 0.3,
    duration: 0.5,
  },
  {
    number: '05',
    title: 'Launch & Scale',
    description: 'Managed deployment and ongoing system evolution for continuous growth.',
    icon: CheckCircle,
    delay: 0.4,
    duration: 0.5,
  }
]

// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO (CASE STUDIES)
// ─────────────────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 'sri-hari',
    title: 'Quest Pharma Solutions',
    url: 'https://questpharma.solutions',
    category: 'Enterprise Compliance Platform',
    description: 'Problem: High-compliance pharmaceutical data silos. Solution: A unified GMP-compliant digital system. Result: +40% operational efficiency.',
    tags: ['Enterprise', 'Compliance', 'Custom Software'],
    status: 'Live',
    year: '2025',
    bgGradient: '',
    accentColor: '#0D9488',
    icon: ShieldCheck,
    featured: true,
    metrics: '+40% Efficiency',
    thumbnail: '/assets/quest.png',
  },
  {
    id: 'trimai',
    title: 'Trimai Interiors',
    url: 'https://trimaiinteriors.com',
    category: 'High-End Design Portfolio',
    description: 'Problem: Brand misalignment. Solution: Premium visual architecture and conversion-optimized gallery. Result: ₹2.5M in new inbound leads.',
    tags: ['Design', 'UX Engineering', 'Lead Gen'],
    status: 'Live',
    year: '2024',
    bgGradient: '',
    accentColor: '#0D9488',
    icon: Home,
    featured: false,
    metrics: '₹2.5M Pipeline',
    thumbnail: '/assets/trimai.png',
  },
  {
    id: 'towing',
    title: 'Sri Hari Systems',
    url: 'https://sriharitowingservices.com',
    category: 'Automation Infrastructure',
    description: 'Problem: Manual dispatching lag. Solution: Real-time location-based dispatching engine. Result: 340% increase in service volume.',
    tags: ['Automation', 'Real-time', 'System Design'],
    status: 'Live',
    year: '2024',
    bgGradient: '',
    accentColor: '#0D9488',
    icon: Truck,
    featured: false,
    metrics: '340% Volume Boost',
    thumbnail: '/assets/sriharitowing.png',
  }
]

// ─────────────────────────────────────────────────────────────────────────────
// OPERATING PRINCIPLES
// ─────────────────────────────────────────────────────────────────────────────
export const LUMINEXIS_PRINCIPLES: Principle[] = [
  {
    id: 'p1',
    text: 'Clarity precedes creativity.',
    subtext: 'Every decision starts with business understanding, not aesthetic expression.',
    variant: 'slide',
    delay: 0,
  },
  {
    id: 'p2',
    text: 'Structure precedes styling.',
    subtext: 'Architecture is engineered before design patterns are applied.',
    variant: 'slide',
    delay: 0.1,
  },
  {
    id: 'p3',
    text: 'Performance precedes animation.',
    subtext: 'System speed is a baseline feature; motion must earn its place.',
    variant: 'slide',
    delay: 0.2,
  },
  {
    id: 'p4',
    text: 'Longevity precedes trend.',
    subtext: 'We build systems designed to outlast the typical design cycle.',
    variant: 'slide',
    delay: 0.3,
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "What we received wasn’t just a website — it was a complete operational system for our interior design studio.",
    author: 'Imran',
    role: 'Founder',
    company: 'Trimai Interiors',
    engagement: 'Brand Architecture',
    rating: 5,
  }
]

export const ACTS: Act[] = [
  { id: 'act1', number: '01', label: 'Systems',    theme: 'Authority', anchor: '#hero' },
  { id: 'act2', number: '02', label: 'Impact',     theme: 'Impact',    anchor: '#work' },
  { id: 'act3', number: '03', label: 'Method',     theme: 'Process',   anchor: '#process' },
  { id: 'act4', number: '04', label: 'Authority',  theme: 'Logic',     anchor: '#engineering' },
  { id: 'act5', number: '05', label: 'Contact',    theme: 'Scale',    anchor: '#contact' },
]

export const TECH_STACK = [
  { category: 'Frontend', items: ['Next.js 15', 'React Server Components', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend',  items: ['Node.js', 'Go', 'API Strategy', 'Serverless'] },
  { category: 'Database', items: ['PostgreSQL', 'Redis', 'Prisma', 'Edge Data'] },
  { category: 'Vitals',   items: ['LCP Optimization', 'SEO Infrastructure', 'Vercel Edge'] },
]

export const METRICS = AUTHORITY_STATS;

