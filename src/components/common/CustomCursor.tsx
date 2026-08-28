import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'hidden'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check hovered element dataset or attribute
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        const text = cursorTarget.getAttribute('data-cursor-text') || '';
        setCursorText(text);

        if (type === 'project') setCursorVariant('project');
        else if (type === 'hover') setCursorVariant('hover');
        else setCursorVariant('default');
      } else if (target.closest('a, button, [role="button"]')) {
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

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice || cursorVariant === 'hidden') return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%'
      }}
      animate={{
        width: cursorVariant === 'project' ? 84 : cursorVariant === 'hover' ? 44 : 14,
        height: cursorVariant === 'project' ? 84 : cursorVariant === 'hover' ? 44 : 14,
        backgroundColor: cursorVariant === 'project' ? '#FAF9F6' : cursorVariant === 'hover' ? 'rgba(250, 56, 0, 0.9)' : '#FA3800',
        scale: cursorVariant === 'hover' ? 1.2 : 1
      }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      {cursorText && cursorVariant === 'project' && (
        <span className="text-[11px] font-bold tracking-widest text-[#121212] uppercase font-mono select-none animate-pulse">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};
