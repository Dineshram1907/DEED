import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Sparkles
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { IDENTITY_PRODUCT } from '../data/ownProduct';
import { Button } from '../components/common/Button';
import { ContinuousMarqueeRail } from '../components/common/ContinuousMarqueeRail';

export const HomePage: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  // Monitor scroll position to fade out scroll indicator when user leaves top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsAtTop(scrollY < 45);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById('trust-section');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceRows = [
    {
      number: '01',
      title: 'Brand Identity',
      desc: 'Visual systems, typography tokens, and strategic brand positioning.'
    },
    {
      number: '02',
      title: 'Web Design & Dev',
      desc: 'Websites that look sharp, load fast, and convert qualified clients.'
    },
    {
      number: '03',
      title: 'UI / UX Product Design',
      desc: 'Intuitive user experiences and digital products built around real user needs.'
    },
    {
      number: '04',
      title: 'Technology Systems',
      desc: 'High-performance engineering, scalable APIs, and reactive frontend architecture.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Think',
      desc: 'Understand the business reality, audience, and core objective.'
    },
    {
      number: '02',
      title: 'Shape',
      desc: 'Define the architectural flow, typography, and interface design.'
    },
    {
      number: '03',
      title: 'Build',
      desc: 'Engineer with clean code, sub-second performance, and attention to detail.'
    },
    {
      number: '04',
      title: 'Launch',
      desc: 'Deploy to the world, measure impact, and iterate continuously.'
    }
  ];

  return (
    <div className="space-y-14 sm:space-y-20 lg:space-y-28 pb-20 sm:pb-32 overflow-x-clip w-full max-w-full relative">
      {/* Soft Edge Glow System (Color-Dissolving Morphing Ambient Blobs) */}
      <div className="ambient-glow-blue top-8 -right-24" />
      <div className="ambient-glow-lavender top-[820px] -left-28" />
      <div className="ambient-glow-pink top-[1750px] -right-20" />
      <div className="ambient-glow-blue top-[2700px] -left-16" />

      {/* =========================================================
          01 — HERO SECTION (Atmospheric Viewport Card + Staggered Entrance)
          ========================================================= */}
      <section className="px-3.5 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[calc(100svh-84px)] sm:min-h-[calc(100svh-100px)] max-h-[880px] flex flex-col justify-between p-5 sm:p-10 lg:p-14 border border-[#EAEBF0] shadow-[0_8px_32px_rgba(7,21,47,0.04)]">
          {/* Strictly Bounded Atmospheric Image */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/hero/deed-dreamy-sky-moon.jpg"
              alt="DEED Atmosphere"
              loading="eager"
              className="w-full h-full object-cover object-[72%_bottom] sm:object-[center_bottom] transform transition-transform duration-1000 ease-out scale-[1.01]"
            />
            {/* Subtle soft white/lavender gradient for crisp contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/15 to-transparent" />
          </div>

          {/* Top spacer */}
          <div className="pt-1 sm:pt-3 relative z-10" />

          {/* Hero Staggered Entrance Content */}
          <div className="relative z-10 max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6 my-auto py-2 sm:py-6">
            {/* 0.0s: Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.0, ease: [0.16, 1, 0.3, 1] as const }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 font-mono text-[10px] sm:text-xs text-[#07152F] font-semibold shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#315BFF] deed-dot-pulse" />
              <span>DEED / DIGITAL STUDIO</span>
            </motion.div>

            {/* 0.12s: Large Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-extrabold text-[#07152F] font-syne tracking-tight leading-[0.98] sm:leading-[1.02]"
              style={{ fontSize: 'clamp(2.35rem, 6.5vw, 4.85rem)' }}
            >
              Good ideas<br />
              deserve good<br />
              digital<br />
              experiences<span className="text-[#315BFF]">.</span>
            </motion.h1>

            {/* 0.25s: Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-sm sm:text-lg lg:text-xl text-[#334155] leading-relaxed max-w-xl font-normal"
            >
              We design brands, websites and digital products for businesses ready to become something more.
            </motion.p>

            {/* 0.38s: Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.38, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <Button variant="primary" size="lg" to="/contact" icon="up-right">
                Start a project
              </Button>
              <Button variant="white" size="lg" to="/work" icon="up-right">
                See our work
              </Button>
            </motion.div>
          </div>

          {/* Bottom Center Scroll Indicator (Positioned strictly inside Hero, fades smoothly on scroll) */}
          <div className="relative z-10 flex justify-center pb-1 pt-2">
            <motion.button
              onClick={scrollToContent}
              animate={{
                opacity: isAtTop ? 1 : 0,
                y: isAtTop ? 0 : 10,
                scale: isAtTop ? 1 : 0.88,
                pointerEvents: isAtTop ? 'auto' : 'none'
              }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to content"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-md flex items-center justify-center text-[#07152F] hover:text-[#315BFF] transition-colors cursor-pointer"
            >
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#07152F]" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — TRUST / CLIENT INDEX (Scroll Reveal)
          ========================================================= */}
      <motion.section
        id="trust-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
        className="px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      >
        <div className="p-5 sm:p-7 rounded-3xl bg-white border border-[#EAEBF0] shadow-[0_2px_16px_rgba(7,21,47,0.02)] space-y-4 text-center">
          <span className="text-[11px] font-mono text-[#586885] uppercase tracking-wider block font-semibold">
            Trusted by businesses and founders
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-1">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-xs sm:text-sm font-bold text-[#07152F] font-syne">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
                <span>Virundhalayaa</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#586885] font-normal">• Cloud Kitchen</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-xs sm:text-sm font-bold text-[#07152F] font-syne">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
                <span>Nexovate</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#586885] font-normal">• Education</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-xs sm:text-sm font-bold text-[#07152F] font-syne">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
                <span>Billing Software</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#586885] font-normal">• Business SaaS</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-xs sm:text-sm font-bold text-[#07152F] font-syne">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
                <span>Small Design Works</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#586885] font-normal">• Branding / UI</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* =========================================================
          03 — SELECTED WORK (Desktop Interactive / Mobile & Tablet Marquee)
          ========================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-5 sm:space-y-7 w-full"
      >
        <div className="flex items-end justify-between gap-3">
          <div className="space-y-1 max-w-xl">
            <span className="font-mono text-[11px] sm:text-xs text-[#315BFF] uppercase tracking-widest font-semibold block">
              SELECTED WORK
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#07152F] font-syne tracking-tight">
              Selected work<span className="text-[#315BFF]">.</span>
            </h2>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-1 font-mono text-xs text-[#315BFF] hover:underline font-semibold"
          >
            <span>All work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Desktop Editorial Interactive Index + Live Visual Preview (lg: 1024px+) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Interactive Project Rows */}
          <div className="col-span-6 flex flex-col justify-center space-y-3">
            {PROJECTS.map((project, idx) => {
              const isActive = activeProjectIndex === idx;
              return (
                <div
                  key={project.id}
                  data-cursor="project"
                  data-cursor-text="VIEW"
                  onMouseEnter={() => setActiveProjectIndex(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#EEF2FF] border-[#315BFF]/40 shadow-xs translate-x-2'
                      : 'bg-white border-[#EAEBF0] hover:border-[#D0D5DD]'
                  }`}
                >
                  <Link to={project.slug} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#315BFF]">
                          {project.number}
                        </span>
                        <h3 className="text-2xl font-bold text-[#07152F] font-syne">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-xs font-mono text-[#586885] uppercase tracking-wider pl-7">
                        {project.category}
                      </p>
                    </div>

                    <div className={`p-3 rounded-full transition-all ${
                      isActive ? 'bg-[#315BFF] text-white' : 'bg-[#FAF9F6] text-[#586885]'
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-xs text-[#586885] pt-3 pl-7 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Project Image Viewport */}
          <div className="col-span-6 relative rounded-3xl overflow-hidden bg-white border border-[#EAEBF0] shadow-[0_16px_40px_rgba(7,21,47,0.06)] min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={PROJECTS[activeProjectIndex].id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
                className="absolute inset-0"
              >
                <img
                  src={PROJECTS[activeProjectIndex].heroImage}
                  alt={PROJECTS[activeProjectIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider block text-[#DCE6FF]">
                      {PROJECTS[activeProjectIndex].category}
                    </span>
                    <h4 className="text-xl font-bold font-syne">
                      {PROJECTS[activeProjectIndex].title}
                    </h4>
                  </div>

                  <Link
                    to={PROJECTS[activeProjectIndex].slug}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#07152F] text-xs font-mono font-semibold uppercase tracking-wider shadow-sm hover:bg-[#FAF9F6] transition-colors"
                  >
                    <span>View project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile & Tablet Continuous Infinite Marquee Rail (< 1024px) */}
        <div className="lg:hidden w-full overflow-hidden">
          <ContinuousMarqueeRail speedSeconds={38} cardWidthClass="w-[84vw] sm:w-[50vw] md:w-[42vw] max-w-[360px]">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="project-card p-5 rounded-3xl bg-white border border-[#EAEBF0] shadow-xs space-y-3.5 flex flex-col justify-between h-full transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="space-y-3">
                  <Link to={project.slug} className="block rounded-2xl overflow-hidden aspect-[16/10] bg-[#FAF9F6] border border-[#EAEBF0] relative">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      loading="lazy"
                      className="project-card-image w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full font-mono text-[10px] text-[#07152F] font-semibold">
                      {project.category}
                    </div>
                  </Link>

                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-[#315BFF] font-semibold block">
                      {project.number} // {project.category.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold text-[#07152F] font-syne">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#586885] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-[#F3F4F8] flex items-center justify-between">
                  <Link
                    to={project.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#315BFF]"
                  >
                    <span>View case study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </ContinuousMarqueeRail>
        </div>
      </motion.section>

      {/* =========================================================
          04 — SERVICES SECTION (Desktop Rows / Mobile & Tablet Marquee)
          ========================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-5 sm:space-y-7 w-full"
      >
        <div className="space-y-1 max-w-xl">
          <span className="font-mono text-[11px] sm:text-xs text-[#315BFF] uppercase tracking-widest font-semibold block">
            SERVICES
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#07152F] font-syne tracking-tight">
            What we do<span className="text-[#315BFF]">.</span>
          </h2>
        </div>

        {/* Desktop Large Typography Rows (lg: 1024px+) */}
        <div className="hidden lg:block space-y-3.5 w-full">
          {serviceRows.map((row) => (
            <Link
              key={row.number}
              to="/services"
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EAEBF0] hover:bg-[#EEF2FF] hover:border-[#315BFF]/30 transition-all duration-200 flex items-center justify-between gap-4 group cursor-pointer shadow-xs w-full"
            >
              <div className="flex items-center gap-8 lg:gap-10">
                <span className="font-mono text-base sm:text-lg font-extrabold text-[#315BFF] font-syne shrink-0">
                  {row.number}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#07152F] font-syne group-hover:text-[#315BFF] transition-colors shrink-0">
                  {row.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#586885] max-w-md leading-relaxed">
                  {row.desc}
                </p>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#315BFF] shrink-0">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile & Tablet Continuous Marquee Rail (< 1024px) */}
        <div className="lg:hidden w-full overflow-hidden">
          <ContinuousMarqueeRail speedSeconds={34} cardWidthClass="w-[82vw] sm:w-[48vw] md:w-[42vw] max-w-[340px]">
            {serviceRows.map((row) => (
              <Link
                key={row.number}
                to="/services"
                className="p-6 rounded-3xl bg-white border border-[#EAEBF0] flex flex-col justify-between space-y-4 shadow-xs h-full"
              >
                <div className="space-y-2">
                  <span className="font-mono text-base font-extrabold text-[#315BFF] font-syne block">
                    {row.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#07152F] font-syne">
                    {row.title}
                  </h3>
                  <p className="text-xs text-[#586885] leading-relaxed">
                    {row.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F3F4F8] flex items-center gap-1 font-mono text-xs font-semibold text-[#315BFF]">
                  <span>Explore service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </ContinuousMarqueeRail>
        </div>
      </motion.section>

      {/* =========================================================
          05 — ABOUT / STUDIO STATEMENT (Cinematic Atmosphere)
          ========================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      >
        <div className="relative rounded-3xl overflow-hidden min-h-[360px] sm:min-h-[460px] flex items-end p-6 sm:p-12 lg:p-14 border border-[#EAEBF0] shadow-lg">
          <img
            src="/images/studio/studio-statement.jpg"
            alt="DEED Studio Environment"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07152F]/95 via-[#07152F]/55 to-transparent" />

          <div className="relative z-10 max-w-2xl space-y-2.5 text-white">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono font-medium border border-white/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE DEED PRACTICE</span>
            </span>

            <h2
              className="font-extrabold text-white font-syne tracking-tight leading-tight"
              style={{ fontSize: 'clamp(1.65rem, 4.5vw, 3.25rem)' }}
            >
              We care about the details people notice. And the ones they don't<span className="text-[#315BFF]">.</span>
            </h2>

            <p className="text-xs sm:text-base text-[#DCE6FF] font-normal leading-relaxed">
              Design, technology and strategy working together without unnecessary complexity.
            </p>
          </div>
        </div>
      </motion.section>

      {/* =========================================================
          06 — PROPRIETARY PRODUCTS (BUILT IN-HOUSE)
          ========================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-5 sm:space-y-7 w-full"
      >
        <div className="space-y-1 max-w-xl">
          <span className="font-mono text-[11px] sm:text-xs text-[#315BFF] uppercase tracking-widest font-semibold block">
            BUILT IN-HOUSE
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#07152F] font-syne tracking-tight">
            Some ideas start with us<span className="text-[#315BFF]">.</span>
          </h2>
          <p className="text-xs sm:text-base text-[#586885]">
            DEED also experiments with its own digital products, tools and product concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 w-full">
          {/* Product 01: Identity */}
          <div className="p-5 sm:p-7 rounded-3xl bg-white border border-[#EAEBF0] shadow-xs space-y-4 flex flex-col justify-between w-full hover:border-[#D0D5DD] transition-colors">
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#FAF9F6] border border-[#EAEBF0]">
                <img
                  src={IDENTITY_PRODUCT.heroImage}
                  alt="Identity Product"
                  loading="lazy"
                  className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] text-[#315BFF] uppercase tracking-wider font-semibold block">
                  01 // PRODUCT INITIATIVE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#07152F] font-syne">
                  {IDENTITY_PRODUCT.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#586885] leading-relaxed">
                  "{IDENTITY_PRODUCT.tagline}" — {IDENTITY_PRODUCT.headline}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F3F4F8]">
              <Link
                to="/products/identity"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#315BFF] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#173BCE] transition-colors shadow-xs"
              >
                <span>Explore Identity</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Product 02: Billing Software */}
          <div className="p-5 sm:p-7 rounded-3xl bg-white border border-[#EAEBF0] shadow-xs space-y-4 flex flex-col justify-between w-full hover:border-[#D0D5DD] transition-colors">
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#FAF9F6] border border-[#EAEBF0]">
                <img
                  src="/images/work/billing-software-cover.jpg"
                  alt="Billing Software Engine"
                  loading="lazy"
                  className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] text-[#315BFF] uppercase tracking-wider font-semibold block">
                  02 // BUSINESS PLATFORM
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#07152F] font-syne">
                  Billing Software
                </h3>
                <p className="text-xs sm:text-sm text-[#586885] leading-relaxed">
                  A lightning-fast Point-of-Sale, invoicing, and real-time inventory engine engineered for modern merchants.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F3F4F8]">
              <Link
                to="/work/billing-software"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#315BFF] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#173BCE] transition-colors shadow-xs"
              >
                <span>View Software Scope</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* =========================================================
          07 — PROCESS (Desktop 4-col / Tablet 2-col / Mobile Marquee)
          ========================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-5 sm:space-y-7 w-full"
      >
        <div className="space-y-1 max-w-xl">
          <span className="font-mono text-[11px] sm:text-xs text-[#315BFF] uppercase tracking-widest font-semibold block">
            PROCESS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#07152F] font-syne tracking-tight">
            From first thought to final product<span className="text-[#315BFF]">.</span>
          </h2>
        </div>

        {/* Tablet & Desktop Grid (sm: 640px+, md: 768px+, lg: 1024px+) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EAEBF0] space-y-2.5 shadow-xs w-full hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="font-mono text-2xl font-black text-[#315BFF] font-syne">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#07152F] font-syne">{step.title}</h3>
              <p className="text-xs sm:text-sm text-[#586885] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Continuous Marquee Rail (< 640px) */}
        <div className="sm:hidden w-full overflow-hidden">
          <ContinuousMarqueeRail speedSeconds={30} cardWidthClass="w-[76vw] max-w-[280px]">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="p-5 rounded-3xl bg-white border border-[#EAEBF0] space-y-2 shadow-xs h-full"
              >
                <div className="font-mono text-xl font-black text-[#315BFF] font-syne">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-[#07152F] font-syne">{step.title}</h3>
                <p className="text-xs text-[#586885] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </ContinuousMarqueeRail>
        </div>
      </motion.section>

      {/* =========================================================
          08 — COMMERCIAL CTA
          ========================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      >
        <div className="p-8 sm:p-14 lg:p-18 rounded-3xl bg-[#315BFF] text-white text-center space-y-4 sm:space-y-5 relative overflow-hidden shadow-[0_20px_50px_rgba(49,91,255,0.35)] w-full">
          {/* Subtle light glow */}
          <div className="ambient-glow-pink -top-24 -left-24 opacity-25" />

          <div className="max-w-2xl mx-auto space-y-2 relative z-10">
            <h2
              className="font-extrabold text-white font-syne tracking-tight leading-[1.06]"
              style={{ fontSize: 'clamp(1.85rem, 5vw, 3.75rem)' }}
            >
              Have something worth making?
            </h2>

            <p className="text-xs sm:text-base text-[#DCE6FF] leading-relaxed font-normal">
              Let's talk about it.
            </p>
          </div>

          <div className="pt-2 flex justify-center relative z-10">
            <Button variant="white" size="lg" to="/contact" icon="up-right">
              Start a project
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
