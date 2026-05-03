import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { COVERAGE_AREAS } from '../data';

const focusColors = {
  primary: {
    card: 'border-sunny-300 bg-sunny-50',
    badge: 'bg-sunny-400 text-gray-900',
    label: 'Primary Region',
    dot: 'bg-sunny-400',
  },
  secondary: {
    card: 'border-sky-300 bg-sky-50',
    badge: 'bg-sky-500 text-white',
    label: 'Active Region',
    dot: 'bg-sky-500',
  },
  tertiary: {
    card: 'border-gray-200 bg-gray-50',
    badge: 'bg-gray-400 text-white',
    label: 'Available',
    dot: 'bg-gray-400',
  },
};

const CoveragePage: React.FC = () => {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);

  const primary = COVERAGE_AREAS.filter((a) => a.focus === 'primary');
  const secondary = COVERAGE_AREAS.filter((a) => a.focus === 'secondary');
  const tertiary = COVERAGE_AREAS.filter((a) => a.focus === 'tertiary');

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-sky-900 to-gray-900 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {/* Canada map-inspired decorative dots */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sunny-400/20 border border-sunny-400/30 text-sunny-300 text-sm font-bold rounded-full uppercase tracking-wide mb-5">
            Service Coverage
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Victoria Roots.<br />
            <span className="text-sunny-400">Canada-Wide Reach.</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            From our headquarters in Victoria, BC, we serve residential and commercial clients across 8 Canadian provinces.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NS', 'NB'].map((prov) => (
              <span
                key={prov}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-bold rounded-lg border border-white/20"
              >
                🍁 {prov}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Canada Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Our Service <span className="text-sky-600">Footprint</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-5">
              {Object.entries(focusColors).map(([key, val]) => (
                <div key={key} className="flex items-center gap-2 text-sm">
                  <div className={`w-3 h-3 rounded-full ${val.dot}`} />
                  <span className="text-gray-600 font-medium">{val.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Simplified Canada layout */}
          <div className="bg-gradient-to-b from-sky-50 to-blue-50 rounded-3xl p-8 border border-sky-100 shadow-inner">
            {/* Province grid layout mimicking Canada geography */}
            <div className="max-w-5xl mx-auto">
              {/* Western provinces */}
              <div className="mb-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">Western Canada</p>
                <div className="flex justify-center gap-4">
                  {primary.map((area) => (
                    <div
                      key={area.abbreviation}
                      onMouseEnter={() => setHoveredProvince(area.abbreviation)}
                      onMouseLeave={() => setHoveredProvince(null)}
                      className={`relative cursor-pointer transition-all duration-200 ${
                        hoveredProvince === area.abbreviation ? 'scale-105' : ''
                      }`}
                    >
                      <div className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl border-2 flex flex-col items-center justify-center shadow-md ${focusColors[area.focus].card}`}>
                        <span className="text-2xl font-black text-gray-800">{area.abbreviation}</span>
                        <span className="text-xs text-gray-600 mt-1 font-medium text-center px-1 leading-tight">{area.province}</span>
                        {area.abbreviation === 'BC' && (
                          <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-sunny-400 text-gray-900 text-xs font-black rounded-full shadow">HQ</span>
                        )}
                      </div>
                      {hoveredProvince === area.abbreviation && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-20 w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-3">
                          <p className="font-bold text-gray-900 text-sm mb-1">{area.province}</p>
                          <div className="space-y-0.5">
                            {area.cities.slice(0, 4).map((city) => (
                              <div key={city} className="flex items-center gap-1.5 text-xs text-gray-600">
                                <MapPin size={10} className="text-sunny-500" />
                                {city}
                              </div>
                            ))}
                            {area.cities.length > 4 && (
                              <p className="text-xs text-gray-400 mt-1">+{area.cities.length - 4} more cities</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Prairie provinces */}
              <div className="mb-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">Prairie & Central Canada</p>
                <div className="flex justify-center gap-4">
                  {secondary.map((area) => (
                    <div
                      key={area.abbreviation}
                      onMouseEnter={() => setHoveredProvince(area.abbreviation)}
                      onMouseLeave={() => setHoveredProvince(null)}
                      className={`relative cursor-pointer transition-all duration-200 ${
                        hoveredProvince === area.abbreviation ? 'scale-105' : ''
                      }`}
                    >
                      <div className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl border-2 flex flex-col items-center justify-center shadow-sm ${focusColors[area.focus].card}`}>
                        <span className="text-xl font-black text-gray-700">{area.abbreviation}</span>
                        <span className="text-xs text-gray-500 mt-1 font-medium text-center px-1 leading-tight">{area.province}</span>
                      </div>
                      {hoveredProvince === area.abbreviation && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-20 w-44 bg-white rounded-xl shadow-xl border border-gray-100 p-3">
                          <p className="font-bold text-gray-900 text-sm mb-1">{area.province}</p>
                          {area.cities.map((city) => (
                            <div key={city} className="flex items-center gap-1.5 text-xs text-gray-600">
                              <MapPin size={10} className="text-sky-500" />
                              {city}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Eastern provinces */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">Eastern Canada</p>
                <div className="flex justify-center gap-4 flex-wrap">
                  {tertiary.map((area) => (
                    <div
                      key={area.abbreviation}
                      onMouseEnter={() => setHoveredProvince(area.abbreviation)}
                      onMouseLeave={() => setHoveredProvince(null)}
                      className={`relative cursor-pointer transition-all duration-200 ${
                        hoveredProvince === area.abbreviation ? 'scale-105' : ''
                      }`}
                    >
                      <div className={`w-16 h-16 md:w-24 md:h-24 rounded-xl border-2 flex flex-col items-center justify-center shadow-sm ${focusColors[area.focus].card}`}>
                        <span className="text-lg font-black text-gray-600">{area.abbreviation}</span>
                        <span className="text-xs text-gray-500 mt-0.5 font-medium text-center px-1 leading-tight hidden md:block">{area.province.split(' ')[0]}</span>
                      </div>
                      {hoveredProvince === area.abbreviation && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-20 w-40 bg-white rounded-xl shadow-xl border border-gray-100 p-3">
                          <p className="font-bold text-gray-900 text-sm mb-1">{area.province}</p>
                          {area.cities.map((city) => (
                            <div key={city} className="flex items-center gap-1.5 text-xs text-gray-600">
                              <MapPin size={10} className="text-gray-400" />
                              {city}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">Hover over a province to see covered cities</p>
        </div>
      </section>

      {/* Province detail cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Coverage by <span className="text-sky-600">Province</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COVERAGE_AREAS.map((area) => {
              const colors = focusColors[area.focus];
              return (
                <div
                  key={area.abbreviation}
                  className={`rounded-2xl border-2 p-5 ${colors.card} hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-gray-800">{area.abbreviation}</span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${colors.badge}`}>
                      {colors.label}
                    </span>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm mb-3">{area.province}</p>
                  <div className="space-y-1.5">
                    {area.cities.map((city) => (
                      <div key={city} className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={12} className={`shrink-0 ${area.focus === 'primary' ? 'text-sunny-500' : area.focus === 'secondary' ? 'text-sky-500' : 'text-gray-400'}`} />
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Not on the list? */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            Don't See Your City?
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            Our coverage continues to grow. Many commercial clients have partnered with us in cities not yet listed. Contact us — chances are, we can serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Ask About Your Area
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+12505550199" className="btn-outline-yellow">
              Call Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Commercial advantage */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-black text-gray-900">
              The Advantage of a <span className="text-sky-600">National Partner</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🗂️', title: 'Single Point of Contact', desc: 'One account manager handles all your locations across provinces. No more juggling multiple vendors.' },
              { icon: '📊', title: 'Unified Reporting', desc: 'Consolidated service reports and billing across all your locations for simplified bookkeeping and compliance.' },
              { icon: '⚡', title: 'Rapid Deployment', desc: 'Opening a new location? Our national network means we can mobilize a trained team within days, not weeks.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4">
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        variant="yellow"
        headline="Ready to Partner with Canada's Most Trusted Maintenance Team?"
        subtext="Get a custom quote for your location — or all of them. We make nationwide simple."
        primaryCTA={{ label: 'Get a Free Quote', href: '/contact' }}
        showPhone
      />
    </div>
  );
};

export default CoveragePage;
