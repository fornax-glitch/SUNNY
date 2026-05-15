import React from 'react';

type ProofCategory = {
  title: string;
  description: string;
};

const PROOF_CATEGORIES: ProofCategory[] = [
  {
    title: 'Pressure washing transformation',
    description: 'Strata and property managers use our exterior restores to keep common areas presentable—cleaning that looks consistent week after week.',
  },
  {
    title: 'Siding restoration & surface refresh',
    description: 'Retail and office teams rely on dependable surface refresh for a “ready to welcome” look—without disruption to daily operations.',
  },
  {
    title: 'Driveway / concrete deep cleaning',
    description: 'Recurring maintenance clients value the outcome: reduced grime buildup and safer, cleaner walkways that customers notice.',
  },
  {
    title: 'Commercial storefront cleaning',
    description: 'Property teams choose our dependable storefront cleaning for customer-facing presentation—repeatable results that support confidence and continuity.',
  },
];

const ProofShowcaseExpanded: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl shadow-xl border border-gray-100 bg-linear-to-r from-sky-50 via-white to-sunny-50 p-6 md:p-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4">
              🛡️ Proof that feels dependable
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Reliable results you can book with confidence
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3">
              What clients care about most: clear communication, dependable timelines, and service that stays easy to manage—whether it’s strata, retail, or office properties.
            </p>


          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROOF_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.title}
                className="rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="h-28 bg-gradient-to-br from-sky-100 via-white to-sunny-100 flex items-center justify-center">
                  <div className="text-4xl">{idx === 0 ? '💧' : idx === 1 ? '🏠' : idx === 2 ? '🧱' : '🏬'}</div>
                </div>
                <div className="p-5">
                  <div className="font-black text-gray-900 text-base">{cat.title}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">{cat.description}—so clients experience consistent curb appeal and a cleaner, more “ready to show” commercial/residential presentation.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sunny-400" />
                    <div className="text-xs font-bold text-gray-500">Dependable service, done the same way every time</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofShowcaseExpanded;

