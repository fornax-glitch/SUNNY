import React from 'react';

const TransformationHighlights: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl shadow-xl border border-gray-100 bg-linear-to-r from-sky-50 via-white to-sunny-50 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide">
                ✨ Confidence Boost
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-4">
                See the Difference Professional Care Makes
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3">
                From curb appeal to day-to-day maintenance, SunnySideUp delivers clean, reliable results your property can count on—across Vancouver Island.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {[
                { icon: '🏡', title: 'Restored curb appeal', desc: 'Surfaces look refreshed and welcoming.' },
                { icon: '🛡️', title: 'Safer walkways & surfaces', desc: 'Cleaner traction, fewer eyesores.' },
                { icon: '🏢', title: 'Commercial-ready presentation', desc: 'Consistent results for managers & teams.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="min-w-[240px] sm:min-w-[260px] rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-sky-500/10 to-sunny-400/10 flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div className="font-black text-gray-900">
                      {item.title}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-3">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationHighlights;

