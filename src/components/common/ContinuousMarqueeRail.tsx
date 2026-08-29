import React, { useRef, useEffect, useCallback } from 'react';

interface ContinuousMarqueeRailProps {
  children: React.ReactNode[];
  speed?: number; // pixels per frame (default ~0.85px for smooth continuous glide)
  speedSeconds?: number; // legacy alias
  className?: string;
  cardWidthClass?: string; // e.g. "w-[84vw] sm:w-[50vw] md:w-[42vw] max-w-[360px]"
}

export const ContinuousMarqueeRail: React.FC<ContinuousMarqueeRailProps> = ({
  children,
  speed: propSpeed,
  speedSeconds,
  className = '',
  cardWidthClass = 'w-[84vw] sm:w-[48vw] lg:w-[380px]'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Mouse & Touch Drag Tracking (Immediate 1:1 tactile control, 0 pause state)
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const startScrollLeftRef = useRef<number>(0);

  // Speed in pixels per frame
  const speed = propSpeed ?? (speedSeconds ? Math.max(0.6, 32 / speedSeconds) : 0.85);

  // Quadruple-duplicate items to ensure vast buffer for smooth infinite wrapping
  const items = React.useMemo(() => {
    return [...children, ...children, ...children, ...children];
  }, [children]);

  // Seamless boundary wrap logic (Conveyor belt wrapping)
  const checkBoundaryWrap = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const singleLoopWidth = container.scrollWidth / 2;
    if (singleLoopWidth <= 0) return;

    if (container.scrollLeft >= singleLoopWidth) {
      container.scrollLeft -= singleLoopWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += singleLoopWidth;
    }
  }, []);

  // Unstoppable Continuous Conveyor-Belt Loop (Runs forever without hover pause)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    // Initialize scroll position into the buffer
    const initTimer = setTimeout(() => {
      if (container && container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth / 4;
      }
    }, 30);

    const step = () => {
      if (containerRef.current && !isDraggingRef.current) {
        containerRef.current.scrollLeft += speed;
        checkBoundaryWrap();
      }
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      clearTimeout(initTimer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [speed, checkBoundaryWrap]);

  // Touch Swipe Handlers (Immediate tactile influence, immediate conveyor resume upon release)
  const handleTouchStart = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].pageX - container.offsetLeft;
    startScrollLeftRef.current = container.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.2;
    containerRef.current.scrollLeft = startScrollLeftRef.current - walk;
    checkBoundaryWrap();
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    checkBoundaryWrap();
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    startScrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.2;
    containerRef.current.scrollLeft = startScrollLeftRef.current - walk;
    checkBoundaryWrap();
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      checkBoundaryWrap();
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={checkBoundaryWrap}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`relative w-full overflow-x-auto no-scrollbar py-2 select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        touchAction: 'pan-x'
      }}
    >
      <div
        className="flex gap-4 sm:gap-6 w-max"
        style={{ willChange: 'scroll-position' }}
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
