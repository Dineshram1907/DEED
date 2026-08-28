import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, Shield, Target, Cpu } from 'lucide-react';
import { IDENTITY_PRODUCT } from '../../data/ownProduct';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';

interface OwnProductProps {
  onOpenInquiry: () => void;
}

export const OwnProductSection: React.FC<OwnProductProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState(0);

  const pillarIcons = [
    <Compass className="w-4 h-4 text-[#FA3800]" />,
    <Target className="w-4 h-4 text-[#FA3800]" />,
    <Shield className="w-4 h-4 text-[#FA3800]" />,
    <Cpu className="w-4 h-4 text-[#FA3800]" />
  ];

  return (
    <section id="identity" className="py-16 sm:py-28 lg:py-36 bg-[#111110] text-[#FAF9F6] border-b border-[#262624] relative overflow-hidden">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header with Distinct Product Ownership Badge */}
        <SectionHeader
          number="03"
          label={IDENTITY_PRODUCT.badge}
          title="We also build products"
          serifWord="of our own."
          subtitle="DEED conceives, designs, and engineers proprietary software in-house. Identity is our first internal release."
          theme="dark"
        />

        {/* Hero Product Showcase Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-10 lg:mt-16">
          {/* Left / Top: Master Product UI Display Canvas */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#181816] border border-[#262624] aspect-[16/10] shadow-2xl group">
              <img
                src={IDENTITY_PRODUCT.heroImage}
                alt="IDENTITY by DEED — Personal Transformation Architecture"
                className="w-full h-full object-cover object-center opacity-95 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111110]/90 backdrop-blur-md border border-white/10 font-mono text-[11px] text-[#FA3800] shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#FA3800] animate-pulse" />
                <span>{IDENTITY_PRODUCT.status}</span>
              </div>

              {/* Bottom UI Spec Pill */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#D4D2CB] font-mono text-[10px] uppercase tracking-widest bg-[#111110]/85 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 shadow-lg">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FA3800]" />
                  DEED PRODUCT 01
                </span>
                <span className="text-[#FA3800] font-semibold">WEB APPLICATION</span>
              </div>
            </div>

            {/* How It Works — 4 Progressive Micro Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {IDENTITY_PRODUCT.steps.map((step) => (
                <div key={step.num} className="p-3 rounded-xl bg-[#181816] border border-[#262624] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#FA3800] font-bold">{step.num}</span>
                    <span className="w-1 h-1 rounded-full bg-[#FA3800]" />
                  </div>
                  <h4 className="text-xs font-bold text-white font-syne truncate">{step.label}</h4>
                  <p className="text-[10px] text-[#A09E98] leading-tight line-clamp-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right / Bottom: Dedicated Progressive Storytelling Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#FA3800] uppercase tracking-widest font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{IDENTITY_PRODUCT.badge}</span>
              </div>
              <h3 className="text-4xl sm:text-6xl font-extrabold text-white font-syne tracking-tight">
                {IDENTITY_PRODUCT.title}
              </h3>
              <p className="text-xl sm:text-2xl font-serif-editorial italic text-[#FAF9F6] mt-2">
                "{IDENTITY_PRODUCT.tagline}"
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#A09E98] leading-relaxed">
              {IDENTITY_PRODUCT.headline}
            </p>

            {/* Progressive Story Tabs (What is it, Why does it exist, Who is it for, What does it help do) */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap gap-2">
                {IDENTITY_PRODUCT.pillars.map((pillar, idx) => (
                  <button
                    key={pillar.question}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeTab === idx
                        ? 'bg-[#FA3800] text-white font-bold shadow-sm'
                        : 'bg-[#181816] text-[#A09E98] hover:text-white border border-[#262624]'
                    }`}
                  >
                    {pillar.question}
                  </button>
                ))}
              </div>

              {/* Active Tab Answer Box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="p-5 rounded-2xl bg-[#181816] border border-[#262624] space-y-2"
                >
                  <div className="flex items-center gap-2">
                    {pillarIcons[activeTab]}
                    <span className="font-mono text-xs text-[#FA3800] font-semibold uppercase">
                      {IDENTITY_PRODUCT.pillars[activeTab].bullet}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D4D2CB] leading-relaxed">
                    {IDENTITY_PRODUCT.pillars[activeTab].answer}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Single Explicit Product CTA with Reusable Button */}
            <div className="pt-3">
              <Button
                variant="primary"
                size="lg"
                icon="up-right"
                onClick={onOpenInquiry}
                className="w-full sm:w-auto"
              >
                Explore Identity
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
