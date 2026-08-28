import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  serifWord?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'between';
  theme?: 'light' | 'dark';
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  label,
  title,
  serifWord,
  subtitle,
  align = 'left',
  theme = 'light',
  children
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`w-full mb-8 sm:mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      {/* Raw Architectural Editorial Label (No Pills) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="flex items-center gap-3 mb-3 sm:mb-4"
      >
        <span className={`font-mono text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-[#FA3800]' : 'text-[#FA3800]'}`}>
          {number} / {label}
        </span>
        <div className={`h-[1px] flex-grow max-w-[40px] sm:max-w-[60px] ${isDark ? 'bg-[#262624]' : 'bg-[#E6E4DF]'}`} />
      </motion.div>

      <div className={`flex flex-col ${align === 'between' ? 'lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6' : ''}`}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          className={`font-bold tracking-tight leading-[1.05] font-syne ${
            isDark ? 'text-[#FAF9F6]' : 'text-[#121212]'
          }`}
          style={{ fontSize: 'clamp(1.85rem, 4.5vw + 0.5rem, 3.85rem)' }}
        >
          {title}{' '}
          {serifWord && (
            <span className="font-serif-editorial font-normal text-[#FA3800] tracking-normal italic block sm:inline mt-0.5 sm:mt-0">
              {serifWord}
            </span>
          )}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className={`mt-3 sm:mt-4 lg:mt-0 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed ${
              isDark ? 'text-[#A09E98]' : 'text-[#666562]'
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        {children}
      </div>
    </div>
  );
};
