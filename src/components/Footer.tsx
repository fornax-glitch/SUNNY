import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    location: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', serviceType: '', location: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-sunny-400 rounded-full flex items-center justify-center">
                <Sun size={20} className="text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-black text-lg leading-none">
                  SunnySide<span className="text-sunny-400">Up</span>
                </div>
                <div className="text-sky-400 text-xs font-semibold tracking-wide uppercase leading-none mt-0.5">
                  Building Maintenance
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Victoria's trusted building maintenance company for 25+ years. Residential and commercial services across Canada.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors text-sm font-bold">
                f
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors text-sm font-bold">
                in
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors text-sm font-bold">
                ig
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Residential Cleaning', href: '/services/cleaning' },
                { label: 'Commercial Janitorial', href: '/services/cleaning' },
                { label: 'Pressure Washing', href: '/services/pressure-washing' },
                { label: 'Handyman Services', href: '/services/handyman' },
                { label: 'Deck & Patio Washing', href: '/services/pressure-washing' },
                { label: 'Commercial Facilities', href: '/services/handyman' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-sunny-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-sunny-400 rounded-full"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+12505550199" className="flex items-start gap-3 text-gray-400 hover:text-sunny-400 transition-colors text-sm">
                  <Phone size={15} className="mt-0.5 shrink-0 text-sunny-400" />
                  <div>
                    <div className="font-semibold text-white">(250) 555-0199</div>
                    <div className="text-xs">Mon–Fri 7am–7pm PT</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:hello@sunnysideup.ca" className="flex items-start gap-3 text-gray-400 hover:text-sunny-400 transition-colors text-sm">
                  <Mail size={15} className="mt-0.5 shrink-0 text-sunny-400" />
                  <div>
                    <div className="font-semibold text-white">hello@sunnysideup.ca</div>
                    <div className="text-xs">We reply within 1 business day</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-sunny-400" />
                  <div>
                    <div className="font-semibold text-white">Victoria, BC (HQ)</div>
                    <div className="text-xs">Serving Canada Nationwide</div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-white font-bold text-sm mb-3 uppercase tracking-wide">Service Areas</h5>
              <div className="flex flex-wrap gap-2">
                {['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NS', 'NB'].map((prov) => (
                  <span
                    key={prov}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs font-bold rounded border border-gray-700"
                  >
                    {prov}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-wide">Quick Quote</h4>
            {submitted ? (
              <div className="bg-sky-900/50 border border-sky-600 rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">🎉</div>
                <p className="text-sky-300 font-semibold">Thank you!</p>
                <p className="text-gray-400 text-sm mt-1">We'll reach out within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sunny-400 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sunny-400 transition-colors"
                />
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-sunny-400 transition-colors"
                >
                  <option value="" className="text-gray-500">Service Type</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="pressure-washing">Pressure Washing</option>
                  <option value="handyman">Handyman</option>
                  <option value="commercial">Commercial Contract</option>
                </select>
                <input
                  type="text"
                  name="location"
                  placeholder="Your City / Province"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sunny-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-sunny-400 hover:bg-sunny-500 text-gray-900 font-bold rounded-lg text-sm transition-all"
                >
                  <Send size={14} />
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} SunnySideUp Building Maintenance. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
