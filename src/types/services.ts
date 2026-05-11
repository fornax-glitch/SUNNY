export type ServiceAudience = 'residential' | 'commercial' | 'both';

export type ServiceSlug = string;
export type CategorySlug = string;

export interface NestedService {
  slug: ServiceSlug;
  title: string;
  icon?: string;
  description?: string;
  features?: string[];
  audience?: ServiceAudience[];
}

export interface ServiceCategory {
  slug: CategorySlug;
  title: string;
  description?: string;
  image?: string;
  services: NestedService[];
}


