import React from 'react';

const VancouverIslandIdentityStrip: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
      <div className="rounded-3xl border border-white/10 bg-linear-to-r from-sky-900/40 via-gray-900/40 to-sunny-900/30 shadow-xl overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-sky-500/10 via-white/0 to-sunny-400/10" />
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-sunny-400/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <span className="text-sunny-300">🏝️</span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white">
                    Victoria, BC • Vancouver Island
                  </span>
                </div>
                <p className="mt-2 text-sm sm:text-[13px] leading-relaxed text-gray-200">
                  Coastal, weather-aware property care with local accountability—residential comfort and commercial reliability.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                {[
                  { label: 'Insured Pros', tone: 'bg-white/5 border-white/10 text-white' },
                  { label: 'Eco-Conscious Methods', tone: 'bg-white/5 border-white/10 text-white' },
                  { label: 'Commercial + Residential', tone: 'bg-white/5 border-white/10 text-white' },
                  { label: 'Recurring Maintenance', tone: 'bg-white/5 border-white/10 text-white' },
                ].map((c) => (
                  <span
                    key={c.label}
                    className={`px-3 py-1.5 rounded-full text-[12px] font-bold border ${c.tone} whitespace-nowrap`}
                  >
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VancouverIslandIdentityStrip;

