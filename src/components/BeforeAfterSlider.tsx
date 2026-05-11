import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title?: string;
  service?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  before,
  after,
  title,
  service,
  beforeLabel = 'Before',
  afterLabel = 'After',
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSlider(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSlider(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  };

  return (
    <div className="w-full">
      {(title || service) && (
        <div className="text-center mb-6">
          {service && (
            <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-xs font-bold rounded-full uppercase tracking-wide mb-2">
              {service}
            </span>
          )}
          {title && <h3 className="text-xl font-bold text-gray-900">{title}</h3>}
        </div>
      )}

      <div
        ref={containerRef}
        className="relative select-none rounded-2xl overflow-hidden shadow-2xl cursor-col-resize"
        style={{ aspectRatio: '16/9' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* After image (full width, underneath) */}
        <img
          src={after}
          alt="After pressure washing by SunnySideUp - clean surface"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={before}
          alt="Before pressure washing - grimy surface"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: 'none' }}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 z-10 pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-0.5 h-full bg-white shadow-lg" />
        </div>

        {/* Handle */}
        <div
          className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-gray-100">
            <MoveHorizontal size={20} className="text-sky-600" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="px-3 py-1.5 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-bold rounded-lg">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="px-3 py-1.5 bg-sky-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-lg">
            {afterLabel}
          </span>
        </div>

        {/* Instruction */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1.5">
            <MoveHorizontal size={12} />
            Drag to compare
          </span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
