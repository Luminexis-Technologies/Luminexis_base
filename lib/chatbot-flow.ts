// ── Chatbot Conversation Tree ──
// Each node has a message, optional options (buttons), and routing logic.

export type ChatNode = {
  id: string
  message: string
  options?: { label: string; next: string }[]
  /** If true, show a text input instead of options */
  freeText?: boolean
  /** Where to go after free text submission */
  freeTextNext?: string
  /** Input field type for lead capture */
  inputField?: 'name' | 'email' | 'whatsapp'
  inputNext?: string
  /** External link to open */
  externalLink?: string
  /** If true, this is a terminal node */
  end?: boolean
}

export const WHATSAPP_NUMBER = '918431077234'
export const EMAIL_ADDRESS = 'info@luminexistechnologies.com'

export const CHAT_NODES: Record<string, ChatNode> = {
  // ── Start ──
  start: {
    id: 'start',
    message: 'Hey — looking to build a high-converting website or grow SEO?\n\nI can guide you in under 60 seconds.',
    options: [
      { label: 'Build a Website', next: 'web_type' },
      { label: 'Improve SEO', next: 'seo_situation' },
      { label: 'Talk to a Human', next: 'lead_name' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  WEBSITE FLOW
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  web_type: {
    id: 'web_type',
    message: 'What are you planning to build?',
    options: [
      { label: 'Business Website', next: 'biz_goal' },
      { label: 'E-commerce Store', next: 'ecom_product' },
      { label: 'Landing Page', next: 'lp_purpose' },
      { label: 'Not sure', next: 'unsure_goal' },
      { label: "I'll explain my requirement", next: 'free_explain' },
    ],
  },

  // ── Business Website ──
  biz_goal: {
    id: 'biz_goal',
    message: "What's the main goal?",
    options: [
      { label: 'Generate leads', next: 'biz_content' },
      { label: 'Showcase services', next: 'biz_content' },
      { label: 'Build brand presence', next: 'biz_content' },
    ],
  },
  biz_content: {
    id: 'biz_content',
    message: 'Do you have content ready?',
    options: [
      { label: 'Yes', next: 'biz_pages' },
      { label: 'No', next: 'biz_pages' },
    ],
  },
  biz_pages: {
    id: 'biz_pages',
    message: 'How many pages are you expecting?',
    options: [
      { label: '1–5', next: 'lead_name' },
      { label: '5–10', next: 'lead_name' },
      { label: '10+', next: 'lead_name' },
      { label: 'Not sure', next: 'lead_name' },
    ],
  },

  // ── E-commerce ──
  ecom_product: {
    id: 'ecom_product',
    message: 'What are you planning to sell?',
    options: [
      { label: 'Physical products', next: 'ecom_count' },
      { label: 'Digital products', next: 'ecom_count' },
      { label: 'Both', next: 'ecom_count' },
    ],
  },
  ecom_count: {
    id: 'ecom_count',
    message: 'Approx number of products?',
    options: [
      { label: '1–10', next: 'ecom_payment' },
      { label: '10–50', next: 'ecom_payment' },
      { label: '50+', next: 'ecom_payment' },
    ],
  },
  ecom_payment: {
    id: 'ecom_payment',
    message: 'Do you need payment & shipping setup?',
    options: [
      { label: 'Yes', next: 'lead_name' },
      { label: 'No', next: 'lead_name' },
      { label: 'Not sure', next: 'lead_name' },
    ],
  },

  // ── Landing Page ──
  lp_purpose: {
    id: 'lp_purpose',
    message: "What's the purpose?",
    options: [
      { label: 'Ads conversion', next: 'lp_ads' },
      { label: 'Lead generation', next: 'lp_ads' },
      { label: 'Product launch', next: 'lp_ads' },
    ],
  },
  lp_ads: {
    id: 'lp_ads',
    message: 'Will you be running ads?',
    options: [
      { label: 'Yes', next: 'lead_name' },
      { label: 'No', next: 'lead_name' },
      { label: 'Planning to', next: 'lead_name' },
    ],
  },

  // ── Not sure ──
  unsure_goal: {
    id: 'unsure_goal',
    message: "What's your goal?",
    options: [
      { label: 'Get leads', next: 'unsure_existing' },
      { label: 'Sell products', next: 'unsure_existing' },
      { label: 'Build online presence', next: 'unsure_existing' },
    ],
  },
  unsure_existing: {
    id: 'unsure_existing',
    message: 'Do you have a website currently?',
    options: [
      { label: 'Yes', next: 'lead_name' },
      { label: 'No', next: 'lead_name' },
    ],
  },

  // ── Free-text explain ──
  free_explain: {
    id: 'free_explain',
    message: 'No problem — tell us a bit about what you\'re looking for.',
    freeText: true,
    freeTextNext: 'lead_name',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  SEO FLOW
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  seo_situation: {
    id: 'seo_situation',
    message: "What's your current situation?",
    options: [
      { label: 'New website', next: 'seo_new' },
      { label: 'Low traffic', next: 'seo_low_leads' },
      { label: 'Rankings dropped', next: 'seo_drop_when' },
      { label: 'Not sure', next: 'seo_unsure' },
      { label: "I'll explain my requirement", next: 'free_explain' },
    ],
  },

  // ── New website SEO ──
  seo_new: {
    id: 'seo_new',
    message: 'Do you want to start SEO from scratch?',
    options: [
      { label: 'Yes', next: 'lead_name' },
      { label: 'Need guidance', next: 'lead_name' },
    ],
  },

  // ── Low traffic ──
  seo_low_leads: {
    id: 'seo_low_leads',
    message: 'Are you getting leads currently?',
    options: [
      { label: 'Yes, but low', next: 'seo_low_prev' },
      { label: 'No', next: 'seo_low_prev' },
    ],
  },
  seo_low_prev: {
    id: 'seo_low_prev',
    message: 'Have you done SEO before?',
    options: [
      { label: 'Yes', next: 'lead_name' },
      { label: 'No', next: 'lead_name' },
    ],
  },

  // ── Rankings dropped ──
  seo_drop_when: {
    id: 'seo_drop_when',
    message: 'When did this happen?',
    options: [
      { label: 'Recently', next: 'seo_drop_changes' },
      { label: 'Long back', next: 'seo_drop_changes' },
      { label: 'Not sure', next: 'seo_drop_changes' },
    ],
  },
  seo_drop_changes: {
    id: 'seo_drop_changes',
    message: 'Any recent changes made to the website?',
    options: [
      { label: 'Yes', next: 'lead_name' },
      { label: 'No', next: 'lead_name' },
    ],
  },

  // ── SEO not sure ──
  seo_unsure: {
    id: 'seo_unsure',
    message: "What's your main goal?",
    options: [
      { label: 'More traffic', next: 'lead_name' },
      { label: 'More leads', next: 'lead_name' },
      { label: 'Brand visibility', next: 'lead_name' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  LEAD CAPTURE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  lead_name: {
    id: 'lead_name',
    message: "Great — let's get to know you.\n\nWhat's your name?",
    inputField: 'name',
    inputNext: 'lead_email',
  },
  lead_email: {
    id: 'lead_email',
    message: 'Your email?',
    inputField: 'email',
    inputNext: 'lead_whatsapp',
  },
  lead_whatsapp: {
    id: 'lead_whatsapp',
    message: 'Your WhatsApp number?',
    inputField: 'whatsapp',
    inputNext: 'thank_you',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  FINAL
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  thank_you: {
    id: 'thank_you',
    message: "Thanks — this helps a lot.\n\nWe'll review your requirement and get back within 12–24 hours.\n\nWe take limited projects each month to maintain quality.",
    options: [
      { label: 'Continue on WhatsApp', next: 'exit_whatsapp' },
      { label: 'Send Email', next: 'exit_email' },
    ],
  },
  exit_whatsapp: {
    id: 'exit_whatsapp',
    message: "Great — let's continue on WhatsApp.",
    externalLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I just checked your website and I'd like to discuss my project.")}`,
    end: true,
  },
  exit_email: {
    id: 'exit_email',
    message: 'Perfect — you can share detailed requirements via email.',
    externalLink: `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent('Project Inquiry from Website')}`,
    end: true,
  },
}
