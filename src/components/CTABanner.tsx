import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

interface CTABannerProps {
  variant?: 'yellow' | 'blue' | 'dark';
  headline: string;
  subtext: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  showPhone?: boolean;
  badge?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({
  variant = 'yellow',
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
  showPhone = false,
  badge,
}) => {
  const bgClasses = {
    yellow: 'bg-gradient-to-br from-sunny-400 via-sunny-500 to-amber-500',
    blue: 'bg-gradient-to-br from-sky-700 via-sky-800 to-sky-900',
    dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
  };

  const textColor = variant === 'yellow' ? 'text-gray-900' : 'text-white';
  const subtextColor = variant === 'yellow' ? 'text-amber-900' : 'text-gray-300';

  return (
    <section className={`${bgClasses[variant]} relative overflow-hidden`}>
      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center">
          {badge && (
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 ${
              variant === 'yellow'
                ? 'bg-amber-900/20 text-amber-900'
                : 'bg-white/10 text-white'
            }`}>
              {badge}
            </span>
          )}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-4 ${textColor} leading-tight`}>
            {headline}
          </h2>
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${subtextColor}`}>
            {subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCTA && (
              <Link
                to={primaryCTA.href}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 ${
                  variant === 'yellow'
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-sunny-400 text-gray-900 hover:bg-sunny-300'
                }`}
              >
                {primaryCTA.label}
                <ArrowRight size={18} />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                to={secondaryCTA.href}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 transition-all hover:-translate-y-0.5 active:scale-95 ${
                  variant === 'yellow'
                    ? 'border-amber-900/30 text-amber-900 hover:bg-amber-900/10'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                {secondaryCTA.label}
              </Link>
            )}
            {showPhone && (
              <a
                href="tel:+12505550199"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 transition-all hover:-translate-y-0.5 ${
                  variant === 'yellow'
                    ? 'border-amber-900/30 text-amber-900 hover:bg-amber-900/10'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                <Phone size={18} />
                (250) 555-0199
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
