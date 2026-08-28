export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  year: string;
  description: string;
  longDescription: string;
  challenge: string;
  approach: string;
  solution?: string;
  whatWeBuilt: string[];
  designSystemOverview?: string;
  technologies: string[];
  outcome: string;
  status?: string;
  externalUrl?: string;
  liveUrlLabel?: string;
  heroImage: string;
  secondaryImage?: string;
  gallery: string[];
  deliverables: string[];
  isClientWork: boolean;
}

export interface OwnProductStory {
  id: string;
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  headline: string;
  description: string;
  status: string;
  heroImage: string;
  problem: string;
  vision: string;
  whatItDoes: string;
  coreExperience: {
    title: string;
    description: string;
  }[];
  principles: {
    title: string;
    description: string;
  }[];
  currentStage: string;
  futureDirection: string;
  pillars?: {
    question: string;
    answer: string;
    bullet: string;
  }[];
  steps?: {
    num: string;
    label: string;
    desc: string;
  }[];
}

export interface TechService {
  number: string;
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description?: string;
  whatWeBuild: string[];
  deliverables?: string[];
  whyItMatters: string;
  whatClientGets: string[];
  image: string;
}

export interface Service extends TechService {}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  keyOutcome?: string;
}

export interface CapabilityCategory {
  title: string;
  description: string;
  items: string[];
}

export interface Principle {
  number: string;
  title: string;
  tagline?: string;
  description: string;
}

export interface ProjectInquiryData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  projectOverview: string;
  services: string[];
  budget: string;
  timeline: string;
  botcheck?: string;
}


