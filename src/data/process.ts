import type { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Understanding the problem space',
    description: 'Understand the business, users, goals and constraints.',
    details: [
      'Founder & Business Alignment',
      'User Goals & Behavior Mapping',
      'Technical Constraints & Stack Selection',
      'Strategic Scope Isolation'
    ]
  },
  {
    number: '02',
    title: 'DEFINE',
    subtitle: 'Setting the creative direction',
    description: 'Turn the problem into a clear direction.',
    details: [
      'Brand & Experience Strategy',
      'Information Architecture',
      'Design Token Definitions',
      'Technical Spec Sheet'
    ]
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'Crafting the visual system',
    description: 'Shape the visual system and experience.',
    details: [
      'Editorial Screen Layouts',
      'Interactive Figma Prototypes',
      'Micro-interactions & Motion',
      'Design System Token Specs'
    ]
  },
  {
    number: '04',
    title: 'BUILD',
    subtitle: 'Engineering working code',
    description: 'Turn the design into a working digital product.',
    details: [
      'Modular React & TypeScript Build',
      'Framer Motion Choreography',
      'Semantic CSS & Accessibility',
      'Cross-Device Performance Tuning'
    ]
  },
  {
    number: '05',
    title: 'LAUNCH',
    subtitle: 'Deploying with confidence',
    description: 'Ship, learn and improve.',
    details: [
      'Production Edge Deployment',
      'SEO & Meta Tag Audit',
      'Analytics & Telemetry Setup',
      'Post-Launch Support'
    ]
  }
];
