export interface RoleConfig {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    titlePart1: string;
    titleGradient: string;
    tagline: string;
    description: string;
  };
}

export const roleConfigs: Record<string, RoleConfig> = {
  'freelance-seo-consultant-perth': {
    slug: 'freelance-seo-consultant-perth',
    metadata: {
      title: 'Freelance SEO Consultant Perth | Vince Baker',
      description: 'Perth Freelance SEO Specialist building semantic & technical search frameworks. If I can fix it straight away, no charge. Call 0480 286 282.',
    },
    hero: {
      titlePart1: 'Freelance SEO ',
      titleGradient: 'Consultant Perth',
      tagline: 'AI & Digital Specialist',
      description: 'Moving beyond keyword stuffing. Engineering semantic architectures, technical website audits, and data attribution.'
    }
  },
  'freelance-google-ads-consultant-perth': {
    slug: 'freelance-google-ads-consultant-perth',
    metadata: {
      title: 'Freelance Google Ads Consultant Perth | Vince Baker',
      description: 'Freelance Google Ads Consultant in Perth. Optimising feeds, tracking, and campaign architectures.',
    },
    hero: {
      titlePart1: 'Freelance Google Ads ',
      titleGradient: 'Consultant Perth',
      tagline: 'Growth Marketing Specialist',
      description: 'Data-driven Google Ads frameworks. Maximising ROAS through precise intent targeting and conversion architecture.'
    }
  },
  'freelance-digital-specialist-perth': {
    slug: 'freelance-digital-specialist-perth',
    metadata: {
      title: 'Freelance Digital Specialist Perth | Vince Baker',
      description: 'Perth Freelance Digital Specialist building digital infrastructure and automation systems.',
    },
    hero: {
      titlePart1: 'Freelance Digital ',
      titleGradient: 'Specialist Perth',
      tagline: 'Systems & Automation Specialist',
      description: 'Full-stack digital architecture. Building integrated systems across marketing, sales, and operations.'
    }
  },
  'freelance-ai-consultant-perth': {
    slug: 'freelance-ai-consultant-perth',
    metadata: {
      title: 'Freelance AI Consultant Perth | Vince Baker',
      description: 'Freelance AI & Automation Consultant in Perth. n8n workflows, APIs & chatbots.',
    },
    hero: {
      titlePart1: 'Freelance AI ',
      titleGradient: 'Consultant Perth',
      tagline: 'AI & Automation Specialist',
      description: 'Implementing custom LLM workflows, conversational interfaces, and intelligent data pipelines.'
    }
  }
};
