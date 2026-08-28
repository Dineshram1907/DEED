import type { OwnProductStory } from '../types';

export const IDENTITY_PRODUCT: OwnProductStory = {
  id: 'identity',
  slug: '/products/identity',
  badge: 'PROPRIETARY PRODUCT',
  title: 'Identity',
  tagline: "A system for becoming the person you're trying to become.",
  headline: 'Identity helps people define who they want to become, establish meaningful goals, and build systems around those goals.',
  description: 'Identity is an internal product currently being designed and engineered by DEED. It approaches personal trajectory and habit formation with the same systems-level precision we apply to software architecture.',
  status: 'In Active Development',
  heroImage: '/images/work/identity/identity-product-ui.jpg',
  problem: 'Most goal-setting approaches fail because they focus only on outcomes rather than systems and identity. Without structured clarity on personal standards and daily trajectory, long-term ambitions dissolve into passive drift.',
  vision: 'To build a focused digital system where individuals can architect who they want to become, connect high-level goals with daily actions, and maintain clear visibility over their long-term trajectory.',
  whatItDoes: 'Identity provides a structured workspace to define personal standards, align milestone trajectories, and track consistency without noisy gamification or superficial metrics.',
  coreExperience: [
    {
      title: 'Identity Definition',
      description: 'Define your core principles, aspirational standards, and non-negotiable personal values.'
    },
    {
      title: 'Trajectory & Milestones',
      description: 'Break long-term ambitions into logical stages and clear operational priorities.'
    },
    {
      title: 'Daily System Alignment',
      description: 'Connect high-level identity goals directly with daily execution rituals.'
    },
    {
      title: 'Progress Visibility',
      description: 'Review consistency and trajectory feedback loops over weeks and months.'
    }
  ],
  principles: [
    {
      title: 'Systems Over Motivation',
      description: 'Sustainable change comes from reliable environments and deliberate systems, not transient bursts of motivation.'
    },
    {
      title: 'Clarity Over Complexity',
      description: 'A tool should illuminate your focus, not create administrative overhead or excessive data entry.'
    },
    {
      title: 'Long-Term Compounding',
      description: 'Small, non-negotiable daily actions compound into significant character and capability evolution over time.'
    }
  ],
  currentStage: 'Concept & Interface Architecture Phase. Currently refining core user workflows and interactive prototypes.',
  futureDirection: 'Private testing with early builders and founders, followed by web platform availability.'
};

