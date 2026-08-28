import type { CapabilityCategory } from '../types';

export const CAPABILITIES_CATEGORIES: CapabilityCategory[] = [
  {
    title: 'Design & Art Direction',
    description: 'Bespoke visual systems engineered for modern digital touchpoints.',
    items: [
      'Brand Identity',
      'Art Direction',
      'Typography Systems',
      'UI & Interface Design',
      'Design Token Architecture',
      'Motion & Micro-interactions',
      'Design Systems'
    ]
  },
  {
    title: 'Technology & Frontend',
    description: 'Clean, performant TypeScript and React codebases built for scale.',
    items: [
      'Web Development',
      'Frontend Engineering',
      'React & TypeScript',
      'Vite & Next.js Architecture',
      'Framer Motion & WebGL',
      'Headless CMS (Sanity/Strapi)',
      'API & Backend Integration'
    ]
  },
  {
    title: 'Product & Strategy',
    description: 'Turning zero-to-one business ideas into validated product platforms.',
    items: [
      'Digital Product Strategy',
      'UX Research & Mapping',
      'Information Architecture',
      'Conversion Rate Optimization',
      'Performance & Web Vitals',
      'Accessibility (WCAG AA)',
      'Launch Support & Analytics'
    ]
  }
];
