// ── Types ──────────────────────
export type ChatOption = {
  label: string
  next: string
}

export type ChatNode = {
  id: string
  message: string
  options?: ChatOption[]
  freeText?: boolean
  freeTextNext?: string
  inputField?: 'name' | 'email' | 'whatsapp'
  inputNext?: string
  externalLink?: string
  end?: boolean
}

// ── Constants ──────────────────
export const WHATSAPP_NUMBER = '918431077234'
export const EMAIL_ADDRESS = 'info@luminexistechnologies.com'

// ── Chat Nodes ─────────────────
export const CHAT_NODES: Record<string, ChatNode> = {

  // START
  start: {
    id: 'start',
    message:
      "👋 *Welcome to Luminexis*\n\nWe design high-performance websites, UI/UX systems, SEO growth engines, and business automation.\n\n💡 Tell me what you're looking for — I’ll guide you step-by-step.",
    options: [
      { label: '🌐 Build a Website', next: 'web_type' },
      { label: '🎨 UI/UX Design', next: 'uiux_stage' },
      { label: '🚀 SEO & Growth', next: 'seo_situation' },
      { label: '⚙️ Business Automation', next: 'automation_type' },
      { label: '💬 Talk to Expert', next: 'lead_name' },
    ],
  },

  // WEBSITE FLOW
  web_type: {
    id: 'web_type',
    message: "Great choice 👍\n\nWhat are you planning to build?",
    options: [
      { label: 'Business Website', next: 'biz_goal' },
      { label: 'E-commerce Store', next: 'ecom_product' },
      { label: 'Landing Page', next: 'lp_purpose' },
      { label: 'Not sure yet', next: 'unsure_goal' },
      { label: "I'll explain", next: 'free_explain' },
    ],
  },

  biz_goal: {
    id: 'biz_goal',
    message: "What's your primary goal?",
    options: [
      { label: 'Get more leads', next: 'biz_content' },
      { label: 'Show my services', next: 'biz_content' },
      { label: 'Build strong brand presence', next: 'biz_content' },
    ],
  },

  biz_content: {
    id: 'biz_content',
    message: "Do you already have content ready?",
    options: [
      { label: 'Yes', next: 'biz_pages' },
      { label: 'No', next: 'biz_pages' },
    ],
  },

  biz_pages: {
    id: 'biz_pages',
    message: "How many pages do you need?",
    options: [
      { label: '1–5', next: 'lead_name' },
      { label: '5–10', next: 'lead_name' },
      { label: '10+', next: 'lead_name' },
      { label: 'Not sure', next: 'lead_name' },
    ],
  },

  // ECOMMERCE
  ecom_product: {
    id: 'ecom_product',
    message: "Nice 🛒\n\nWhat will you sell?",
    options: [
      { label: 'Physical', next: 'ecom_count' },
      { label: 'Digital', next: 'ecom_count' },
      { label: 'Both', next: 'ecom_count' },
    ],
  },

  ecom_count: {
    id: 'ecom_count',
    message: "Approx product count?",
    options: [
      { label: '1–10', next: 'ecom_features' },
      { label: '10–50', next: 'ecom_features' },
      { label: '50+', next: 'ecom_features' },
    ],
  },

  ecom_features: {
    id: 'ecom_features',
    message: "What do you need help with?",
    options: [
      { label: 'Payments & Shipping', next: 'lead_name' },
      { label: 'Full store setup', next: 'lead_name' },
      { label: 'Design/UI only', next: 'lead_name' },
    ],
  },

  // LANDING PAGE
  lp_purpose: {
    id: 'lp_purpose',
    message: "What's the goal?",
    options: [
      { label: 'Run ads', next: 'lp_ads' },
      { label: 'Generate leads', next: 'lp_ads' },
      { label: 'Launch product', next: 'lp_ads' },
    ],
  },

  lp_ads: {
    id: 'lp_ads',
    message: "Will you run ads?",
    options: [
      { label: 'Yes', next: 'lead_name' },
      { label: 'Planning', next: 'lead_name' },
      { label: 'No', next: 'lead_name' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BUSINESS AUTOMATION (NEW)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  automation_type: {
    id: 'automation_type',
    message:
      "Smart move ⚙️\n\nWhat would you like to automate?",
    options: [
      { label: 'Sales & CRM', next: 'automation_sales' },
      { label: 'Operations / Workflow', next: 'automation_ops' },
      { label: 'Marketing Automation', next: 'automation_marketing' },
      { label: 'Customer Support', next: 'automation_support' },
      { label: 'Full Business Automation', next: 'automation_scale' },
      { label: "I'll explain", next: 'free_explain' },
    ],
  },

  automation_sales: {
    id: 'automation_sales',
    message: "What do you want to improve in sales?",
    options: [
      { label: 'Lead tracking (CRM)', next: 'automation_tools' },
      { label: 'Auto follow-ups', next: 'automation_tools' },
      { label: 'Pipeline & conversions', next: 'automation_tools' },
    ],
  },

  automation_ops: {
    id: 'automation_ops',
    message: "Which operations?",
    options: [
      { label: 'Workflow automation', next: 'automation_tools' },
      { label: 'Order / inventory flow', next: 'automation_tools' },
      { label: 'Dashboards & reports', next: 'automation_tools' },
    ],
  },

  automation_marketing: {
    id: 'automation_marketing',
    message: "Marketing automation needs?",
    options: [
      { label: 'Email funnels', next: 'automation_tools' },
      { label: 'Ad tracking', next: 'automation_tools' },
      { label: 'Lead nurturing', next: 'automation_tools' },
    ],
  },

  automation_support: {
    id: 'automation_support',
    message: "Support improvements?",
    options: [
      { label: 'Chatbots / AI', next: 'automation_tools' },
      { label: 'Ticketing system', next: 'automation_tools' },
      { label: 'Auto responses', next: 'automation_tools' },
    ],
  },

  automation_scale: {
    id: 'automation_scale',
    message: "Project complexity?",
    options: [
      { label: 'Simple', next: 'automation_tools' },
      { label: 'Moderate', next: 'automation_tools' },
      { label: 'Advanced system', next: 'automation_tools' },
      { label: 'Not sure', next: 'automation_tools' },
    ],
  },

  automation_tools: {
    id: 'automation_tools',
    message: "Do you use any tools currently?",
    options: [
      { label: 'CRM tools', next: 'lead_name' },
      { label: 'E-commerce platforms', next: 'lead_name' },
      { label: 'Custom tools', next: 'lead_name' },
      { label: 'None', next: 'lead_name' },
    ],
  },

  // UI/UX
  uiux_stage: {
    id: 'uiux_stage',
    message: "What do you need?",
    options: [
      { label: 'New design', next: 'uiux_type' },
      { label: 'Redesign', next: 'uiux_existing' },
      { label: 'Improve conversions', next: 'uiux_conversion' },
      { label: "I'll explain", next: 'free_explain' },
    ],
  },

  uiux_type: {
    id: 'uiux_type',
    message: "What are you designing?",
    options: [
      { label: 'Website', next: 'uiux_pages' },
      { label: 'Mobile App', next: 'uiux_pages' },
      { label: 'Dashboard', next: 'uiux_pages' },
    ],
  },

  uiux_pages: {
    id: 'uiux_pages',
    message: "How many screens?",
    options: [
      { label: '1–5', next: 'lead_name' },
      { label: '5–15', next: 'lead_name' },
      { label: '15+', next: 'lead_name' },
      { label: 'Not sure', next: 'lead_name' },
    ],
  },

  uiux_existing: {
    id: 'uiux_existing',
    message: "What needs improvement?",
    options: [
      { label: 'Design', next: 'lead_name' },
      { label: 'UX', next: 'lead_name' },
      { label: 'Both', next: 'lead_name' },
    ],
  },

  uiux_conversion: {
    id: 'uiux_conversion',
    message: "Goal?",
    options: [
      { label: 'More leads', next: 'lead_name' },
      { label: 'More sales', next: 'lead_name' },
      { label: 'Reduce bounce', next: 'lead_name' },
    ],
  },

  // SEO
  seo_situation: {
    id: 'seo_situation',
    message: "Current situation?",
    options: [
      { label: 'New site', next: 'lead_name' },
      { label: 'Low traffic', next: 'lead_name' },
      { label: 'Ranking dropped', next: 'lead_name' },
      { label: 'Not sure', next: 'lead_name' },
      { label: "I'll explain", next: 'free_explain' },
    ],
  },

  // FREE INPUT
  free_explain: {
    id: 'free_explain',
    message: "Tell me your requirement 👇",
    freeText: true,
    freeTextNext: 'lead_name',
  },

  // LEAD FLOW
  lead_name: {
    id: 'lead_name',
    message: "Your name?",
    inputField: 'name',
    inputNext: 'lead_email',
  },

  lead_email: {
    id: 'lead_email',
    message: "Your email?",
    inputField: 'email',
    inputNext: 'lead_whatsapp',
  },

  lead_whatsapp: {
    id: 'lead_whatsapp',
    message: "WhatsApp number?",
    inputField: 'whatsapp',
    inputNext: 'thank_you',
  },

  // FINAL
  thank_you: {
    id: 'thank_you',
    message:
      "🎉 Done!\n\nWe’ll contact you within 12–24 hours.",
    options: [
      { label: '💬 WhatsApp', next: 'exit_whatsapp' },
      { label: '📧 Email', next: 'exit_email' },
    ],
  },

  exit_whatsapp: {
    id: 'exit_whatsapp',
    message: "Opening WhatsApp...",
    externalLink: `https://wa.me/${WHATSAPP_NUMBER}`,
    end: true,
  },

  exit_email: {
    id: 'exit_email',
    message: "Opening email...",
    externalLink: `mailto:${EMAIL_ADDRESS}`,
    end: true,
  },

}