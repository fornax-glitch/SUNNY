import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { PHONE, EMAIL, ADDRESS } from '../data';
import type { ContactFormData } from '../types';

import ContactResponsePromise from '../components/ContactResponsePromise';
import WhatHappensNext from '../components/WhatHappensNext';


const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const commercialMode = searchParams.get('type') === 'commercial';

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    cityProvince: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select your service';
    // ✅ Fixed: was &amp; (HTML entity) — use plain & in JS strings
    if (!formData.cityProvince.trim()) newErrors.cityProvince = 'City & province required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // TODO: Replace [PLACEHOLDER-FORM-ID] with real Formspree form ID — Waiting for client input
    try {
      await fetch('https://formspree.io/f/xnjwelnl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          cityProvince: '',
          message: '',
        });
      }, 6000);
    } catch (error) {
      console.error('Form submission failed');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-[88px] min-h-screen bg-linear-to-br from-emerald-50 to-sky-50 flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-12 text-center animate-in fade-in-30 zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <CheckCircle className="w-16 h-16 text-emerald-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Thank You {formData.name}!
          </h1>
          <p className="text-xl text-emerald-700 mb-8 font-semibold">
            Your {formData.serviceType} quote request has been received
          </p>
          <div className="space-y-3 text-gray-600 mb-12">
            <p>📍 For {formData.cityProvince}</p>
            <p>📧 Confirmation sent to {formData.email}</p>
            <p>⏱️ Reply within 1 business day</p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full px-8 py-4 bg-linear-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all text-lg focus:ring-4 focus:ring-emerald-400/50 focus:outline-none"
          >
            Send Another Request
          </button>
          <p className="text-sm text-gray-500 mt-6">
            Need immediate help?{' '}
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="font-bold text-emerald-600 hover:underline"
            >
              {PHONE}
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[88px]">

      {/* ─── HERO ─── */}
      <section className="bg-linear-to-br from-gray-900 via-sky-900/20 to-gray-900 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-linear(ellipse_70%/30%_at_30%50%)] from-sunny-400/20" />
          <div className="absolute inset-0 bg-[radial-linear(ellipse_70%/30%_at_70%50%)] from-sky-400/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-black rounded-2xl uppercase tracking-widest mb-8 shadow-2xl"
            role="img"
          >
            Free Quote
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Get Your Custom<br />
            <span className="bg-linear-to-r from-sunny-400 via-emerald-400 to-sky-400 bg-clip-text text-transparent drop-shadow-3xl">
              Quote Today
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-sky-100/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-10">
            Complete the form below — detailed quotes delivered within 24 hours. No obligation.
          </p>
        </div>
      </section>

      {/* ─── CONTACT GRID ─── */}
      <section className="py-20 lg:py-28 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* ── Contact Info Sidebar ── */}
            <div className="lg:col-span-4 space-y-8 mb-12 lg:mb-0">
              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">Let's Talk</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Phone, email, or form — whichever works best for you. Our Victoria team responds
                  within 24 hours.
                </p>
              </div>

              {/* Phone */}
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="group p-6 rounded-3xl bg-white shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex gap-5"
                aria-label={`Call ${PHONE}`}
              >
                <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-all">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                    Call Us
                  </p>
                  <div className="text-2xl font-black text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {PHONE}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Mon–Fri 7am–7pm PT</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="group p-6 rounded-3xl bg-white shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex gap-5"
                aria-label={`Email ${EMAIL}`}
              >
                <div className="w-16 h-16 bg-linear-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-all">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <div className="text-lg font-black text-gray-900 break-all group-hover:text-sky-600 transition-colors">
                    {EMAIL}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Replies within 24hrs</p>
                </div>
              </a>

              {/* Address */}
              <div
                className="p-6 rounded-3xl bg-white shadow-lg border border-gray-100 flex gap-5"
                role="img"
                aria-label={ADDRESS}
              >
                <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shrink-0 shadow-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Headquarters
                  </p>
                  <div className="text-lg font-black text-gray-900">{ADDRESS}</div>
                </div>
              </div>

              {/* Commercial panel — shown only when ?type=commercial */}
              {commercialMode && (
                <div className="p-6 rounded-3xl bg-linear-to-br from-sky-600 to-emerald-600 text-white shadow-2xl">
                  <h4 className="text-xl font-black mb-3">🏢 Commercial Division</h4>
                  <p className="text-sky-100 text-sm mb-4 leading-relaxed">
                    Multi-location? Custom contracts? Security clearances? Talk to our commercial
                    specialists.
                  </p>
                  {/* ✅ Fixed: was malformed double-@ mailto */}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white font-bold text-sm transition-colors"
                  >
                    {EMAIL} →
                  </a>
                </div>
              )}
            </div>

            {/* ── Quote Form ── */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12">
                <div className="mb-12">
                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                    Request Your Quote
                  </h2>
                  {/* ✅ Fixed: was text-xl ... text-lg conflict — use one size */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    All fields required. Secure submission. Response within 24 hours.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                  aria-describedby="form-note"
                >
                  {/* ✅ Single honeypot + hidden subject (duplicates removed) */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} aria-hidden tabIndex={-1} />
                  <input type="hidden" name="_subject" value="SunnySideUp Quote Request" />

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-2xl border-2 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-sky-400/50 transition-all shadow-sm ${
                        errors.name
                          ? 'border-red-300 bg-red-50/50 ring-red-200/30'
                          : 'border-gray-200 hover:border-sky-300 bg-white/80 backdrop-blur-sm'
                      }`}
                      placeholder="John Smith"
                      aria-invalid={!!errors.name}
                      aria-describedby="name-error"
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-2 ml-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-2xl border-2 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-sky-400/50 transition-all shadow-sm ${
                        errors.email
                          ? 'border-red-300 bg-red-50/50 ring-red-200/30'
                          : 'border-gray-200 hover:border-sky-300 bg-white/80 backdrop-blur-sm'
                      }`}
                      placeholder="your.email@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby="email-error"
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-2 ml-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-2xl border-2 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-sky-400/50 transition-all shadow-sm ${
                        errors.phone
                          ? 'border-red-300 bg-red-50/50 ring-red-200/30'
                          : 'border-gray-200 hover:border-sky-300 bg-white/80 backdrop-blur-sm'
                      }`}
                      placeholder="(250) 889-9222"
                      aria-invalid={!!errors.phone}
                      aria-describedby="phone-error"
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-red-500 text-sm mt-2 ml-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-bold text-gray-700 mb-3">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className={`w-full px-5 py-4 rounded-2xl border-2 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-sky-400/50 transition-all shadow-sm bg-white/80 backdrop-blur-sm cursor-pointer ${
                        errors.serviceType
                          ? 'border-red-300 ring-red-200/30'
                          : 'border-gray-200 hover:border-sky-300'
                      }`}
                      aria-invalid={!!errors.serviceType}
                      aria-describedby="service-error"
                    >
                      <option value="">Select a service...</option>
                      <optgroup label="🧼 Cleaning Services">
                        <option value="Interior Cleaning">Interior Cleaning</option>
                        <option value="Exterior & Pressure Washing">Exterior &amp; Pressure Washing ⭐</option>
                        <option value="Commercial Janitorial">Commercial Janitorial</option>
                        <option value="Move In/Out">Move In / Move Out</option>
                      </optgroup>
                      <optgroup label="🔨 Handyman Services">
                        <option value="Drywall & Painting">Drywall Repair &amp; Painting</option>
                        <option value="Light Fixtures">Light Fixture Installation</option>
                        <option value="Furniture Assembly">Furniture Assembly</option>
                        <option value="Facility Maintenance">Commercial Facility Maintenance</option>
                      </optgroup>
                      <option value="Not Sure">Not Sure / Custom Request</option>
                    </select>
                    {errors.serviceType && (
                      <p id="service-error" className="text-red-500 text-sm mt-2 ml-1">
                        {errors.serviceType}
                      </p>
                    )}
                  </div>

                  {/* City & Province */}
                  <div className="lg:col-span-2">
                    <label htmlFor="cityProvince" className="block text-sm font-bold text-gray-700 mb-3">
                      City &amp; Province *
                    </label>
                    <input
                      id="cityProvince"
                      name="cityProvince"
                      type="text"
                      required
                      value={formData.cityProvince}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-2xl border-2 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-sky-400/50 transition-all shadow-sm ${
                        errors.cityProvince
                          ? 'border-red-300 bg-red-50/50 ring-red-200/30'
                          : 'border-gray-200 hover:border-sky-300 bg-white/80 backdrop-blur-sm'
                      }`}
                      placeholder="Victoria, BC or Nanaimo, BC"

                      aria-invalid={!!errors.cityProvince}
                      aria-describedby="city-error"
                    />
                    {errors.cityProvince && (
                      <p id="city-error" className="text-red-500 text-sm mt-2 ml-1">
                        {errors.cityProvince}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="lg:col-span-2">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                      Project Details (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl border-2 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-sky-400/50 transition-all shadow-sm resize-vertical bg-white/80 backdrop-blur-sm border-gray-200 hover:border-sky-300"
                      placeholder="Property size, number of locations, specific requirements, timeline, etc..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="lg:col-span-2 pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`group w-full lg:w-auto px-12 py-6 rounded-3xl text-xl font-black shadow-2xl transition-all duration-300 flex items-center justify-center gap-4 uppercase tracking-wider ${
                        isLoading
                          ? 'bg-gray-400 cursor-not-allowed shadow-none text-white'
                          : 'bg-linear-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white hover:shadow-sky-500/50 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] focus:ring-4 focus:ring-sky-400/50 focus:outline-none'
                      }`}
                      aria-label="Submit quote request form"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send size={22} className="group-hover:rotate-12 transition-transform duration-300" />
                          Send My Quote Request
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <p id="form-note" className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-gray-200">
                  🔒 Secure submission • Reply within 24 hours • No spam ever
                </p>

                <ContactResponsePromise />
                {!submitted && <WhatHappensNext /> }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-linear-to-b from-white via-gray-50 to-sky-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span
              className="inline-block px-6 py-3 bg-sky-100/50 text-sky-700 font-black text-lg rounded-3xl backdrop-blur-sm shadow-lg mb-8"
              id="faq-badge"
            >
              Questions?
            </span>
            <h2 id="faq-heading" className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Everything You Need to Know
            </h2>
          </div>

          <div
            className="space-y-4 max-w-3xl mx-auto"
            role="region"
            aria-label="Frequently asked questions"
          >
            {[
              {
                q: 'How quickly do you respond to quote requests?',
                a: 'Every quote request receives a detailed response within 1 business day (often same day). Commercial RFPs get priority attention.',
              },
              {
                q: 'Are your team members background checked?',
                a: '100% yes. All SunnySideUp staff complete comprehensive background checks and security training. Critical for banks, retail, and government clients.',
              },
              {
                q: 'What service areas do you cover?',
                // ✅ Fixed: removed JSX comment syntax from inside a JS string
                a: 'Headquartered in Victoria BC, serving BC, AB, SK, and MB. See the coverage map for full city listings.',
              },
              {
                q: 'Do you handle commercial contracts?',
                a: 'Absolutely. We specialize in multi-location retail chains, banks, and facility management. Custom reporting, compliance, and 24/7 support available.',
              },
              {
                q: 'Are your products eco-friendly?',
                a: 'Yes! We use green-certified, non-toxic cleaners safe for children, pets, and food environments. Full SDS sheets available on request.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-3xl p-2 shadow-lg border border-gray-100 hover:shadow-xl hover:border-sky-200 transition-all backdrop-blur-sm cursor-pointer"
              >
                <summary className="flex items-center justify-between p-8 rounded-2xl group-hover:bg-sky-50/50 transition-all cursor-pointer list-none font-bold text-xl text-gray-900 focus:ring-2 focus:ring-sky-400 focus:outline-none">
                  {faq.q}
                  <span
                    className="ml-4 text-2xl transition-transform group-open:-rotate-45 duration-300"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <div className="px-8 pb-8 pt-4 mt-2 -mx-2">
                  <p className="text-lg text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;