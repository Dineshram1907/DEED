import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { IDENTITY_PRODUCT } from '../data/ownProduct';
import { Button } from '../components/common/Button';

export const ProductsPage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-20 pb-20 sm:pb-32 w-full max-w-full overflow-x-clip">
      {/* Visual Hero Scene (Chapter 04: Contemplative Technology & Products) */}
      <section className="px-3.5 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full mt-1 sm:mt-2">
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[460px] flex flex-col justify-between p-6 sm:p-12 lg:p-14 border border-[#EAEBF0] shadow-[0_8px_32px_rgba(7,21,47,0.04)]">
          {/* Background Scene Image */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/hero/deed-products-hero.jpg"
              alt="DEED Proprietary Products"
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
              <span>PROPRIETARY INITIATIVES</span>
            </div>

            <h1
              className="font-extrabold text-[#07152F] font-syne tracking-tight leading-[1.02]"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)' }}
            >
              We don't only build<br />
              for others<span className="text-[#315BFF]">.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#334155] leading-relaxed max-w-xl font-normal">
              DEED experiments with its own tools, architectures, and product initiatives — testing concepts in production before recommending them to clients.
            </p>
          </motion.div>

          <div className="relative z-10 pt-2" />
        </div>
      </section>

      {/* Featured Own Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 w-full">
        {/* Product 01 — Identity */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="rounded-3xl bg-white border border-[#EAEBF0] shadow-xs overflow-hidden w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Visual Half */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[380px] bg-[#FAF9F6]">
              <img
                src={IDENTITY_PRODUCT.heroImage}
                alt="Identity by DEED"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 font-mono text-[11px] text-[#07152F] bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#EAEBF0] font-semibold uppercase tracking-wider shadow-xs">
                {IDENTITY_PRODUCT.status}
              </div>
            </div>

            {/* Content Half */}
            <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5 bg-white">
              <div className="space-y-3">
                <div className="font-mono text-xs text-[#315BFF] uppercase tracking-widest font-semibold">
                  01 // PRODUCT INITIATIVE
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] font-syne tracking-tight">
                  {IDENTITY_PRODUCT.title}
                </h2>

                <p className="text-sm sm:text-base font-semibold text-[#07152F]">
                  "{IDENTITY_PRODUCT.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-[#586885] leading-relaxed">
                  {IDENTITY_PRODUCT.headline}
                </p>
              </div>

              <div className="space-y-3.5 pt-3.5 border-t border-[#F3F4F8]">
                <div className="space-y-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#586885] block font-semibold">
                    KEY CAPABILITIES
                  </span>
                  <div className="space-y-2.5">
                    {IDENTITY_PRODUCT.coreExperience.slice(0, 3).map((item) => (
                      <div key={item.title} className="flex items-start gap-2.5 text-xs text-[#07152F]">
                        <CheckCircle2 className="w-4 h-4 text-[#315BFF] shrink-0 mt-0.5" />
                        <div className="min-w-0 flex-1">
                          <span className="font-bold block sm:inline sm:mr-1.5">{item.title}:</span>
                          <span className="text-[#586885] leading-relaxed">{item.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1">
                  <Button variant="primary" size="md" to="/products/identity">
                    Explore Identity
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product 02 — Billing Software */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="rounded-3xl bg-white border border-[#EAEBF0] shadow-xs overflow-hidden w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Visual Half */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[380px] bg-[#FAF9F6]">
              <img
                src="/images/work/billing-software-cover.jpg"
                alt="Billing Software by DEED"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 font-mono text-[11px] text-[#07152F] bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#EAEBF0] font-semibold uppercase tracking-wider shadow-xs">
                IN ACTIVE DEVELOPMENT
              </div>
            </div>

            {/* Content Half */}
            <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5 bg-white">
              <div className="space-y-3">
                <div className="font-mono text-xs text-[#315BFF] uppercase tracking-widest font-semibold">
                  02 // BUSINESS PLATFORM
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152F] font-syne tracking-tight">
                  Billing Software
                </h2>

                <p className="text-sm sm:text-base font-semibold text-[#07152F]">
                  "Sub-second POS, Invoicing & Inventory Engine."
                </p>

                <p className="text-xs sm:text-sm text-[#586885] leading-relaxed">
                  Engineered to replace slow legacy billing desktop software with a keyboard-first, offline-capable reactive POS web architecture.
                </p>
              </div>

              <div className="space-y-3.5 pt-3.5 border-t border-[#F3F4F8]">
                <div className="space-y-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#586885] block font-semibold">
                    KEY CAPABILITIES
                  </span>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5 text-xs text-[#07152F]">
                      <CheckCircle2 className="w-4 h-4 text-[#315BFF] shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <span className="font-bold block sm:inline sm:mr-1.5">Keyboard-First:</span>
                        <span className="text-[#586885] leading-relaxed">Zero-mouse sub-second checkout</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[#07152F]">
                      <CheckCircle2 className="w-4 h-4 text-[#315BFF] shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <span className="font-bold block sm:inline sm:mr-1.5">Instant Receipts:</span>
                        <span className="text-[#586885] leading-relaxed">Automated GST tax & thermal print</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[#07152F]">
                      <CheckCircle2 className="w-4 h-4 text-[#315BFF] shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <span className="font-bold block sm:inline sm:mr-1.5">Real-time Stock:</span>
                        <span className="text-[#586885] leading-relaxed">Offline-first inventory sync</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-1">
                  <Button variant="primary" size="md" to="/work/billing-software">
                    View Software Scope
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Internal Product Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#EAEBF0] shadow-xs space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs text-[#315BFF] uppercase tracking-widest font-semibold block">
              OUR LABS MANDATE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07152F] font-syne">
              Why We Build Internal Products
            </h3>
            <p className="text-xs sm:text-sm text-[#586885] leading-relaxed">
              Engineering our own software keeps our technical capabilities sharp. Everything we learn from shipping internal tools feeds directly into how we design and engineer client platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#F3F4F8]">
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-[#07152F] font-syne">01 / Real-World Validation</h4>
              <p className="text-xs text-[#586885] leading-relaxed">
                We test software architecture, deployment setups, and usability patterns on our own products before recommending them to clients.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-[#07152F] font-syne">02 / Deep Ownership</h4>
              <p className="text-xs text-[#586885] leading-relaxed">
                We understand the product lifecycle from initial vision and system design to long-term code maintenance.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-[#07152F] font-syne">03 / Continuous Iteration</h4>
              <p className="text-xs text-[#586885] leading-relaxed">
                No stagnant templates. We continuously refine component design systems and state management in production environments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
