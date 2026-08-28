import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export const WorkPage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-20 pb-20 sm:pb-32 w-full max-w-full overflow-x-clip">
      {/* Visual Hero Scene (Chapter 02: Real Client Work & Craft) */}
      <section className="px-3.5 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full mt-1 sm:mt-2">
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[460px] flex flex-col justify-between p-6 sm:p-12 lg:p-14 border border-[#EAEBF0] shadow-[0_8px_32px_rgba(7,21,47,0.04)]">
          {/* Background Scene Image */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/hero/deed-work-hero.jpg"
              alt="DEED Work Architecture"
              loading="eager"
              className="w-full h-full object-cover object-center transform scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/35 to-transparent" />
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
              <span>SELECTED WORK & CASE STUDIES</span>
            </div>

            <h1
              className="font-extrabold text-[#07152F] font-syne tracking-tight leading-[1.02]"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)' }}
            >
              Ideas becoming<br />
              real systems<span className="text-[#315BFF]">.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#334155] leading-relaxed max-w-xl font-normal">
              A curated index of digital products, brand architectures, and custom technology engineered for ambitious businesses.
            </p>
          </motion.div>

          <div className="relative z-10 pt-2" />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              className="project-card p-5 sm:p-7 rounded-3xl bg-white border border-[#EAEBF0] shadow-xs space-y-4 flex flex-col justify-between hover:border-[#D0D5DD] transition-all hover:-translate-y-1 duration-300"
            >
              <div className="space-y-4">
                <Link to={project.slug} className="block rounded-2xl overflow-hidden aspect-[16/10] bg-[#FAF9F6] border border-[#EAEBF0] relative">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    className="project-card-image w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full font-mono text-[10px] text-[#07152F] font-semibold shadow-xs">
                    {project.category}
                  </div>
                </Link>

                <div className="space-y-1.5">
                  <span className="font-mono text-xs text-[#315BFF] font-semibold block">
                    {project.number} // {project.category.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-bold text-[#07152F] font-syne">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#586885] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#F3F4F8] flex items-center justify-between">
                <Link
                  to={project.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#315BFF] hover:underline"
                >
                  <span>View case study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <span className="font-mono text-[10px] text-[#586885]">CASE STUDY</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};
