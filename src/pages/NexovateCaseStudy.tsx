import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Globe } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export const NexovateCaseStudy: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'nexovate') || PROJECTS[1];

  return (
    <article className="pt-28 sm:pt-36 pb-20 sm:pb-32 space-y-16 sm:space-y-24">
      {/* 01 — Top Breadcrumb & Metadata Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#68758F] hover:text-[#101828] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#315BFF]" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#315BFF] bg-[#DDE6FF] border border-[#DDE6FF] px-3 py-1 rounded-full">
                EDUCATION
              </span>
              <span className="font-mono text-xs text-[#68758F]">• {project.year}</span>
              <span className="font-mono text-xs text-[#68758F]">• {project.category}</span>
            </div>

            <h1
              className="font-extrabold text-[#101828] font-syne tracking-tight leading-[1.04]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.75rem)' }}
            >
              {project.title}
            </h1>

            <p className="text-lg sm:text-2xl text-[#68758F] font-normal leading-relaxed">
              Digital design and technology systems for an education-focused platform.
            </p>
          </div>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#EAEBF0] shadow-xs">
            <div>
              <span className="font-mono text-[10px] uppercase text-[#68758F] tracking-wider block">CLIENT</span>
              <span className="text-sm font-semibold text-[#101828]">{project.client}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#68758F] tracking-wider block">SERVICES</span>
              <span className="text-sm font-semibold text-[#101828]">EdTech UI/UX, Web App</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#68758F] tracking-wider block">TIMELINE</span>
              <span className="text-sm font-semibold text-[#101828]">2025 • Active</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#68758F] tracking-wider block">STATUS</span>
              <span className="text-sm font-semibold text-[#315BFF]">{project.status}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Master Visual Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-white border border-[#EAEBF0] shadow-lg aspect-[16/9] sm:aspect-[21/9] relative">
          <img
            src={project.heroImage}
            alt={project.title}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 03 — Challenge & Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4 p-8 sm:p-10 rounded-3xl bg-white border border-[#EAEBF0] shadow-xs">
            <span className="font-mono text-xs text-[#315BFF] uppercase tracking-wider font-semibold block">
              01 // THE PROBLEM
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] font-syne">
              Fragmented Learning Workflows
            </h2>
            <p className="text-sm sm:text-base text-[#68758F] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="space-y-4 p-8 sm:p-10 rounded-3xl bg-white border border-[#EAEBF0] shadow-xs">
            <span className="font-mono text-xs text-[#315BFF] uppercase tracking-wider font-semibold block">
              02 // THE STRATEGY & APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] font-syne">
              Modular Component Architecture
            </h2>
            <p className="text-sm sm:text-base text-[#68758F] leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>
      </section>

      {/* 04 — What DEED Built */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#315BFF] uppercase tracking-widest font-semibold block">
            03 // WHAT DEED BUILT
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101828] font-syne tracking-tight">
            Learning Platform Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.whatWeBuilt.map((item, idx) => (
            <div
              key={item}
              className="p-6 rounded-2xl bg-white border border-[#EAEBF0] shadow-xs space-y-3"
            >
              <span className="font-mono text-xs font-bold text-[#315BFF]">0{idx + 1} //</span>
              <h3 className="text-base sm:text-lg font-bold text-[#101828] font-syne">{item}</h3>
              <p className="text-xs sm:text-sm text-[#68758F]">
                Engineered for modularity, accessibility, and high performance across mobile and desktop.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 05 — Technology Stack & Current State */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAEBF0] shadow-xs space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-3">
              <span className="font-mono text-xs text-[#315BFF] uppercase tracking-wider font-semibold block">
                04 // DESIGN SYSTEM
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#101828] font-syne">
                Modular Product Design
              </h3>
              <p className="text-sm text-[#68758F] leading-relaxed">
                {project.designSystemOverview}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <span className="font-mono text-xs text-[#315BFF] uppercase tracking-wider font-semibold block">
                05 // TECHNOLOGY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#101828] font-syne">
                Full-Stack Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="p-3 rounded-xl bg-[#FAF9F6] border border-[#EAEBF0] font-mono text-xs text-[#101828] flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#315BFF] shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Outcome & Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#DDE6FF]/50 via-white to-[#E4E2FA]/30 border border-[#DDE6FF] space-y-6 shadow-xs">
          <span className="font-mono text-xs text-[#315BFF] uppercase tracking-wider font-semibold block">
            06 // OUTCOME
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101828] font-syne">
            A Scalable Digital Platform
          </h2>
          <p className="text-base sm:text-lg text-[#68758F] max-w-3xl leading-relaxed">
            {project.outcome}
          </p>

          <div className="pt-4 flex items-center gap-4">
            <Link
              to="/work/billing-software"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#315BFF] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#173BCE] transition-colors shadow-xs"
            >
              <span>Next Project: Billing Software</span>
            </Link>
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#101828] border border-[#EAEBF0] hover:bg-[#FAF9F6] font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>Live Site</span>
                <Globe className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </section>
    </article>
  );
};
