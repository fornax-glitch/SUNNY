import React from 'react';

type Step = {
  step: string;
  title: string;
  desc: string;
  icon: string;
};

const PROCESS_STEPS: Step[] = [
  {
    step: '01',
    title: 'Inspection & Quote',
    desc: 'We review your property needs and provide a clear, no-obligation estimate with expectations for next steps.',
    icon: '📋',
  },
  {
    step: '02',
    title: 'Surface Preparation',
    desc: 'We protect surrounding areas and prepare surfaces so execution is efficient, consistent, and property-safe.',
    icon: '🧼',
  },
  {
    step: '03',
    title: 'Professional Cleaning / Execution',
    desc: 'Trained, insured crews deliver the service using project-appropriate methods for dependable results.',
    icon: '⚙️',
  },
  {
    step: '04',
    title: 'Final Check & Quality Control',
    desc: 'We confirm details before we finish—so you’re satisfied with the outcome and understand any next steps.',
    icon: '✅',
  },
];

const ServiceProcessExpanded: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide">
            🧭 Service Process
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-4">A clear process you can count on</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3">
            Simple steps—from inspection to final quality check—so you always know what happens next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((s) => (
            <div
              key={s.step}
              className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500/10 to-sunny-400/10 flex items-center justify-center text-xl">
                  {s.icon}
                </div>
                <div className="text-gray-900 font-black">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-xs font-black bg-sunny-400 text-gray-900 px-2 py-1 rounded-full">{s.step}</span>
                  </div>
                </div>
              </div>

              <h3 className="mt-5 font-black text-gray-900 text-lg">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessExpanded;

