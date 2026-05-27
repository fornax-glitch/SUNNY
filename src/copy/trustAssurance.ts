export type TrustClaim = {
  icon?: string;
  label: string;
};

export type TrustChip = {
  icon?: string;
  label: string;
};

export type TrustGuarantee = {
  label: string;
};

export type ServiceAssurance = {
  eyebrow?: string;
  title?: string;
  body: string;
};

export const trustClaims: TrustClaim[] = [
  {
    icon: '🛡️',
    label: 'Security-Cleared & Professionally Vetted staff',
  },
];

// Small badge-style trust elements rendered throughout the UI.
export const trustChips: TrustChip[] = [
  {
    label: 'Security-Cleared & Professionally Vetted',
  },
  {
    label: 'Satisfaction Guaranteed',
  },
  {
    label: 'Eco-Friendly Products',
  },
  {
    label: 'On-Time Every Time',
  },
  {
    label: 'Local, Family-Owned Business',
  },
  {
    label: '24/7 Support for Commercial Clients',
  },
];

// Longer guarantee statements rendered as chips/badges in some sections.
export const trustGuarantees: TrustGuarantee[] = [
  { label: '✅ Satisfaction Guaranteed' },
  { label: '🌿 Eco-Friendly Products' },
  { label: '⏱ On-Time Every Time' },
  { label: '🏡 Local, Family-Owned Business' },
  { label: '📞 24/7 Support for Commercial Clients' },
];

// Service-level credibility copy blocks.
export const serviceAssurance: {
  commercialMaintenance: ServiceAssurance;
  handymanMaintenance?: ServiceAssurance;
  cleaningMaintenance?: ServiceAssurance;
} = {
  commercialMaintenance: {
    body: 'Security-cleared, quality-assured professional teams with reliable scheduling (weekly, monthly, or seasonal). Expect dependable updates and dependable results your team can count on.',
  },
};

// Back-compat exports (used by existing components/pages).
export const guarantees: string[] = trustGuarantees.map((g) => g.label);

export const trustParagraphs = {
  commercialMaintenance: serviceAssurance.commercialMaintenance.body,
} as const;



