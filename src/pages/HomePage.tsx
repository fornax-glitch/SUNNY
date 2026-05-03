import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Leaf, ArrowRight, CheckCircle, Star, ChevronRight } from 'lucide-react';
import ServiceGrid from '../components/ServiceGrid';
import TestimonialCarousel from '../components/TestimonialCarousel';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import CTABanner from '../components/CTABanner';
import { SERVICE_PILLARS, TESTIMONIALS, STATS, TRUSTED_CLIENTS, BEFORE_AFTER_ITEMS } from '../data';

const heroLines = [
  'Premier Building Maintenance',
  'From Victoria to Atlantic Canada.',
];

const HomePage: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-[88px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
        />
        {/* Dark overlay + gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-sky-900/40" />
        {/* Yellow bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sunny-400 via-sunny-300 to-sky-400" />

        {/* Floating badge */}
        <div className="absolute top-28 right-6 lg:right-16 animate-float">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 max-w-[180px]">
            <div className="flex items-center gap-2 mb-1">
              <Star size={14} className="fill-sunny-400 text-sunny-400" />
              <Star size={14} className="fill-sunny-400 text-sunny-400" />
              <Star size={14} className="fill-sunny-400 text-sunny-400" />
              <Star size={14} className="fill-sunny-400 text-sunny-400" />
              <Star size={14} className="fill-sunny-400 text-sunny-400" />
            </div>
            <p className="text-gray-800 text-xs font-semibold leading-tight">"Best maintenance team we've ever worked with!"</p>
            <p className="text-gray-400 text-xs mt-1.5">— Commercial Client, AB</p>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-sunny-400/20 border border-sunny-400/30 rounded-full px-4 py-1.5 mb-6 transition-all duration-700 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 bg-sunny-400 rounded-full animate-pulse" />
              <span className="text-sunny-300 text-sm font-semibold">25+ Years of Excellence in Canada</span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {heroLines[0]}{' '}
              <span className="text-sunny-400">{heroLines[1]}</span>
            </h1>

            {/* Sub-headline */}
            <p
              className={`text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              25+ years of excellence in professional cleaning, pressure washing, and handyman services.
              Trusted by homeowners and national retail giants alike.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sunny-400 hover:bg-sunny-300 text-gray-900 font-bold rounded-xl shadow-xl hover:shadow-sunny-400/30 transition-all hover:-translate-y-0.5 text-base"
              >
                Book a Residential Service
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact?type=commercial"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 transition-all hover:-translate-y-0.5 text-base"
              >
                Commercial Partnerships
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className={`flex flex-wrap gap-5 transition-all duration-700 delay-[400ms] ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {[
                { icon: <Shield size={14} />, label: 'Fully Insured & Bonded' },
                { icon: <Award size={14} />, label: 'Security-Cleared Staff' },
                { icon: <Leaf size={14} />, label: 'Eco-Friendly Products' },
                { icon: <Users size={14} />, label: 'Res. & Commercial' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="text-sunny-400">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-3xl font-black text-sunny-400">{stat.value}</div>
                <div className="text-gray-400 text-sm font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE PILLARS OVERVIEW ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4">
              Our Services
            </span>
            <h2 className="section-heading text-gray-900 mb-4">
              Everything Your Property Needs,<br />
              <span className="text-sky-600">Under One Roof</span>
            </h2>
            <p className="section-subheading">
              Three core service pillars. One trusted partner. Decades of experience serving residential and commercial clients across Canada.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {SERVICE_PILLARS.map((pillar) => (
              <Link
                key={pillar.id}
                to={`/services/${pillar.slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${pillar.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-black text-xl mb-1">{pillar.name}</h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{pillar.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-sunny-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-sunny-400 text-gray-900 text-xs font-bold rounded-full">
                    {pillar.services.length} Services
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SPRING PRESSURE WASHING BANNER ─── */}
      <section className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/images/pressure-washing.jpg')` }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="text-5xl">💧</div>
              <div>
                <div className="text-sky-200 text-sm font-bold uppercase tracking-wider mb-1">Seasonal Special</div>
                <h3 className="text-white text-2xl md:text-3xl font-black leading-tight">
                  Spring is Pressure Washing Season
                </h3>
                <p className="text-sky-200 text-base mt-1">Renew Your Curb Appeal — Book Now & Save</p>
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                to="/services/pressure-washing"
                className="px-6 py-3 bg-sunny-400 hover:bg-sunny-300 text-gray-900 font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg text-sm"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all hover:-translate-y-0.5 text-sm"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED CLEANING SERVICE ─── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/commercial-cleaning.jpg"
                  alt="Commercial Cleaning Service"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sunny-100 rounded-xl flex items-center justify-center text-xl">🏦</div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">200+</div>
                    <div className="text-xs text-gray-500 font-medium">Commercial Contracts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-sunny-100 text-sunny-700 text-sm font-bold rounded-full uppercase tracking-wide mb-5">
                Commercial Cleaning
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-tight">
                Trusted by Banks, Supermarkets,<br />
                <span className="text-sky-600">and National Retail Chains</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our commercial janitorial division operates with security-cleared, bonded staff — precisely what high-security environments demand. We specialize in large-footprint retail, financial institutions, and multi-location maintenance programs.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Security-cleared & background-checked staff',
                  'After-hours & overnight scheduling available',
                  'Customized multi-location service plans',
                  'Detailed service reports & compliance documentation',
                  'Eco-certified & food-safe cleaning products',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-sky-500 shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/services/cleaning" className="btn-secondary">
                  Commercial Solutions
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact?type=commercial" className="btn-outline-yellow">
                  Request a Partnership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BEFORE & AFTER SLIDER ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4">
              Real Results
            </span>
            <h2 className="section-heading text-gray-900 mb-4">
              See the <span className="text-sunny-500">SunnySideUp</span> Difference
            </h2>
            <p className="section-subheading">
              Drag the slider to see the dramatic transformation our pressure washing services deliver.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {BEFORE_AFTER_ITEMS.map((item) => (
              <BeforeAfterSlider
                key={item.id}
                before={item.before}
                after={item.after}
                title={item.title}
                service={item.service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY SECTION ─── */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest mb-10">
            Trusted by Leading Canadian Businesses
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TRUSTED_CLIENTS.map((client) => (
              <div
                key={client.id}
                className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:border-sunny-200 hover:shadow-md transition-all group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform">{client.placeholder}</div>
                <div className="text-center">
                  <div className="text-gray-800 text-xs font-bold leading-tight">{client.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{client.category}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">
            * Client names anonymized for confidentiality. References available upon request.
          </p>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1.5 bg-sunny-100 text-sunny-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4">
              Client Reviews
            </span>
            <h2 className="section-heading text-gray-900 mb-4">
              What Our <span className="text-sky-600">Clients</span> Say
            </h2>
            <p className="section-subheading">
              From Victoria homeowners to national commercial property managers — our reputation speaks for itself.
            </p>
          </div>
          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* ─── HANDYMAN PREVIEW ─── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-sunny-100 text-sunny-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4">
              Handyman Services
            </span>
            <h2 className="section-heading text-gray-900 mb-4">
              Fix It Right. <span className="text-sky-600">Fix It Once.</span>
            </h2>
            <p className="section-subheading">
              Our skilled handymen handle installations, repairs, and maintenance for homes and commercial facilities across Canada.
            </p>
          </div>
          <ServiceGrid
            services={SERVICE_PILLARS[2].services.slice(0, 3)}
            ctaHref="/services/handyman"
          />
          <div className="text-center mt-10">
            <Link to="/services/handyman" className="btn-primary">
              All Handyman Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTABanner
        variant="yellow"
        badge="Ready to Get Started?"
        headline="Your Property Deserves the Best."
        subtext="Join 12,000+ satisfied clients. Get your free, no-obligation quote within 24 hours."
        primaryCTA={{ label: 'Get My Free Quote', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Services', href: '/services' }}
        showPhone
      />
    </div>
  );
};

export default HomePage;
