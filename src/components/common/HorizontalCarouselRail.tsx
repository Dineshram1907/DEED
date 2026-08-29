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

    const firstChild = container.firstElementChild as HTMLElement;
    if (!firstChild) return;

    const cardWidth = firstChild.getBoundingClientRect().width + 16;
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }, [isInteracting]);

  // Auto-play timer
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isInteracting) return;

    autoPlayTimerRef.current = setInterval(advanceNext, autoPlayInterval);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [advanceNext, autoPlayInterval, isInteracting]);

  // Handle user interaction pause & resume after exactly 500ms
  const handleInteractionStart = useCallback(() => {
    setIsInteracting(true);
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
  }, []);

  const handleInteractionEnd = useCallback(() => {
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 500); // exactly 500ms of inactivity
  }, []);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      onTouchStart={handleInteractionStart}
      onTouchMove={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onTouchCancel={handleInteractionEnd}
      onPointerDown={handleInteractionStart}
      onPointerUp={handleInteractionEnd}
      onPointerCancel={handleInteractionEnd}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      className={`flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-2 w-full select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        touchAction: 'pan-x'
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
