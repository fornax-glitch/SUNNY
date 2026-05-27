import React from 'react';

const TrustStrip: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mb-10 mt-4">
      <div className="rounded-2xl bg-sky-50/70 border border-sky-100 px-5 py-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-2 px-4 py-3 bg-white/80 rounded-2xl border border-sky-100 shadow-sm">
            <span className="text-sky-700 text-base">✅</span>
            <p className="text-gray-900 text-sm font-bold">Security-Cleared & Professionally Vetted</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 bg-white/80 rounded-2xl border border-sky-100 shadow-sm">
            <span className="text-amber-700 text-base">🧾</span>
            <p className="text-gray-900 text-sm font-bold">Clear reporting for commercial</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 bg-white/80 rounded-2xl border border-sky-100 shadow-sm">
            <span className="text-emerald-700 text-base">🌿</span>
            <p className="text-gray-900 text-sm font-bold">Island-safe eco practices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;

