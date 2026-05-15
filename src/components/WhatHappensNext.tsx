import React from 'react';

const WhatHappensNext: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'We review your request',
      desc: 'We confirm service type, location details, and any quick clarifications needed for an accurate quote.',
      icon: '🔍',
    },
    {
      step: '02',
      title: 'You get a clear quote',
      desc: 'You receive a straightforward estimate with timeline expectations and what’s included.',
      icon: '🧠',
    },
    {
      step: '03',
      title: 'We schedule around you',
      desc: 'We align on the visit window and coordinate for smooth execution—especially for commercial schedules.',
      icon: '📅',
    },
    {
      step: '04',
      title: 'Work begins with confidence',
      desc: 'On-site execution follows our operational standards—clean, respectful, and quality-focused.',
      icon: '✅',
    },
  ];

  return (
    <section className="py-24 bg-sky-50/40" aria-labelledby="what-happens-next">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-6 py-3 bg-white/70 text-sky-700 text-sm font-black rounded-full uppercase tracking-widest mb-4">
            WhatHappensNext
          </span>
          <h2 id="what-happens-next" className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            What happens after you contact us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A predictable flow designed to reduce back-and-forth and get your project moving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-sunny-50 text-sunny-700 border border-sunny-100 flex items-center justify-center text-2xl flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-sunny-400/20 text-sunny-800 text-xs font-black rounded-full">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;

