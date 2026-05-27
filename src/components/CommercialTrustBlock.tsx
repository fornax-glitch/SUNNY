import React from 'react';

const CommercialTrustBlock: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide">
              🏢 Commercial Authority
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mt-4">
              Built for Commercial Reliability
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mt-3">
              Trusted by property managers, retail spaces, and multi-unit buildings across Vancouver Island
            </p>
          </div>

          <div className="w-full md:w-auto">
            <div className="flex flex-wrap gap-2">
              {[
              'Security-Cleared & Professionally Vetted Crews',
                'Strata & Property Management Experience',
                'Scheduled Maintenance Programs',
                'Commercial Reporting & Accountability',
                'Fast Response Times',
                'Eco-Friendly Methods',
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-700"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialTrustBlock;

