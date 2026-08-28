import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/common/Button';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Brand Identity & Strategy',
      tagline: 'Distinctive visual identities that command authority.',
      desc: 'We design complete brand systems from core positioning and typography tokens to visual design guidelines, motion rules, and digital assets.',
      deliverables: ['Brand Strategy & Positioning', 'Logo & Visual Systems', 'Typography & Color Tokens', 'Motion Guidelines', 'Digital Asset Libraries']
    },
    {
      number: '02',
      title: 'Web Design & Engineering',
      tagline: 'Lightning-fast digital platforms that convert qualified clients.',
      desc: 'Modern web experiences crafted with sub-second page loads, responsive fluid layouts, smooth micro-animations, and clean SEO architecture.',
      deliverables: ['Custom Web Architecture', 'Responsive UI / UX Design', 'Performance Optimization', 'Interactive Micro-Animations', 'Technical SEO & Analytics']
    },
    {
      number: '03',
      title: 'UI / UX Product Design',
      tagline: 'Intuitive user experiences built around real human workflows.',
      desc: 'We map user journeys, design wireframes, and create high-fidelity design systems for complex SaaS products, mobile applications, and internal tools.',
      deliverables: ['User Research & Journey Mapping', 'Wireframing & Prototyping', 'Design System Architecture', 'SaaS & App Interface Design', 'Usability Testing & Refinement']
    },
    {
      number: '04',
      title: 'Custom Technology Systems',
      tagline: 'Scalable APIs, POS platforms, and reactive architectures.',
      desc: 'Full-stack engineering focused on reliability, sub-second execution, offline-first data sync, and modern reactive frontend frameworks.',
      deliverables: ['Custom Web Applications', 'Point-of-Sale & Invoicing Engines', 'API Design & Integration', 'Offline-First Web Architectures', 'Cloud Infrastructure & Deployments']
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-20 pb-20 sm:pb-32 w-full max-w-full overflow-x-clip">
      {/* Visual Hero Scene (Chapter 03: Digital Glass, Light & Engineering) */}
      <section className="px-3.5 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full mt-1 sm:mt-2">
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[460px] flex flex-col justify-between p-6 sm:p-12 lg:p-14 border border-[#EAEBF0] shadow-[0_8px_32px_rgba(7,21,47,0.04)]">
          {/* Background Scene Image */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/hero/deed-services-hero.jpg"
              alt="DEED Digital Services"
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
              <span>CAPABILITIES & PRACTICES</span>
            </div>

            <h1
              className="font-extrabold text-[#07152F] font-syne tracking-tight leading-[1.02]"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)' }}
            >
              What we design<br />
              and build<span className="text-[#315BFF]">.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#334155] leading-relaxed max-w-xl font-normal">
              From strategic brand identity and high-performance websites to complex SaaS product design and custom technology platforms.
            </p>
          </motion.div>

          <div className="relative z-10 pt-2" />
        </div>
      </section>

      {/* Detailed Services Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 w-full">
        {services.map((service, idx) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: idx * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="p-6 sm:p-10 rounded-3xl bg-white border border-[#EAEBF0] shadow-xs space-y-6 hover:border-[#D0D5DD] transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-base font-extrabold text-[#315BFF] font-syne">
                    {service.number}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07152F] font-syne">
                    {service.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base font-semibold text-[#07152F]">
                  {service.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#586885] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="lg:w-80 space-y-2.5 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#F3F4F8] lg:pl-8">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#586885] block font-semibold">
                  CORE DELIVERABLES
                </span>
                <div className="space-y-1.5">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#07152F]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#315BFF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#315BFF] text-white text-center space-y-5 shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-syne">
            Ready to build something ambitious?
          </h2>
          <p className="text-sm sm:text-base text-[#DCE6FF] max-w-md mx-auto">
            Tell us about your project, timeline, and goals.
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
