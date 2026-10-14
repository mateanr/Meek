export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
  features: string[];
  deliverables: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'marketing' | 'design' | 'production' | 'development';
  categoryLabel: string;
  image: string;
  impact: string;
  description: string;
  tags: string[];
  stats: { label: string; value: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  specialty: string;
  email?: string;
  socials: { type: string; url: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface SiteSettings {
  agencyName: string;
  tagline: string;
  subTagline: string;
  heroHeadline: string;
  heroHighlight: string;
  heroDescription: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  country: string;
  accentColor: string; // hex
  customDomain: string;
}
