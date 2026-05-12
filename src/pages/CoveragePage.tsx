import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { COVERAGE_AREAS } from '../data';
import { VANCOUVER_ISLAND_REGION } from '@/data/coverageAreas';

const focusColors = {
  primary: {
    card: 'border-sunny-300 bg-sunny-50',
    badge: 'bg-sunny-400 text-gray-900',
    label: 'Core Service Area',
    dot: 'bg-sunny-400',
  },
  secondary: {
    card: 'border-sky-300 bg-sky-50',
    badge: 'bg-sky-500 text-white',
    label: 'Expanded Coverage',
    dot: 'bg-sky-500',
  },
  tertiary: {
    card: 'border-gray-200 bg-gray-50',
    badge: 'bg-gray-400 text-white',
    label: 'Available Upon Request',
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
      <section className="bg-linear-to-br from-gray-900 via-sky-900 to-gray-900 py-20 lg:py-28 relative overflow-hidden">
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
            Locally Based. Regionally Trusted.
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Proudly Serving Communities Across Vancouver Island
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            From Victoria to Island communities, SUNNYSIDEUP provides reliable cleaning and property care for commercial spaces,
            strata buildings, offices, and day-to-day facilities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Victoria Based', 'Vancouver Island Coverage'].map((label) => (

              <span
                key={label}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-bold rounded-lg border border-white/20"
              >
                ✨ {label}
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
              <span className="text-sky-600">Where We Work</span>
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

          {/* Map showcase: centered visual anchor + clean island focus */}
          <div className="relative bg-linear-to-b from-sky-50 to-blue-50 rounded-3xl p-8 border border-sky-100 shadow-inner overflow-hidden">
            {/* Ambient low-motion layer */}
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-sunny-200/40 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
              <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-sunny-300/30 rounded-full blur-[0.5px]"
                  style={{
                    top: `${10 + Math.random() * 80}%`,
                    left: `${10 + Math.random() * 80}%`,
                    animationDelay: `${i * 0.15}s`,
                    opacity: 0.35 + Math.random() * 0.25,
                    animation: 'floaty 10s ease-in-out infinite',
                  }}
                />
              ))}
            </div>

            {/* Vancouver Island silhouette anchor */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <svg
                className="w-[560px] max-w-[90%] opacity-[0.08] blur-[0.2px]"
                viewBox="0 0 600 400"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="islandGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FDE68A" />
                    <stop offset="55%" stopColor="#93C5FD" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#islandGrad)"
                  d="M80 150 C120 70, 210 40, 300 60 C330 20, 420 25, 480 95 C520 145, 530 215, 505 260 C480 305, 420 340, 350 330 C310 355, 240 365, 195 340 C140 320, 85 270, 80 220 Z"
                />
              </svg>
            </div>

            <style>
              {`
                @keyframes floaty {
                  0% { transform: translate3d(0,0,0); }
                  50% { transform: translate3d(0,-10px,0); }
                  100% { transform: translate3d(0,0,0); }
                }
              `}
            </style>

            {/* Province grid layout mimicking Canada geography */}
            <div className="max-w-5xl mx-auto relative">
              <div className="grid grid-cols-3 gap-4 items-end">
                {/* Victoria bottom-left anchor */}
                <div className="col-start-1 row-start-2 mb-2">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-left">Victoria</div>
                  <div className="flex justify-start gap-4">
                    {primary.map((area) => (
                      <div
                        key={area.abbreviation}
                        onMouseEnter={() => setHoveredProvince(area.abbreviation)}
                        onMouseLeave={() => setHoveredProvince(null)}
                        className={`relative cursor-pointer transition-all duration-200 ${
                          hoveredProvince === area.abbreviation ? 'scale-[1.08]' : ''
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
              </div>

              {/* Prairie provinces */}
              <div className="mb-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">Greater Victoria</p>

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
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">Mid-Island & Surrounding</p>

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
          <p className="text-center text-gray-400 text-xs mt-4">Hover to explore the communities we serve</p>
        </div>
      </section>

      {/* Properties We Commonly Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Properties We Commonly Support</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide recurring cleaning and property care for a wide range of commercial and multi-use spaces across the Island.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: '🏢', label: 'Office Buildings' },
              { icon: '🏪', label: 'Retail Stores' },
              { icon: '🏥', label: 'Medical Clinics' },
              { icon: '🏘️', label: 'Strata Properties' },
              { icon: '🍽️', label: 'Restaurants & Cafés' },
              { icon: '🏭', label: 'Warehouses' },
              { icon: '🏗️', label: 'Commercial Facilities' },
              { icon: '🏢', label: 'Multi-Unit Buildings' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="pt-0.5">
                    <div className="text-gray-900 font-bold text-sm leading-tight">{item.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Province detail cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              <span className="text-sky-600">Areas We Serve</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From Victoria through Langford, Saanich, Sidney, Duncan, Nanaimo, and Parksville—SUNNYSIDEUP supports commercial properties with dependable, Island-based care.
            </p>
          </div>

          {/* Split showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Featured left card */}
            <div className="lg:col-span-1">
              <div className="rounded-3xl border border-gray-100 bg-linear-to-br from-sky-50 via-white to-sunny-50 shadow-lg p-7 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sunny-400/20 border border-sunny-400/30 text-sunny-700 text-sm font-bold rounded-full">
                    Victoria-Based Operations
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-700">Core Service Area</span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">🏝️</div>
                  <div>
                    <div className="text-gray-900 font-black text-xl leading-tight">Commercial Coverage Across the Island</div>
                    <div className="text-gray-500 text-sm mt-1">Office • Retail • Strata • Medical • Warehouses</div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-gray-900 font-bold text-sm mb-3">Common communities</div>
                  <div className="flex flex-wrap gap-2">
                    {['Victoria', 'Langford', 'Saanich', 'Sidney', 'Duncan', 'Nanaimo', 'Parksville'].map((city) => (
                      <span key={city} className="px-2.5 py-1 bg-white/80 border border-gray-200 text-gray-700 text-xs font-bold rounded-full">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Commercial Properties', value: '100s' },
                    { label: 'Recurring Clients', value: 'Ongoing' },
                    { label: 'Island-Wide Scheduling', value: 'Local' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-white/70 border border-gray-200 p-3">
                      <div className="text-gray-900 font-black text-lg leading-tight">{stat.value}</div>
                      <div className="text-gray-500 text-[11px] font-medium leading-tight mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right stacked support panels */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Fast Local Response',
                    desc: 'Local teams supporting Victoria, Langford, Saanich, Sidney, Duncan, Nanaimo, and surrounding communities.',
                    badge: 'Response',
                    bg: 'bg-white',
                  },
                  {
                    title: 'Flexible Scheduling',
                    desc: 'After-hours options, recurring maintenance, and commercial coordination when timing matters.',
                    badge: 'Scheduling',
                    bg: 'bg-white',
                  },
                  {
                    title: 'Property Types We Support',
                    desc: 'Offices, retail, strata, clinics, and warehouses—plus multi-unit buildings that need dependable care.',
                    badge: 'Experience',
                    bg: 'bg-white',
                  },
                  {
                    title: 'Expanded Communities',
                    desc: 'Beyond the core areas, we regularly support nearby Island locations—ask about your exact address.',
                    badge: 'Coverage',
                    bg: 'bg-white',
                  },
                ].map((panel) => (
                  <div key={panel.title} className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-bold text-gray-900 text-base">{panel.title}</div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-700">{panel.badge}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{panel.desc}</p>
                  </div>
                ))}
              </div>

              {/* Keep original area cards, but in a compact way under the panels for full coverage visibility */}
              <div className="mt-7">
                <div className="flex flex-col items-center justify-between mb-4 text-center gap-1">
                  <div className="text-gray-900 font-bold">Quick View of Areas</div>
                  <div className="text-gray-500 text-sm">Hover on the map above for city lists</div>
                </div>


                {/* Vancouver Island (VI) quick view */}
                <div className="max-w-3xl w-full rounded-3xl border-2 border-yellow-400 bg-yellow-50 p-6">
                  <div className="flex items-center justify-center mb-1 gap-4">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400/20 border border-yellow-400/30 text-yellow-700 text-sm font-bold rounded-full">
                      {VANCOUVER_ISLAND_REGION.code}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700">
                      {VANCOUVER_ISLAND_REGION.type}
                    </span>
                  </div>


                  <div className="mt-3 text-center">
                    <div className="text-gray-900 font-black text-xl">{VANCOUVER_ISLAND_REGION.name}</div>
                  </div>


                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-8 mt-4"
                    aria-label="Vancouver Island cities"
                  >
                    {[
                      // Column 1
                      'Victoria',
                      'Saanich',
                      'Langford',
                      'Comox Valley',

                      // Column 2
                      'Sidney',
                      'Duncan',
                      'Campbell River',
                      'Qualicum Beach',

                      // Column 3
                      'Nanaimo',
                      'Courtenay',
                      'Parksville',
                      'Central Saanich',
                    ].map((city) => (
                      <div key={city} className="flex items-center gap-2 text-sm">
                        <MapPin size={16} className="text-yellow-500" />
                        <span className="text-gray-700 hover:text-yellow-600 transition-colors cursor-pointer">
                          {city}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Local Matters */}
      <section className="py-16 bg-linear-to-b from-gray-900 via-gray-900 to-sky-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Built Around Local Relationships</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Victoria-based operations mean you get dependable communication, consistent scheduling, and a team that understands local businesses and property needs.
                We build long-term service partnerships across the Island.
              </p>
            </div>

            <div className="space-y-4">
              {["Responsive Local Team", "Flexible Scheduling", "Reliable Ongoing Support"].map((title) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="text-sunny-300 text-sm font-bold uppercase tracking-wide mb-1">
                    {title}
                  </div>
                  <div className="text-slate-300 text-sm leading-relaxed">
                    {title === 'Responsive Local Team' && 'Quick replies and clear coordination—so your schedule stays on track.'}
                    {title === 'Flexible Scheduling' && 'Recurrence and urgent support planned around opening hours and access needs.'}
                    {title === 'Reliable Ongoing Support' && 'A consistent team for recurring care—no reset every visit.'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not on the list? */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            Outside Our Listed Areas?
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            We regularly support clients in additional communities across the Island. If your property isn’t listed, reach out — we may already operate nearby.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Ask About Your Area
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+12508899222" className="btn-outline-yellow">
              Call Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Built Around Your Schedule */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Built Around Your Schedule</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We adapt our cleaning and maintenance routines around your property’s operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { icon: '🌙', title: 'After-Hours Availability', desc: 'When you need it without disrupting operations.' },
              { icon: '🔁', title: 'Recurring Maintenance Plans', desc: 'Routine care scheduled to match your calendar.' },
              { icon: '🗓️', title: 'Flexible Site Scheduling', desc: 'On-site coordination that works with access windows.' },
              { icon: '📞', title: 'Fast Communication', desc: 'Clear updates from the local team you can reach.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl">{item.icon}</div>
                <div className="mt-3 font-bold text-gray-900 text-sm">{item.title}</div>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial advantage */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-black text-gray-900">
              The Advantage of a <span className="text-sky-600">Local Partner</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '💬',
                title: 'Consistent Communication',
                desc: 'You work with a responsive local team that understands your property and scheduling needs.',
              },
              {
                icon: '🧰',
                title: 'Reliable Ongoing Support',
                desc: 'We build long-term service relationships with businesses, strata properties, and commercial facilities.',
              },
              {
                icon: '⏱️',
                title: 'Flexible Scheduling',
                desc: 'From recurring maintenance to urgent support, we adapt around your operational hours.',
              },

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
        badge="Ready to Partner?"
        headline="Looking for Reliable Property Care?"

        subtext="Connect with SUNNYSIDEUP for dependable cleaning and maintenance solutions tailored to your property and schedule."

        primaryCTA={{ label: 'Get a Free Quote', href: '/contact' }}
        showPhone
      />
    </div>
  );
};

export default CoveragePage;

