import React, { useMemo, useState } from 'react';

type Props = {
  serviceType: string;
};

type FaqItem = {
  q: string;
  a: string;
};

const FAQ_TEMPLATES = {
  pricing: {
    q: 'How is pricing determined?',
    a: 'Pricing is based on property size, surface condition, access, and service scope. After a quick assessment, we provide a clear, no-obligation estimate.',
  },
  scheduling: {
    q: 'How quickly can we schedule?',
    a: 'We confirm availability as soon as you contact us. For many projects, our team can align a start date within days, and we offer after-hours coordination for commercial clients.',
  },
  duration: {
    q: 'How long does the service take?',
    a: 'Timelines depend on surface area, condition, and the level of restoration needed. We outline an expected service duration up front, then keep you updated throughout the job.',
  },
  safety: {
    q: 'Is your team security-cleared and safe for properties?',
    a: 'Yes. Our crews are professionally vetted and work with property-safe methods. We also follow site access expectations so your building, people, and environment are protected.',
  },
  equipment: {
    q: 'What equipment and methods do you use?',
    a: 'We use professional, service-appropriate equipment and surface-aware methods. Options vary by project type to achieve a clean finish without unnecessary damage.',
  },
  usage: {
    q: 'Is this service for commercial, residential, or both?',
    a: 'Most services are available for both residential and commercial properties. We tailor the plan based on your operational needs, traffic patterns, and scheduling constraints.',
  },
} as const;

const ServiceFAQBlock: React.FC<Props> = ({ serviceType }) => {
  const items: FaqItem[] = useMemo(() => {
    const type = (serviceType || '').toLowerCase();

    const isPressure = type.includes('pressure') || type.includes('washing');
    const isWindow = type.includes('window');
    const isCarpet = type.includes('carpet');
    const isHandyman = type.includes('handyman');

    // Same set of core FAQ answers, with light type-specific wording via selection.
    // No CTA logic and no dependency changes.
    const equipment = isPressure
      ? {
          q: FAQ_TEMPLATES.equipment.q,
          a: 'We use professional pressure washing equipment and surface-aware settings. We adjust pressure and technique to match the material and restore curb appeal safely.',
        }
      : isWindow
        ? {
            q: FAQ_TEMPLATES.equipment.q,
            a: 'We use pro-grade window cleaning methods designed for streak-free results. We follow safe handling and care for both interior and exterior surfaces.',
          }
        : isCarpet
          ? {
              q: FAQ_TEMPLATES.equipment.q,
              a: 'We use deep extraction cleaning and spot/stain treatment techniques appropriate to the carpet or upholstery surface, targeting dirt buildup and visible marks.',
            }
          : isHandyman
            ? {
                q: FAQ_TEMPLATES.equipment.q,
                a: 'We use professional tools and task-specific methods for accurate repair, installation, and maintenance. We keep the work clean and finished to a dependable standard.',
              }
            : FAQ_TEMPLATES.equipment;

    return [
      FAQ_TEMPLATES.pricing,
      FAQ_TEMPLATES.scheduling,
      FAQ_TEMPLATES.duration,
      FAQ_TEMPLATES.safety,
      equipment,
      FAQ_TEMPLATES.usage,
    ];
  }, [serviceType]);

  // Simple accordion-like toggle without external libraries.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide">
            🧠 Service FAQs
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-4">Frequently asked questions</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3">
            Clear answers to pricing, scheduling, and how the process works for {serviceType || 'your service'}.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="rounded-3xl border border-gray-100 shadow-sm bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 sm:px-7 py-5 flex items-start justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <div>
                    <div className="text-gray-900 font-bold text-base sm:text-lg">{item.q}</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">
                      Tap to {isOpen ? 'hide' : 'show'} answer
                    </div>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 font-black">
                    {isOpen ? '–' : '+'}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-7 pb-6">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQBlock;

