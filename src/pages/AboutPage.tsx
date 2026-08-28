import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Button } from '../components/common/Button';

export const AboutPage: React.FC = () => {
  const values = [
    {
      number: '01',
      title: 'Restraint & Clarity',
      desc: 'We strip away decorative bloat to focus on high-impact typography, sub-second performance, and intuitive digital interactions.'
    },
    {
      number: '02',
      title: 'Design + Engineering in Lockstep',
      desc: 'No handing off broken Figma files. Our designers code, and our engineers have high aesthetic standards.'
    },
    {
      number: '03',
      title: 'Obsession with the Unseen',
      desc: 'We obsess over the micro-interactions, responsive edge cases, and code performance that users feel even when they don’t actively notice them.'
    },
    {
      number: '04',
      title: 'Long-term System Thinking',
      desc: 'We architect websites and applications to grow with our clients for years, not months.'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-20 pb-20 sm:pb-32 w-full max-w-full overflow-x-clip">
      {/* Visual Hero Scene (Chapter 05: The Studio Practice & Ideas) */}
      <section className="px-3.5 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full mt-1 sm:mt-2">
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[460px] flex flex-col justify-between p-6 sm:p-12 lg:p-14 border border-[#EAEBF0] shadow-[0_8px_32px_rgba(7,21,47,0.04)]">
          {/* Background Scene Image */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/hero/deed-about-hero.jpg"
              alt="DEED Studio Environment"
              loading="eager"
              className="w-full h-full object-cover object-center transform scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/40 to-transparent" />
          </div>

          <div className="pt-2 relative z-10" />

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative z-10 max-w-2xl space-y-3.5 my-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 font-mono text-[10px] sm:text-xs text-[#07152F] font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#315BFF]" />
              <span>THE STUDIO PRACTICE</span>
            </div>

            <h1
              className="font-extrabold text-[#07152F] font-syne tracking-tight leading-[1.02]"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)' }}
            >
              Quiet craft.<br />
              Serious execution<span className="text-[#315BFF]">.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#334155] leading-relaxed max-w-xl font-normal">
              DEED is an independent digital studio designing and engineering websites, digital products, and brand systems for ambitious businesses.
            </p>
          </motion.div>

          <div className="relative z-10 pt-2" />
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-2">
            <span className="font-mono text-xs text-[#315BFF] uppercase tracking-widest font-semibold block">
              OUR BELIEF
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] font-syne">
              We believe the best digital experiences are simple, fast, and memorable.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#586885] leading-relaxed">
            <p>
              Most digital agencies complicate projects with unnecessary layers, bloated processes, and generic templates. At DEED, we take a direct, high-craft approach: strategy, visual design, and engineering operating together.
            </p>
            <p>
              Whether we are building a brand identity for a cloud kitchen like Virundhalayaa, an educational platform like Nexovate, or our own proprietary POS engines, our standard remains the same: thoughtful aesthetics coupled with rock-solid engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 w-full">
        <div className="space-y-1 max-w-xl">
          <span className="font-mono text-xs text-[#315BFF] uppercase tracking-widest font-semibold block">
            HOW WE WORK
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#07152F] font-syne tracking-tight">
            Guiding principles<span className="text-[#315BFF]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {values.map((v, idx) => (
            <motion.div
              key={v.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EAEBF0] space-y-3 shadow-xs hover:border-[#D0D5DD] transition-colors"
            >
              <span className="font-mono text-xl font-black text-[#315BFF] font-syne block">
                {v.number}
              </span>
              <h3 className="text-xl font-bold text-[#07152F] font-syne">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#586885] leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#315BFF] text-white text-center space-y-5 shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-syne">
            Let's create something meaningful together.
          </h2>
          <p className="text-sm sm:text-base text-[#DCE6FF] max-w-md mx-auto">
            Reach out to discuss your brand, platform, or product vision.
          </p>
          <div className="pt-2 flex justify-center">
            <Button variant="white" size="lg" to="/contact" icon="up-right">
              Start a project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
