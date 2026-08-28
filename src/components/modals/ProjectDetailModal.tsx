import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../types';
import { Badge } from '../common/Badge';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenInquiry
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111110]/80 backdrop-blur-md"
          />

          {/* Case Study Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative w-full max-w-4xl bg-[#FAF9F6] text-[#121212] h-full overflow-y-auto shadow-2xl z-10 flex flex-col justify-between"
          >
            {/* Sticky Header Bar */}
            <div className="sticky top-0 z-20 bg-[#FAF9F6]/95 backdrop-blur-md px-6 lg:px-10 py-5 border-b border-[#E6E4DF] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#FA3800] font-semibold">
                  CASE STUDY {project.number}
                </span>
                <span className="text-xs text-[#666562] font-mono">• {project.year}</span>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-[#F2F0EB] hover:bg-[#FA3800] hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content Body */}
            <div className="px-6 lg:px-12 py-8 space-y-10">
              {/* Title & Tagline */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="accent">
                      {tag}
                    </Badge>
                  ))}
                  {project.status && (
                    <Badge variant="dark">{project.status}</Badge>
                  )}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-[#121212]">
                  {project.title}
                </h1>
                <p className="text-xl lg:text-2xl text-[#4A4946] font-medium leading-relaxed">
                  {project.description}
                </p>

                {/* External Link Action if Live Website */}
                {project.externalUrl && (
                  <div className="mt-6">
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FA3800] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#121212] transition-colors min-h-[44px]"
                    >
                      <span>{project.liveUrlLabel || 'Visit Live Project →'}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Primary Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-lg border border-[#E6E4DF]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Story & Background */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs text-[#FA3800] font-semibold uppercase tracking-widest">
                  PROJECT NARRATIVE
                </h3>
                <p className="text-base sm:text-lg text-[#4A4946] leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#E6E4DF]">
                <div className="space-y-3">
                  <h3 className="font-mono text-xs text-[#FA3800] font-semibold uppercase tracking-widest">
                    THE CHALLENGE
                  </h3>
                  <p className="text-base text-[#4A4946] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-mono text-xs text-[#FA3800] font-semibold uppercase tracking-widest">
                    DEED APPROACH & EXECUTION
                  </h3>
                  <p className="text-base text-[#4A4946] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Scope & Deliverables */}
              <div className="border-t border-[#E6E4DF] pt-8">
                <h3 className="font-mono text-xs text-[#666562] font-semibold uppercase tracking-widest mb-6">
                  DELIVERABLES & SCOPE
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium text-[#121212]">
                      <CheckCircle2 className="w-4 h-4 text-[#FA3800]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              <div className="space-y-6">
                <h3 className="font-mono text-xs text-[#666562] font-semibold uppercase tracking-widest">
                  VISUAL ARTIFACTS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] border border-[#E6E4DF]">
                      <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Sticky Action Bar */}
            <div className="sticky bottom-0 bg-[#111110] text-[#FAF9F6] px-6 lg:px-12 py-6 border-t border-[#262624] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono text-[#A09E98]">INSPIRED BY THIS WORK?</p>
                <p className="text-sm font-bold">Build a custom product or platform with DEED</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1E1E1C] text-white text-xs uppercase font-semibold tracking-wider hover:bg-white hover:text-[#111110] transition-colors min-h-[44px]"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={() => {
                    onClose();
                    onOpenInquiry();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FA3800] text-white text-xs uppercase font-semibold tracking-wider hover:bg-white hover:text-[#111110] transition-colors min-h-[44px] cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
