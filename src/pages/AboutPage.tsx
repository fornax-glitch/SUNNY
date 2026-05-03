import React from 'react';
import { CheckCircle, Award, Heart, Users, Leaf } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { STATS } from '../data';

const values = [
  {
    icon: <Award size={24} />,
    title: 'Excellence in Every Detail',
    desc: 'We take pride in delivering exceptional quality on every job, no matter the size. From a single home to a national retail chain, the standard never drops.',
    color: 'bg-sunny-50 text-sunny-600',
  },
  {
    icon: <Heart size={24} />,
    title: 'Client-First Approach',
    desc: "Your satisfaction is our measure of success. We listen, adapt, and go beyond expectations because we genuinely care about the people and businesses we serve.",
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: <Users size={24} />,
    title: 'A Team You Can Trust',
    desc: 'Every SunnySideUp team member is background-checked, trained, and vetted. We build relationships, not just contracts.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: <Leaf size={24} />,
    title: 'Sustainable Practices',
    desc: "We're committed to eco-friendly operations. Our green-certified products protect your family, your clients, and Canada's beautiful natural environment.",
    color: 'bg-emerald-50 text-emerald-600',
  },
];

const milestones = [
  { year: '1999', event: 'Founded in Victoria, BC with 2 employees and a single pressure washer.' },
  { year: '2004', event: 'Launched commercial cleaning division, securing first bank contract.' },
  { year: '2009', event: 'Expanded to Alberta – first major inter-provincial growth.' },
  { year: '2013', event: 'Awarded "Preferred Maintenance Vendor" by a national supermarket chain.' },
  { year: '2017', event: 'Reached 100+ commercial clients. Expanded to Saskatchewan & Manitoba.' },
  { year: '2020', event: 'Essential services designation through COVID-19. 0 days of interrupted service.' },
  { year: '2022', event: 'Expanded handyman division with certified tradespeople Canada-wide.' },
  { year: '2024', event: '12,000+ properties serviced. Operating across 8 Canadian provinces.' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-sky-900 to-gray-900 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url('/images/team-photo.jpg')` }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sunny-400/20 border border-sunny-400/30 text-sunny-300 text-sm font-bold rounded-full uppercase tracking-wide mb-5">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            25 Years of Sunshine,<br />
            <span className="text-sunny-400">Built on Trust.</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            From a two-person pressure washing startup in Victoria, BC to a nationwide building maintenance company trusted by Canada's biggest brands.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-black text-sunny-400">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/team-photo.jpg"
                  alt="SunnySideUp Team"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Overlay badge */}
              <div className="absolute -bottom-6 -left-6 bg-sunny-400 rounded-2xl p-5 shadow-xl">
                <div className="text-gray-900 font-black text-3xl">25+</div>
                <div className="text-gray-900 text-sm font-bold">Years of Trust</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full uppercase tracking-wide mb-5">
                The SunnySideUp Legacy
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-tight">
                Victoria-Born. <span className="text-sky-600">Canada Proven.</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SunnySideUp Building Maintenance was founded in 1999 by James and Patricia Thornton in Victoria, BC. What began as a two-person pressure washing operation serving residential driveways has grown into one of Canada's most trusted building maintenance companies.
                </p>
                <p>
                  Our growth was never accidental. It was built on a simple, unbreakable promise: show up on time, do the job right, and treat every client's property like it's our own. Word spread. Clients referred us. Contracts grew from homeowners to the country's biggest retail chains and financial institutions.
                </p>
                <p>
                  Today, SunnySideUp operates across 8 Canadian provinces with a team of over 150 trained professionals. Yet our Victoria roots remain at our core — we still have the same community-first, handshake-honest values that built this company from the ground up.
                </p>
              </div>

              <div className="space-y-3 mt-6">
                {[
                  'Headquartered in Victoria, BC since 1999',
                  'Family-owned and operated',
                  'Active in 8 Canadian provinces',
                  'Residential & commercial expertise',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-sky-500 shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What We <span className="text-sunny-500">Stand For</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our values aren't just words on a wall. They're the foundation of every service call, contract, and client relationship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                  {value.icon}
                </div>
                <h3 className="font-black text-gray-900 text-base mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="text-sky-600">Journey</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              25+ years of milestones, growth, and unwavering commitment to our clients.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sunny-400 via-sky-400 to-sky-700 -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ml-14 md:ml-0 ${
                      idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-sunny-500 font-black text-lg">{milestone.year}</span>
                      <p className="text-gray-700 text-sm mt-1 leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-sunny-400 border-4 border-white rounded-full shadow-md z-10 mt-4" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8">
            Certifications & Memberships
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              '🇨🇦 Canadian-Owned Business',
              '✅ BBB Accredited',
              '🌿 Green-Certified Products',
              '🔒 Fully Bonded & Insured',
              '🏆 BSCAI Member',
              '⚡ WCB Compliant',
              '🔐 Security Cleared Staff',
              '♻️ Eco-Responsible Operations',
            ].map((cert) => (
              <div
                key={cert}
                className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium shadow-sm"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        variant="blue"
        badge="Join Our Client Family"
        headline="Experience the SunnySideUp Difference."
        subtext="Over 12,000 properties serviced. Your property is next. Get a free quote in 24 hours."
        primaryCTA={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ label: 'Our Services', href: '/services' }}
        showPhone
      />
    </div>
  );
};

export default AboutPage;
