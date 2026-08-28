import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, ArrowUpRight, Mail } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenInquiry
}) => {
  // Lock background scrolling while mobile/tablet menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const menuItems = [
    { label: 'Home', path: '/', number: '00' },
    { label: 'Work', path: '/work', number: '01' },
    { label: 'Services', path: '/services', number: '02' },
    { label: 'Products', path: '/products', number: '03' },
    { label: 'About', path: '/about', number: '04' },
    { label: 'Contact', path: '/contact', number: '05' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[100] bg-[#F7F7F3] flex flex-col justify-between p-5 sm:p-8 lg:p-12 overflow-y-auto max-w-full relative"
    >
      {/* Subtle Atmospheric Sky Background with Low Opacity & Gradient Mask */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <img
          src="/images/hero/deed-dreamy-sky-moon.jpg"
          alt="Atmosphere"
          className="w-full h-full object-cover filter blur-[24px]"
        />
        <div className="ambient-glow-blue top-10 -right-20 opacity-40" />
        <div className="ambient-glow-pink bottom-10 -left-20 opacity-40" />
        <div className="absolute inset-0 bg-[#F7F7F3]/70 backdrop-blur-md" />
      </div>

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#EAEBF0] pb-4 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-1.5 text-2xl font-black text-[#07152F] font-syne">
          <span>DEED</span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#315BFF] deed-dot-pulse" />
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white text-[#07152F] border border-[#EAEBF0] hover:bg-[#FAF9F6] transition-colors focus:outline-none cursor-pointer shadow-xs active:scale-95"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 text-[#07152F]" />
        </button>
      </div>

      {/* Center Navigation List */}
      <nav className="relative z-10 py-6 space-y-3 max-w-4xl mx-auto w-full">
        <span className="text-[11px] font-mono text-[#586885] uppercase tracking-widest block font-semibold pl-2">
          NAVIGATION
        </span>

        <div className="space-y-1.5 sm:space-y-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 + 0.05, duration: 0.25 }}
            >
              <NavLink
                to={item.path}
                end={item.path === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between p-3.5 sm:p-4 rounded-2xl transition-all ${
                    isActive
                      ? 'bg-[#315BFF] text-white font-bold shadow-xs'
                      : 'text-[#07152F] hover:bg-white/80 font-semibold'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-2xl sm:text-3xl font-extrabold font-syne tracking-tight">
                      {item.label}
                    </span>
                    <span
                      className={`font-mono text-xs sm:text-sm font-semibold ${
                        isActive ? 'text-[#DCE6FF]' : 'text-[#586885]'
                      }`}
                    >
                      {item.number}
                    </span>
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </div>
      </nav>

      {/* Bottom Action Strip */}
      <div className="relative z-10 pt-4 border-t border-[#EAEBF0] space-y-3 max-w-4xl mx-auto w-full">
        <NavLink
          to="/contact"
          onClick={() => {
            onClose();
            if (onOpenInquiry) onOpenInquiry();
          }}
          className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#315BFF] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#173BCE] transition-colors shadow-xs active:scale-95"
        >
          <span>Start a project</span>
          <ArrowUpRight className="w-4 h-4" />
        </NavLink>

        <div className="flex items-center justify-between text-xs font-mono text-[#586885] pt-1 px-2">
          <div className="flex items-center gap-2 truncate">
            <Mail className="w-3.5 h-3.5 text-[#315BFF] shrink-0" />
            <span className="truncate">deed.technologia@gmail.com</span>
          </div>
          <span className="shrink-0 font-semibold">INDIA</span>
        </div>
      </div>
    </motion.div>
  );
};
