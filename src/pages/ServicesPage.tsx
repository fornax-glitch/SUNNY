import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/serviceCategories';
import { PHONE } from '../data';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-[88px]">
      <section className="relative bg-linear-to-r from-sky-900 to-sunny-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-wider text-sky-200 mb-3">
              Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Cleaning & Handyman for Homes and Businesses
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Browse our two service categories and select the exact service you need. We’re based in
              Victoria and serve Vancouver Island.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`}
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
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4">
              Explore Services
            </span>
            <h2 className="section-heading text-gray-900 mb-4">
              Choose a category — <span className="text-sky-600">then pick your service</span>
            </h2>
            <p className="section-subheading">Residential + commercial options available in Cleaning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICE_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                to={`/services/${category.slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${category.image ?? '/images/cleaning-service.jpg'}')` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-black text-2xl mb-2">{category.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-2 mb-4">{category.description}</p>

                  <span className="inline-flex items-center gap-2 text-sunny-300 font-semibold">
                    View category <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="text-3xl mb-3">🏠</div>
              <div className="font-bold text-gray-900">Residential Options</div>
              <div className="text-sm text-gray-600 mt-2">Window cleaning, carpet cleaning, deep cleans & more.</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="text-3xl mb-3">🏢</div>
              <div className="font-bold text-gray-900">Commercial / Janitorial</div>
              <div className="text-sm text-gray-600 mt-2">Reliable scheduling for offices, retail, and groups.</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="text-3xl mb-3">🔧</div>
              <div className="font-bold text-gray-900">Handyman</div>
              <div className="text-sm text-gray-600 mt-2">Repairs, installations, and maintenance when you need it.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

