import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Target, Compass } from 'lucide-react';
import { IDENTITY_PRODUCT } from '../data/ownProduct';
import { Button } from '../components/common/Button';

interface IdentityProductPageProps {
  onOpenInquiry?: () => void;
}

export const IdentityProductPage: React.FC<IdentityProductPageProps> = ({ onOpenInquiry }) => {
  return (
    <article className="pt-28 sm:pt-36 pb-20 sm:pb-32 space-y-16 sm:space-y-24">
      {/* 01 — Top Breadcrumb & Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#667085] hover:text-[#0B1220] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#2457F5]" />
            <span>BACK TO PRODUCTS</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2457F5] bg-[#EEF4FF] border border-[#DDE7FF] px-3 py-1 rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{IDENTITY_PRODUCT.badge}</span>
              </span>
              <span className="font-mono text-xs text-[#667085]">• {IDENTITY_PRODUCT.status}</span>
            </div>

            <h1
              className="font-extrabold text-[#0B1220] font-syne tracking-tight leading-[1.04]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.75rem)' }}
            >
              Build the person you're becoming<span className="text-[#2457F5]">.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-[#334155] font-normal leading-relaxed">
              "{IDENTITY_PRODUCT.tagline}"
            </p>

            <p className="text-base sm:text-lg text-[#667085] max-w-2xl leading-relaxed">
              {IDENTITY_PRODUCT.headline}
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Master Visual Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-white border border-[#DDE3EE] shadow-lg aspect-[16/9] sm:aspect-[21/9] relative">
          <img
            src={IDENTITY_PRODUCT.heroImage}
            alt="Identity Digital System Interface"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 03 — Problem & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4 p-8 sm:p-10 rounded-3xl bg-white border border-[#DDE3EE] shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono text-[#2457F5] uppercase tracking-wider font-semibold">
              <Target className="w-4 h-4" />
              <span>01 // THE PROBLEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1220] font-syne">
              Passive Drift & Disconnected Goals
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              {IDENTITY_PRODUCT.problem}
            </p>
          </div>

          <div className="space-y-4 p-8 sm:p-10 rounded-3xl bg-white border border-[#DDE3EE] shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono text-[#2457F5] uppercase tracking-wider font-semibold">
              <Compass className="w-4 h-4" />
              <span>02 // THE VISION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1220] font-syne">
              Deliberate Systems for Personal Trajectory
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              {IDENTITY_PRODUCT.vision}
            </p>
          </div>
        </div>
      </section>

      {/* 04 — Core Experience & Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#2457F5] uppercase tracking-widest font-semibold block">
            03 // WHAT IT DOES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1220] font-syne tracking-tight">
            The Core Experience
          </h2>
          <p className="text-sm sm:text-base text-[#667085] max-w-2xl">
            {IDENTITY_PRODUCT.whatItDoes}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IDENTITY_PRODUCT.coreExperience.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white border border-[#DDE3EE] shadow-xs space-y-3"
            >
              <span className="font-mono text-xs font-bold text-[#2457F5]">0{idx + 1} //</span>
              <h3 className="text-lg font-bold text-[#0B1220] font-syne">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 05 — Product Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DDE3EE] shadow-xs space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#2457F5] uppercase tracking-widest font-semibold block">
              04 // PRODUCT PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-syne">
              Built on First Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            {IDENTITY_PRODUCT.principles.map((principle, idx) => (
              <div key={principle.title} className="p-5 rounded-2xl bg-[#F8F9FA] border border-[#DDE3EE] space-y-2">
                <span className="font-mono text-[10px] text-[#2457F5] font-semibold uppercase">
                  RULE 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-[#0B1220] font-syne">{principle.title}</h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Current Stage & CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="p-8 rounded-3xl bg-white border border-[#DDE3EE] shadow-xs space-y-3">
            <span className="font-mono text-xs font-semibold text-[#2457F5] uppercase tracking-wider block">
              05 // CURRENT STAGE
            </span>
            <h3 className="text-xl font-bold text-[#0B1220] font-syne">Interface & Concept Architecture</h3>
            <p className="text-sm text-[#667085] leading-relaxed">
              {IDENTITY_PRODUCT.currentStage}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#EEF4FF] via-white to-[#DDE7FF]/40 border border-[#DDE7FF] space-y-3 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <span className="font-mono text-xs font-semibold text-[#2457F5] uppercase tracking-wider block">
                06 // FUTURE DIRECTION
              </span>
              <h3 className="text-xl font-bold text-[#0B1220] font-syne">Private Testing & Iteration</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                {IDENTITY_PRODUCT.futureDirection}
              </p>
            </div>

            <div className="pt-4 border-t border-[#DDE7FF]">
              <Button variant="primary" size="md" to="/contact" onClick={onOpenInquiry}>
                Inquire about Identity
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
