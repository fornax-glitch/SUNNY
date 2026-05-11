import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import type { ServiceItem } from '../types';
import type { NestedService } from '../types/services';

interface ServiceGridProps {
  services: Array<Pick<ServiceItem, 'id' | 'icon' | 'title' | 'description' | 'features' | 'category'>>;
  columns?: 2 | 3;
  showCategory?: boolean;
  ctaHref?: string;
}


const categoryBadge: Record<string, string> = {
  residential: 'bg-sunny-100 text-sunny-700',
  commercial: 'bg-sky-100 text-sky-700',
  both: 'bg-gray-100 text-gray-700',
};

const categoryLabel: Record<string, string> = {
  residential: 'Residential',
  commercial: 'Commercial',
  both: 'Res. & Commercial',
};

const ServiceGrid: React.FC<ServiceGridProps> = ({
  services,
  columns = 3,
  showCategory = true,
  ctaHref,
}) => {
  return (
    <div
  className={`max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 ${
    columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
  } gap-6 justify-items-center`}
>
      {services.map((service) => (
        <div
          key={service.id}
          className="group w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          {/* Card top accent */}
          <div className="h-1 bg-linear-to-r from-sunny-400 to-sky-500" />

          <div className="p-6">
            {/* Icon and category */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-sunny-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              {showCategory && (
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryBadge[service.category]}`}
                >
                  {categoryLabel[service.category]}
                </span>
              )}
            </div>

            {/* Content */}
            <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-sky-700 transition-colors leading-snug">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>

            {/* Features */}
            <ul className="space-y-1.5 mb-5">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle size={14} className="text-sky-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            {ctaHref && (
              <Link
                to={ctaHref}
                className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sunny-600 transition-colors"
              >
                Learn more <span>→</span>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
