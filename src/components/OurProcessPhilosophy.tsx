import React from 'react';

const OurProcessPhilosophy: React.FC = () => {
  const items = [
    {
      title: 'Plan first, then execute',
      desc: 'We map the job so teams arrive prepared and work stays efficient from start to finish.',
      icon: '🧭',
    },
    {
      title: 'Details are part of the service',
      desc: 'We treat edges, access points, and finishing work as non-negotiables—because that’s what clients notice.',
      icon: '🎯',
    },
    {
      title: 'Clear communication throughout',
      desc: 'Updates and expectations are set up-front, then confirmed as work progresses.',
      icon: '💬',
    },
    {
      title: 'Respect for occupants & schedules',
      desc: 'We coordinate around your building rhythms—especially for offices and commercial operations.',
      icon: '🗓️',
    },
  ];

  return (
    <section className="py-24 bg-sky-50/40" aria-labelledby="our-process-philosophy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-6 py-3 bg-white/70 text-sky-700 text-sm font-black rounded-full uppercase tracking-widest mb-4">
            Our Process Philosophy
          </span>
          <h2 id="our-process-philosophy" className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            A standard approach—adapted to your property
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What we do is consistent. How we do it is tailored—so the service fits the building, the timeline, and the people inside it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((i) => (
            <div
              key={i.title}
              className="rounded-3xl bg-white border border-gray-100 shadow-sm p-8 hover:shadow-xl hover:border-sky-200 transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-sunny-50 text-sunny-700 border border-sunny-100 flex items-center justify-center text-2xl flex-shrink-0">
                  {i.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{i.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{i.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcessPhilosophy;

