import React from 'react';

type Insight = {
  title: string;
  icon: string;
  desc: string;
  bullets: string[];
};

const INSIGHTS: Insight[] = [
  {
    title: 'Vancouver Island rain & moisture reality',
    icon: '🌧️',
    desc: 'Coastal moisture changes how quickly surfaces collect grime—especially after wet seasons.',
    bullets: ['Streaking and spotting after seasonal rainfall', 'Mildew and algae growth on shaded exteriors', 'Driveways and entryways stay “active” throughout the year'],
  },
  {
    title: 'Algae & moss buildup management',
    icon: '🍃',
    desc: 'Local buildup isn’t just cosmetic—it affects traction, curb appeal, and long-term surface health.',
    bullets: ['Moss prevention on paths and textured areas', 'Exterior refresh to restore presentation', 'Care designed to reduce recurrence with scheduled maintenance'],
  },
  {
    title: 'Coastal wear: salt air, finishes, and signage',
    icon: '🌊',
    desc: 'Salt mist and coastal conditions can dull finishes and impact storefront presentation over time.',
    bullets: ['Restoring brighter surfaces and safer walkways', 'Commercial storefront upkeep for consistent branding', 'Surface-safe approach for homes and businesses'],
  },
  {
    title: 'Seasonal cycles for commercial storefront curb appeal',
    icon: '🗓️',
    desc: 'Repeat maintenance keeps properties looking prepared—without last-minute scramble.',
    bullets: ['Planned cycles for recurring care', 'After-hours flexibility for business operations', 'Reliable scheduling for multi-unit and manager coordination'],
  },
];

const LocalClimateMaintenanceInsights: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sunny-100 text-sunny-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4">
            🌤️ Local Climate Expertise
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            Maintenance designed for Vancouver Island conditions
          </h2>
          <p className="section-subheading">
            Rain, moisture, algae, and coastal wear—handled with a premium, locally aware approach.
          </p>
        </div>

        <div className="space-y-6">
          {INSIGHTS.map((insight, i) => (
            <div
              key={insight.title}
              className={
                i % 2 === 0
                  ? 'rounded-3xl border border-gray-100 bg-white shadow-sm p-6 sm:p-7'
                  : 'rounded-3xl border border-sky-100 bg-linear-to-r from-sky-50 via-white to-sunny-50 shadow-sm p-6 sm:p-7'
              }
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/70 border border-gray-100 flex items-center justify-center text-3xl">
                    {insight.icon}
                  </div>
                  <div>
                    <div className="text-gray-900 font-black text-lg leading-tight">{insight.title}</div>
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">{insight.desc}</p>
                  </div>
                </div>

                <div className="md:max-w-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {insight.bullets.map((b) => (
                      <div
                        key={b}
                        className="rounded-2xl bg-white/70 border border-gray-100 p-4"
                      >
                        <div className="text-gray-800 text-sm font-bold">•</div>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalClimateMaintenanceInsights;

