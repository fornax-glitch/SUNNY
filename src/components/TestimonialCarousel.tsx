import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  filter?: 'all' | 'residential' | 'commercial';
  autoPlay?: boolean;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  filter = 'all',
  autoPlay = true,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial'>(filter);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const filtered = testimonials.filter(
    (t) => activeFilter === 'all' || t.clientType === activeFilter
  );

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(idx);
    setTimeout(() => setIsAnimating(false), 350);
  }, [isAnimating]);

  const prev = () => goTo((currentIndex - 1 + filtered.length) % filtered.length);
  const next = useCallback(() => goTo((currentIndex + 1) % filtered.length), [currentIndex, filtered.length, goTo]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  useEffect(() => {
    if (!autoPlay || filtered.length <= 1) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [autoPlay, next, filtered.length]);

  if (filtered.length === 0) return null;

  const current = filtered[currentIndex];

  return (
    <div className="w-full">
      {/* Filter tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1">
          {(['all', 'residential', 'commercial'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeFilter === f
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {f === 'all' ? 'All Reviews' : f === 'residential' ? '🏠 Residential' : '🏢 Commercial'}
            </button>
          ))}
        </div>
      </div>

      {/* Main testimonial card */}
      <div className="relative max-w-3xl mx-auto">
        <div
          className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 transition-opacity duration-350 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Quote icon */}
          <div className="absolute -top-4 left-8">
            <div className="w-10 h-10 bg-sunny-400 rounded-full flex items-center justify-center shadow-md">
              <Quote size={18} className="text-white" />
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-5">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={18} className="fill-sunny-400 text-sunny-400" />
            ))}
          </div>

          {/* Quote text */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
            "{current.text}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sunny-100 rounded-full flex items-center justify-center text-2xl">
              {current.avatar}
            </div>
            <div>
              <div className="font-bold text-gray-900">{current.name}</div>
              <div className="text-sm text-gray-500">
                {current.role}
                {current.company && ` · ${current.company}`}
              </div>
              <div className="text-xs text-sky-600 font-medium mt-0.5">📍 {current.location}</div>
            </div>
            <div className="ml-auto">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  current.clientType === 'commercial'
                    ? 'bg-sky-100 text-sky-700'
                    : 'bg-sunny-100 text-sunny-700'
                }`}
              >
                {current.clientType === 'commercial' ? '🏢 Commercial' : '🏠 Residential'}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        {filtered.length > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-sky-300 transition-all shadow-sm"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>

            <div className="flex gap-2">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all ${
                    i === currentIndex
                      ? 'w-8 h-2.5 bg-sunny-400'
                      : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-sky-300 transition-all shadow-sm"
            >
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
