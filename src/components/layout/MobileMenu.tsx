import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
  links: { label: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
  links
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const containerVariants = {
    closed: { opacity: 0, y: '-100%' },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="closed"
      animate="open"
      exit="exit"
      className="fixed inset-0 z-40 bg-[#111110] text-[#FAF9F6] pt-24 px-6 pb-10 flex flex-col justify-between md:hidden overflow-y-auto"
    >
      <div className="flex flex-col gap-4">
        <span className="font-mono text-xs text-[#FA3800] uppercase tracking-widest">
          MENU — DEED STUDIO
        </span>

        <nav className="flex flex-col gap-3 mt-2">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              variants={itemVariants}
              href={link.href}
              onClick={onClose}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAF9F6] hover:text-[#FA3800] transition-colors flex items-center justify-between py-3 border-b border-[#262624] min-h-[52px]"
            >
              <span>{link.label}</span>
              <span className="font-mono text-xs text-[#666562]">0{index + 1}</span>
            </motion.a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-5 mt-8 pt-6 border-t border-[#262624]">
        <motion.button
          variants={itemVariants}
          onClick={onOpenInquiry}
          className="w-full py-4 rounded-full bg-[#FA3800] text-white font-semibold text-sm uppercase tracking-wider flex items-center justify-center flex-nowrap whitespace-nowrap gap-2 active:scale-95 transition-transform min-h-[48px] cursor-pointer max-w-full overflow-hidden"
        >
          <span className="whitespace-nowrap truncate">Start a Project</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </motion.button>

        <motion.div variants={itemVariants} className="flex flex-col gap-2 text-xs text-[#A09E98]">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#FA3800]" />
            <a href="mailto:deed.technologia@gmail.com" className="hover:underline text-[#FAF9F6]">
              deed.technologia@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#FA3800]" />
            <span>Digital Studio • Remote</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
