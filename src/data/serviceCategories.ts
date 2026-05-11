import type { ServiceCategory } from '../types/services';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: 'cleaning',
    title: 'Cleaning',
    description:
      'Residential and commercial cleaning, including specialty window cleaning, carpet cleaning, pressure washing, and commercial janitorial.',
    image: '/images/cleaning-service.jpg',
    services: [
      {
        slug: 'window-cleaning',
        title: 'Window Cleaning',
        icon: '🪟',
        description:
          'Streak-free interior and exterior window cleaning for residential homes and commercial storefronts.',
        features: [
          'Residential window cleaning',
          'Commercial storefront windows',
          'Interior & exterior cleaning',
          'Streak-free finish',
        ],
        audience: ['residential', 'commercial'],
      },
      {
        slug: 'carpet-cleaning',
        title: 'Carpet Cleaning',
        icon: '🧽',
        description:
          'Deep extraction carpet cleaning with spot & stain treatment for homes and businesses.',
        features: [
          'Residential carpet cleaning',
          'Commercial carpet cleaning',
          'Deep extraction cleaning',
          'Spot & stain treatment',
        ],
        audience: ['residential', 'commercial'],
      },
      {
        slug: 'pressure-washing',
        title: 'Pressure Washing',
        icon: '⭐💦',
        description:
          'Residential driveways & walkways and commercial parking lots & sidewalks. Stucco & brick soft-wash options available.',
        features: [
          'Driveways/walkways',
          'Parking lots',
          'Stucco/brick',
          'Decks/patios',
          'Fences/pools',
        ],
        audience: ['residential', 'commercial'],
      },
      {
        slug: 'power-sweeping',
        title: 'Power Sweeping',
        icon: '🧹',
        description:
          'Efficient hard-surface cleanup for parking areas, walkways, and commercial exteriors.',
        features: ['Parking lot sweeping', 'Walkway restoration', 'Fast turnaround'],
        audience: ['commercial'],
      },
      {
        slug: 'janitorial',
        title: 'Commercial Janitorial',
        icon: '🏢',
        description:
          'Commercial janitorial for offices, banks, grocers, retail groups, and strata/common areas.',
        features: [
          'Security-cleared & background-checked staff',
          'After-hours & overnight scheduling',
          'Customized multi-location service plans',
          'Detailed service reports & compliance documentation',
        ],
        audience: ['commercial'],
      },
    ],
  },
  {
    slug: 'handyman',
    title: 'Handyman',
    description:
      'Repairs, installations, and maintenance for residential and commercial properties.',
    image: '/images/handyman-service.jpg',
    services: [
      {
        slug: 'drywall-repair',
        title: 'Drywall Repair',
        icon: '🧩',
        description:
          'Neat, professional drywall patching and finishing for clean, ready-to-use spaces.',
        features: ['Texture matching', 'Smooth finishing', 'Residential & commercial'],
        audience: ['residential', 'commercial'],
      },
      {
        slug: 'light-fixtures',
        title: 'Light Fixture & Ceiling Fan Installation',
        icon: '💡',
        description: 'Code-compliant installations.',
        features: ['Fan balancing', 'Dimmer switches'],
        audience: ['residential', 'commercial'],
      },
      {
        slug: 'furniture-assembly',
        title: 'Furniture & Equipment Assembly',
        icon: '🛠️',
        description: 'Any brand, residential or commercial.',
        features: ['IKEA to office shelving'],
        audience: ['residential', 'commercial'],
      },
      {
        slug: 'carpentry-deck',
        title: 'General Carpentry & Deck Repairs',
        icon: '🔨',
        description: 'Fence, deck, and custom woodwork.',
        features: ['Deck replacement', 'Fence repairs'],
        audience: ['residential'],
      },
      {
        slug: 'commercial-facility',
        title: 'Commercial Facility Maintenance',
        icon: '🏗️',
        description: 'Preventive maintenance programs.',
        features: ['Emergency response', 'Multi-site'],
        audience: ['commercial'],
      },
    ],
  },
];

