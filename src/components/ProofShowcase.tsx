import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { BEFORE_AFTER_ITEMS } from '../data';

type ProofShowcaseProps = {
  /** Up to 3 items previewed */
  beforeAfterItems?: typeof BEFORE_AFTER_ITEMS;
  /** Small intro label shown above the intro copy */
  label?: string;
};

const DEFAULT_ITEMS = BEFORE_AFTER_ITEMS;

const ProofShowcase: React.FC<ProofShowcaseProps> = ({
  beforeAfterItems,
  label = 'Recent Work Highlights',
}) => {
  const items = (beforeAfterItems ?? BEFORE_AFTER_ITEMS).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 -mt-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide">
              {label}
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mt-4">
              Before → After in real photos
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mt-3">
              Drag to compare: the “before” shows buildup and wear, and the “after” shows a cleaner, fresher finish.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <div className="text-2xl font-black text-sky-600">200+</div>
                <div className="text-xs font-semibold text-gray-500 mt-1">Jobs completed</div>

              </div>
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <div className="text-2xl font-black text-sunny-600">50+</div>
                <div className="text-xs font-semibold text-gray-500 mt-1">Commercial spaces refreshed</div>

              </div>
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <div className="text-2xl font-black text-emerald-600">24h</div>
                <div className="text-xs font-semibold text-gray-500 mt-1">Quick scheduling follow-up</div>

              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3">
              <div className="mb-2 text-sm font-bold text-gray-900 flex items-center gap-2">
                <span className="text-sunny-500">✨</span>
                <span className="line-clamp-1">{item.title}</span>
              </div>
              <div className="rounded-xl overflow-hidden">
                <BeforeAfterSlider
                  before={item.before}
                  after={item.after}
                  title="Before / After"
                  service={item.service}
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProofShowcase;

