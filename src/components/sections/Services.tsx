import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { SectionHeader } from '../common/SectionHeader';

export const Services: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(0);

  const activeService = SERVICES[activeServiceIndex];

  return (
    <section id="services" className="py-16 sm:py-28 lg:py-40 bg-[#111110] text-[#FAF9F6] border-b border-[#262624] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeader
          number="01"
          label="WHAT WE DO"
          title="What we build &"
          serifWord="craft."
          subtitle="A comprehensive suite of design, engineering, and digital product capabilities for ambitious businesses."
          theme="dark"
        />

        {/* DESKTOP EDITORIAL TYPOGRAPHY LIST & SPLIT CANVAS (lg+) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start mt-12">
          {/* Left Column: Large Editorial Typography List */}
          <div className="col-span-7 flex flex-col divide-y divide-[#262624]">
            {SERVICES.map((service, index) => {
              const isActive = activeServiceIndex === index;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  onClick={() => setActiveServiceIndex(index)}
                  className={`py-8 px-4 cursor-pointer transition-all duration-300 group flex items-baseline justify-between rounded-xl ${
                    isActive ? 'bg-[#181816]' : 'hover:bg-[#151514]'
                  }`}
                >
                  <div className="flex gap-6 items-baseline">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#FA3800]' : 'text-[#666562]'}`}>
                      0{index + 1} /
                    </span>
                    <div>
                      <h3 className={`text-3xl font-extrabold font-syne tracking-tight transition-colors ${
                        isActive ? 'text-white' : 'text-[#A09E98] group-hover:text-white'
                      }`}>
                        {service.title.toUpperCase()}
                      </h3>
                      <p className="text-sm text-[#A09E98] mt-1 max-w-md line-clamp-1 font-sans">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isActive ? 'bg-[#FA3800] text-white' : 'text-[#666562] group-hover:text-white'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Floating Canvas Visual */}
          <div className="col-span-5 sticky top-32">
            <div className="relative rounded-3xl overflow-hidden bg-[#181816] border border-[#262624] p-8 aspect-[4/5] shadow-2xl flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                  className="space-y-6 flex flex-col h-full justify-between"
                >
                  {/* Service Image Canvas */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-[#262624] shadow-lg">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-3 left-3 font-mono text-xs text-[#FA3800] bg-[#111110]/80 px-3 py-1 rounded-full border border-[#262624]">
                      0{activeServiceIndex + 1} / SERVICE
                    </div>
                  </div>

                  {/* Service Details */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2 font-syne">
                      {activeService.title}
                    </h4>
                    <p className="text-xs text-[#A09E98] leading-relaxed mb-6">
                      {activeService.description}
                    </p>

                    <div className="space-y-2">
                      <span className="font-mono text-[11px] text-[#FA3800] uppercase tracking-wider block">
                        CORE DELIVERABLES
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {activeService.deliverables.slice(0, 4).map((d) => (
                          <div key={d} className="flex items-center gap-2 text-xs text-[#D4D2CB]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FA3800]" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* MOBILE ACCORDION VIEW (< lg) */}
        <div className="lg:hidden flex flex-col divide-y divide-[#262624] mt-6 sm:mt-8">
          {SERVICES.map((service, index) => {
            const isExpanded = mobileExpandedIndex === index;
            return (
              <div key={service.id} className="py-4 sm:py-5">
                <button
                  onClick={() => setMobileExpandedIndex(isExpanded ? null : index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none min-h-[48px] cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs text-[#FA3800] font-bold">
                      0{index + 1} /
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-syne text-white">
                      {service.title.toUpperCase()}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-[#A09E98] transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-[#FA3800]' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pt-3 space-y-4"
                    >
                      <p className="text-xs sm:text-sm text-[#A09E98] leading-relaxed">
                        {service.description}
                      </p>

                      <div className="rounded-xl overflow-hidden aspect-[16/10] border border-[#262624]">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      </div>

                      <div className="space-y-2 pt-1">
                        <span className="font-mono text-[11px] text-[#FA3800] uppercase tracking-wider block">
                          DELIVERABLES
                        </span>
                        <div className="grid grid-cols-1 gap-2">
                          {service.deliverables.map((d) => (
                            <div key={d} className="flex items-center gap-2 text-xs text-[#D4D2CB]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FA3800]" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
