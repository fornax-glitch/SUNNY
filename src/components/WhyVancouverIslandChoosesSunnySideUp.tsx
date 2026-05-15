import React from 'react';

const WHY_LOCAL_LAYERS = [
  {
    icon: '🏝️',
    title: 'Local identity that fits Vancouver Island',
    description:
      'Local weather awareness and coastal environment adaptation—so care is consistent with the realities of Island surfaces.',
  },
  {
    icon: '📞',
    title: 'Transparent communication & clear expectations',
    description:
      'Fast scheduling, straightforward timelines, and easy-to-understand updates from first message to final walkthrough.',
  },
  {
    icon: '🛡️',
    title: 'Reliability over time',
    description:
      'Insured professionals and recurring maintenance readiness—helping you protect property value with consistent upkeep.',
  },
];

const WhyVancouverIslandChoosesSunnySideUp: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl shadow-xl border border-gray-100 bg-linear-to-r from-sky-50 via-white to-sunny-50 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide">
                🏡 Local Trust
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-4">
                Why Vancouver Island Chooses SunnySideUp
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3">
                Premium property care built around Island accountability—communication you can trust, service expectations you can see, and reliability that lasts.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_LOCAL_LAYERS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500/10 to-sunny-400/10 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div className="font-black text-gray-900">{item.title}</div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: 'Vancouver Island weather awareness',
                detail: 'Care designed for coastal conditions and seasonal surface change.',
              },
              {
                label: 'Service experience you can follow',
                detail: 'Clear updates and expectations at every step.',
              },
              {
                label: 'Recurring maintenance readiness',
                detail: 'Ongoing support that keeps properties looking and performing their best.',
              },
            ].map((row) => (
              <div
                key={row.label}
                className="rounded-2xl bg-white/60 border border-gray-100 p-4"
              >
                <div className="text-sm font-bold text-gray-800">{row.label}</div>
                <div className="text-xs text-gray-500 mt-1 leading-relaxed">{row.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVancouverIslandChoosesSunnySideUp;

