import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../../data/process';
import { SectionHeader } from '../common/SectionHeader';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-14 sm:py-24 lg:py-36 bg-[#FAF9F6] border-b border-[#E6E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeader
          number="04"
          label="PROCESS"
          title="From idea to"
          serifWord="something real."
          subtitle="Our battle-tested 5-stage framework designed for speed, clarity, and zero execution loss."
        />

        {/* Process Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mt-8 sm:mt-12">
          {/* Left Column: Stage Items */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
            {PROCESS_STEPS.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onClick={() => setActiveStep(index)}
                  className={`p-5 sm:p-6 rounded-2xl cursor-pointer border transition-all duration-300 ${
                    isActive
                      ? 'bg-[#111110] text-[#FAF9F6] border-[#111110] shadow-xl sm:translate-x-2'
                      : 'bg-[#F2F0EB] text-[#121212] border-[#E6E4DF] hover:border-[#121212]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#FA3800]' : 'text-[#666562]'}`}>
                      STAGE {step.number}
                    </span>
                    <span className={`text-[11px] font-mono ${isActive ? 'text-[#A09E98]' : 'text-[#7A7975]'}`}>
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold font-syne ${isActive ? 'text-white' : 'text-[#121212]'}`}>
                    {step.title}
                  </h3>

                  <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${isActive ? 'text-[#A09E98]' : 'text-[#666562]'}`}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Stage Details */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-[#F2F0EB] border border-[#E6E4DF] shadow-md space-y-6 sm:space-y-8">
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-[#E6E4DF]">
                <div>
                  <span className="font-mono text-xs text-[#FA3800] uppercase font-semibold">
                    STAGE {PROCESS_STEPS[activeStep].number} ARTIFACT
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-[#121212] mt-1">
                    {PROCESS_STEPS[activeStep].title} Phase
                  </h4>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FA3800] text-white flex items-center justify-center font-mono font-bold text-base sm:text-lg shrink-0">
                  {PROCESS_STEPS[activeStep].number}
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <span className="font-mono text-[11px] sm:text-xs text-[#666562] uppercase tracking-wider block">
                  KEY ACTIVITIES & CHECKPOINTS
                </span>
                <div className="space-y-2.5 sm:space-y-3">
                  {PROCESS_STEPS[activeStep].details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E6E4DF] text-xs sm:text-sm text-[#121212] font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#FA3800] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
