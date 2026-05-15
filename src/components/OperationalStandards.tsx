import React from 'react';

const OperationalStandards: React.FC = () => {
  const standards = [
    {
      title: 'Clear Arrival Windows',
      desc: 'Scheduling that respects your operations, with dependable on-time arrival windows.',
      icon: '⏱️',
    },
    {
      title: 'On-Site Communication',
      desc: 'Simple updates from arrival to completion—no surprises, no guesswork.',
      icon: '🗣️',
    },
    {
      title: 'Consistent Execution',
      desc: 'Repeatable checklists that standardize quality across every team and visit.',
      icon: '✅',
    },
    {
      title: 'Clean, Respectful Workspaces',
      desc: 'Respect for buildings and occupants with tidy habits throughout the job.',
      icon: '🧼',
    },
    {
      title: 'Accountability on Completion',
      desc: 'A final walkthrough mindset—confirmed results before we’re done.',
      icon: '📋',
    },
  ];

  return (
    <section className="py-24 bg-white" aria-labelledby="operational-standards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-6 py-3 bg-sky-100 text-sky-700 text-sm font-black rounded-full uppercase tracking-widest mb-4">
            Operational Standards
          </span>
          <h2 id="operational-standards" className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Reliable execution for everyday property care
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built for Vancouver Island properties where consistency matters—offices, strata, retail, and commercial facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {standards.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-sky-50/40 p-8 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-sunny-50 text-sunny-700 flex items-center justify-center text-2xl border border-sunny-100 mb-5">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationalStandards;

