import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from './BeforeAfterSlider';

type BeforeAfterReelItem = {
  id: string;
  title: string;
  before: string;
  after: string;
  service: string;
};

type BeforeAfterReelProps = {
  items: BeforeAfterReelItem[];
  label?: string;
  // If you want to disable drift for performance/accessibility
  autoDrift?: boolean;
};

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

const BeforeAfterEpisodeCard: React.FC<{
  item: BeforeAfterReelItem;
  onHoverChange?: (hovered: boolean) => void;
}> = ({ item, onHoverChange }) => {
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    onHoverChange?.(true);
  };

  const handleLeave = () => {
    setHovered(false);
    onHoverChange?.(false);
  };

  // Subtle parallax: shift visual slightly based on hover state.
  const parallaxY = hovered ? -6 : 0;
  const parallaxScale = hovered ? 1.03 : 1;

  return (
    <div
      className="group relative shrink-0 snap-start rounded-3xl overflow-hidden border border-white/10 bg-gray-950/30 shadow-xl hover:shadow-2xl"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ width: 'min(420px, 78vw)' }}
    >
      {/* Cinematic image layer */}
      <div className="relative w-full" style={{ transform: `translateY(${parallaxY}px) scale(${parallaxScale})`, transition: 'transform 420ms ease' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/60 via-gray-950/20 to-sky-900/20 z-10 pointer-events-none" />
        <BeforeAfterSlider
          before={item.before}
          after={item.after}
          title={undefined}
          service={undefined}
          beforeLabel=""
          afterLabel=""
        />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-950/55 backdrop-blur-sm border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-sunny-400" />
              <span className="text-[11px] font-bold uppercase tracking-wide text-white/90 truncate">{item.service}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">
              <div className="text-white font-black text-lg leading-tight line-clamp-2">{item.title}</div>
              <div className="text-white/70 text-xs font-semibold mt-1">Vancouver Island • Real surface proof</div>
            </div>

            <div
              className="opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
            >
              <Link
                to={`/services?proof=${encodeURIComponent(item.id)}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm backdrop-blur-sm"
              >
                View full project
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Edge vignette to blend row into background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),transparent_55%),linear-gradient(to_top,rgba(0,0,0,0.55),transparent_55%)] z-5" />

      {/* Focus outline for keyboard */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 group-hover:ring-1 ring-sky-300/40" />
    </div>
  );
};

const BeforeAfterReel: React.FC<BeforeAfterReelProps> = ({ items, label = 'Proof Reel', autoDrift = true }) => {
  const effectiveItems = useMemo(() => (items ?? []).filter(Boolean), [items]);
  const [hovered, setHovered] = useState(false);

  // We keep drift extremely subtle and stop when hovered.
  // Native scroll already provides inertia; drift just pre-scrolls slowly.
  const driftClass = autoDrift && !hovered ? 'before-after-reel-drift' : '';

  return (
    <section aria-label={label} className="relative py-14 bg-linear-dark overflow-hidden">
      {/* Cinematic contrast */}
      <div className="absolute inset-0 opacity-30 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/90 to-gray-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100/10 text-sky-200 text-sm font-bold rounded-full uppercase tracking-wide border border-sky-200/15">
              {label}
            </div>
            <h2 className="section-heading text-white mt-4" style={{ fontSize: 'clamp(28px,3vw,44px)' }}>
              Before → After episodes
            </h2>
            <p className="section-subheading" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Scroll the row like a Netflix reel—multiple job proofs at once.
            </p>
          </div>

          <div className="flex gap-3 text-white/70 text-xs font-semibold">
            <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">Snap enabled</div>
            <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">Hover for CTA</div>
          </div>
        </div>

        <div className="relative">
          {/* Edge fades to indicate scrollability */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-30 bg-gradient-to-r from-gray-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-30 bg-gradient-to-l from-gray-950 to-transparent" />

          <div
            className={`before-after-reel ${driftClass}`}
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex gap-5 px-2 pb-2">
              {effectiveItems.map((item) => (
                <BeforeAfterEpisodeCard key={item.id} item={item} onHoverChange={setHovered} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .before-after-reel {
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding-bottom: 6px;
          scrollbar-width: thin;
          scrollbar-color: rgba(251,191,36,0.55) rgba(255,255,255,0.05);
        }
        .before-after-reel::-webkit-scrollbar {
          height: 8px;
        }
        .before-after-reel::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
        }
        .before-after-reel::-webkit-scrollbar-thumb {
          background: rgba(251,191,36,0.55);
          border-radius: 999px;
        }
        .before-after-reel-drift {
          animation: beforeAfterReelDrift 26s linear infinite;
        }
        @keyframes beforeAfterReelDrift {
          0% { scroll-left: 0; }
          50% { scroll-left: 320px; }
          100% { scroll-left: 0; }
        }
      `}</style>
    </section>
  );
};

export default BeforeAfterReel;

