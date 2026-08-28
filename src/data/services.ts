import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    number: '01',
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'Visual identities that give businesses a clear and distinctive direction.',
    deliverables: [
      'Visual Strategy & Positioning',
      'Logo & Symbol Architecture',
      'Typography Systems',
      'Brand Guidelines'
    ],
    image: '/images/services/brand-identity.webp'
  },
  {
    number: '02',
    id: 'web-design',
    title: 'Web Design',
    description: 'Websites designed around clarity, usability and conversion.',
    deliverables: [
      'Editorial Layout Design',
      'Responsive UX Architecture',
      'Visual Storytelling',
      'Conversion Flow Design'
    ],
    image: '/images/services/web-design.webp'
  },
  {
    number: '03',
    id: 'web-development',
    title: 'Web Development',
    description: 'Fast, responsive and maintainable digital experiences built properly.',
    deliverables: [
      'React & TypeScript Engineering',
      'Vite & Next.js Architecture',
      'Tailwind CSS & Animation',
      'Core Web Vitals Optimization'
    ],
    image: '/images/services/web-development.webp'
  },
  {
    number: '04',
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Interfaces that make complex products feel simple.',
    deliverables: [
      'Information Architecture',
      'High-Fidelity UI Design',
      'Interactive Micro-Animations',
      'Usability Audits'
    ],
    image: '/images/services/ui-ux.webp'
  },
  {
    number: '05',
    id: 'digital-products',
    title: 'Digital Products',
    description: 'From early product thinking to polished interfaces and working experiences.',
    deliverables: [
      '0-to-1 Product Strategy',
      'Feature Scope & Mapping',
      'SaaS Interface Engineering',
      'User Journey Optimization'
    ],
    image: '/images/services/digital-products.webp'
  },
  {
    number: '06',
    id: 'design-systems',
    title: 'Design Systems',
    description: 'Reusable visual and interaction systems that keep products consistent.',
    deliverables: [
      'Design Token Architecture',
      'React Component Libraries',
      'Figma System Libraries',
      'Documentation Infrastructure'
    ],
    image: '/images/services/design-systems.webp'
  }
];
