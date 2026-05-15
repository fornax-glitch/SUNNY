export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  category: 'residential' | 'commercial' | 'both' | 'interior' | 'exterior';
}

export type ClientType = 'residential' | 'commercial' | 'property-manager';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  location: string;
  rating: number;
  text: string;
  clientType: ClientType;
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
  phone: string;
  serviceType: string;
  cityProvince: string;
  message?: string;
}

export interface TrustedClient {
  id: string;
  name: string;
  category: string;
  placeholder: string;
}

export type TrustStatTier = 'gold' | 'silver' | 'bronze';

export interface TrustStat {
  value: string;
  label: string;
  sublabel?: string;
  tier: TrustStatTier;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  service: string;
  location: string;
  summary: string;
  headline: string;
  before: string;
  after: string;
  metrics?: string;
}
