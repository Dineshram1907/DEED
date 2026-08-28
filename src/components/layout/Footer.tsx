import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '../common/Button';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setIstTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#111110] text-[#FAF9F6] border-t border-[#262624] pt-16 sm:pt-28 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-16">
        {/* Peak 05 — Final Closing Scene Statement */}
        <div className="border-b border-[#262624] pb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#FA3800] uppercase tracking-widest font-semibold block">
              FINAL FRAME
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-syne tracking-tight leading-tight">
              YOUR NEXT GOOD IDEA <br />
              <span className="font-serif-editorial text-[#FA3800] font-normal italic">starts here.</span>
            </h2>
          </div>

          <div>
            <Button variant="primary" size="lg" onClick={onOpenInquiry}>
              Start a Project
            </Button>
          </div>
        </div>

        {/* Footer Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: Studio Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-2xl font-extrabold tracking-tighter text-white font-syne">
              <span>DEED</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FA3800]" />
            </div>

            <p className="text-sm text-[#A09E98] font-sans max-w-sm leading-relaxed">
              An independent design and development studio creating brands, websites and digital products for ambitious businesses.
            </p>

            <div className="font-mono text-xs text-[#666562] pt-2">
              <span>STUDIO LOCATION: </span>
              <span className="text-white font-sans font-medium">INDIA • GLOBAL PRACTICE</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-sans text-xs font-medium">
            <span className="font-mono text-[#FA3800] uppercase tracking-wider block font-semibold mb-1">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-[#A09E98]">
              <li><a href="#work" className="hover:text-white transition-colors">01 / SELECTED WORK</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">02 / SERVICES</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">03 / ABOUT DEED</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">04 / PROCESS</a></li>
              <li><a href="#identity" className="hover:text-white transition-colors">05 / IDENTITY (OUR PRODUCT)</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & IST Time */}
          <div className="md:col-span-4 space-y-4 font-sans text-xs font-medium">
            <span className="font-mono text-[#FA3800] uppercase tracking-wider block font-semibold">
              DIRECT INQUIRIES
            </span>

            <a
              href="mailto:deed.technologia@gmail.com"
              className="text-xs sm:text-sm text-white hover:text-[#FA3800] transition-colors inline-flex items-center gap-2 font-sans font-semibold whitespace-nowrap overflow-hidden max-w-full"
            >
              <Mail className="w-4 h-4 text-[#FA3800] shrink-0" />
              <span className="whitespace-nowrap">deed.technologia@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 text-[#FA3800] shrink-0" />
            </a>

            <div className="pt-3 border-t border-[#262624] flex items-center justify-between text-[#666562] font-mono text-xs">
              <span>STUDIO TIME (IST)</span>
              <span className="text-white font-bold">{istTime || '14:30:00'} IST</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#262624] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#666562]">
          <div>
            © {new Date().getFullYear()} DEED STUDIO. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TWITTER</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
