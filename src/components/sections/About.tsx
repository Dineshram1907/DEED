import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

interface AboutProps {
  onOpenInquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  return (
    <section id="about" className="py-14 sm:py-24 lg:py-36 bg-[#FAF9F6] border-b border-[#E6E4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader
          number="05"
          label="ABOUT DEED"
          title="Design should make things clearer, better, and easier to"
          serifWord="move forward."
        />

        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mt-6 sm:mt-8">
          {/* Left Column: Studio Overview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <p className="text-lg sm:text-2xl text-[#121212] font-sans font-medium leading-relaxed">
              We bring strategy, design and development together to create digital experiences that are useful, distinctive and built to last.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-[#666562] font-sans leading-relaxed">
              DEED combines strategy, visual craft, and engineering into a single unified practice. By eliminating the disconnect between design and code, we build brands and platforms with unmatched clarity and technical longevity.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-[#E6E4DF]">
              <div className="flex gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FA3800]/10 text-[#FA3800] flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#121212] font-sans">Integrated Design & Code</h4>
                  <p className="text-xs sm:text-sm text-[#666562] font-sans mt-1 leading-relaxed">
                    Strategy, UI, and TypeScript engineering built together under one roof.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FA3800]/10 text-[#FA3800] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#121212] font-sans">Built to Last</h4>
                  <p className="text-xs sm:text-sm text-[#666562] font-sans mt-1 leading-relaxed">
                    Distinctive brand assets and maintainable code bases engineered for long-term value.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="group inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold text-[#121212] hover:text-[#FA3800] transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Start a project with DEED</span>
                <ArrowUpRight className="w-4 h-4 text-[#FA3800] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Local Studio Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#111110] aspect-[4/3] border border-[#E6E4DF] shadow-lg group">
              <img
                src="/images/about/about-studio.webp"
                alt="DEED Studio Environment"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="font-mono text-xs text-[#FA3800] uppercase tracking-widest font-semibold">
                  DEED STUDIO PRACTICE
                </span>
                <h3 className="text-base sm:text-lg font-bold font-sans">Independent Creative Technology</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
