import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import type { ContactFormData } from '../types';

const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultService = searchParams.get('type') === 'commercial' ? 'commercial' : '';

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    serviceType: defaultService,
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof ContactFormData) =>
    `w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? 'border-red-300 focus:ring-red-200 bg-red-50'
        : 'border-gray-200 focus:ring-sky-200 focus:border-sky-400 bg-white'
    }`;

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-sky-900 to-gray-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-sunny-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sunny-400/20 border border-sunny-400/30 text-sunny-300 text-sm font-bold rounded-full uppercase tracking-wide mb-5">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Get Your Free <span className="text-sunny-400">Quote</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-xl mx-auto">
            Fill out the form below and we'll get back to you within 1 business day with a detailed, no-obligation estimate.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">Contact Information</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our team is ready to help. Reach out via any of the methods below.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 bg-sunny-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-sunny-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Phone</p>
                    <a href="tel:+12505550199" className="text-sky-600 hover:text-sky-700 font-semibold text-base transition-colors">
                      (250) 555-0199
                    </a>
                    <p className="text-gray-400 text-xs mt-0.5">Mon–Fri, 7am–7pm PT</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-sky-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Email</p>
                    <a href="mailto:hello@sunnysideup.ca" className="text-sky-600 hover:text-sky-700 font-semibold text-sm transition-colors">
                      hello@sunnysideup.ca
                    </a>
                    <p className="text-gray-400 text-xs mt-0.5">We reply within 1 business day</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Headquarters</p>
                    <p className="text-gray-700 text-sm font-medium">Victoria, British Columbia</p>
                    <p className="text-gray-400 text-xs mt-0.5">Serving 8 provinces Canada-wide</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Business Hours</p>
                    <p className="text-gray-700 text-sm font-medium">Mon–Fri: 7:00 AM – 7:00 PM PT</p>
                    <p className="text-gray-500 text-sm">Sat: 8:00 AM – 5:00 PM PT</p>
                    <p className="text-gray-400 text-xs mt-0.5">24/7 support for commercial contracts</p>
                  </div>
                </div>
              </div>

              {/* Commercial callout */}
              <div className="bg-gradient-to-br from-sky-700 to-sky-900 rounded-2xl p-5 text-white">
                <h4 className="font-black text-base mb-2">🏢 Commercial Clients</h4>
                <p className="text-sky-200 text-sm leading-relaxed mb-3">
                  Multi-location? Custom scheduling? Security requirements? Our commercial team has dedicated support lines.
                </p>
                <a
                  href="mailto:commercial@sunnysideup.ca"
                  className="text-sunny-300 font-semibold text-sm hover:text-sunny-200 transition-colors"
                >
                  commercial@sunnysideup.ca →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">Request Received!</h3>
                    <p className="text-gray-600 text-lg mb-2">
                      Thank you, <strong>{formData.name}</strong>!
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
                      We've received your inquiry for <strong>{formData.serviceType}</strong> services in{' '}
                      <strong>{formData.location}</strong>. Our team will be in touch within 1 business day.
                    </p>
                    <div className="mt-8 p-4 bg-sunny-50 rounded-xl border border-sunny-200">
                      <p className="text-gray-700 text-sm font-medium">
                        Need immediate assistance?{' '}
                        <a href="tel:+12505550199" className="text-sky-600 font-bold hover:underline">
                          Call (250) 555-0199
                        </a>
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-black text-gray-900 mb-1">Request a Free Quote</h2>
                      <p className="text-gray-500 text-sm">
                        All fields marked with * are required. We'll respond within 1 business day.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClass('name')}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClass('email')}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Service Type */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Service Type *
                          </label>
                          <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className={inputClass('serviceType')}
                          >
                            <option value="">Select a service...</option>
                            <optgroup label="Cleaning Services">
                              <option value="Residential Cleaning">Residential Cleaning</option>
                              <option value="Commercial Janitorial">Commercial Janitorial</option>
                              <option value="Move-In/Out Cleaning">Move-In / Move-Out Cleaning</option>
                              <option value="Bank/Retail Cleaning">Bank & Retail Cleaning</option>
                            </optgroup>
                            <optgroup label="Pressure Washing">
                              <option value="Residential Pressure Washing">Residential Pressure Washing</option>
                              <option value="Commercial Pressure Washing">Commercial Pressure Washing</option>
                              <option value="Deck & Patio Washing">Deck & Patio Washing</option>
                            </optgroup>
                            <optgroup label="Handyman">
                              <option value="Residential Handyman">Residential Handyman</option>
                              <option value="Commercial Facility Maintenance">Commercial Facility Maintenance</option>
                            </optgroup>
                            <optgroup label="Other">
                              <option value="commercial">Commercial Partnership / Contract</option>
                              <option value="Other">Other / Not Sure</option>
                            </optgroup>
                          </select>
                          {errors.serviceType && (
                            <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>
                          )}
                        </div>

                        {/* Location */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Your City / Province *
                          </label>
                          <input
                            type="text"
                            name="location"
                            placeholder="Victoria, BC"
                            value={formData.location}
                            onChange={handleChange}
                            className={inputClass('location')}
                          />
                          {errors.location && (
                            <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                          )}
                        </div>
                      </div>

                      {/* Phone (optional) */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone Number <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="(250) 555-0100"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 bg-white transition-all"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Additional Details <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Tell us more about your property, the scope of work, number of locations, or any specific requirements..."
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 bg-white transition-all resize-none"
                        />
                      </div>

                      {/* Client type */}
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">I am a:</p>
                        <div className="flex gap-4">
                          {['Homeowner / Tenant', 'Property Manager', 'Business Owner', 'Facility Manager'].map((type) => (
                            <label key={type} className="flex items-center gap-2 cursor-pointer group">
                              <input type="radio" name="clientType" value={type} className="accent-sky-600" />
                              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white font-bold rounded-xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              Send My Quote Request
                            </>
                          )}
                        </button>
                        <p className="text-gray-400 text-xs mt-3">
                          🔒 Your information is private and will never be shared. We'll only use it to respond to your inquiry.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Frequently Asked <span className="text-sky-600">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How quickly will I receive a quote?',
                a: 'We respond to all quote requests within 1 business day. For urgent commercial needs, call us directly for same-day response.',
              },
              {
                q: 'Are your staff background-checked?',
                a: 'Absolutely. All SunnySideUp employees undergo thorough background checks and security clearances before starting work. This is especially important for our bank and retail clients.',
              },
              {
                q: 'Do you offer contracts for commercial clients?',
                a: 'Yes! We offer flexible maintenance contracts for commercial clients ranging from monthly to annual agreements, with options for multi-location management.',
              },
              {
                q: 'What areas do you serve?',
                a: 'We\'re headquartered in Victoria, BC and operate across 8 Canadian provinces including BC, AB, SK, MB, ON, QC, NS, and NB. View our full coverage map.',
              },
              {
                q: 'Do you use eco-friendly products?',
                a: 'Yes! We prioritize green-certified, eco-friendly cleaning products that are safe for children, pets, and the environment. We also offer food-safe products for supermarket clients.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                  {faq.q}
                  <span className="text-sky-600 group-open:rotate-45 transition-transform duration-200 text-xl font-bold shrink-0 ml-4">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
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
