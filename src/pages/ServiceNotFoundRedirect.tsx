import React from 'react';
import { Navigate } from 'react-router-dom';

const ServiceNotFoundRedirect: React.FC = () => {
  return <Navigate to="/services" replace />;
};

export default ServiceNotFoundRedirect;

