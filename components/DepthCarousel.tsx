'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DepthCarouselProps {
  items: React.ReactNode[];
  depth?: number;
  spread?: number;
  tilt?: number;
  tiltDirection?: 'left' | 'right';
  perspective?: number;
  visibleCards?: number;
  falloff?: number;
  blur?: number;
  autoplay?: boolean;
  loop?: boolean;
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  tint?: string;
  duration?: number;
  ease?: string;
  autoplayDelay?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}

export default function DepthCarousel({
  items,
  depth = 200,
  spread = 80,
  tilt = 20,
  tiltDirection = 'right',
  perspective = 1200,
  visibleCards = 3,
  falloff = 0.2,
  blur = 4,
  autoplay = false,
  loop = true,
  cardWidth = 320,
  cardHeight = 420,
  radius = 20,
  tint = '#050507',
  duration = 600,
  ease = 'cubic-bezier(0.22, 1, 0.36, 1)',
  autoplayDelay = 3000,
  showControls = true,
  showIndicators = true,
}: DepthCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return;
      if (loop) {
        setActiveIndex(((index % total) + total) % total);
      } else {
        setActiveIndex(Math.min(Math.max(index, 0), total - 1));
      }
    },
    [total, loop]
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!autoplay || total <= 1) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (loop ? (prev + 1) % total : Math.min(prev + 1, total - 1)));
    }, autoplayDelay);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplay, autoplayDelay, total, loop]);

  const tiltSign = tiltDirection === 'right' ? 1 : -1;
  const half = Math.floor(visibleCards / 2);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
      <div
        className="relative flex items-center justify-center"
        style={{ perspective: `${perspective}px`, width: cardWidth, height: cardHeight }}
      >
        <div className="relative" style={{ width: cardWidth, height: cardHeight }}>
          {items.map((item, i) => {
            // Shortest signed distance from active index, respecting loop
            let rawOffset = i - activeIndex;
            if (loop) {
              if (rawOffset > total / 2) rawOffset -= total;
              if (rawOffset < -total / 2) rawOffset += total;
            }

            const isVisible = Math.abs(rawOffset) <= half;
            if (!isVisible) return null;

            const distance = Math.abs(rawOffset);
            const opacity = 1 - distance * falloff;
            const scale = 1 - distance * 0.08;
            const translateX = rawOffset * spread;
            const translateZ = -distance * depth;
            const rotateY = rawOffset * tiltSign * tilt;
            const blurPx = distance === 0 ? 0 : blur;
            const zIndex = visibleCards - distance;

            return (
              <div
                key={i}
                onClick={() => goTo(i)}
                className="absolute top-0 left-0 cursor-pointer"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  borderRadius: radius,
                  backgroundColor: tint,
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  transition: `transform ${duration}ms ${ease}, opacity ${duration}ms ${ease}, filter ${duration}ms ${ease}`,
                  opacity: Math.max(opacity, 0),
                  filter: `blur(${blurPx}px)`,
                  zIndex,
                  transformStyle: 'preserve-3d',
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls row — placed after (below) the cards */}
      {(showControls || showIndicators) && total > 1 && (
        <div className="flex items-center justify-center gap-4">
          {showControls && (
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full bg-[#0e1015] border border-[#1b1e26] flex items-center justify-center text-white hover:border-[#FE4A01] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {showIndicators && (
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex ? 'w-5 bg-[#FE4A01]' : 'w-1.5 bg-[#2a2d36]'
                  }`}
                />
              ))}
            </div>
          )}

          {showControls && (
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full bg-[#0e1015] border border-[#1b1e26] flex items-center justify-center text-white hover:border-[#FE4A01] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}