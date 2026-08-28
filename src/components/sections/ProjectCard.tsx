import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect
}) => {
  const isVirundhaalaya = project.id === 'virundhaalaya';

  if (isVirundhaalaya) {
    // Virundhaalaya — Editorial Story Mobile Hierarchy with Guaranteed Title Containment
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="group flex flex-col w-full min-w-0 max-w-full overflow-hidden mb-14 sm:mb-20 lg:mb-28 border-b border-[#E6E4DF] pb-12 sm:pb-16"
      >
        {/* 1. Structured Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4 min-w-0 w-full">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FA3800] font-semibold tracking-widest">
            <span>{project.number} / CLIENT WORK</span>
            <span className="text-[#666562] font-normal">• {project.year}</span>
          </div>
          <span className="font-mono text-xs text-[#666562] uppercase tracking-wider font-medium">
            {project.category}
          </span>
        </div>

        {/* 2. Responsive Title with Fluid Clamp Scaling & Guaranteed Containment */}
        <h3
          onClick={() => onSelect(project)}
          className="font-extrabold text-[#121212] font-syne tracking-tight mb-4 sm:mb-6 group-hover:text-[#FA3800] transition-colors cursor-pointer leading-[0.96] break-words min-w-0 w-full max-w-full"
          style={{ fontSize: 'clamp(1.65rem, 5.5vw + 0.25rem, 4.25rem)' }}
        >
          {project.title}
        </h3>

        {/* 3. Large Dominant Project Image (100% Full Width, Clean Canvas) */}
        <div
          onClick={() => onSelect(project)}
          className="relative w-full overflow-hidden rounded-2xl bg-[#111110] border border-[#E6E4DF] mb-5 sm:mb-6 shadow-xl aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] cursor-pointer min-w-0 max-w-full"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover opacity-95 transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* 4. Highly Readable Body Text & Tags */}
        <div className="space-y-4 max-w-xl min-w-0 w-full">
          <p className="text-base sm:text-lg text-[#121212] font-sans font-medium leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2.5 font-sans text-xs text-[#666562] font-medium uppercase tracking-wider">
            {project.tags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-2">
                <span>{tag}</span>
                {i < project.tags.length - 1 && <span className="text-[#FA3800]">•</span>}
              </span>
            ))}
          </div>

          {/* 5. Single-Line Non-Wrapping Editorial CTA */}
          <div className="pt-3">
            <a
              href="https://www.virundhalayaa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center flex-nowrap whitespace-nowrap font-semibold tracking-tight transition-all duration-300 rounded-full select-none outline-none cursor-pointer text-xs px-6 py-3.5 gap-2 min-h-[48px] bg-[#121212] text-white hover:bg-[#FA3800] active:scale-[0.98] shadow-sm uppercase tracking-wider"
            >
              <span className="whitespace-nowrap font-semibold shrink-0">View Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </motion.article>
    );
  }

  // Nexovate — Contrast Story Composition
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      className="group flex flex-col w-full min-w-0 max-w-full overflow-hidden mb-14 sm:mb-20 lg:mb-28"
    >
      {/* 1. Metadata Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4 min-w-0 w-full">
        <div className="flex items-center gap-3 font-mono text-xs text-[#FA3800] font-semibold tracking-widest">
          <span>{project.number} / CLIENT WORK</span>
          <span className="text-[#666562] font-normal">• {project.year}</span>
        </div>
        <span className="font-mono text-xs text-[#FA3800] bg-[#FA3800]/10 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
          {project.status}
        </span>
      </div>

      {/* 2. Title */}
      <h3
        onClick={() => onSelect(project)}
        className="font-extrabold text-[#121212] font-syne tracking-tight mb-4 sm:mb-6 group-hover:text-[#FA3800] transition-colors cursor-pointer leading-[0.96] break-words min-w-0 w-full max-w-full"
        style={{ fontSize: 'clamp(1.65rem, 5.5vw + 0.25rem, 4.25rem)' }}
      >
        {project.title}
      </h3>

      {/* 3. Large Product Canvas */}
      <div
        onClick={() => onSelect(project)}
        className="relative w-full overflow-hidden rounded-2xl bg-[#111110] border border-[#E6E4DF] mb-5 sm:mb-6 shadow-xl aspect-[4/3] sm:aspect-[16/10] cursor-pointer sm:-rotate-1 group-hover:rotate-0 transition-transform duration-700 ease-out min-w-0 max-w-full"
      >
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* 4. Description & Scope */}
      <div className="space-y-4 max-w-xl min-w-0 w-full">
        <p className="text-base sm:text-lg text-[#121212] font-sans font-medium leading-relaxed">
          {project.description}
        </p>

        <div className="p-3.5 rounded-xl bg-[#F2F0EB] border border-[#E6E4DF] font-sans text-xs text-[#666562] font-medium">
          <span className="text-[#121212] font-semibold">SCOPE: </span>
          <span>Education / Product / UI/UX / Development</span>
        </div>

        <div className="pt-2">
          <button
            onClick={() => onSelect(project)}
            className="group relative inline-flex items-center justify-center flex-nowrap whitespace-nowrap font-semibold tracking-tight transition-all duration-300 rounded-full select-none outline-none cursor-pointer text-xs px-6 py-3.5 gap-2 min-h-[48px] bg-[#F2F0EB] text-[#121212] hover:bg-[#121212] hover:text-white active:scale-[0.98] border border-[#E6E4DF] uppercase tracking-wider"
          >
            <span className="whitespace-nowrap font-semibold shrink-0">View Nexovate Story</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
