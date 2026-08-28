import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';

interface FooterProps {
  onOpenInquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-white border-t border-[#EAEBF0] pt-14 sm:pt-18 pb-10 text-[#0B1730] w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-1.5 text-2xl font-black tracking-tighter text-[#0B1730] font-syne">
              <span>DEED</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#315BFF]" />
            </Link>

            <p className="text-sm text-[#60708F] max-w-sm leading-relaxed">
              A digital studio designing and building websites, digital products, and brand systems for ambitious businesses.
            </p>

            <div className="pt-1">
              <a
                href="mailto:deed.technologia@gmail.com"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#0B1730] hover:text-[#315BFF] transition-colors font-medium truncate max-w-full"
              >
                <Mail className="w-4 h-4 text-[#315BFF] shrink-0" />
                <span className="truncate">deed.technologia@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-2.5 text-xs font-sans">
            <span className="font-mono text-[#315BFF] uppercase tracking-wider block font-semibold mb-2">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-[#60708F]">
              <li><Link to="/" className="hover:text-[#0B1730] transition-colors">Home</Link></li>
              <li><Link to="/work" className="hover:text-[#0B1730] transition-colors">Work</Link></li>
              <li><Link to="/services" className="hover:text-[#0B1730] transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-[#0B1730] transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-[#0B1730] transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-[#0B1730] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Selected Projects */}
          <div className="md:col-span-4 space-y-2.5 text-xs font-sans">
            <span className="font-mono text-[#315BFF] uppercase tracking-wider block font-semibold mb-2">
              SELECTED PROJECTS
            </span>
            <ul className="space-y-2 text-[#60708F]">
              <li>
                <Link to="/work/virundhalayaa" className="hover:text-[#0B1730] transition-colors flex items-center gap-1.5">
                  <span>Virundhalayaa (Cloud Kitchen)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
                </Link>
              </li>
              <li>
                <Link to="/work/nexovate" className="hover:text-[#0B1730] transition-colors flex items-center gap-1.5">
                  <span>Nexovate (Education)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
                </Link>
              </li>
              <li>
                <Link to="/work/billing-software" className="hover:text-[#0B1730] transition-colors flex items-center gap-1.5">
                  <span>Billing Software (Business SaaS)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
                </Link>
              </li>
              <li>
                <Link to="/work/small-design-works" className="hover:text-[#0B1730] transition-colors flex items-center gap-1.5">
                  <span>Small Design Works (Branding)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#EAEBF0] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#60708F]">
          <div>
            © 2026 DEED. ALL RIGHTS RESERVED.
          </div>
          <div>
            DIGITAL STUDIO & TECHNOLOGY SYSTEMS
          </div>
        </div>
      </div>
    </footer>
  );
};
