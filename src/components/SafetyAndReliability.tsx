import React from 'react';

const SafetyAndReliability: React.FC = () => {
  const points = [
    {
      title: 'Insured & dependable staffing',
      desc: 'Background-checked teams designed for consistent, professional service delivery.',
      icon: '🛡️',
    },
    {
      title: 'Operational fit',
      desc: 'We plan around building access, schedules, and uptime needs.',
      icon: '🏢',
    },
    {
      title: 'Clean results you can verify',
      desc: 'A completion mindset—your space looks finished, not just started.',
      icon: '👀',
    },
    {
      title: 'Respect for time & tenants',
      desc: 'Clear coordination to minimize disruption and keep day-to-day operations steady.',
      icon: '⏳',
    },
    {
      title: 'Vancouver Island consistency',
      desc: 'A local operating approach built for region-specific needs and weather patterns.',
      icon: '🌲',
    },
    {
      title: 'Quality mindset from day one',
      desc: 'We execute with care—because reliable outcomes are the point.',
      icon: '✨',
    },
  ];

  return (
    <section className="py-24 bg-white" aria-labelledby="safety-and-reliability">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-6 py-3 bg-emerald-50 text-emerald-700 text-sm font-black rounded-full uppercase tracking-widest mb-4">
            Safety & Reliability
          </span>
          <h2 id="safety-and-reliability" className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Built to perform safely, every visit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Consistency is more than a promise—it's a standard across staffing, scheduling, and on-site execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-emerald-50/25 p-8 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center text-2xl mb-5">
                {p.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyAndReliability;

