import React from 'react';
import { Navigate } from 'react-router-dom';

type LegacyRedirectMap = Record<string, string>;

// Map legacy slug -> hierarchical destination
const LEGACY_TO_NEW: LegacyRedirectMap = {
  'window-cleaning': '/services/cleaning/window-cleaning',
  'carpet-cleaning': '/services/cleaning/carpet-cleaning',
  'pressure-washing': '/services/cleaning/pressure-washing',
  'power-sweeping': '/services/cleaning/power-sweeping',
  'janitorial': '/services/cleaning/janitorial',
};

export const LegacyServiceRedirect: React.FC<{ slug?: string }> = ({ slug }) => {
  if (!slug) return <Navigate to="/services" replace />;
  const to = LEGACY_TO_NEW[slug];
  return <Navigate to={to ?? '/services'} replace />;
};

export default LegacyServiceRedirect;

