import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import CoveragePage from './pages/CoveragePage';
import ContactPage from './pages/ContactPage';

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
  <div className="pt-[88px] min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center px-4">
      <div className="text-8xl mb-4">☀️</div>
      <h1 className="text-5xl font-black text-gray-900 mb-3">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! This page doesn't exist.</p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-8 py-4 bg-sunny-400 hover:bg-sunny-500 text-gray-900 font-bold rounded-xl transition-all"
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
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/coverage" element={<CoveragePage />} />
          <Route path="/contact" element={<ContactPage />} />
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
