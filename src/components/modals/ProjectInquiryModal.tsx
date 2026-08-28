import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import type { ProjectInquiryData } from '../../types';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BUDGET_OPTIONS = [
  'Under ₹25K',
  '₹25K – ₹50K',
  '₹50K – ₹1L',
  '₹1L+'
];

const TIMELINE_OPTIONS = [
  'ASAP',
  '1–2 weeks',
  '2–4 weeks',
  '1–2 months',
  'Flexible'
];

const SERVICE_OPTIONS = [
  'Brand Identity',
  'Web Design',
  'Web Development',
  'UI/UX Architecture',
  'Digital Products',
  'Design Systems'
];

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<ProjectInquiryData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: [],
    budget: '₹25K – ₹50K',
    timeline: '2–4 weeks',
    projectOverview: '',
    botcheck: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== service) };
      }
      return { ...prev, services: [...prev.services, service] };
    });
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name.trim() || !formData.email.trim()) {
        setErrorMessage('Please provide your name and email to proceed.');
        return;
      }
      setErrorMessage('');
      setStep(2);
    } else if (step === 2) {
      if (formData.services.length === 0) {
        setErrorMessage('Please select at least one service capabilities area.');
        return;
      }
      setErrorMessage('');
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectOverview.trim()) {
      setErrorMessage('Please share a brief description of what you wish to build.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
      } else {
        throw new Error(result.error || 'Failed to submit inquiry');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Transmission failed. Please try again or email deed.technologia@gmail.com directly.');
    }
  };

  const resetAndClose = () => {
    setStatus('idle');
    setStep(1);
    setErrorMessage('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] overflow-y-auto bg-[#111110]/95 backdrop-blur-xl flex flex-col justify-between text-[#FAF9F6] p-5 sm:p-8 lg:p-12">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between max-w-5xl mx-auto w-full pb-6 border-b border-[#262624]">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FA3800] uppercase tracking-widest font-semibold">
            <span>DEED PROJECT KICKOFF</span>
            <span className="text-[#666562] font-normal">• STEP 0{step} OF 03</span>
          </div>

          <button
            onClick={resetAndClose}
            className="w-10 h-10 rounded-full bg-[#181816] hover:bg-[#FA3800] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Form */}
        <div className="max-w-3xl mx-auto w-full py-8 sm:py-12 flex-grow flex flex-col justify-center">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#FA3800]/20 text-[#FA3800] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold font-syne text-white">
                PROJECT KICKOFF RECEIVED
              </h3>
              <p className="text-base text-[#A09E98] max-w-md mx-auto leading-relaxed">
                Thank you. We'll review your project requirements and respond within 24 hours to schedule a kickoff call.
              </p>
              <button
                onClick={resetAndClose}
                className="px-8 py-4 rounded-full bg-[#FA3800] text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#111110] transition-colors"
              >
                Return to DEED Studio
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* STEP 01: Contact Information */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#FA3800] uppercase tracking-widest block mb-2">
                      01 / CONTACT INFORMATION
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold font-syne text-white">
                      Tell us who you are.
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-[#A09E98] uppercase tracking-wider mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-[#181816] border border-[#262624] text-white placeholder-[#666562] focus:border-[#FA3800] focus:outline-none text-sm font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A09E98] uppercase tracking-wider mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-[#181816] border border-[#262624] text-white placeholder-[#666562] focus:border-[#FA3800] focus:outline-none text-sm font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A09E98] uppercase tracking-wider mb-2">
                        COMPANY / ORGANISATION
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Tech"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-[#181816] border border-[#262624] text-white placeholder-[#666562] focus:border-[#FA3800] focus:outline-none text-sm font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A09E98] uppercase tracking-wider mb-2">
                        PHONE / WHATSAPP (OPTIONAL)
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-[#181816] border border-[#262624] text-white placeholder-[#666562] focus:border-[#FA3800] focus:outline-none text-sm font-sans"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 02: Services & Budget */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#FA3800] uppercase tracking-widest block mb-2">
                      02 / CAPABILITIES & BUDGET
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold font-syne text-white">
                      What do you need?
                    </h2>
                  </div>

                  {/* Services Selection */}
                  <div className="space-y-3">
                    <label className="block text-xs font-mono text-[#A09E98] uppercase tracking-wider">
                      SELECT REQUIRED SERVICES *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {SERVICE_OPTIONS.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`p-3.5 rounded-xl border text-xs font-semibold tracking-wider text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#FA3800] border-[#FA3800] text-white'
                                : 'bg-[#181816] border-[#262624] text-[#A09E98] hover:border-white'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Options */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-xs font-mono text-[#A09E98] uppercase tracking-wider">
                      ESTIMATED BUDGET RANGE
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {BUDGET_OPTIONS.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget })}
                          className={`p-3.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                            formData.budget === budget
                              ? 'bg-white border-white text-[#111110]'
                              : 'bg-[#181816] border-[#262624] text-[#A09E98] hover:border-white'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 03: Overview & Timeline */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#FA3800] uppercase tracking-widest block mb-2">
                      03 / TIMELINE & PROJECT OVERVIEW
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold font-syne text-white">
                      Let's talk about the idea.
                    </h2>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-3">
                    <label className="block text-xs font-mono text-[#A09E98] uppercase tracking-wider">
                      TARGET TIMELINE
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                      {TIMELINE_OPTIONS.map((timeline) => (
                        <button
                          key={timeline}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline })}
                          className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                            formData.timeline === timeline
                              ? 'bg-white border-white text-[#111110]'
                              : 'bg-[#181816] border-[#262624] text-[#A09E98] hover:border-white'
                          }`}
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-[#A09E98] uppercase tracking-wider">
                      PROJECT OVERVIEW *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share details about what you want to build, key objectives, and any reference URLs..."
                      value={formData.projectOverview}
                      onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-[#181816] border border-[#262624] text-white placeholder-[#666562] focus:border-[#FA3800] focus:outline-none text-sm font-sans"
                    />
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="p-4 rounded-xl bg-[#FA3800]/10 border border-[#FA3800]/30 text-[#FA3800] text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Modal Navigation Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-[#262624]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((step - 1) as 1 | 2)}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#A09E98] hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous Step</span>
                  </button>
                ) : <div />}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#FA3800] text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#111110] transition-all cursor-pointer shadow-md"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FA3800] text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#111110] transition-all disabled:opacity-50 cursor-pointer shadow-md"
                  >
                    {status === 'submitting' ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SEND ENQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Modal Bottom Contact Note */}
        <div className="max-w-5xl mx-auto w-full pt-4 border-t border-[#262624] font-mono text-[11px] text-[#666562] flex items-center justify-between">
          <span>DIRECT STUDIO EMAIL: deed.technologia@gmail.com</span>
          <span className="hidden sm:inline">RESPONSE TIME: &lt; 24 HOURS</span>
        </div>
      </div>
    </AnimatePresence>
  );
};
