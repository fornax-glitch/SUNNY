import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import VancouverIslandIdentityStrip from './VancouverIslandIdentityStrip';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    location: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setSubmitted(false);

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        serviceType: formData.serviceType,
        cityProvince: formData.location, // mapping fix
        phone: 'N/A', // footer doesn't collect phone
        message: 'Quick Quote (Footer Form)',
      }),
    });

    if (!res.ok) {
      throw new Error('Failed to send');
    }

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        serviceType: '',
        location: '',
      });
    }, 4000);
  } catch (err) {
    alert('❌ Failed to send request. Try again.');
    console.error(err);
  }
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Local identity (above main footer) */}
      <VancouverIslandIdentityStrip />

      {/* Premium atmosphere layer */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-black" />
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sunny-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl" />

        {/* Main footer content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Trust micro-signals + mini CTA row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2">
                {[
                  '✅ Insured & Professional',
                  '🌿 Eco-Conscious Methods',
                  '🏢 Commercial & Residential',
                  '🔁 Recurring Maintenance',
                ].map((chip) => (
                  <span
                    key={chip}
                    className="px-4 py-2 rounded-full text-xs sm:text-[13px] font-bold border border-white/10 bg-white/5 text-gray-200"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-gray-400 text-sm leading-relaxed">
                Victoria-based property care with local accountability—built for dependable scheduling and premium results across Vancouver Island.
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-gray-900/30 to-sky-900/20 shadow-xl p-5 sm:p-6">
                <div className="text-sunny-300 font-black uppercase tracking-widest text-xs">Request a Quote</div>
                <div className="mt-2 text-white font-black text-lg">Clear timelines. Local communication.</div>
                <div className="mt-3 flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="btn-primary justify-center">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 mb-5">
                <img
                  src="/images/Website-Logo.png"
                  alt="SunnySideUp"
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Vancouver Island property care from Victoria—residential warmth and commercial reliability under one local team.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors text-sm font-bold"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors text-sm font-bold"
                >
                  in
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors text-sm font-bold"
                >
                  ig
                </a>
              </div>
            </div>

            {/* Services column */}
            <div>
              <h4 className="text-white font-bold text-base mb-5 uppercase tracking-wide">
                Quick Services
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Cleaning', href: '/services/cleaning' },
                  {
                    label: 'Pressure Washing',
                    href: '/services/cleaning/pressure-washing',
                  },
                  { label: 'Handyman', href: '/services/handyman' },
                  {
                    label: 'Gutter Cleaning',
                    href: '/services/handyman',
                  },
                  {
                    label: 'Commercial Maintenance',
                    href: '/services/cleaning/janitorial',
                  },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-sunny-400 transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-sunny-400 rounded-full" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h4 className="text-white font-bold text-base mb-5 uppercase tracking-wide">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+12508899222"
                    className="flex items-start gap-3 text-gray-400 hover:text-sunny-400 transition-colors text-sm"
                  >
                    <Phone size={15} className="mt-0.5 shrink-0 text-sunny-400" />
                    <div>
                      <div className="font-semibold text-white">(250) 889-9222</div>
                      <div className="text-xs">Mon–Fri 7am–7pm PT</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sabiri.amin@gmail.com"
                    className="flex items-start gap-3 text-gray-400 hover:text-sunny-400 transition-colors text-sm"
                  >
                    <Mail size={15} className="mt-0.5 shrink-0 text-sunny-400" />
                    <div>
                      <div className="font-semibold text-white">
                        sabiri.amin@gmail.com
                      </div>
                      <div className="text-xs">We reply within 1 business day</div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-gray-400">
                    <MapPin size={15} className="mt-0.5 shrink-0 text-sunny-400" />
                    <div>
                      <div className="font-semibold text-white">Victoria, BC (HQ)</div>
                      <div className="text-xs">Serving Vancouver Island</div>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <h5 className="text-white font-bold text-sm mb-3 uppercase tracking-wide">
                  Service Areas
                </h5>
                <div className="flex flex-wrap gap-2">
                  {['Victoria', 'Saanich', 'Langford', 'Nanaimo', 'Duncan', 'Courtenay'].map(
                    (city) => (
                      <span
                        key={city}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs font-bold rounded border border-gray-700"
                      >
                        {city}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div>
              <h4 className="text-white font-bold text-base mb-5 uppercase tracking-wide">
                Quick Quote
              </h4>
              {submitted ? (
                <div className="bg-sky-900/50 border border-sky-600 rounded-xl p-5 text-center">
                  <div className="text-3xl mb-2">🎉</div>
                  <p className="text-sky-300 font-semibold">Thank you!</p>
                  <p className="text-gray-400 text-sm mt-1">
                    We'll reach out within 1 business day.
                  </p>
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
                    <option value="" className="text-gray-500">
                      Service Type
                    </option>
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
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} SunnySideUp Building Maintenance. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="/privacy-policy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              <a href="/accessibility" className="hover:text-gray-300 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
