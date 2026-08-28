export interface IdentityProductStory {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  headline: string;
  description: string;
  status: string;
  heroImage: string;
  pillars: {
    question: string;
    answer: string;
    bullet: string;
  }[];
  steps: {
    num: string;
    label: string;
    desc: string;
  }[];
}

export const IDENTITY_PRODUCT: IdentityProductStory = {
  id: 'identity',
  badge: 'A PRODUCT BY DEED',
  title: 'IDENTITY',
  tagline: 'Who are you becoming?',
  headline: 'A digital experience designed to help people create a new identity, define who they want to become, and move toward meaningful goals.',
  description: 'Identity is DEED’s proprietary product—an operating system for deliberate personal transformation, character architecture, and goal execution.',
  status: 'In Active Development • Private Build',
  heroImage: '/images/work/identity/identity-product-ui.jpg',
  pillars: [
    {
      question: 'WHAT IS IT?',
      answer: 'A digital architecture and web application designed to help people define their aspirational identity model and turn intention into compounding reality.',
      bullet: 'Personal Transformation Architecture'
    },
    {
      question: 'WHY DOES IT EXIST?',
      answer: 'Most people drift without a clear definition of who they want to become. Identity replaces vague resolutions with structured trajectory and intentional accountability.',
      bullet: 'Bridging Ambition & Daily Execution'
    },
    {
      question: 'WHO IS IT FOR?',
      answer: 'Builders, founders, designers, and ambitious individuals who refuse passive drift and choose deliberate, self-directed evolution.',
      bullet: 'High-Agency Builders & Thinkers'
    },
    {
      question: 'WHAT DOES IT HELP PEOPLE DO?',
      answer: 'Define core identity pillars, establish milestone trajectories, commit to daily non-negotiable rituals, and visually observe progress compound over time.',
      bullet: 'Clarity, Trajectory & Compounding Growth'
    }
  ],
  steps: [
    {
      num: '01',
      label: 'Identity Model',
      desc: 'Formulate your aspirational archetypes, core principles, and non-negotiable standards.'
    },
    {
      num: '02',
      label: 'Trajectory Roadmap',
      desc: 'Map long-term milestones with connected dependency paths and dynamic target dates.'
    },
    {
      num: '03',
      label: 'Daily Intention Commitments',
      desc: 'Lock in focused daily action sprints linked directly to your core identity model.'
    },
    {
      num: '04',
      label: 'Compound Transformation',
      desc: 'Measure consistency, eliminate friction, and review real progress feedback loops.'
    }
  ]
};
