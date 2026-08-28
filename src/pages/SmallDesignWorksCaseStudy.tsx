import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { Button } from '../components/common/Button';

export const SmallDesignWorksCaseStudy: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'small-design-works') || PROJECTS[3];

  return (
    <article className="pt-28 sm:pt-36 pb-20 sm:pb-32 space-y-16 sm:space-y-24">
      {/* 01 — Top Breadcrumb & Metadata Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#68758F] hover:text-[#0B1428] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#315BFF]" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#315BFF] bg-[#DDE6FF] border border-[#DDE6FF] px-3 py-1 rounded-full">
                CURATED ARCHIVE
              </span>
              <span className="font-mono text-xs text-[#68758F]">• {project.year}</span>
              <span className="font-mono text-xs text-[#68758F]">• {project.category}</span>
            </div>

            <h1
              className="font-extrabold text-[#0B1428] font-syne tracking-tight leading-[1.04]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.75rem)' }}
            >
              {project.title}
            </h1>

            <p className="text-lg sm:text-2xl text-[#68758F] font-normal leading-relaxed">
              Curated micro-identities, typographic systems, and focused digital interfaces.
            </p>
          </div>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#EAEBF0] shadow-xs">
            <div>
              <span className="font-mono text-[10px] uppercase text-[#68758F] tracking-wider block">DISCIPLINE</span>
              <span className="text-sm font-semibold text-[#0B1428]">Brand & UI Systems</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#68758F] tracking-wider block">FORMAT</span>
              <span className="text-sm font-semibold text-[#0B1428]">Focused Sprints</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#68758F] tracking-wider block">DELIVERABLES</span>
              <span className="text-sm font-semibold text-[#0B1428]">Logomarks, Tokens, UI</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#68758F] tracking-wider block">STATUS</span>
              <span className="text-sm font-semibold text-[#315BFF]">Curated Archive</span>
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
              01 // THE CHALLENGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1428] font-syne">
              Focused Identity Sprints
            </h2>
            <p className="text-sm sm:text-base text-[#68758F] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="space-y-4 p-8 sm:p-10 rounded-3xl bg-white border border-[#EAEBF0] shadow-xs">
            <span className="font-mono text-xs text-[#315BFF] uppercase tracking-wider font-semibold block">
              02 // THE APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1428] font-syne">
              Concentrated Craftsmanship
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
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1428] font-syne tracking-tight">
            Design Artifacts & Deliverables
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.whatWeBuilt.map((item, idx) => (
            <div
              key={item}
              className="p-6 rounded-2xl bg-white border border-[#EAEBF0] shadow-xs space-y-3"
            >
              <span className="font-mono text-xs font-bold text-[#315BFF]">0{idx + 1} //</span>
              <h3 className="text-base font-bold text-[#0B1428] font-syne">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 05 — Inquiry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#DDE6FF]/50 via-white to-[#E4E2FA]/30 border border-[#DDE6FF] space-y-6 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono text-[#315BFF] uppercase tracking-wider font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>04 // BRAND & UI SPRINTS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1428] font-syne">
            Need a Refined Brand or UI System?
          </h2>
          <p className="text-base sm:text-lg text-[#68758F] max-w-2xl leading-relaxed">
            We work with selected founders on brand identity systems, typography guidelines, and digital interfaces.
          </p>

          <div className="pt-2">
            <Button variant="primary" size="md" to="/contact">
              Inquire for Design Work
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};
