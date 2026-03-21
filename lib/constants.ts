export const AUTHORITY_STATS = [
  { value: '20+', label: 'Projects Delivered' },
  { value: '8+', label: 'Industries Served' },
  { value: '3+', label: 'Years Engineering' },
  { value: '100%', label: 'Client Retention' },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We map your universe — business goals, user needs, and the competitive landscape. No assumptions.',
    icon: '🔭',
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'System design, information hierarchy, and technical blueprints crystallize before a single pixel is placed.',
    icon: '🪐',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Visual systems built from structural decisions — interfaces that create clarity, not just aesthetics.',
    icon: '✨',
  },
  {
    number: '04',
    title: 'Engineering',
    description: 'Precision execution with performance targets enforced. Every component built for orbital longevity.',
    icon: '🚀',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Performance audited. Accessibility verified. Your system enters orbit with confidence.',
    icon: '🌟',
  },
]

export const TECH_STACK = [
  { category: 'Frontend', items: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Three.js'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'tRPC', 'GraphQL', 'REST APIs', 'Prisma ORM'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'PlanetScale'] },
  { category: 'Infrastructure', items: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Sentry', 'Cloudflare'] },
]

export const TESTIMONIALS = [
  {
    id: 't1',
    quote: 'Luminexis didn\'t just build us a digital system — they engineered a platform. Our online engagements increased by 340% within the first two months. The performance and structure exceeded every expectation.',
    author: 'Hari Prasad',
    role: 'Owner',
    company: 'Pruthvi',
    engagement: 'Full-Stack Digital System',
  },
  {
    id: 't2',
    quote: 'Their process is unlike any studio I\'ve worked with. They mapped our architecture before the first interface was sketched. The result is a platform that actually scales with the business.',
    author: 'Partner',
    role: 'Founder',
    company: 'E-Commerce Platform',
    engagement: 'Interface Structure',
  },
  {
    id: 't3',
    quote: 'The attention to engineering detail is remarkable. Sub-second load times, fluid interactions, zero downtime — delivered on schedule. This is what a structured digital system looks like.',
    author: 'Partner',
    role: 'CTO',
    company: 'SaaS Platform',
    engagement: 'Frontend Engineering Execution',
  },
]

export const ACTS = [
  { id: 'act1', number: '01', label: 'Home', theme: 'Cosmos' },
  { id: 'act2', number: '02', label: 'Mission', theme: 'Nebula' },
  { id: 'act3', number: '03', label: 'Systems', theme: 'Stellar' },
  { id: 'act4', number: '04', label: 'Engineering', theme: 'Orbital' },
  { id: 'act5', number: '05', label: 'Portfolio', theme: 'Aurora' },
  { id: 'act6', number: '06', label: 'Contact', theme: 'Beyond' },
]

export const LUMINEXIS_PRINCIPLES = [
  'Clarity precedes creativity.',
  'Structure precedes styling.',
  'Performance precedes animation.',
  'Longevity precedes trend.',
]

export const SERVICES = [
  {
    id: 'digital-product',
    icon: '🪐',
    title: 'Interface Design',
    description: 'UX research, information architecture, and interface systems crafted around user behavior and commercial intent.',
    tags: ['UX Research', 'UI Systems', 'Conversion Design'],
  },
  {
    id: 'frontend',
    icon: '✨',
    title: 'Frontend Engineering',
    description: 'Component architecture, performance-first rendering pipelines, and interaction systems built for interstellar scale.',
    tags: ['React', 'Next.js', 'GSAP', 'Three.js'],
  },
  {
    id: 'backend',
    icon: '🔭',
    title: 'Backend Systems',
    description: 'Scalable API design, database architecture, and infrastructure built to support long-term platform growth.',
    tags: ['Node.js', 'PostgreSQL', 'REST / GraphQL'],
  },
  {
    id: 'platforms',
    icon: '🚀',
    title: 'Full Digital Platforms',
    description: 'End-to-end system engineering — from structural planning through deployment and performance validation.',
    tags: ['Full-Stack', 'DevOps', 'CI/CD'],
  },
]

export const METRICS = [
  { value: '95+', label: 'Lighthouse Score', suffix: '' },
  { value: '60', label: 'FPS Target', suffix: 'FPS' },
  { value: '<1.0', label: 'LCP', suffix: 's' },
  { value: '100', label: 'Accessibility', suffix: '%' },
]

export const PROJECTS = [
  {
    id: 'sri-hari-towing',
    title: 'Sri Hari Towing Services',
    url: 'https://sriharitowingservices.com/',
    category: 'Automotive / Roadside Assistance',
    description: 'We partnered with Sri Hari Towing Service to build a structured digital presence across multiple districts. Our approach focused on creating a 6 page website, each dedicated to a specific service area to improve local search visibility. We designed a clean, conversion focused interface optimized for emergency users. Location based SEO was implemented to capture high intent “near me” searches.We also optimized their Google Business Profile to strengthen Maps visibility.The result is a scalable system that drives consistent inbound calls',
    tags: ['Next.js', 'SEO', 'Google Business'],
    status: 'Live' as const,
    year: '2025',
    bgGradient: 'linear-gradient(135deg, #0B0D17 0%, #111329 40%, #1a1d3a 70%, #0E0F1F 100%)',
    accentColor: '#22D3EE',
    icon: '🪐',
  },
  {
    id: 'trimai-interiors',
    title: 'Trimai Interiors',
    url: 'https://www.trimaiinteriors.com/',
    category: 'Interior Design / Home Décor',
    description: 'We built a structured digital presence for Trimai Interior aligned with industry standards. Our focus was on a clean, portfolio driven website that highlights projects and services effectively.We optimized the platform for user experience and high intent search visibility. SEO and digital touchpoints were enhanced to improve discoverability. The result is a conversion focused system designed to attract quality interior clients.',
    tags: ['Next.js', 'Tailwind CSS', 'SEO'],
    status: 'Live' as const,
    year: '2025',
    bgGradient: 'linear-gradient(135deg, #0d0a1a 0%, #1a1040 40%, #251560 70%, #120a28 100%)',
    accentColor: '#A855F7',
    icon: '✨',
  },
  {
    id: 'quest',
    title: 'Quest',
    url: 'https://quest-neon.vercel.app/',
    category: 'Web Application',
    description: 'For Quest Pharma Solutions,we engineered a website that reflects the precision and authority of global GMP compliance.Our process focused on structuring complex service offerings into a seamless,user friendly experience.We emphasized clarity, trust signals,and global positioning through design and content.The platform was built to align with international standards and high value client expectations.Currently in final testing, it stands as a refined digital representation of their expertise',
    tags: ['Next.js', 'Tailwind CSS'],
    status: 'Ongoing' as const,
    year: '2025',
    bgGradient: 'linear-gradient(135deg, #06060F 0%, #0d1030 40%, #151845 70%, #0a0b20 100%)',
    accentColor: '#7B61FF',
    icon: '🚀',
  },
]
