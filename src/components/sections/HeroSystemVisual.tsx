import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Zap, Layers } from 'lucide-react';


export const HeroSystemVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] max-w-lg mx-auto select-none flex items-center justify-center p-2 sm:p-4">
      {/* Background Soft Blue Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#EEF4FF] via-[#DDE7FF]/50 to-transparent rounded-3xl -z-10 blur-xl opacity-70" />

      {/* Main Dimensional Device/Browser Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="w-full bg-white rounded-2xl border border-[#DDE3EE] shadow-[0_12px_40px_rgba(11,18,32,0.08)] overflow-hidden flex flex-col relative"
      >
        {/* Browser Top Chrome */}
        <div className="bg-[#F8F9FA] px-4 py-3 border-b border-[#DDE3EE] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
          </div>
          <div className="px-3 py-0.5 rounded-md bg-white border border-[#DDE3EE] font-mono text-[10px] text-[#667085] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2457F5]" />
            <span>deed.systems/core</span>
          </div>
          <div className="w-8" />
        </div>

        {/* Mockup Dashboard Content */}
        <div className="p-4 sm:p-5 space-y-3.5 bg-white">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#0B1220] font-syne">Production System</div>
              <div className="text-[10px] text-[#667085]">Active Deployment • Web + Platform</div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EEF4FF] text-[#2457F5] font-mono text-[10px] font-semibold border border-[#DDE7FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2457F5] animate-pulse" />
              <span>LIVE</span>
            </span>
          </div>

          {/* Mini Data Architecture Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] space-y-1">
              <div className="text-[10px] font-mono text-[#667085] uppercase">Performance</div>
              <div className="text-base sm:text-lg font-extrabold text-[#0B1220] font-syne">99.9%</div>
              <div className="text-[9px] text-[#2457F5] font-medium">Sub-second Latency</div>
            </div>
            <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] space-y-1">
              <div className="text-[10px] font-mono text-[#667085] uppercase">System Health</div>
              <div className="text-base sm:text-lg font-extrabold text-[#0B1220] font-syne">Optimal</div>
              <div className="text-[9px] text-[#10B981] font-medium">Core Web Vitals Pass</div>
            </div>
          </div>

          {/* Architectural Layer Row */}
          <div className="p-3 rounded-xl bg-[#EEF4FF]/60 border border-[#DDE7FF] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-[#2457F5] text-white flex items-center justify-center">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0B1220]">Design + Engineering</div>
                <div className="text-[10px] text-[#667085]">React 19 • TypeScript • Tailwind</div>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-[#2457F5]" />
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: Top Right "Growth +24%" */}
      <motion.div
        initial={{ opacity: 0, y: -10, x: 10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-[#DDE3EE] shadow-[0_8px_24px_rgba(11,18,32,0.08)] flex items-center gap-2.5 z-20"
      >
        <div className="w-7 h-7 rounded-lg bg-[#EEF4FF] text-[#2457F5] flex items-center justify-center">
          <TrendingUp className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] text-[#667085] font-mono">Conversion</div>
          <div className="text-xs sm:text-sm font-extrabold text-[#0B1220] font-syne">Growth +24%</div>
        </div>
      </motion.div>

      {/* Floating Card 2: Bottom Left "Product → Live" */}
      <motion.div
        initial={{ opacity: 0, y: 10, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-[#DDE3EE] shadow-[0_8px_24px_rgba(11,18,32,0.08)] flex items-center gap-2.5 z-20"
      >
        <div className="w-7 h-7 rounded-lg bg-[#2457F5] text-white flex items-center justify-center">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] text-[#667085] font-mono">Status</div>
          <div className="text-xs sm:text-sm font-extrabold text-[#0B1220] font-syne">Product → Live</div>
        </div>
      </motion.div>
    </div>
  );
};
