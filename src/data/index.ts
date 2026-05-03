import type { ServicePillar, Testimonial, CoverageArea, Stat, BeforeAfterItem, TrustedClient } from '../types';

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'cleaning',
    slug: 'cleaning',
    name: 'Professional Cleaning',
    tagline: 'Spotless Spaces. Happy Places.',
    description:
      'From deep residential cleans to nightly commercial janitorial services, our security-cleared, insured cleaning teams deliver impeccable results every time.',
    image: '/images/cleaning-service.jpg',
    cta: 'Explore Cleaning Services',
    services: [
      {
        id: 'residential-deep-clean',
        icon: '🏠',
        title: 'Residential Deep Cleaning',
        description:
          'Comprehensive top-to-bottom cleaning of your home, tackling every corner with eco-friendly products safe for kids and pets.',
        features: ['Kitchen & appliance detailing', 'Bathroom sanitization', 'Baseboard & window sill cleaning', 'Eco-friendly products'],
        category: 'residential',
      },
      {
        id: 'move-in-out',
        icon: '📦',
        title: 'Move-In / Move-Out Cleaning',
        description:
          'Ensure your security deposit is returned or welcome new tenants to a spotless home. Our move clean checklist covers 150+ points.',
        features: ['150-point checklist', 'Appliance interiors', 'Cabinet interiors', 'Garage sweep'],
        category: 'residential',
      },
      {
        id: 'recurring-maid',
        icon: '✨',
        title: 'Recurring Maid Services',
        description:
          'Weekly, bi-weekly, or monthly scheduled cleans to keep your home consistently pristine without lifting a finger.',
        features: ['Flexible scheduling', 'Same trusted team each visit', 'Eco-friendly supplies included', 'Priority booking'],
        category: 'residential',
      },
      {
        id: 'bank-cleaning',
        icon: '🏦',
        title: 'Bank & Financial Institution Cleaning',
        description:
          'Security-cleared, bonded staff trained for sensitive commercial environments. Discreet, reliable, and thorough after-hours service.',
        features: ['Security-cleared staff', 'Bonded & insured', 'After-hours scheduling', 'High-traffic zone focus'],
        category: 'commercial',
      },
      {
        id: 'supermarket-cleaning',
        icon: '🛒',
        title: 'Supermarket & Retail Cleaning',
        description:
          'Large-surface janitorial solutions for supermarkets, big-box retail, and grocery chains. Floor care, restroom sanitation, and full-store sweeps.',
        features: ['Floor polishing & stripping', 'Restroom deep sanitization', 'Produce & deli area safe products', 'Overnight service'],
        category: 'commercial',
      },
      {
        id: 'office-janitorial',
        icon: '🏢',
        title: 'Office & Commercial Janitorial',
        description:
          'Regular janitorial maintenance for offices, medical clinics, and commercial properties with customizable service plans.',
        features: ['Daily / weekly programs', 'Green-certified products', 'Supply restocking', 'Contract pricing'],
        category: 'commercial',
      },
    ],
  },
  {
    id: 'pressure-washing',
    slug: 'pressure-washing',
    name: 'Pressure Washing',
    tagline: 'Renew Your Curb Appeal This Season.',
    description:
      'Industrial-grade pressure washing equipment paired with experienced operators. We blast away years of grime, restoring surfaces to their original glory safely and efficiently.',
    image: '/images/pressure-washing.jpg',
    cta: 'Get a Pressure Wash Quote',
    services: [
      {
        id: 'parking-lots',
        icon: '🅿️',
        title: 'Commercial Parking Lots & Sidewalks',
        description:
          'Large-scale hot water pressure washing for commercial lots, removing oil stains, chewing gum, and seasonal buildup from high-traffic surfaces.',
        features: ['Hot water extraction', 'Oil & grease removal', 'Line marking prep', 'Permit-compliant water recovery'],
        category: 'commercial',
      },
      {
        id: 'driveways',
        icon: '🚗',
        title: 'Residential Driveways & Walkways',
        description:
          'Restore your driveway and walkways to showroom condition. We remove moss, algae, oil stains, and weathering from concrete, asphalt, and pavers.',
        features: ['Concrete & asphalt safe', 'Moss & algae treatment', 'Stain pre-treatment', 'Sealant application available'],
        category: 'residential',
      },
      {
        id: 'stucco-brick',
        icon: '🧱',
        title: 'Stucco & Brick Cleaning',
        description:
          'Delicate low-pressure soft washing techniques for stucco, brick, and masonry that remove buildup without surface damage.',
        features: ['Soft-wash technique', 'Mold & mildew removal', 'Efflorescence treatment', 'Colour-safe cleaning agents'],
        category: 'both',
      },
      {
        id: 'decks-patios',
        icon: '🪵',
        title: 'Decks, Patios & Pavers',
        description:
          'Rejuvenate your outdoor living spaces. We clean wood decks, composite decking, stone patios, and interlock pavers to extend their lifespan.',
        features: ['Wood & composite decking', 'Paver joint cleaning', 'Furniture & area washing', 'Pre-stain prep available'],
        category: 'residential',
      },
      {
        id: 'fences-pools',
        icon: '🏊',
        title: 'Fences & Pool Areas',
        description:
          'Clean vinyl, wood, and chain-link fencing plus pool decks, coping, and surrounding hardscape to create an inviting backyard oasis.',
        features: ['Vinyl & wood fence safe', 'Pool coping cleaning', 'Algae & biofilm removal', 'Waterline scrubbing'],
        category: 'residential',
      },
      {
        id: 'building-exteriors',
        icon: '🏗️',
        title: 'Building Exteriors & Storefronts',
        description:
          'Full commercial building exterior washing for retail storefronts, warehouses, and multi-unit residential – first impressions matter.',
        features: ['High-reach equipment', 'Storefront glass & frames', 'Graffiti removal', 'Scheduled maintenance contracts'],
        category: 'commercial',
      },
    ],
  },
  {
    id: 'handyman',
    slug: 'handyman',
    name: 'Handyman Services',
    tagline: 'Fix It Right. Fix It Once.',
    description:
      'Our skilled handyman team handles the repairs, installations, and maintenance tasks that pile up. From drywall to deck boards, we do it all with precision and professionalism.',
    image: '/images/handyman-service.jpg',
    cta: 'Book a Handyman',
    services: [
      {
        id: 'drywall-painting',
        icon: '🖌️',
        title: 'Drywall Repair & Painting Touch-ups',
        description:
          'Seamless drywall patching, texture matching, and painting touch-ups that make repairs invisible. Perfect post-move or post-renovation.',
        features: ['Texture matching', 'Colour matching service', 'Popcorn ceiling repair', 'Water damage patching'],
        category: 'both',
      },
      {
        id: 'light-fixtures',
        icon: '💡',
        title: 'Light Fixture & Ceiling Fan Installation',
        description:
          'Safe, code-compliant installation of light fixtures, ceiling fans, and basic electrical fixtures by our experienced technicians.',
        features: ['Fixture removal & disposal', 'Ceiling fan balancing', 'Dimmer switch installation', 'Pot light installation'],
        category: 'both',
      },
      {
        id: 'furniture-assembly',
        icon: '🪑',
        title: 'Furniture & Equipment Assembly',
        description:
          'From IKEA flat-packs to commercial shelving units and office furniture, we assemble it quickly and correctly.',
        features: ['Any brand assembly', 'Commercial shelving', 'Office furniture', 'Same-day availability'],
        category: 'both',
      },
      {
        id: 'carpentry-deck',
        icon: '🔨',
        title: 'General Carpentry & Deck Repairs',
        description:
          'Skilled carpentry for fence repairs, deck board replacement, gate installation, trim work, and custom woodworking solutions.',
        features: ['Deck board replacement', 'Fence & gate repairs', 'Interior trim & casing', 'Custom carpentry'],
        category: 'residential',
      },
      {
        id: 'commercial-facility',
        icon: '🏪',
        title: 'Commercial Facility Maintenance',
        description:
          'Ongoing facility maintenance programs for banks, retail chains, and commercial properties. Preventive maintenance keeps downtime and repair costs low.',
        features: ['Scheduled maintenance plans', 'Emergency call-outs', 'Multi-location management', 'Compliance documentation'],
        category: 'commercial',
      },
      {
        id: 'door-window',
        icon: '🚪',
        title: 'Door, Window & Hardware',
        description:
          'Door adjustments, lock replacements, weatherstripping, window screen repairs, and hardware upgrades for homes and commercial properties.',
        features: ['Lock installation', 'Weatherstripping', 'Screen repair & replacement', 'Door alignment & adjustment'],
        category: 'both',
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Margaret Chen',
    role: 'Homeowner',
    location: 'Victoria, BC',
    rating: 5,
    text: "SunnySideUp has been cleaning our home for 3 years. They're punctual, thorough, and the eco-friendly products are a huge bonus with our young children. Our home has never looked better!",
    clientType: 'residential',
    avatar: '👩',
  },
  {
    id: 't2',
    name: 'David Okafor',
    role: 'Regional Facilities Manager',
    company: 'National Retail Chain',
    location: 'Calgary, AB',
    rating: 5,
    text: 'We manage 14 locations across Western Canada and SunnySideUp handles our overnight cleaning contracts at 8 of them. The consistency, reporting, and communication are exceptional. True professionals.',
    clientType: 'commercial',
    avatar: '👨',
  },
  {
    id: 't3',
    name: 'Susan & Tom Blackwell',
    role: 'Homeowners',
    location: 'Kelowna, BC',
    rating: 5,
    text: 'The pressure washing on our driveway and deck was absolutely incredible. We thought we needed to replace the deck boards but the team said they could restore them – and they did! Saved us thousands.',
    clientType: 'residential',
    avatar: '👫',
  },
  {
    id: 't4',
    name: 'James Kowalski',
    role: 'Branch Operations Manager',
    company: 'Pacific Coast Financial Group',
    location: 'Vancouver, BC',
    rating: 5,
    text: 'Security clearance, reliability, and attention to detail are non-negotiable for our branches. SunnySideUp has delivered flawlessly for over 7 years. Their staff treat our space with the utmost respect.',
    clientType: 'commercial',
    avatar: '👨‍💼',
  },
  {
    id: 't5',
    name: 'Priya Sharma',
    role: 'Property Owner',
    location: 'Saanich, BC',
    rating: 5,
    text: 'Moved into a house that desperately needed a deep clean. The SunnySideUp team came in and transformed the place in one day. The move-in clean was absolutely worth every penny.',
    clientType: 'residential',
    avatar: '👩',
  },
  {
    id: 't6',
    name: 'Robert Tran',
    role: 'Store Director',
    company: 'Western Grocery Alliance',
    location: 'Edmonton, AB',
    rating: 5,
    text: 'Running a high-volume grocery store demands spotless conditions every morning. SunnySideUp\'s overnight team delivers consistently. The floor care program alone has extended the life of our flooring significantly.',
    clientType: 'commercial',
    avatar: '👨',
  },
];

export const COVERAGE_AREAS: CoverageArea[] = [
  {
    province: 'British Columbia',
    abbreviation: 'BC',
    cities: ['Victoria (HQ)', 'Vancouver', 'Kelowna', 'Nanaimo', 'Kamloops', 'Abbotsford', 'Surrey', 'Burnaby'],
    active: true,
    focus: 'primary',
  },
  {
    province: 'Alberta',
    abbreviation: 'AB',
    cities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Medicine Hat'],
    active: true,
    focus: 'primary',
  },
  {
    province: 'Saskatchewan',
    abbreviation: 'SK',
    cities: ['Saskatoon', 'Regina', 'Prince Albert'],
    active: true,
    focus: 'secondary',
  },
  {
    province: 'Manitoba',
    abbreviation: 'MB',
    cities: ['Winnipeg', 'Brandon'],
    active: true,
    focus: 'secondary',
  },
  {
    province: 'Ontario',
    abbreviation: 'ON',
    cities: ['Toronto', 'Ottawa', 'Hamilton', 'London'],
    active: true,
    focus: 'tertiary',
  },
  {
    province: 'Quebec',
    abbreviation: 'QC',
    cities: ['Montréal', 'Québec City'],
    active: true,
    focus: 'tertiary',
  },
  {
    province: 'Nova Scotia',
    abbreviation: 'NS',
    cities: ['Halifax'],
    active: true,
    focus: 'tertiary',
  },
  {
    province: 'New Brunswick',
    abbreviation: 'NB',
    cities: ['Moncton', 'Fredericton'],
    active: true,
    focus: 'tertiary',
  },
];

export const STATS: Stat[] = [
  { value: '25+', label: 'Years in Business', icon: '🏆' },
  { value: '12,000+', label: 'Properties Serviced', icon: '🏠' },
  { value: '200+', label: 'Commercial Clients', icon: '🏢' },
  { value: '8', label: 'Provinces Covered', icon: '🍁' },
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

export const TRUSTED_CLIENTS: TrustedClient[] = [
  { id: 'tc1', name: 'National Bank Partner', category: 'Financial Institution', placeholder: '🏦' },
  { id: 'tc2', name: 'Western Grocery Chain', category: 'Supermarket', placeholder: '🛒' },
  { id: 'tc3', name: 'Pacific Retail Group', category: 'Big-Box Retail', placeholder: '🏪' },
  { id: 'tc4', name: 'Coastal Credit Union', category: 'Financial Institution', placeholder: '💳' },
  { id: 'tc5', name: 'Prairie Food Markets', category: 'Supermarket', placeholder: '🥦' },
  { id: 'tc6', name: 'National Property Management', category: 'Property Management', placeholder: '🏗️' },
];
