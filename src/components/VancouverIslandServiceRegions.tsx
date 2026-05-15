import React from 'react';

type RegionCard = {
  name: string;
  badge: string;
  icon: string;
  insight: string;
  context: string;
  relevance: string;
  chips: string[];
};

const REGION_CARDS: RegionCard[] = [
  {
    name: 'Victoria',
    badge: 'Coastal Core',
    icon: '🏛️',
    insight: 'Keep entrances and paths clean through damp fall months.',
    context: 'Salt air + regular moisture can accelerate buildup on stone, siding, and storefront exteriors.',
    relevance: 'Ideal for curb appeal refreshes, storefront upkeep, and dependable recurring scheduling.',
    chips: ['moss & moisture', 'curb appeal', 'storefront upkeep'],
  },
  {
    name: 'Nanaimo',
    badge: 'Year-Round Weathering',
    icon: '🌊',
    insight: 'Prevent algae and grime from settling into high-traffic surfaces.',
    context: 'Coastal humidity contributes to algae growth and streaking—especially after seasonal rains.',
    relevance: 'Great for pressure washing, exterior cleaning, and commercial-ready presentation.',
    chips: ['algae control', 'seasonal exteriors', 'commercial-ready'],
  },
  {
    name: 'Langford',
    badge: 'Family Property Care',
    icon: '🏡',
    insight: 'Maintain fresh look between wet-weather seasons.',
    context: 'Moisture and debris build up faster on driveways, decks, and walkways in coastal climates.',
    relevance: 'Residential care with consistent results—so properties stay welcoming and protected.',
    chips: ['deck & driveway care', 'seasonal exterior', 'recurring upkeep'],
  },
  {
    name: 'Saanich',
    badge: 'Strata-Friendly Care',
    icon: '🏢',
    insight: 'Stay on schedule with reporting-oriented service.',
    context: 'Multi-unit areas need tidy, reliable execution—especially when damp conditions keep returning.',
    relevance: 'Reliable exterior cleaning and maintenance for strata, offices, and retail zones.',
    chips: ['strata timing', 'clean presentation', 'reliable scheduling'],
  },
  {
    name: 'Duncan',
    badge: 'Seasonal Refresh',
    icon: '🍃',
    insight: 'Address moss before it turns into stubborn surface staining.',
    context: 'Rain cycles can bring fast growth on shaded surfaces and textured building materials.',
    relevance: 'Perfect for exterior care and restoring safe, attractive entryways.',
    chips: ['moss prevention', 'safer surfaces', 'shaded areas'],
  },
  {
    name: 'Sidney',
    badge: 'Coastal Curb Appeal',
    icon: '🌤️',
    insight: 'Protect curb appeal against salt mist and drifting moisture.',
    context: 'Coastal air and wet winters can dull finishes and encourage streaking and buildup.',
    relevance: 'Clean, professional maintenance for both homes and commercial spaces.',
    chips: ['salt-air wear', 'finish restoration', 'residential + commercial'],
  },
];

const VancouverIslandServiceRegions: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4">
            🏝️ Regional Authority
          </span>
          <h2 className="section-heading text-gray-900 mb-3">
            Service regions built for Vancouver Island conditions
          </h2>
          <p className="section-subheading">
            Local moisture, coastal wear, and busy property timelines—handled with dependable care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REGION_CARDS.map((card, idx) => (
            <div
              key={card.name}
              className={
                idx % 2 === 0
                  ? 'rounded-3xl border border-sky-100 bg-linear-to-br from-sky-50 via-white to-sunny-50 shadow-sm p-6'
                  : 'rounded-3xl border border-gray-100 bg-white shadow-sm p-6'
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/70 border border-gray-100 flex items-center justify-center text-2xl">
                      {card.icon}
                    </div>
                    <div>
                      <div className="text-gray-900 font-black text-lg leading-tight">{card.name}</div>
                      <div className="text-sky-700 text-xs font-bold uppercase tracking-wide mt-1">
                        {card.badge}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="text-gray-900 font-bold text-sm">Local maintenance insight</div>
                <p className="text-gray-600 text-sm leading-relaxed">{card.insight}</p>

                <div className="pt-2">
                  <div className="text-gray-900 font-bold text-sm">Weather & property context</div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">{card.context}</p>
                </div>

                <div>
                  <div className="text-gray-900 font-bold text-sm">Why it matters for service</div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">{card.relevance}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {card.chips.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-full text-[11px] font-bold bg-sky-100 text-sky-700 border border-sky-200"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VancouverIslandServiceRegions;

