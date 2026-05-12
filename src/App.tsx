import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CategoryPage from './pages/CategoryPage';
import LegacyServiceRedirectWrapper from './pages/LegacyServiceRedirectWrapper';

import AboutPage from './pages/AboutPage';


import CoveragePage from './pages/CoveragePage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Accessibility from './pages/Accessibility';


// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// 404 Page
const NotFoundPage: React.FC = () => (
  <div className="pt-[88px] min-h-screen bg-linear-to-br from-gray-50 to-sky-50 flex items-center justify-center px-4">
    <div className="max-w-md w-full text-center bg-white rounded-3xl shadow-2xl p-12">
      <div className="text-8xl mb-6 mx-auto w-32 h-32 bg-linear-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl">
        ☀️
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Page not found. The sunny side is this way.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-3 px-10 py-4 bg-linear-to-r from-sunny-400 to-sunny-500 hover:from-sunny-500 hover:to-sunny-600 text-gray-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-lg focus:ring-4 focus:ring-sunny-400/50 focus:outline-none"
      >
        ← Back to Home
      </a>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1" id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />



          {/* Hierarchical, SEO-friendly service URLs */}
          <Route path="/services/:category" element={<CategoryPage />} />
          <Route path="/services/:category/:service" element={<ServiceDetailPage />} />


          <Route path="/about" element={<AboutPage />} />
          <Route path="/coverage" element={<CoveragePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;

