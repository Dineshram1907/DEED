import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'hidden'>('default');
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !window.matchMedia('(pointer: fine)').matches;
  });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        const text = cursorTarget.getAttribute('data-cursor-text') || 'VIEW';
        setCursorText(text);

        if (type === 'project') setCursorVariant('project');
        else if (type === 'hover') setCursorVariant('hover');
        else setCursorVariant('default');
      } else if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant('hidden');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice, mouseX, mouseY]);

  if (isTouchDevice || cursorVariant === 'hidden') return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden lg:flex items-center justify-center rounded-full"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%'
      }}
      animate={{
        width: cursorVariant === 'project' ? 68 : cursorVariant === 'hover' ? 36 : 10,
        height: cursorVariant === 'project' ? 68 : cursorVariant === 'hover' ? 36 : 10,
        backgroundColor:
          cursorVariant === 'project'
            ? 'rgba(49, 91, 255, 0.95)'
            : cursorVariant === 'hover'
            ? 'rgba(49, 91, 255, 0.25)'
            : '#315BFF',
        border:
          cursorVariant === 'hover'
            ? '1.5px solid rgba(49, 91, 255, 0.6)'
            : cursorVariant === 'project'
            ? '1px solid rgba(255, 255, 255, 0.4)'
            : 'none',
        boxShadow:
          cursorVariant === 'default'
            ? '0 0 10px rgba(49, 91, 255, 0.5), 0 0 4px rgba(255, 220, 100, 0.4)'
            : '0 4px 20px rgba(49, 91, 255, 0.3)'
      }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      {cursorText && cursorVariant === 'project' && (
        <span className="text-[10px] font-bold tracking-widest text-white uppercase font-mono select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};
