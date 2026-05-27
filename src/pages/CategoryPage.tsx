import React, { useState } from 'react';
import type { AudienceTab } from '../utils/contactCta';
import { useParams, Link, Navigate } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';
import ServiceGrid from '../components/ServiceGrid';

import CTABanner from '../components/CTABanner';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import AudienceTabs from '../components/AudienceTabs';
import TrustStrip from '../components/TrustStrip';
import ProofShowcase from '../components/ProofShowcase';
import ServiceSEOContextBlock from '../components/ServiceSEOContextBlock';


import { useServiceFiltering } from '../hooks/useServiceFiltering';
import { getContactHref } from '../utils/contactCta';

import { BEFORE_AFTER_ITEMS } from '../data';
import { SERVICE_CATEGORIES } from '../data/serviceCategories';

type CategorySlug = string;



const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: CategorySlug }>();


  const categoryData = SERVICE_CATEGORIES.find((c) => c.slug === category);

  if (!categoryData) return <Navigate to="/services" replace />;

  const heroBg = {
    cleaning: 'from-sky-900 to-sky-700',
    handyman: 'from-gray-900 to-amber-900',
  }[categoryData.slug as 'cleaning' | 'handyman'] ?? 'from-gray-900 to-sky-900';

  const accentColor = {
    cleaning: 'text-sky-400',
    handyman: 'text-sunny-400',
  }[categoryData.slug as 'cleaning' | 'handyman'] ?? 'text-sunny-400';

  const [activeTab, setActiveTab] = useState<AudienceTab>('all');

  const filteredServices = useServiceFiltering(
    categoryData?.services as unknown[] | undefined,
    activeTab
  );



  return (
    <div className="pt-[88px]">

      <section className={`bg-linear-to-br ${heroBg} py-20 lg:py-28 relative overflow-hidden`}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${categoryData.image}')` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white font-medium">{categoryData.title}</span>
          </div>

          <div className="max-w-2xl">
            <span className={`text-sm font-bold uppercase tracking-wider ${accentColor} mb-3 block`}>
              Service Category
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              {categoryData.title}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{categoryData.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={getContactHref(activeTab)} className="btn-primary">
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>

              <a
                href="tel:+12508899222"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 transition-all"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Explore <span className="text-sky-600">{categoryData.title}</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              Choose the exact service you need.
            </p>

            {/* Audience filter */}
            <AudienceTabs activeTab={activeTab} onChange={setActiveTab} />

          </div>

          {/* Trust strip */}
          <TrustStrip />

          <ServiceGrid


            services={(() => {
              const services = [...(filteredServices as unknown[])];
              const isCommercial = activeTab === 'commercial';
              const isResidential = activeTab === 'residential';

              const score = (s: unknown) => {
                const sAny = s as { title?: unknown; icon?: unknown };
                const title = String(sAny?.title ?? '').toLowerCase();
                const icon = String(sAny?.icon ?? '').toLowerCase();
                const allText = `${title} ${icon}`;

                const isStrata = allText.includes('strata');
                const isJanitorial = allText.includes('janitorial');
                const isCommercial = allText.includes('commercial');
                const isWindow = allText.includes('window');
                const isPressure = allText.includes('pressure');
                const isCarpet = allText.includes('carpet') || allText.includes('upholstery');
                const isExterior = allText.includes('exterior') || allText.includes('pressure');
                const isOffice = allText.includes('office');
                const isRetail = allText.includes('retail');
                const isHealthcare = allText.includes('healthcare') || allText.includes('clinic');

                // Commercial priority buckets
                if (isCommercial) {
                  if (isJanitorial) return 10;
                  if (isStrata) return 20;
                  if (isOffice || isRetail || isHealthcare || isCommercial) return 30;
                  if (isWindow) return 60;
                  if (isPressure) return 70;
                  if (isCarpet || isExterior) return 80;
                  return 999;
                }

                // Residential priority buckets
                if (isResidential) {
                  if (isCarpet) return 10;
                  if (isWindow) return 30;
                  if (isPressure) return 50;
                  if (isExterior) return 60;
                  return 999;
                }

                // All priority blend (approx using presence across keywords)
                if (!isCommercial && !isResidential) {
                  if (isJanitorial) return 10;
                  if (isStrata) return 20;
                  if (isOffice || isRetail || isHealthcare || isCommercial) return 30;
                  if (isWindow) return 60;
                  if (isPressure) return 70;
                  if (isCarpet) return 80;
                  return 999;
                }

                return 999;
              };

              return services.sort((a, b) => score(a) - score(b));
            })()}
            ctaHref={getContactHref(activeTab)}
          />

          <ProofShowcase />

          <ServiceSEOContextBlock categoryTitle={categoryData.title} />


        </div>
      </section>


      {/* Optional pressure washing before/after for cleaning */}
      {categoryData.slug === 'cleaning' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Results you can see <span className="text-sunny-500">—</span>
                <span className="text-sunny-500">pressure-washed right</span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Drag the slider to compare before and after. We restore curb appeal with consistent, professional pressure washing across residential and commercial properties.
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

      <CTABanner
        variant="yellow"
        headline={`Ready for ${categoryData.title}?`}
        subtext="Get your free, no-obligation estimate from our trusted Vancouver Island team."
        primaryCTA={{ label: 'Get My Free Quote', href: getContactHref(activeTab) }}
        secondaryCTA={{ label: 'Contact Us', href: getContactHref(activeTab) }}

        showPhone
      />
    </div>
  );
};

export default CategoryPage;

