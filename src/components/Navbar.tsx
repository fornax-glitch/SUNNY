import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  icon: string;
}

const serviceDropdown: DropdownItem[] = [
  { label: 'Professional Cleaning', href: '/services/cleaning', icon: '✨' },
  { label: 'Pressure Washing', href: '/services/cleaning/pressure-washing', icon: '💧' },
  { label: 'Handyman Services', href: '/services/handyman', icon: '🔨' },
];


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = () => location.pathname.startsWith('/services');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileOpen
          ? 'bg-white shadow-lg border-b border-gray-100'
          : 'bg-white shadow-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-sky-700 text-white text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-2">
<span>📍</span>
<span className="hidden sm:inline">Headquartered in Victoria, BC – Serving Vancouver Island</span>
            <span className="sm:hidden">Victoria, BC – Vancouver Island</span>
          </span>
          <a href="tel:+12508899222" className="flex items-center gap-1.5 hover:text-sunny-300 transition-colors font-medium">
            <Phone size={13} />
            <span>(250) 889-9222</span>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">



          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="bg-white rounded-lg p-1 flex items-center justify-center">
              <img
                src="/images/Website-Logo.png"
                alt="SunnySideUp"
                className="h-10 sm:h-16 lg:h-14.4 w-auto "
              />
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/') ? 'text-sunny-600 bg-sunny-50' : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isServiceActive() ? 'text-sunny-600 bg-sunny-50' : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
                }`}
              >
                Services
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                  <div className="p-2">
                    {serviceDropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? 'bg-sunny-50 text-sunny-700'
                            : 'text-gray-700 hover:bg-sky-50 hover:text-sky-700'
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 p-2">
                    <Link
                      to="/services"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-sky-600 text-white text-sm font-semibold rounded-lg hover:bg-sky-700 transition-colors"
                    >
                      All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/about') ? 'text-sunny-600 bg-sunny-50' : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/coverage"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/coverage') ? 'text-sunny-600 bg-sunny-50' : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
              }`}
            >
              Coverage
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/contact') ? 'text-sunny-600 bg-sunny-50' : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary text-sm"
            >
              <span>Get a Free Quote</span>
              <span>→</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-sky-600 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link to="/" className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 rounded-lg">
              Home
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 rounded-lg"
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {serviceDropdown.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:bg-sky-50 hover:text-sky-700 rounded-lg text-sm font-medium"
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 rounded-lg">
              About Us
            </Link>
            <Link to="/coverage" className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 rounded-lg">
              Coverage
            </Link>
            <Link to="/contact" className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 rounded-lg">
              Contact
            </Link>

            <div className="pt-3 border-t border-gray-100">
              <Link to="/contact" className="btn-primary w-full justify-center">
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
