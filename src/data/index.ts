import type { ServicePillar, Testimonial, CoverageArea, Stat, BeforeAfterItem, TrustedClient, TrustStat, ProjectShowcase } from '../types';

// BUSINESS INFO - Update as needed
export const PHONE = '(250) 889-9222';
export const EMAIL = 'sabiri.amin@gmail.com';
export const ADDRESS = 'Victoria, BC (HQ) — Serving Vancouver Island ';
export const LEGAL_NAME = 'SunnySideUp Building Maintenance';

// BUSINESS HOURS PLACEHOLDER
// TODO: Replace with real business hours — Waiting for client input
export const BUSINESS_HOURS = [
  { day: 'Monday', hours: '7am - 7pm PT' },
  { day: 'Tuesday', hours: '7am - 7pm PT' },
  { day: 'Wednesday', hours: '7am - 7pm PT' },
  { day: 'Thursday', hours: '7am - 7pm PT' },
  { day: 'Friday', hours: '7am - 7pm PT' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'cleaning',
    slug: 'cleaning',
    name: 'Cleaning Services',
    tagline: 'Interior & Exterior Perfection.',
    description: 'Complete residential and commercial cleaning solutions across Vancouver Island, including deep cleaning, pressure washing, window cleaning, and carpet cleaning.',
    image: '/images/cleaning-service.jpg',
    cta: 'Explore Cleaning Services',
    services: [
      // SUB-SECTION A: Interior Cleaning
      {
        id: 'residential-deep-clean',
        icon: '🏠',
        title: 'Residential Deep Clean',
        description: 'Full home deep cleaning service. Eco-friendly certified products. One-time or recurring options.',
        features: ['Full home detailing', 'Eco-friendly products', 'One-time or recurring'],
        category: 'interior',
      },
      {
        id: 'move-in-out',
        icon: '📦',
        title: 'Move-In / Move-Out Cleaning',
        description: 'Complete property turnover cleaning. Ideal for landlords and tenants. Same-day availability.',
        features: ['Landlord/tenant ready', 'Same-day service', 'Full turnover'],
        category: 'residential' as any, // TEMP: interior
      },
      {
        id: 'recurring-maid',
        icon: '✨',
        title: 'Recurring Maid Service',

features: ['Weekly/bi-weekly/monthly', 'Same cleaner', 'Security-Cleared & Professionally Vetted'],
        category: 'residential' as any, // TEMP: interior
      },
      {
        id: 'commercial-janitorial',
        icon: '🏢',
        title: 'Commercial Janitorial',
        description: 'Banks, supermarkets, big-box retail. Security-cleared & background-checked staff. After-hours & overnight scheduling. Detailed service reports & compliance documentation. Eco-certified & food-safe cleaning products. Customized multi-location service plans.',
        features: ['Security-cleared staff', 'After-hours', 'Compliance reports', 'Multi-location', 'Eco/food-safe'],
        category: 'commercial',
      },
      // SUB-SECTION B: Exterior Cleaning
      {
        id: 'pressure-washing',
        icon: '⭐💧',
        title: 'Pressure Washing ⭐',
        description: 'Residential driveways & walkways. Commercial parking lots & sidewalks. Stucco & brick cleaning. Decks, patios & pavers. Fences & pool areas.',
        features: ['Driveways/walkways', 'Parking lots', 'Stucco/brick', 'Decks/patios', 'Fences/pools'],
        category: 'exterior',
      },
      {
        id: 'deck-patio-washing',
        icon: '🪵',
        title: 'Deck & Patio Washing',
        description: 'Rejuvenate outdoor living spaces.',
        features: ['Wood/composite', 'Paver cleaning'],
        category: 'both' as any, // TEMP: exterior
      },
      {
        id: 'parking-lots-sidewalks',
        icon: '🅿️',
        title: 'Parking Lots & Sidewalks',
        description: 'Commercial hardscape restoration.',
        features: ['Oil/gum removal', 'High-traffic'],
        category: 'both' as any, // TEMP: exterior
      },
      {
        id: 'window-cleaning',
        icon: '🪟',
        title: 'Window Cleaning',
        description: 'Streak-free interior and exterior window cleaning for residential homes and commercial storefronts.',
        features: ['Residential window cleaning', 'Commercial storefront windows', 'Interior & exterior cleaning', 'Streak-free finish'],
        category: 'both',
      },
      {
        id: 'carpet-cleaning',
        icon: '🧽',
        title: 'Carpet Cleaning',
        description: 'Deep extraction carpet cleaning with spot & stain treatment for homes and businesses.',
        features: ['Residential carpet cleaning', 'Commercial carpet cleaning', 'Deep extraction cleaning', 'Spot & stain treatment'],
        category: 'both',
      },
      {
        id: 'stucco-brick-cleaning',
        icon: '🧱',
        title: 'Stucco & Brick Cleaning',
        description: 'Gentle soft-wash techniques for visible curb appeal improvements.',
        features: ['Mold/mildew removal'],
        category: 'both' as any, // TEMP: exterior
      },
    ],
  },
  {
    id: 'handyman',
    slug: 'handyman',
    name: 'Handyman Services',
    tagline: 'Fix It Right. Fix It Once.',
    description: 'Skilled repairs, installations, and maintenance for residential and commercial properties.',
    // TODO: Confirm full handyman service list with client — Waiting for client input
    image: '/images/handyman-service.jpg',
    cta: 'Book a Handyman',
    services: [
      {
        id: 'drywall-repair',
        icon: '🧩',
        title: 'Drywall Repair',
        description: 'Neat, professional drywall patching and finishing for clean, ready-to-use spaces.',
        features: ['Texture matching', 'Smooth finishing', 'Residential & commercial'],
        category: 'both',
      },

      {
        id: 'furniture-assembly',
        icon: '🪑',
        title: 'Furniture & Equipment Assembly',
        description: 'Any brand, residential or commercial.',
        features: ['IKEA to office shelving'],
        category: 'both',
      },
      {
        id: 'carpentry-deck',
        icon: '🔨',
        title: 'General Carpentry & Deck Repairs',
        description: 'Fence, deck, and custom woodwork.',
        features: ['Deck replacement', 'Fence repairs'],
        category: 'residential',
      },
      {
        id: 'commercial-facility',
        icon: '🏪',
        title: 'Commercial Facility Maintenance',
        description: 'Preventive maintenance programs.',
        features: ['Emergency response', 'Multi-site'],
        category: 'commercial',
      },
    ],
  },
];

// COVERAGE - Vancouver Island only
export const COVERAGE_AREAS: CoverageArea[] = [
  {
    province: 'Vancouver Island',
    abbreviation: 'VI',
    cities: ['Victoria', 'Saanich', 'Langford', 'Sidney', 'Nanaimo', 'Duncan', 'Courtenay', 'Campbell River', 'Parksville', 'Comox Valley', 'Qualicum Beach', 'Central Saanich'],
    active: true,
    focus: 'primary',
  },
];

// STATS
// TODO: Confirm real number with client for Properties Serviced — currently showing 12,000+ — Waiting for client input
// TODO: Confirm real number with client for Commercial Clients — currently showing 200+ — Waiting for client input
export const STATS: Stat[] = [
  { value: '25+', label: 'Years in Business', icon: '🏆' },
  { value: '12,000+', label: 'Properties Serviced', icon: '🏠' },
  { value: '200+', label: 'Commercial Clients', icon: '🏢' },
  { value: 'Vancouver Island', label: 'Our Home & Focus', icon: '🏝️' },
];

// TESTIMONIALS - PLACEHOLDERS
// TODO: Replace with real client testimonials — Waiting for client input
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Margaret Chen', // TODO: Replace with real client testimonial — Waiting for client input
    role: 'Homeowner',
    location: 'Victoria, BC',
    rating: 5,
    text: "SunnySideUp has been cleaning our home for 3 years...",
    clientType: 'residential',
    avatar: '👩',
  },
  // ... (add TODO comment to each or here)
];

// TRUSTED CLIENTS - PLACEHOLDERS
// TODO: Replace with real client logos/names — Waiting for client input
export const TRUSTED_CLIENTS: TrustedClient[] = [
  { id: 'tc1', name: 'Island Financial Partners', category: 'Financial', placeholder: '🏦' },
  { id: 'tc2', name: 'Victoria Grocer', category: 'Supermarket', placeholder: '🛒' },
  { id: 'tc3', name: 'Coastal Retail Group', category: 'Big-Box Retail', placeholder: '🏪' },
  { id: 'tc4', name: 'Island Credit Union', category: 'Financial Institution', placeholder: '💳' },
  { id: 'tc5', name: 'Comox Valley Markets', category: 'Supermarket', placeholder: '🥦' },
  { id: 'tc6', name: 'Vancouver Island Property Group', category: 'Property Management', placeholder: '🏗️' },
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba1',
    title: 'Residential Driveway Restoration',
    before: '/images/before-after-before.jpg',
    after: '/images/before-after-after.jpg',
    service: 'Pressure Washing',
  },
];
