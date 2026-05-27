import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

import ServiceGrid from '../components/ServiceGrid';
import CTABanner from '../components/CTABanner';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import AudienceTabs from '../components/AudienceTabs';
import TrustStrip from '../components/TrustStrip';
import CommercialTrustBlock from '../components/CommercialTrustBlock';
import ServiceProcessExpanded from '../components/ServiceProcessExpanded';
import ServiceFAQBlock from '../components/ServiceFAQBlock';
import { BEFORE_AFTER_ITEMS } from '../data';

import { trustParagraphs } from '../copy/trustAssurance';


import { SERVICE_CATEGORIES } from '../data/serviceCategories';
import { getContactHref } from '../utils/contactCta';



// Note: this page is now routed by /services/:category/:service



const ServiceDetailPage: React.FC = () => {
  const { category, service } = useParams<{ category: string; service: string }>();

  const categoryData = SERVICE_CATEGORIES.find((c) => c.slug === category);
  const serviceData = categoryData?.services.find((s) => s.slug === service);

  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial'>('all');




  if (!categoryData || !serviceData) return <Navigate to="/services" replace />;

  // Visuals based on top-level category
  const heroBg = {
    cleaning: 'from-sky-900 to-sky-700',
    handyman: 'from-gray-900 to-amber-900',
  }[categoryData.slug as 'cleaning' | 'handyman'] ?? 'from-gray-900 to-sky-900';

  const accentColor = {
    cleaning: 'text-sky-400',
    handyman: 'text-sunny-400',
  }[categoryData.slug as 'cleaning' | 'handyman'] ?? 'text-sunny-400';

  const isPressureWashing = serviceData.slug === 'pressure-washing';


  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className={`bg-linear-to-br ${heroBg} py-20 lg:py-28 relative overflow-hidden`}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${categoryData.image}')` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link
              to={`/services/${categoryData.slug}`}
              className="hover:text-white transition-colors"
            >
              {categoryData.title}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{serviceData.title}</span>
          </div>


          <div className="max-w-2xl">
            <span className={`text-sm font-bold uppercase tracking-wider ${accentColor} mb-3 block`}>
              {categoryData.title}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              {serviceData.title}
            </h1>
            <p className={`text-xl font-semibold italic mb-5 ${accentColor}`}
            >
              "${serviceData.slug.replace(/-/g, ' ')}"
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{serviceData.description ?? categoryData.description}</p>

            {/* Decision layer (mirrors CategoryPage: All / Residential / Commercial) */}
            <div className="mb-8">
              <AudienceTabs activeTab={activeTab} onChange={setActiveTab} />
            </div>


            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={getContactHref(activeTab)} className="btn-primary">
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+12508899222" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 transition-all">
                <Phone size={16} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pressure Washing Seasonal Banner */}
 {/* Old banner removed - seasonal banner now in HomePage */} 

      {/* Services grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Explore <span className="text-sky-600">{categoryData.title}</span> Services
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              Choose your preferred audience, then browse the best-fit options.
            </p>
          </div>

          {/* Trust strip (parity with CategoryPage, shown before CTA/content options) */}
          <TrustStrip />

          <ServiceGrid


            services={categoryData.services}
            ctaHref={getContactHref(activeTab)}
          />


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

      {/* Service process enhancement */}
      <ServiceProcessExpanded />

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
              { step: '03', icon: '⚙️', title: 'Expert Execution', desc: 'Our trained team arrives on time and delivers exceptional results.' },

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

      {/* Service process enhancement */}
      {isPressureWashing && <ServiceFAQBlock serviceType={serviceData.title} />}
      {!isPressureWashing && <ServiceFAQBlock serviceType={serviceData.title} />}

      {/* Guarantees */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {[ 
              '✅ Satisfaction Guaranteed',
              '🔒 Security-Cleared & Professionally Vetted',
              '🌿 Eco-Friendly Products',
              '⏰ On-Time Every Time',
              '🍁 Local, Family-Owned Business',
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


      <CommercialTrustBlock />

      <CTABanner
        variant="yellow"
        headline={`Ready for Professional ${serviceData.title}?`}
        subtext={`Get your free, no-obligation estimate from our trusted Vancouver Island team for ${categoryData.title}.`}

        primaryCTA={{ label: 'Get My Free Quote', href: getContactHref(activeTab) }}
        secondaryCTA={{ label: 'View All Services', href: '/services' }}
        showPhone
      />
    </div>
  );
};

export default ServiceDetailPage;
