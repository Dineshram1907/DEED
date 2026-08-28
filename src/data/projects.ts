import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'virundhaalaya',
    number: '01',
    title: 'VIRUNDHAALAYA',
    client: 'Virundhaalaya Hospitality',
    category: 'Brand',
    tags: ['Brand Identity', 'Web Design', 'Digital Experience', 'Menu & Subscriptions'],
    year: '2025',
    description: 'A digital experience for a food business built around its menu, ordering, catering and subscription journeys.',
    longDescription: 'Virundhaalaya required an immersive digital presence that reflects its culinary heritage while streamlining multi-tier customer touchpoints. DEED brought strategy, brand aesthetics, and custom web development together to build a platform that turns food discovery into effortless orders, catering requests, and recurring meal subscriptions.',
    challenge: 'A real food business needed a digital experience that makes its offering easier to discover and act on across menu browsing, catering packages, and meal plans.',
    solution: 'We engineered an editorial web experience featuring intuitive menu navigation, appetising culinary visual direction, and responsive booking and subscription flows.',
    status: 'Completed • Live',
    externalUrl: 'https://www.virundhalayaa.com/',
    liveUrlLabel: 'Visit Live Project →',
    heroImage: '/images/work/virundhaalaya/hero.webp',
    secondaryImage: '/images/work/virundhaalaya/secondary.webp',
    gallery: [
      '/images/work/virundhaalaya/hero.webp',
      '/images/work/virundhaalaya/secondary.webp',
      '/images/work/virundhaalaya/gallery-1.webp'
    ],
    deliverables: [
      'Brand Identity & Visual System',
      'Editorial Web Design',
      'Menu & Ordering UX',
      'Catering & Subscription Architecture',
      'TypeScript Frontend Development'
    ],
    isClientWork: true,
    layoutType: 'large'
  },
  {
    id: 'nexovate',
    number: '02',
    title: 'NEXOVATE',
    client: 'Nexovate Education',
    category: 'Product',
    tags: ['Edutech Product', 'UI/UX Architecture', 'Web Application', 'TypeScript'],
    year: '2026',
    description: 'An edutech platform designed and developed to empower students to learn things that create real value in their lives.',
    longDescription: 'Nexovate believes students should not only consume information—they should acquire practical knowledge and skills that create tangible real-world value. DEED is designing and developing the core Nexovate product experience around this philosophy.',
    challenge: 'Designing an educational interface that keeps learners active, focused on skill application, and motivated without distraction.',
    solution: 'Formulating a tokenized modular interface with contextual progress tracking, interactive skill canvases, and low-latency canvas rendering.',
    status: 'Currently in development',
    heroImage: '/images/work/nexovate/hero.webp',
    secondaryImage: '/images/work/nexovate/secondary.webp',
    gallery: [
      '/images/work/nexovate/hero.webp',
      '/images/work/nexovate/secondary.webp',
      '/images/work/nexovate/gallery-1.webp'
    ],
    deliverables: [
      'Edutech Product UX Strategy',
      'Interface Architecture',
      'Interactive Figma Prototypes',
      'React & TypeScript Engineering'
    ],
    isClientWork: true,
    layoutType: 'wide'
  }
];
