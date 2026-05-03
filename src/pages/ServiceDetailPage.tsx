import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import ServiceGrid from '../components/ServiceGrid';
import CTABanner from '../components/CTABanner';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { SERVICE_PILLARS, BEFORE_AFTER_ITEMS } from '../data';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const pillar = SERVICE_PILLARS.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial'>('all');

  if (!pillar) return <Navigate to="/services" replace />;

  const filteredServices =
    activeTab === 'all'
      ? pillar.services
      : pillar.services.filter((s) => s.category === activeTab || s.category === 'both');

  const heroBg = {
    cleaning: 'from-sky-900 to-sky-700',
    'pressure-washing': 'from-gray-900 to-sky-900',
    handyman: 'from-gray-900 to-amber-900',
  }[slug ?? 'cleaning'] ?? 'from-gray-900 to-sky-900';

  const accentColor = {
    cleaning: 'text-sky-400',
    'pressure-washing': 'text-sky-300',
    handyman: 'text-sunny-400',
  }[slug ?? 'cleaning'] ?? 'text-sunny-400';

  const isPressureWashing = slug === 'pressure-washing';

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className={`bg-gradient-to-br ${heroBg} py-20 lg:py-28 relative overflow-hidden`}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${pillar.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white font-medium">{pillar.name}</span>
          </div>

          <div className="max-w-2xl">
            <span className={`text-sm font-bold uppercase tracking-wider ${accentColor} mb-3 block`}>
              Service Pillar
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              {pillar.name}
            </h1>
            <p className={`text-xl font-semibold italic mb-5 ${accentColor}`}>
              "{pillar.tagline}"
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{pillar.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+12505550199" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 transition-all">
                <Phone size={16} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pressure Washing Seasonal Banner */}
      {isPressureWashing && (
        <section className="bg-gradient-to-r from-sunny-400 to-sunny-500 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
              <span className="text-3xl">🌸</span>
              <p className="text-gray-900 font-bold text-lg">
                Spring is Pressure Washing Season – Renew Your Curb Appeal Today!
              </p>
              <Link
                to="/contact"
                className="px-5 py-2 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors text-sm shrink-0"
              >
                Book Now →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Services grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="text-sky-600">{pillar.name}</span> Services
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Filter by client type to find the exact service you need.
            </p>

            {/* Filter tabs */}
            <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1">
              {(['all', 'residential', 'commercial'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'all' ? 'All Services' : tab === 'residential' ? '🏠 Residential' : '🏢 Commercial'}
                </button>
              ))}
            </div>
          </div>

          <ServiceGrid services={filteredServices} ctaHref="/contact" />
        </div>
      </section>

      {/* Pressure washing before/after */}
      {isPressureWashing && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Real <span className="text-sunny-500">Transformations</span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Drag the slider to compare before and after our professional pressure washing services.
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
      )}

      {/* Process section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="text-sky-600">Simple Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', icon: '📋', title: 'Request a Quote', desc: 'Fill out our quick form or call us. We respond within 1 business day.' },
              { step: '02', icon: '🗓️', title: 'Schedule Your Service', desc: 'We work around your schedule, including after-hours for commercial clients.' },
              { step: '03', icon: '⚙️', title: 'Expert Execution', desc: 'Our trained, insured team arrives on time and delivers exceptional results.' },
              { step: '04', icon: '✅', title: 'Quality Check', desc: 'We inspect our work before leaving. Your satisfaction is guaranteed.' },
            ].map((step) => (
              <div key={step.step} className="text-center relative">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-3xl mx-auto">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-sunny-400 rounded-full flex items-center justify-center text-xs font-black text-gray-900">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              '✅ Satisfaction Guaranteed',
              '🔒 Fully Insured & Bonded',
              '🌿 Eco-Friendly Products',
              '⏰ On-Time Every Time',
              '🍁 Canadian-Owned Business',
              '📞 24/7 Support for Commercial Clients',
            ].map((guarantee) => (
              <div
                key={guarantee}
                className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 shadow-sm text-gray-700 text-sm font-medium"
              >
                {guarantee}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        variant="yellow"
        headline={`Ready for Professional ${pillar.name}?`}
        subtext="Get your free, no-obligation estimate from Canada's most trusted building maintenance team."
        primaryCTA={{ label: 'Get My Free Quote', href: '/contact' }}
        secondaryCTA={{ label: 'View All Services', href: '/services' }}
        showPhone
      />
    </div>
  );
};

export default ServiceDetailPage;
