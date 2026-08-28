import React from 'react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    'BRAND IDENTITY',
    'WEB EXPERIENCES',
    'DIGITAL PRODUCTS',
    'UI/UX ARCHITECTURE',
    'FRONTEND ENGINEERING',
    'DESIGN SYSTEMS',
    'ART DIRECTION',
    '0-TO-1 STRATEGY'
  ];

  return (
    <section className="py-6 bg-[#111110] text-[#FAF9F6] border-y border-[#262624] overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Double array for infinite marquee loop */}
        {[...capabilities, ...capabilities, ...capabilities].map((cap, index) => (
          <div key={index} className="flex items-center gap-8 font-syne text-sm sm:text-base font-bold tracking-widest text-[#FAF9F6]">
            <span>{cap}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA3800]" />
          </div>
        ))}
      </div>
    </section>
  );
};
