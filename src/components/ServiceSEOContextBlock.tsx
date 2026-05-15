import React from 'react';

type Props = {
  categoryTitle?: string;
};

const ServiceSEOContextBlock: React.FC<Props> = ({ categoryTitle }) => {
  const title = categoryTitle?.trim() ? categoryTitle : 'service';

  return (
    <section className="py-6 sm:py-8 bg-white" aria-label="Service SEO context">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl shadow-xl border border-gray-100 bg-linear-to-r from-sky-50 via-white to-sunny-50 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide">
                🌿 Local Service Authority
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-4">
                Built for Vancouver Island {title}
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3">
                Serving Victoria BC and communities across Vancouver Island with consistent, professional property care.
                Our approach supports both commercial schedules and residential long-term upkeep.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                'Victoria BC based',
                'Vancouver Island coverage',
                'Residential + commercial',
                'Recurring maintenance mindset',
                'Clear communication',
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl text-sm font-bold text-gray-700 shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                heading: 'Commercial-ready reliability',
                body: 'Structured scheduling, dependable execution, and reporting-oriented service for offices, retail, strata, and multi-unit properties.',
              },
              {
                heading: 'Residential property care',
                body: 'Surface-respectful methods with long-term results—so your home stays clean, welcoming, and professionally maintained.',
              },
              {
                heading: 'Long-term maintenance plans',
                body: 'Seasonal and recurring service support that helps prevent repeat buildup and protect curb appeal over time.',
              },
            ].map((card) => (
              <div
                key={card.heading}
                className="rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 p-4 shadow-sm"
              >
                <div className="font-black text-gray-900">{card.heading}</div>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSEOContextBlock;

