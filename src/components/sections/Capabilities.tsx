import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITIES_CATEGORIES } from '../../data/capabilities';
import { SectionHeader } from '../common/SectionHeader';

export const Capabilities: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-[#FAF9F6] border-b border-[#E6E4DF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader
          number="06"
          label="CAPABILITIES MATRIX"
          title="Fullstack design &"
          serifWord="engineering."
          subtitle="From concept architecture to edge infrastructure deployment, DEED operates across the full digital spectrum."
        />

        {/* 3 Column Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {CAPABILITIES_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-[#F2F0EB] border border-[#E6E4DF] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#FA3800] font-bold">0{index + 1}</span>
                <h3 className="text-2xl font-extrabold text-[#121212] font-syne mt-2 mb-3">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#666562] mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <ul className="space-y-3 border-t border-[#E6E4DF] pt-6">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[#121212] group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FA3800] group-hover:scale-150 transition-transform" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E6E4DF] text-right">
                <span className="font-mono text-[10px] text-[#666562] uppercase tracking-wider">
                  DEED CERTIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
