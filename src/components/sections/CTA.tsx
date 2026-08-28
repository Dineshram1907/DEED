import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '../common/Button';

interface CTAProps {
  onOpenInquiry: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-20 sm:py-32 lg:py-44 bg-[#111110] text-[#FAF9F6] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 sm:w-96 h-80 sm:h-96 bg-[#FA3800]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
        >
          <span className="font-mono text-xs font-semibold text-[#FA3800] uppercase tracking-widest block">
            07 / INITIATE KICKOFF
          </span>

          <h2
            className="font-extrabold tracking-tight font-syne text-white leading-[0.98] sm:leading-[0.95]"
            style={{ fontSize: 'clamp(2.25rem, 6.5vw + 0.5rem, 5.75rem)' }}
          >
            READY WHEN <br />
            <span className="font-serif-editorial text-[#FA3800] font-normal italic">
              you are.
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#A09E98] font-sans max-w-xl mx-auto leading-relaxed">
            Have an idea? A business that needs a better digital presence? A product that needs to become real? You don't need to figure everything out alone.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-4 max-w-xl mx-auto w-full">
            <Button variant="primary" size="lg" onClick={onOpenInquiry} className="w-full sm:w-auto">
              Let's Build It
            </Button>

            <a
              href="mailto:deed.technologia@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center flex-nowrap whitespace-nowrap gap-2.5 px-6 py-3.5 rounded-full bg-[#1E1E1C] text-[#FAF9F6] hover:bg-[#FA3800] transition-all duration-300 font-sans text-xs sm:text-sm font-semibold tracking-tight border border-[#262624] min-h-[48px] shrink-0"
            >
              <Mail className="w-4 h-4 text-[#FA3800] group-hover:text-white shrink-0" />
              <span className="whitespace-nowrap">deed.technologia@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 shrink-0 text-[#FA3800]" />
            </a>
          </div>

          <div className="pt-10 sm:pt-14 font-mono text-[11px] sm:text-xs text-[#666562] flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span>CLEAR • CALM • CAPABLE</span>
            <span className="hidden sm:inline">•</span>
            <span>RESPONSE TIME: &lt; 24 HOURS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
