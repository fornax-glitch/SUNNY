import React from 'react';
import { CheckCircle, Award, Heart, Users, Leaf } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { STATS } from '../data';

const values = [
  {
    icon: <Award size={24} />,
    title: 'Excellence in Every Detail',
    desc: 'Exceptional quality across Vancouver Island, from Victoria homes to Nanaimo businesses.',

    color: 'bg-sunny-50 text-sunny-600',

  },
  {
    icon: <Heart size={24} />,
    title: 'Client-First Approach',
    desc: 'Your satisfaction drives everything. We listen and adapt because we genuinely care.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: <Users size={24} />,
    title: 'Trusted Professional Teams',
    desc: 'Background-checked, vetted professionals building long-term relationships.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: <Leaf size={24} />,
    title: 'Sustainable Vancouver Island',
    desc: 'Eco-friendly practices protecting families, businesses, and our beautiful Vancouver Island landscapes.',

    color: 'bg-green-50 text-green-600',

  },
];

const milestones = [
  { year: '1999', event: 'Founded in Victoria, BC with 2 employees and 1 pressure washer.' },
  { year: '2004', event: 'Launched commercial cleaning for BC banks and retail.' },
  { year: '2009', event: 'Expanded coverage across the Island for commercial and residential clients.' },
  { year: '2013', event: 'Supported additional Island storefronts with reliable cleaning and maintenance.' },
  { year: '2017', event: 'Strengthened local service coverage for more Vancouver Island communities.' },

  { year: '2020', event: 'Essential service through COVID-19 with zero service interruptions.' },
  { year: '2024', event: '12,000+ Vancouver Island properties serviced with growing demand.' },

];

const AboutPage: React.FC = () => {
  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="bg-linear-to-br from-gray-900 via-emerald-900/30 to-sky-900 py-28 lg:py-36 relative overflow-hidden" aria-labelledby="about-hero">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/90 to-sky-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-black rounded-3xl uppercase tracking-widest mb-8 shadow-2xl" id="about-hero-badge">
            Vancouver Island's Choice Since 1999

          </span>
          <h1 id="about-hero" className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-3xl">
            25 Years Building Trust Across<br />
            <span className="block lg:inline bg-linear-to-r from-sunny-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg text-6xl lg:text-7xl">
              Vancouver Island
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
Family-owned from Victoria, BC to Vancouver Island commercial hubs.

          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-linear-to-b from-gray-900 to-gray-800 py-16" aria-labelledby="stats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center" role="list">
            {STATS.map((stat) => (
              <div key={stat.label} className="group p-6 lg:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105" role="listitem">
                <div className="text-4xl lg:text-5xl mb-3 opacity-80 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-black text-white mb-2 drop-shadow-lg">{stat.value}</div>
                <div className="text-sky-200 text-lg font-bold uppercase tracking-wide drop-shadow-md">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-white/90 backdrop-blur-sm" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="inline-block px-6 py-3 bg-linear-to-r from-sunny-100 to-emerald-100 text-gray-900 font-black text-lg rounded-3xl shadow-xl mb-8" id="legacy-badge">
                Victoria Roots
              </span>
              <h2 id="story-heading" className="text-5xl lg:text-6xl font-black text-gray-900 mb-12 leading-tight">
                Vancouver Island's<br />

                <span className="text-emerald-600 block lg:inline">Maintenance Legacy</span>
              </h2>
              <div className="space-y-8 text-gray-700">
              <p className="text-xl leading-relaxed">
                  SunnySideUp Building Maintenance began in 1999 in Victoria, BC. Today we’re Vancouver Island’s most trusted maintenance partner for homes and businesses.
                </p>
                  <p className="text-xl leading-relaxed">
                  Growth came from referrals and our simple promise: show up on time, treat every property like our own, and exceed expectations. From Victoria driveways to Island storefronts, that promise remains.
                </p>

                <p className="text-xl leading-relaxed">
                  Family-owned and operated, our Victoria headquarters coordinates teams across Vancouver Island. Community roots with professional execution.

                </p>
              </div>

              <ul className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-200">
                {[
                  'Victoria HQ since 1999',
                  'Family-owned',
                  'Vancouver Island focus',

                  'Security-cleared teams',
                ].map((fact) => (
                  <li key={fact} className="flex items-center gap-3 p-4 rounded-2xl bg-sky-50 group hover:bg-sky-100 transition-all">
                    <CheckCircle className="w-8 h-8 text-sky-600 shrink-0 group-hover:scale-110" />
                    <span className="font-semibold text-lg">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="/images/team-photo.jpg" 
                alt="SunnySideUp team - professional building maintenance crew from Victoria BC"
                className="w-full rounded-4xl shadow-2xl ring-1 ring-gray-200/50 hover:scale-105 transition-transform lg:hover:scale-110 duration-700" 
              />
              <div className="absolute -bottom-8 lg:-right-8 lg:-bottom-12 bg-linear-to-br from-sunny-400 to-emerald-400 text-white p-8 lg:p-10 rounded-4xl shadow-2xl border-4 border-white min-w-max">
                <div className="text-4xl lg:text-5xl font-black mb-3 flex items-baseline gap-2">
                  25+
                  <span className="text-2xl font-normal tracking-tight">Years</span>
                </div>
                <div className="text-lg lg:text-xl font-bold uppercase tracking-wide">Serving Vancouver Island</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-linear-to-b from-gray-50 to-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 id="values-heading" className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              What Makes Us <span className="text-sky-600">Different</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision, every hire, every service call.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="group p-10 rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl hover:border-sky-300 hover:-translate-y-3 transition-all duration-700 cursor-pointer hover:bg-linear-to-br hover:from-sky-50 hover:to-white backdrop-blur-sm focus:ring-4 focus:ring-sky-400/20" tabIndex={0}>
                <div className={`w-20 h-20 ${value.color} rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 group-hover:shadow-white/50 transition-all mb-6 mx-auto`}>
                  {value.icon}
                </div>
                <h3 className="font-black text-2xl lg:text-3xl text-gray-900 mb-6 text-center group-hover:text-sky-700 transition-colors drop-shadow-sm">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed text-center opacity-90 group-hover:opacity-100 transition-opacity">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-white" aria-labelledby="timeline-heading">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-50/50 -skew-y-3 -rotate-1 -z-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 id="timeline-heading" className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              25 Years of Vancouver Island <span className="text-emerald-600">Milestones</span>

            </h2>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              Key moments from our Victoria beginnings to today's Vancouver Island service.

            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-sunny-400 via-emerald-400 to-sky-400 shadow-lg z-0" />

            <div className="space-y-16" role="list">
              {milestones.map((milestone, idx) => (
  <div 
    key={milestone.year}
    className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} lg:flex-row lg:gap-16`}
    role="listitem"
  >
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-linear-to-r from-sunny-400 to-emerald-400 rounded-full shadow-xl border-4 border-white z-20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full shadow-md" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 lg:max-w-lg ${idx % 2 === 0 ? 'lg:text-right lg:order-1' : 'lg:order-1'}`}>
                    <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-200 hover:shadow-3xl hover:border-sky-300 hover:-translate-y-2 transition-all duration-700">
                      <span className="inline-block px-6 py-2 bg-linear-to-r from-sunny-400 to-emerald-400 text-white font-black text-lg rounded-2xl mb-6 shadow-xl uppercase tracking-wide group-hover:scale-105 transition-all">
                        {milestone.year}
                      </span>
                      <h4 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 group-hover:text-sky-700 transition-colors leading-tight">{milestone.event}</h4>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-32 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-emerald-50/50 border-y border-emerald-100/50" aria-labelledby="certs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="certs-heading" className="text-center text-emerald-800 text-2xl lg:text-3xl font-black uppercase tracking-widest mb-12">
            Professional Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              '🏆 25+ Years Experience',
              '🔒 WCB Compliant & Insured',
              '✅ Security Cleared Staff',
              '🌿 Eco Certified Products',
              '🏢 Commercial Specialists',
              '📋 Full Compliance Reporting',
              '⚡ Same-Day Response',
              '👨‍💼 Family Owned Operation',
            ].map((cert) => (
              <div key={cert} className="group p-6 rounded-2xl bg-white shadow-md border border-emerald-200 hover:shadow-emerald-300 hover:border-emerald-300 hover:-translate-y-2 transition-all text-center">
                <p className="text-lg font-bold text-emerald-800 group-hover:text-emerald-900 transition-colors">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        variant="yellow"
        badge="Ready to Partner?"
        headline="Join 12,000+ Vancouver Island Properties"
        subtext="Experience the family-owned service that's earned trust across Vancouver Island."

        primaryCTA={{ label: 'Get Free Quote', href: '/contact' }}
        secondaryCTA={{ label: 'View Services', href: '/services' }}
        showPhone
      />
    </div>
  );
};

export default AboutPage;