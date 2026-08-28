import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Web Design & Engineering',
    budget: '$3k - $5k',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 sm:space-y-20 pb-20 sm:pb-32 w-full max-w-full overflow-x-clip">
      {/* Visual Hero Scene (Chapter 06: Welcoming Atmospheric Interior) */}
      <section className="px-3.5 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full mt-1 sm:mt-2">
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[460px] flex flex-col justify-between p-6 sm:p-12 lg:p-14 border border-[#EAEBF0] shadow-[0_8px_32px_rgba(7,21,47,0.04)]">
          {/* Background Scene Image */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/hero/deed-contact-hero.jpg"
              alt="DEED Contact Atmosphere"
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
              <span>START A CONVERSATION</span>
            </div>

            <h1
              className="font-extrabold text-[#07152F] font-syne tracking-tight leading-[1.02]"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)' }}
            >
              Let's make something<br />
              remarkable<span className="text-[#315BFF]">.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#334155] leading-relaxed max-w-xl font-normal">
              Whether you are launching a new brand, redesigning a digital product, or engineering custom software — we are ready.
            </p>
          </motion.div>

          <div className="relative z-10 pt-2" />
        </div>
      </section>

      {/* Main Interactive Contact Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EAEBF0] shadow-xs space-y-5">
              <span className="font-mono text-xs text-[#315BFF] uppercase tracking-widest font-semibold block">
                DIRECT INQUIRIES
              </span>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#586885] uppercase tracking-wider block font-semibold">
                    EMAIL
                  </span>
                  <a
                    href="mailto:deed.technologia@gmail.com"
                    className="text-sm sm:text-base font-bold text-[#07152F] hover:text-[#315BFF] transition-colors break-all"
                    style={{ overflowWrap: 'anywhere' }}
                  >
                    deed.technologia@gmail.com
                  </a>
                </div>

                <div className="space-y-1 pt-3 border-t border-[#F3F4F8]">
                  <span className="text-[11px] font-mono text-[#586885] uppercase tracking-wider block font-semibold">
                    STUDIO LOCATION
                  </span>
                  <p className="text-sm font-bold text-[#07152F]">
                    India • Working Globally
                  </p>
                </div>

                <div className="space-y-1 pt-3 border-t border-[#F3F4F8]">
                  <span className="text-[11px] font-mono text-[#586885] uppercase tracking-wider block font-semibold">
                    RESPONSE TIME
                  </span>
                  <p className="text-sm text-[#586885]">
                    Within 24 business hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-[#EAEBF0] space-y-3">
              <span className="font-mono text-xs text-[#07152F] font-bold uppercase tracking-wider block">
                WHAT HAPPENS NEXT?
              </span>
              <ol className="space-y-2 text-xs sm:text-sm text-[#586885]">
                <li>1. We review your project requirements and scope.</li>
                <li>2. We schedule a 20-minute discovery call to align.</li>
                <li>3. We deliver a clear proposal with timeline and roadmap.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#EAEBF0] shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#315BFF]/10 text-[#315BFF] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#07152F] font-syne">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#586885] max-w-sm mx-auto">
                    Thank you for reaching out. We will review your project details and get in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-[#07152F] uppercase tracking-wider block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border border-[#EAEBF0] text-sm text-[#07152F] focus:outline-none focus:border-[#315BFF] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-[#07152F] uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border border-[#EAEBF0] text-sm text-[#07152F] focus:outline-none focus:border-[#315BFF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-[#07152F] uppercase tracking-wider block">
                        Primary Service
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border border-[#EAEBF0] text-sm text-[#07152F] focus:outline-none focus:border-[#315BFF] transition-colors"
                      >
                        <option>Brand Identity & Strategy</option>
                        <option>Web Design & Engineering</option>
                        <option>UI / UX Product Design</option>
                        <option>Custom Technology Systems</option>
                        <option>Proprietary Product Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-[#07152F] uppercase tracking-wider block">
                        Estimated Budget
                      </label>
                      <select
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border border-[#EAEBF0] text-sm text-[#07152F] focus:outline-none focus:border-[#315BFF] transition-colors"
                      >
                        <option>&lt; $3,000</option>
                        <option>$3,000 - $5,000</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-[#07152F] uppercase tracking-wider block">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about what you want to build, current challenges, and desired launch timeline..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border border-[#EAEBF0] text-sm text-[#07152F] focus:outline-none focus:border-[#315BFF] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-[#315BFF] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#173BCE] transition-colors shadow-xs active:scale-95 cursor-pointer"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
