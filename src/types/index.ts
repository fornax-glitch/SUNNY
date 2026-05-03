export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  category: 'residential' | 'commercial' | 'both';
}

export interface ServicePillar {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  services: ServiceItem[];
  cta: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  location: string;
  rating: number;
  text: string;
  clientType: 'residential' | 'commercial';
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CoverageArea {
  province: string;
  abbreviation: string;
  cities: string[];
  active: boolean;
  focus: 'primary' | 'secondary' | 'tertiary';
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  before: string;
  after: string;
  service: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  serviceType: string;
  location: string;
  message?: string;
}

export interface TrustedClient {
  id: string;
  name: string;
  category: string;
  placeholder: string;
}
