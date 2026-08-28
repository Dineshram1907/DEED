import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRINCIPLES } from '../../data/principles';
import { SectionHeader } from '../common/SectionHeader';

export const WhyDeed: React.FC = () => {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const activePrinciple = PRINCIPLES[activeMobileIndex];

  return (
    <section className="py-14 sm:py-24 lg:py-36 bg-[#111110] text-[#FAF9F6] border-b border-[#262624] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <SectionHeader
          number="05"
          label="HOW WE THINK"
          title="Studio principles &"
          serifWord="philosophy."
          subtitle="Our core tenets that govern every visual decision, line of code, and business partnership."
          theme="dark"
        />

        {/* MOBILE INTERACTIVE HORIZONTAL COMPONENT (< md) */}
        <div className="md:hidden mt-6 space-y-4">
          {/* Top Header Row with Counter and Dot Indicators */}
          <div className="flex items-center justify-between font-mono text-xs text-[#FA3800] pb-2 border-b border-[#262624]">
            <span className="font-semibold">
              0{activeMobileIndex + 1} / 0{PRINCIPLES.length}
            </span>

            <div className="flex items-center gap-1.5">
              {PRINCIPLES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMobileIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    activeMobileIndex === i ? 'bg-[#FA3800] w-5' : 'bg-[#262624]'
                  }`}
                  aria-label={`Go to principle ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Horizontally Scrollable Tab Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full">
            {PRINCIPLES.map((principle, index) => {
              const isActive = activeMobileIndex === index;
              return (
                <button
                  key={principle.number}
                  onClick={() => setActiveMobileIndex(index)}
                  className={`px-3.5 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FA3800] text-white shadow-md'
                      : 'bg-[#181816] text-[#A09E98] border border-[#262624]'
                  }`}
                >
                  {principle.number} {principle.title.split(' ')[0]}
                </button>
              );
            })}
          </div>

          {/* Single Compact Active Principle Panel */}
          <div className="relative rounded-2xl bg-[#181816] border border-[#262624] p-5 min-h-[250px] flex flex-col justify-between overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePrinciple.number}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
                className="space-y-4 flex-grow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#FA3800] font-bold">
                      PRINCIPLE {activePrinciple.number}
                    </span>
                    <span className="font-mono text-[10px] text-[#A09E98] bg-[#262624] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {activePrinciple.tagline || 'DEED MANDATE'}
                    </span>
                  </div>

                  <h3
                    className="font-extrabold text-white font-syne leading-[0.98] tracking-tight break-words"
                    style={{ fontSize: 'clamp(1.75rem, 6vw, 2.5rem)' }}
                  >
                    {activePrinciple.title}
                  </h3>

                  <p className="text-sm font-medium text-[#FAF9F6] leading-relaxed">
                    {activePrinciple.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#262624] flex items-center justify-between font-mono text-[11px] text-[#666562]">
                  <span>DEED MANDATE</span>
                  <span className="text-[#FA3800] font-semibold">• NON-NEGOTIABLE</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* DESKTOP 2-COLUMN GRID (md+) */}
        <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-12 mt-12 w-full">
          {PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="p-8 lg:p-10 rounded-3xl bg-[#181816] border border-[#262624] hover:border-[#FA3800] transition-colors duration-500 flex flex-col justify-between space-y-6 min-w-0 w-full max-w-full overflow-hidden group"
            >
              <div className="space-y-4 min-w-0 w-full">
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3 min-w-0 w-full">
                  <span className="font-mono text-xs text-[#FA3800] font-bold shrink-0">
                    PRINCIPLE {principle.number}
                  </span>
                  <span className="font-mono text-[11px] text-[#A09E98] bg-[#262624] px-2.5 py-1 rounded-full uppercase tracking-wider truncate max-w-[65%]">
                    {principle.tagline || 'DEED MANDATE'}
                  </span>
                </div>

                {/* Principle Title */}
                <h3
                  className="font-extrabold text-white font-syne group-hover:text-[#FA3800] transition-colors leading-[0.98] tracking-tight break-words min-w-0 w-full max-w-full"
                  style={{ fontSize: 'clamp(2rem, 3.5vw + 0.25rem, 3.25rem)' }}
                >
                  {principle.title}
                </h3>

                <p className="text-base font-medium text-[#FAF9F6] leading-relaxed max-w-xl">
                  {principle.description}
                </p>
              </div>

              {/* Bottom Mandate Bar */}
              <div className="pt-4 border-t border-[#262624] flex items-center justify-between font-mono text-xs text-[#666562] min-w-0 w-full">
                <span>DEED MANDATE</span>
                <span className="text-[#FA3800] font-semibold">• NON-NEGOTIABLE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
