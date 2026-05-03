import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { SERVICE_PILLARS } from '../data';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-[88px]">
      {/* Page header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-sky-900 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-sunny-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-sky-400 rounded-full filter blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sunny-400/20 border border-sunny-400/30 text-sunny-300 text-sm font-bold rounded-full uppercase tracking-wide mb-5">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Complete Building Maintenance<br />
            <span className="text-sunny-400">Solutions</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Three specialized service pillars. One trusted partner. Residential and commercial expertise for every property need.
          </p>
        </div>
      </section>

      {/* Service pillar cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {SERVICE_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={pillar.image}
                      alt={pillar.name}
                      className="w-full h-72 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <span className="px-4 py-2 bg-sunny-400 text-gray-900 font-bold rounded-xl text-sm">
                        {pillar.services.length} Specialized Services
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 text-xs font-bold rounded-full uppercase tracking-wide mb-4">
                    Service Pillar {idx + 1}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
                    {pillar.name}
                  </h2>
                  <p className="text-sky-600 font-bold text-lg mb-4 italic">"{pillar.tagline}"</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{pillar.description}</p>

                  {/* Service list preview */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {pillar.services.map((service) => (
                      <div key={service.id} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={15} className="text-sky-500 shrink-0" />
                        {service.title}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/services/${pillar.slug}`}
                    className="btn-secondary"
                  >
                    {pillar.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Choose <span className="text-sunny-500">SunnySideUp?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏆', title: '25+ Years', desc: 'A quarter century of building trust with clients across Canada.' },
              { icon: '🔒', title: 'Bonded & Insured', desc: 'Full insurance coverage and security-cleared staff for your peace of mind.' },
              { icon: '🍁', title: 'Canada-Wide', desc: 'Active operations from Victoria, BC to Atlantic Canada.' },
              { icon: '🌿', title: 'Eco-Friendly', desc: 'Green-certified, pet-safe, and food-safe cleaning products.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        variant="blue"
        headline="Need a Custom Service Plan?"
        subtext="We create tailored maintenance programs for commercial clients with multiple locations or unique requirements."
        primaryCTA={{ label: 'Request a Custom Quote', href: '/contact' }}
        showPhone
      />
    </div>
  );
};

export default ServicesPage;
