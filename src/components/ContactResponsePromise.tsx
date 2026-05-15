import React from 'react';

const ContactResponsePromise: React.FC = () => {
  const blocks = [
    {
      title: 'Fast first response',
      desc: 'You’ll hear back within 1 business day with next steps and what we need to quote accurately.',
      icon: '⚡',
    },
    {
      title: 'Clear, no-pressure details',
      desc: 'We confirm the scope and timeline so you’re never guessing about what’s included.',
      icon: '🧾',
    },
    {
      title: 'Vancouver Island routing',
      desc: 'Local coordination that respects your schedule across Victoria and the Island.',
      icon: '🏝️',
    },
  ];

  return (
    <section className="py-24 bg-white" aria-labelledby="contact-response-promise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-6 py-3 bg-sunny-50 text-sunny-700 text-sm font-black rounded-full uppercase tracking-widest mb-4">
            ContactResponsePromise
          </span>
          <h2 id="contact-response-promise" className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Confidence after you submit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We keep the next steps simple—so you get clarity quickly and move forward with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-sky-50/30 p-8 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center text-2xl mb-5">
                {b.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">{b.title}</h3>
              <p className="text-gray-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactResponsePromise;

