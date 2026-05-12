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
          'Crystal-clear interior and exterior window cleaning for homes, storefronts, offices, and multi-unit properties.',
        features: [
          'Interior & exterior cleaning',
          'Residential & commercial service',
          'Storefront-ready finish',
          'Streak-free results',
        ],
        audience: ['residential', 'commercial'],
      },
      {
        slug: 'carpet-upholstery-cleaning',
        title: 'Carpet & Upholstery Cleaning',
        icon: '🛋️',
        description:
          'Deep-clean carpets, rugs, and upholstered furniture to remove stains, dirt, and trapped allergens.',
        features: [
          'Deep extraction cleaning',
          'Spot & stain treatment',
          'Rugs & upholstery care',
          'Fresher indoor spaces',
        ],
        audience: ['residential', 'commercial'],
      },
      {
        slug: 'pressure-washing',
        title: 'Pressure Washing',
        icon: '⭐💦',
        description:
          'Restore exterior surfaces with professional pressure washing for residential and commercial properties.',
        features: [
          'Driveways & walkways',
          'Parking lots & sidewalks',
          'Decks, patios & pavers',
          'Stucco & brick soft-wash options',
        ],
        audience: ['residential', 'commercial'],
      },
      {
        slug: 'power-sweeping',
        title: 'Power Sweeping',
        icon: '🧹',
        description:
          'Efficient sweeping services for parking lots, sidewalks, and commercial outdoor spaces.',
        features: [
          'Parking area sweeping',
          'Debris & dirt removal',
          'Walkway cleanup',
          'Fast turnaround service',
        ],
        audience: ['commercial'],
      },
      {
        slug: 'office-cleaning',
        title: 'Office Cleaning',
        icon: '💼',
        description:
          'Reliable office cleaning that keeps your workspace clean, organized, and ready for productivity.',
        features: [
          'Flexible scheduling',
          'Workspace sanitation',
          'Detail-focused cleaning',
          'Ideal for teams & offices',
        ],
        audience: ['commercial'],
      },
      {
        slug: 'retail-cleaning',
        title: 'Retail Cleaning',
        icon: '🛍️',
        description:
          'Keep your storefront polished and customer-ready with consistent retail cleaning services.',
        features: [
          'Storefront presentation',
          'Floor & surface care',
          'Operationally mindful timing',
          'Consistent appearance standards',
        ],
        audience: ['commercial'],
      },
      {
        slug: 'healthcare-clinic-cleaning',
        title: 'Healthcare & Clinic Cleaning',
        icon: '🩺',
        description:
          'Careful cleaning for clinics and healthcare environments with strong attention to sanitation and touchpoints.',
        features: [
          'High-sanitation protocols',
          'Detail-focused disinfection',
          'Waiting room & exam area care',
          'Professional cleaning standards',
        ],
        audience: ['commercial'],
      },
      {
        slug: 'strata-property-cleaning',
        title: 'Strata & Property Cleaning',
        icon: '🏙️',
        description:
          'Maintain clean, welcoming shared spaces for residential and commercial properties.',
        features: [
          'Common area upkeep',
          'Resident-friendly service',
          'Visitor-ready presentation',
          'Reliable recurring cleaning',
        ],
        audience: ['commercial', 'residential'],
      },
      {
        slug: 'industrial-cleaning',
        title: 'Industrial Cleaning',
        icon: '🏭',
        description:
          'Professional cleaning solutions for warehouses, industrial facilities, and active work environments.',
        features: [
          'Industrial-grade cleaning',
          'Safety-focused practices',
          'Efficient turnaround',
          'Worksite-ready results',
        ],
        audience: ['commercial'],
      },
      {
        slug: 'floor-care-maintenance',
        title: 'Floor Care & Maintenance',
        icon: '🧼',
        description:
          'Protect and extend the life of your flooring with professional scrubbing, polishing, and maintenance.',
        features: [
          'Scrub & polish services',
          'High-traffic floor care',
          'Floor-life extension',
          'Routine maintenance support',
        ],
        audience: ['commercial'],
      },
      {
        slug: 'high-dusting',
        title: 'High Dusting',
        icon: '🧤',
        description:
          'Remove dust and buildup from elevated and hard-to-reach areas to improve cleanliness and air quality.',
        features: [
          'Ceiling & beam cleaning',
          'Vent & pipe dust removal',
          'Hard-to-access areas',
          'Cleaner indoor environments',
        ],
        audience: ['commercial', 'residential'],
      },
      {
        slug: 'commercial-janitorial',
        title: 'Commercial Janitorial',
        icon: '🏢',
        description:
          'Customized janitorial services for offices, retail groups, banks, strata properties, and multi-location businesses.',
        features: [
          'After-hours scheduling',
          'Multi-location support',
          'Security-cleared staff',
          'Detailed reporting & documentation',
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

