import React, { useRef, useEffect, useState, useCallback } from 'react';

interface HorizontalCarouselRailProps {
  children: React.ReactNode[];
  autoPlayInterval?: number; // default 4000ms
  className?: string;
}

export const HorizontalCarouselRail: React.FC<HorizontalCarouselRailProps> = ({
  children,
  autoPlayInterval = 4200,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Triple clone items for true infinite seamless scrolling
  const items = React.useMemo(() => {
    return [...children, ...children, ...children];
  }, [children]);

  const itemCount = children.length;

  // Initialize scroll position to the middle set
  useEffect(() => {
    const container = containerRef.current;
    if (!container || itemCount === 0) return;

    // Small delay to ensure children layout is computed
    const timeout = setTimeout(() => {
      const singleSetWidth = container.scrollWidth / 3;
      container.scrollLeft = singleSetWidth;
    }, 50);

    return () => clearTimeout(timeout);
  }, [itemCount]);

  // Handle boundary wrapping for infinite loop
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || itemCount === 0) return;

    const singleSetWidth = container.scrollWidth / 3;
    if (container.scrollLeft <= 10) {
      container.scrollLeft += singleSetWidth;
    } else if (container.scrollLeft >= singleSetWidth * 2 - 10) {
      container.scrollLeft -= singleSetWidth;
    }
  }, [itemCount]);

  // Advance to next card smoothly
  const advanceNext = useCallback(() => {
    const container = containerRef.current;
    if (!container || isInteracting) return;

    // Determine width of first card + gap
    const firstChild = container.firstElementChild as HTMLElement;
    if (!firstChild) return;

    const cardWidth = firstChild.getBoundingClientRect().width + 16; // card width + gap
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }, [isInteracting]);

  // Auto-play timer
  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isInteracting) return;

    autoPlayTimerRef.current = setInterval(advanceNext, autoPlayInterval);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [advanceNext, autoPlayInterval, isInteracting]);

  // Handle user interaction pause & resume
  const handleInteractionStart = () => {
    setIsInteracting(true);
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
  };

  const handleInteractionEnd = () => {
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 3500); // resume after 3.5s of no touch
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      className={`flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-2 w-full select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      {items.map((child, index) => (
        <div
          key={index}
          className="shrink-0 snap-start w-[80vw] sm:w-[50vw] max-w-[340px]"
        >
          {child}
        </div>
      ))}
    </div>
  );
};
