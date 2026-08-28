import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Desktop Navigation links:
  // On Home: Work, Services, Products, About
  // On Non-Home: Home, Work, Services, Products, About
  const desktopNavLinks = isHomePage
    ? [
        { label: 'Work', path: '/work' },
        { label: 'Services', path: '/services' },
        { label: 'Products', path: '/products' },
        { label: 'About', path: '/about' }
      ]
    : [
        { label: 'Home', path: '/' },
        { label: 'Work', path: '/work' },
        { label: 'Services', path: '/services' },
        { label: 'Products', path: '/products' },
        { label: 'About', path: '/about' }
      ];

  // Full Navigation List for Fullscreen Drawer (Mobile & Tablet)
  const fullMenuItems = [
    { label: 'Home', path: '/', number: '00' },
    { label: 'Work', path: '/work', number: '01' },
    { label: 'Services', path: '/services', number: '02' },
    { label: 'Products', path: '/products', number: '03' },
    { label: 'About', path: '/about', number: '04' },
    { label: 'Contact', path: '/contact', number: '05' }
  ];

  // Lock background body scroll when menu is open
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



  return (
    <>
      {/* =========================================================
          CLOSED NAVBAR (Sticky Top Bar, hidden when menu is open)
          ========================================================= */}
      {!isOpen && (
        <header className="sticky top-0 z-50 w-full pt-3 sm:pt-5 pb-2 px-3 sm:px-6 lg:px-8 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
            className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto"
          >
            {/* Floating Rounded Capsule Container */}
            <div className="w-full flex items-center justify-between bg-white/90 backdrop-blur-xl border border-[#EAEBF0] rounded-full px-4 sm:px-6 min-[1050px]:px-7 py-2.5 sm:py-3 shadow-[0_4px_20px_rgba(7,21,47,0.03)] transition-shadow hover:shadow-[0_6px_24px_rgba(7,21,47,0.05)]">
              {/* Brand Logo: DEED with breathing blue dot */}
              <Link
                to="/"
                className="group flex items-center gap-1.5 text-2xl font-black tracking-tighter text-[#07152F] select-none font-syne shrink-0"
              >
                <span>DEED</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#315BFF] deed-dot-pulse shrink-0" />
              </Link>

              {/* Desktop Centered Links (Visible only on ≥ 1050px) */}
              <nav className="hidden min-[1050px]:flex items-center gap-6 xl:gap-8">
                {desktopNavLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `text-sm font-medium tracking-tight transition-colors py-1 relative ${
                        isActive
                          ? 'text-[#07152F] font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#315BFF]'
                          : 'text-[#586885] hover:text-[#07152F]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Desktop Action CTA (Visible only on ≥ 1050px) */}
              <div className="hidden min-[1050px]:flex items-center gap-3">
                <Link
                  to="/contact"
                  onClick={onOpenInquiry}
                  className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#315BFF] text-white hover:bg-[#173BCE] transition-all duration-200 shadow-xs hover:shadow-sm active:scale-95 cursor-pointer min-h-[36px]"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Mobile & Tablet Hamburger Button (< 1050px) */}
              <button
                onClick={() => setIsOpen(true)}
                className="min-[1050px]:hidden relative z-10 w-11 h-11 rounded-full bg-[#F7F7F3] text-[#07152F] border border-[#EAEBF0] hover:bg-[#FAF9F6] transition-colors focus:outline-none flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                aria-label="Open Navigation Menu"
              >
                <div className="w-5 h-3.5 flex flex-col justify-between items-center pointer-events-none">
                  <span className="w-full h-[1.75px] bg-[#07152F] rounded-full transition-transform duration-300" />
                  <span className="w-full h-[1.75px] bg-[#07152F] rounded-full transition-transform duration-300" />
                  <span className="w-full h-[1.75px] bg-[#07152F] rounded-full transition-transform duration-300" />
                </div>
              </button>
            </div>
          </motion.div>
        </header>
      )}

      {/* =========================================================
          OPEN FULLSCREEN NAVIGATION OVERLAY (Mobile & Tablet)
          ========================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-[9999] bg-[#F7F7F3] flex flex-col justify-between p-5 sm:p-8 lg:p-12 overflow-y-auto max-w-full"
          >
            {/* Subtle Atmospheric Masked Background Visual */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-15">
              <img
                src="/images/hero/deed-dreamy-sky-moon.jpg"
                alt="Atmosphere"
                className="w-full h-full object-cover filter blur-[28px]"
              />
              <div className="ambient-glow-blue top-10 -right-20 opacity-50" />
              <div className="ambient-glow-pink bottom-10 -left-20 opacity-50" />
              <div className="absolute inset-0 bg-[#F7F7F3]/70 backdrop-blur-lg" />
            </div>

            {/* Top Header Row (Exactly ONE DEED logo + Close Button) */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#EAEBF0] pb-4 max-w-4xl mx-auto w-full">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-1.5 text-2xl font-black tracking-tighter text-[#07152F] select-none font-syne"
              >
                <span>DEED</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#315BFF] deed-dot-pulse" />
              </Link>

              {/* Animated Morphing Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-11 h-11 rounded-full bg-white text-[#07152F] border border-[#EAEBF0] hover:bg-[#FAF9F6] transition-colors focus:outline-none cursor-pointer shadow-xs active:scale-95 flex items-center justify-center"
                aria-label="Close Navigation Menu"
              >
                <div className="relative w-5 h-5 flex items-center justify-center pointer-events-none">
                  <span className="absolute w-5 h-[1.75px] bg-[#07152F] rounded-full rotate-45" />
                  <span className="absolute w-5 h-[1.75px] bg-[#07152F] rounded-full -rotate-45" />
                </div>
              </button>
            </div>

            {/* Center Navigation List */}
            <nav className="relative z-10 py-6 sm:py-8 space-y-3 max-w-4xl mx-auto w-full">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="text-[11px] font-mono text-[#586885] uppercase tracking-widest block font-semibold pl-2"
              >
                NAVIGATION
              </motion.span>

              <div className="space-y-2 sm:space-y-2.5">
                {fullMenuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 + 0.12, duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between p-3.5 sm:p-4 lg:p-5 rounded-2xl transition-all ${
                          isActive
                            ? 'bg-[#315BFF] text-white font-bold shadow-xs'
                            : 'text-[#07152F] hover:bg-white/80 font-semibold'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-syne tracking-tight">
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
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="relative z-10 pt-4 border-t border-[#EAEBF0] space-y-3.5 max-w-4xl mx-auto w-full"
            >
              <NavLink
                to="/contact"
                onClick={() => {
                  setIsOpen(false);
                  if (onOpenInquiry) onOpenInquiry();
                }}
                className="w-full py-4 px-6 rounded-full bg-[#315BFF] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#173BCE] transition-colors shadow-xs active:scale-95"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
