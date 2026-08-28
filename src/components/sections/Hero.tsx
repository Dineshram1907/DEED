import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../common/Button';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();

  // Defensive video play initialization
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Poster image remains visible smoothly fallback
        });
      }
    }
  }, []);

  // Subtle scroll motion
  const textY = useTransform(scrollY, [0, 400], [0, -15]);
  const textOpacity = useTransform(scrollY, [0, 350], [1, 0.95]);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] pt-20 sm:pt-24 lg:pt-28 pb-10 lg:pb-14 flex flex-col justify-between overflow-hidden bg-[#FAF9F6]">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#E6E4DF_1px,transparent_1px),linear-gradient(to_bottom,#E6E4DF_1px,transparent_1px)] bg-[size:2.25rem_2.25rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 flex-grow flex flex-col justify-between">
        {/* Top Micro Metadata Label (Sitting close to navbar) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex items-center gap-2.5 font-mono text-xs text-[#666562] mb-3 sm:mb-4 shrink-0"
        >
          <span className="w-2 h-2 rounded-full bg-[#FA3800] animate-pulse shrink-0" />
          <span className="text-[#121212] font-semibold tracking-widest uppercase">DEED STUDIO</span>
          <span>— INDEPENDENT CREATIVE TECHNOLOGY PRACTICE</span>
        </motion.div>

        {/* Master Hero Poster Composition (Fits in Viewport 1 at 1440x900) */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const }}
          className="my-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Primary Typography & Action Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              {/* Primary Headline & Orange Counterpoint Block */}
              <div className="space-y-0.5 sm:space-y-1">
                <h1
                  className="font-extrabold tracking-tighter leading-[0.92] text-[#121212] font-syne select-none"
                  style={{ fontSize: 'clamp(2.5rem, 6.75vw, 6.25rem)' }}
                >
                  <span className="block">WE DESIGN</span>
                  <span className="block">AND BUILD</span>
                </h1>

                <div
                  className="font-serif-editorial text-[#FA3800] font-normal tracking-normal italic leading-[0.95] pl-1 sm:pl-4"
                  style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
                >
                  what comes next.
                </div>
              </div>

              {/* Connected Supporting Description & Dual CTAs */}
              <p className="text-sm sm:text-base lg:text-lg text-[#4A4946] font-sans font-medium leading-relaxed max-w-xl">
                DEED is an independent design and development studio creating brands, websites and digital products for ambitious businesses.
              </p>

              {/* Viewport 1 Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full max-w-md">
                <Button variant="primary" size="lg" onClick={onOpenInquiry} className="w-full sm:w-auto">
                  Start a Project
                </Button>
                <Button variant="secondary" size="lg" icon="down" onClick={scrollToWork} className="w-full sm:w-auto">
                  View Selected Work
                </Button>
              </div>
            </div>

            {/* Desktop-Only Contained Hero Visual (hidden on mobile/tablet to preserve hierarchy) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#111110] border border-[#E6E4DF]/80 shadow-2xl ml-auto group">
                {/* Contained DEED Digital Hero Visual */}
                <img
                  src="/images/hero/deed-digital-hero.jpg"
                  alt="DEED Digital System & Editorial Hero Visual"
                  loading="eager"
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover object-right opacity-95 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Ambient Subtle Edge Vignette */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#111110]/80 via-transparent to-[#FAF9F6]/10 opacity-50 pointer-events-none" />
                
                {/* Precision Tech Metadata Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-[10px] uppercase tracking-widest bg-[#111110]/85 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 shadow-lg">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FA3800]" />
                    01 // DIGITAL SYSTEM
                  </span>
                  <span className="text-[#FA3800] font-semibold">DEED LABS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transition into Real Work Showcase */}
        <div className="mt-8 sm:mt-12 pt-4 border-t border-[#E6E4DF] shrink-0">
          {/* Section Transition Label */}
          <div className="flex items-center justify-between font-mono text-xs text-[#666562] mb-3">
            <span className="text-[#FA3800] font-semibold tracking-wider uppercase">
              SELECTED WORK — 01 / VIRUNDHAALAYA
            </span>
            <span className="hidden sm:inline">2025 • BRAND / WEB / EXPERIENCE</span>
          </div>

          {/* Real Virundhaalaya Feature Canvas */}
          <div className="relative group rounded-2xl overflow-hidden bg-[#111110] aspect-[16/9] sm:aspect-[24/9] border border-[#E6E4DF] shadow-xl">
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/work/virundhaalaya/hero.webp" />
              <source media="(max-width: 1024px)" srcSet="/images/work/virundhaalaya/secondary.webp" />
              <img
                src="/images/work/virundhaalaya/hero.webp"
                alt="Virundhaalaya Digital Experience"
                loading="eager"
                width={1600}
                height={900}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </picture>

            <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[#FAF9F6]">
              <div>
                <span className="font-mono text-xs text-[#FA3800] uppercase tracking-widest font-semibold">
                  FEATURED CLIENT EXPERIENCE
                </span>
                <h3 className="text-base sm:text-xl font-bold font-syne mt-0.5">VIRUNDHAALAYA — Culinary Experience & Brand</h3>
              </div>
              <button
                onClick={scrollToWork}
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#FA3800] transition-colors shrink-0 cursor-pointer"
                aria-label="View Virundhaalaya"
              >
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
