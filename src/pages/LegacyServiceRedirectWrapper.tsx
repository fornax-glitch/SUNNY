import React from 'react';
import { useParams } from 'react-router-dom';
import LegacyServiceRedirect from './LegacyServiceRedirect';

const LegacyServiceRedirectWrapper: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return <LegacyServiceRedirect slug={slug} />;
};

export default LegacyServiceRedirectWrapper;

