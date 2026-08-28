export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  category: 'Brand' | 'Product' | 'Web' | 'UI/UX' | 'Development' | 'Education';
  tags: string[];
  year: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  status?: string;
  externalUrl?: string;
  liveUrlLabel?: string;
  heroImage: string;
  secondaryImage?: string;
  gallery: string[];
  deliverables: string[];
  isClientWork: boolean;
  layoutType: 'large' | 'tall' | 'wide' | 'standard';
  metrics?: ProjectMetric[];
}

export interface OwnProduct {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  headline: string;
  description: string;
  longStory: string;
  status: string;
  heroImage: string;
  highlights: string[];
  externalUrl?: string;
}

export interface Service {
  number: string;
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  keyOutcome?: string;
}

export interface Principle {
  number: string;
  title: string;
  tagline?: string;
  highlight?: string;
  description: string;
  tag?: string;
}

export interface CapabilityCategory {
  title: string;
  description: string;
  items: string[];
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
