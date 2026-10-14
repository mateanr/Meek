import { SiteSettings, ServiceItem, PortfolioItem, TeamMember, Testimonial } from '../types/site';

export const initialSiteSettings: SiteSettings = {
  agencyName: 'MEEK.AE',
  tagline: 'Marketing Reinvented!',
  subTagline: 'Pioneering Full-Service Creative Agency • Dubai, UAE',
  heroHeadline: 'We Create Digital Experiences That',
  heroHighlight: 'Ignite Real Growth',
  heroDescription:
    'With over a decade of experience, Meek Digital Marketing LLC is a pioneering, design-led creative agency. We unify marketing strategy, intuitive UI/UX design, performance advertising, and robust web engineering under one visionary roof.',
  phone: '+971 56 695 9155',
  email: 'meet@meek.ae',
  address: 'Al Garhood, Dubai',
  city: 'Dubai',
  country: 'United Arab Emirates',
  accentColor: '#ff385c', // Grupi theme signature crimson
  customDomain: 'meek.ae',
};

export const servicesData: ServiceItem[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX & Web Design',
    subtitle: 'Human-Centered Digital Product Architecture',
    description:
      'We craft visually captivating, intuitive digital interfaces engineered to turn curious visitors into loyal brand advocates while reducing user friction to zero.',
    icon: 'Sparkles',
    badge: 'Design Excellence',
    features: [
      'Interactive Design Systems & Figma Components',
      'Wireframing & High-Fidelity Rapid Prototyping',
      'User Journey & Conversion Funnel Optimization',
      'Accessibility (WCAG) & Mobile-First Experience',
    ],
    deliverables: ['Figma Design Files', 'Design Tokens', 'Clickable Prototype', 'Component Library'],
  },
  {
    id: 'video',
    title: 'Video Production',
    subtitle: 'Cinematic Commercials & Motion Storytelling',
    description:
      'From 4K commercials shot on-location across the UAE to viral short-form social reels and 3D product animations, we tell unforgettable brand stories that captivate.',
    icon: 'Video',
    badge: 'High Impact',
    features: [
      'Commercials & Brand Storytelling',
      '3D Motion Graphics & Visual Effects (VFX)',
      'Product Demos & High-Converting Video Ads',
      'On-Location Film Crews across Dubai & Abu Dhabi',
    ],
    deliverables: ['4K Master Edits', 'Vertical Social Formats (9:16)', 'Sound Design & Scoring', 'Color Grading'],
  },
  {
    id: 'marketing',
    title: 'Market Expansion',
    subtitle: 'Algorithmic Growth & Multi-Channel Acquisition',
    description:
      'Data-backed performance advertising, search engine dominance, and targeted growth loops designed to scale customer acquisition and maximize return on ad spend.',
    icon: 'Zap',
    badge: 'ROI Driven',
    features: [
      'Multi-Channel Paid Ads (Meta, Google, TikTok, LinkedIn)',
      'Enterprise SEO & Regional Local Optimization',
      'High-Converting Landing Pages & CRO Audits',
      'Omnichannel Attribution & Real-Time Analytics Dashboards',
    ],
    deliverables: ['Performance Reports', 'Media Buying Strategy', 'Creative Ad Sets', 'Retargeting Funnels'],
  },
  {
    id: 'web-dev',
    title: 'Web & App Development',
    subtitle: 'Ultra-Fast, Secure & Scalable Architecture',
    description:
      'We build blazingly fast, modern web applications, bespoke eCommerce platforms, and custom software solutions with clean code and zero architectural bloat.',
    icon: 'Code',
    badge: 'Clean Code',
    features: [
      'Modern Jamstack & Single-Page Applications',
      'Headless Shopify & Custom eCommerce Portals',
      'API Integrations, Payment Gateways & CRM Sync',
      'Sub-Second Lighthouse Performance & Global CDN',
    ],
    deliverables: ['Production Codebase', 'Automated CI/CD Pipeline', 'Technical Documentation', 'Security Audit'],
  },
  {
    id: 'cloud',
    title: 'Cloud Computing & DevOps',
    subtitle: 'Resilient Infrastructure & Automated Scaling',
    description:
      'Architecting resilient cloud environments, serverless backends, automated CI/CD deployment pipelines, and bulletproof uptime guarantees for demanding digital products.',
    icon: 'Cloud',
    badge: '99.99% Uptime',
    features: [
      'Cloud Architecture on GCP, AWS & Azure',
      'Docker & Containerized Microservices',
      'Continuous Integration & Zero-Downtime Deployment',
      'Database Optimization & Global Caching',
    ],
    deliverables: ['Infrastructure as Code', 'Deployment Scripts', 'Backup Protocol', 'Monitoring Dashboard'],
  },
  {
    id: 'security',
    title: 'Cyber Security',
    subtitle: 'Enterprise Defense & Threat Mitigation',
    description:
      'Safeguarding your digital assets, client data, and proprietary systems with comprehensive penetration testing, vulnerability patching, and compliance advisory.',
    icon: 'ShieldCheck',
    badge: 'Zero Trust',
    features: [
      'Web Application Vulnerability Assessments',
      'Data Encryption & SSL/TLS Configuration',
      'DDoS Protection & Web Application Firewall (WAF)',
      'Compliance & Security Audits for UAE Businesses',
    ],
    deliverables: ['Vulnerability Report', 'Hardening Playbook', 'Security Certificate', 'Incident Response Plan'],
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'regional-scale',
    title: 'Regional Scale & Brand Launch',
    client: 'Apex Retail UAE',
    category: 'marketing',
    categoryLabel: 'Market Expansion',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    impact: '+215% Acquisition in 90 Days',
    description:
      'Executed a synchronized omni-channel acquisition campaign across the GCC region, leveraging predictive ad bidding algorithms and localized creative variants.',
    tags: ['Paid Media', 'Growth Funnel', 'GCC Expansion', 'Attribution'],
    stats: [
      { label: 'Customer Growth', value: '+215%' },
      { label: 'CAC Reduction', value: '-38%' },
      { label: 'Ad Spend ROI', value: '4.6x' },
    ],
  },
  {
    id: 'saas-portal',
    title: 'Enterprise SaaS Interface',
    client: 'Logix Cloud Logistics',
    category: 'design',
    categoryLabel: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    impact: '4.8x Conversion Rate Lift',
    description:
      'Architected a design system and streamlined multi-step dashboard workflows for an international freight forwarding platform operating across UAE and Europe.',
    tags: ['Design System', 'Figma', 'SaaS Dashboard', 'User Testing'],
    stats: [
      { label: 'Task Speed', value: '+62%' },
      { label: 'Conversion', value: '4.8x' },
      { label: 'Active Retention', value: '94%' },
    ],
  },
  {
    id: 'luxury-commercial',
    title: 'Cinematic Brand Commercial',
    client: 'Vanguard Luxury Properties',
    category: 'production',
    categoryLabel: 'Video Production',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    impact: '1.2M Organic Social Impressions',
    description:
      'Produced a high-concept 4K commercial shot on-location across Downtown Dubai and Palm Jumeirah capturing the spirit of architectural prestige.',
    tags: ['Cinematography', '4K Drone', 'Color Grading', 'Sound Design'],
    stats: [
      { label: 'Impressions', value: '1.2M+' },
      { label: 'Video Completion', value: '78%' },
      { label: 'Direct Leads', value: '420+' },
    ],
  },
  {
    id: 'headless-ecommerce',
    title: 'Headless E-Commerce Portal',
    client: 'Silk & Sand Boutique Dubai',
    category: 'development',
    categoryLabel: 'Web Development',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    impact: '0.4s Global Load Time',
    description:
      'Engineered an ultra-fast headless storefront with real-time currency conversion (AED, USD, EUR, SAR), instant search, and automated inventory sync.',
    tags: ['Headless CMS', 'Stripe & Apple Pay', 'Tailwind', 'Edge CDN'],
    stats: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Mobile Sales', value: '+142%' },
      { label: 'Checkout Abandonment', value: '-29%' },
    ],
  },
  {
    id: 'fintech-brand',
    title: 'Fintech Mobile Design & Onboarding',
    client: 'DirhamFlow Pay',
    category: 'design',
    categoryLabel: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    impact: '98% KYC Completion Rate',
    description:
      'Redesigned the biometric registration journey and money transfer UI, making instant remittances as intuitive as sending a text message.',
    tags: ['Mobile UX', 'Micro-interactions', 'Security UX', 'Figma'],
    stats: [
      { label: 'KYC Success', value: '98%' },
      { label: 'App Store Rating', value: '4.9★' },
      { label: 'Daily Transfers', value: '$2.4M' },
    ],
  },
  {
    id: 'cloud-migration',
    title: 'Multi-Region Cloud Infrastructure',
    client: 'Gulf Stream Media Group',
    category: 'development',
    categoryLabel: 'Web Development',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    impact: '100% Zero-Downtime Guarantee',
    description:
      'Migrated legacy WordPress instances into a high-throughput, edge-cached serverless architecture capable of handling viral breaking news surges.',
    tags: ['Cloudflare Edge', 'DevOps', 'Zero-Downtime', 'Microservices'],
    stats: [
      { label: 'Server Cost', value: '-65%' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Peak Concurrency', value: '50k req/s' },
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'matean-rahmat',
    name: 'Matean Rahmat',
    role: 'Owner & Director',
    bio: 'Experienced Dubai-based marketing specialist, strategic visionary, and digital creative leader championing innovative client growth and high-performance branding.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    specialty: 'Agency Vision, Growth Strategy & Client Direction',
    email: 'meet@meek.ae',
    socials: [
      { type: 'website', url: 'https://meek.ae' },
      { type: 'email', url: 'mailto:meet@meek.ae' },
    ],
  },
  {
    id: 'tariq-mansoor',
    name: 'Tariq Mansoor',
    role: 'Head of Creative & Video',
    bio: 'Visual storyteller specializing in commercial film direction, luxury brand aesthetics, 3D motion graphics, and viral campaign concepts.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    specialty: 'Commercial Direction, 4K Cinematography, Motion Design',
    socials: [
      { type: 'linkedin', url: '#' },
      { type: 'portfolio', url: '#' },
    ],
  },
  {
    id: 'sara-alhashemi',
    name: 'Sara Al-Hashemi',
    role: 'Performance & Growth Lead',
    bio: 'Data-driven marketer obsessed with algorithmic paid media bidding, hyper-segmented funnels, and predictive retention analytics across the GCC.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    specialty: 'Algorithmic Ads, Funnel Engineering, Analytics',
    socials: [
      { type: 'linkedin', url: '#' },
      { type: 'twitter', url: '#' },
    ],
  },
  {
    id: 'rashid-khalid',
    name: 'Rashid Khalid',
    role: 'Lead Full-Stack Engineer',
    bio: 'Architecting ultra-fast, security-hardened web solutions with modern serverless tech, sub-second TTFB, and zero legacy bloat.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    specialty: 'Next-Gen Jamstack, Cloud DevOps, Performance',
    socials: [
      { type: 'github', url: '#' },
      { type: 'linkedin', url: '#' },
    ],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote:
      'Working with Matean and the Meek team transformed our brand footprint in Dubai. Their agile sprints and sharp creative execution delivered 3x our previous acquisition volume in under three months.',
    author: 'Kareem El-Sayed',
    role: 'Managing Director',
    company: 'Apex Retail Group',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'Meek Digital eliminated the typical agency bureaucracy. Everything was direct, agile, and laser-focused on business outcomes. The new web experience is blazingly fast and conversion rates skyrocketed.',
    author: 'Fatima Al-Marzouqi',
    role: 'Head of Brand Marketing',
    company: 'Gulf Horizon Ventures',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'Their video production and digital design are among the best in the UAE. From concept to 4K commercial delivery, their precision and aesthetic caliber are second to none.',
    author: 'David Henderson',
    role: 'Chief Commercial Officer',
    company: 'Vanguard Luxury',
    rating: 5,
  },
];
