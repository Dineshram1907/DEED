import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E6E4DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Studio Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 text-2xl lg:text-3xl font-extrabold tracking-tighter text-[#121212] select-none"
          >
            <span className="font-syne tracking-tight">DEED</span>
            <span className="w-2 h-2 rounded-full bg-[#FA3800] group-hover:scale-150 transition-transform duration-300" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#4A4946] hover:text-[#121212] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FA3800] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="group relative inline-flex items-center justify-center flex-nowrap whitespace-nowrap gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#121212] text-[#FAF9F6] hover:bg-[#FA3800] hover:text-white transition-all duration-300 shadow-sm active:scale-95 cursor-pointer min-h-[44px] max-w-full overflow-hidden"
            >
              <span className="whitespace-nowrap truncate">Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-3 rounded-full bg-[#F2F0EB] text-[#121212] hover:bg-[#FA3800] hover:text-white transition-colors duration-300 focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenInquiry={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            links={navLinks}
          />
        )}
      </AnimatePresence>
    </>
  );
};
