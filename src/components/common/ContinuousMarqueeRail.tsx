import React, { useRef, useEffect, useCallback, useState } from 'react';

interface ContinuousMarqueeRailProps {
  children: React.ReactNode[];
  speed?: number; // pixels per frame (default ~0.8px for smooth slow glide)
  speedSeconds?: number; // legacy alias (maps to speed)
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
  const trackRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInteractingRef = useRef<boolean>(false);
  const [, forceUpdate] = useState({});

  // Resolve speed (pixels per animation frame)
  const speed = propSpeed ?? (speedSeconds ? Math.max(0.4, 30 / speedSeconds) : 0.8);

  // Mouse drag state
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const startScrollLeftRef = useRef<number>(0);

  // Quadruple-duplicate items to ensure vast buffer for smooth infinite wrapping
  const items = React.useMemo(() => {
    return [...children, ...children, ...children, ...children];
  }, [children]);

  // Seamless boundary wrap logic
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

  // Main Continuous Auto-Scrolling Loop (RAF)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    // Initialize scrollLeft to single loop width to allow bi-directional swiping
    const initTimer = setTimeout(() => {
      if (container && container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth / 4;
      }
    }, 50);

    const step = () => {
      if (!isInteractingRef.current && containerRef.current) {
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

  // Handle interaction start: Pause autoplay immediately
  const handleInteractionStart = useCallback(() => {
    isInteractingRef.current = true;
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
  }, []);

  // Handle interaction end: Resume autoplay after exactly 500ms of inactivity
  const handleInteractionEnd = useCallback(() => {
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }
    pauseTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
      pauseTimerRef.current = null;
      forceUpdate({});
    }, 500); // Exactly 500ms of inactivity
  }, []);

  // Manual scroll listener to ensure seamless boundary wrapping during user swipe
  const handleScroll = useCallback(() => {
    checkBoundaryWrap();
    handleInteractionStart();
    handleInteractionEnd();
  }, [checkBoundaryWrap, handleInteractionStart, handleInteractionEnd]);

  // Desktop Mouse Drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    startScrollLeftRef.current = container.scrollLeft;
    handleInteractionStart();
  }, [handleInteractionStart]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag sensitivity
    containerRef.current.scrollLeft = startScrollLeftRef.current - walk;
    checkBoundaryWrap();
  }, [checkBoundaryWrap]);

  const handleMouseUp = useCallback(() => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      handleInteractionEnd();
    }
  }, [handleInteractionEnd]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      onTouchStart={handleInteractionStart}
      onTouchMove={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onTouchCancel={handleInteractionEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => {
        if (isDraggingRef.current) {
          isDraggingRef.current = false;
        }
        handleInteractionEnd();
      }}
      className={`relative w-full overflow-x-auto no-scrollbar py-2 select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        touchAction: 'pan-x'
      }}
    >
      <div
        ref={trackRef}
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
