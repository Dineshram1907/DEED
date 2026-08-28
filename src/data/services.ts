import type { TechService } from '../types';

export const SERVICES: TechService[] = [
  {
    number: '01',
    id: 'digital-products',
    category: 'Software & SaaS',
    title: 'Digital Products',
    shortDescription: 'Web applications, software interfaces, and scalable SaaS platforms built for real-world usage.',
    whatWeBuild: [
      'Custom SaaS Web Applications',
      'Interactive Web Tools & Dashboards',
      'Client Portals & Workspaces',
      'Full-Stack TypeScript Platforms'
    ],
    whyItMatters: 'Digital products are the operational core of modern businesses. An unintuitive or brittle product directly limits growth and retention.',
    whatClientGets: [
      'Modular TypeScript codebase',
      'High-performance responsive UI components',
      'Scalable state management & API integrations',
      'Production-grade deployment configuration'
    ],
    image: '/images/services/digital-products.webp'
  },
  {
    number: '02',
    id: 'websites',
    category: 'Web Platforms',
    title: 'Websites',
    shortDescription: 'High-performance business websites and digital experiences engineered for clarity, speed, and conversion.',
    whatWeBuild: [
      'Flagship Company Websites',
      'Product Launch & Marketing Sites',
      'Interactive Case Study Experiences',
      'Editorial Content Architectures'
    ],
    whyItMatters: 'Your website is the primary commercial storefront. It must communicate technical capability and establish trust within seconds.',
    whatClientGets: [
      'Sub-second load times and top Core Web Vitals',
      'Responsive design across every viewport',
      'SEO and social metadata optimization',
      'Clean maintainable markup and styles'
    ],
    image: '/images/services/web-development.webp'
  },
  {
    number: '03',
    id: 'brand-systems',
    category: 'Design Systems',
    title: 'Brand Systems',
    shortDescription: 'Cohesive visual identities, typography architectures, and digital design systems that scale across platforms.',
    whatWeBuild: [
      'Visual Identity & Logo Architecture',
      'Typography & Color Systems',
      'Digital Brand Guidelines',
      'Component Design Tokens'
    ],
    whyItMatters: 'Fragmented design creates confusion. A unified design system enforces consistency and accelerates engineering velocity.',
    whatClientGets: [
      'Structured design token library',
      'Figma component system',
      'Comprehensive usage guidelines',
      'Production asset packages'
    ],
    image: '/images/services/brand-identity.webp'
  },
  {
    number: '04',
    id: 'product-design',
    category: 'UI / UX',
    title: 'Product Design',
    shortDescription: 'User experience strategy, wireframing, high-fidelity interface design, and interactive prototypes.',
    whatWeBuild: [
      'Information Architecture & User Flows',
      'High-Fidelity Interface (UI) Design',
      'Interactive Figma Prototypes',
      'Usability & Workflow Optimization'
    ],
    whyItMatters: 'Great interface design reduces cognitive friction, making complex business workflows feel straightforward and reliable.',
    whatClientGets: [
      'Complete clickable prototype',
      'Production-ready UI mockups',
      'Edge case and responsive states',
      'Developer handoff documentation'
    ],
    image: '/images/services/ui-ux.webp'
  }
];

