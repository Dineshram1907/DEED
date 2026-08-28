import React, { useRef, useState, useEffect } from 'react';

interface ContinuousMarqueeRailProps {
  children: React.ReactNode[];
  speedSeconds?: number; // default ~40s
  className?: string;
  cardWidthClass?: string; // e.g. "w-[84vw] sm:w-[48vw] lg:w-[380px]"
}

export const ContinuousMarqueeRail: React.FC<ContinuousMarqueeRailProps> = ({
  children,
  speedSeconds = 42,
  className = '',
  cardWidthClass = 'w-[84vw] sm:w-[48vw] lg:w-[380px]'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Duplicate items twice to create a seamless infinite marquee
  const items = React.useMemo(() => {
    return [...children, ...children];
  }, [children]);

  // Pause on user interaction and resume after delay
  const handleInteractionStart = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleInteractionEnd = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2800); // resume 2.8s after interaction
  };

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      className={`relative w-full overflow-x-auto no-scrollbar py-2 ${className}`}
      style={{
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <div
        className="flex gap-4 sm:gap-6 w-max"
        style={{
          animation: isPaused ? 'none' : `deedMarquee ${speedSeconds}s linear infinite`,
          willChange: 'transform'
        }}
      >
        {items.map((child, index) => (
          <div
            key={index}
            className={`${cardWidthClass} shrink-0`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
