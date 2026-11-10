import React from 'react';
import { Camera, MessageSquare, ArrowUp } from 'lucide-react';
import { BRAND_CONTENT } from '../data/brandContent';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 text-ivory-100 pt-20 pb-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-charcoal-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-sand-400/30 bg-charcoal-800 flex items-center justify-center text-ivory-100">
                <Camera className="w-4 h-4 stroke-[1.5]" />
              </div>
              <span className="font-editorial text-3xl tracking-[0.25em] font-medium text-ivory-100">
                {BRAND_CONTENT.wordmark}
              </span>
            </div>
            <p className="font-sans text-sm text-sand-300 font-light max-w-sm leading-relaxed">
              {BRAND_CONTENT.tagline} Thoughtfully captured moments, beautifully remembered. Based in Pekan, Pahang, crafting archival photobooth experiences for celebrations across Malaysia.
            </p>
            <div className="pt-2 text-xs font-mono text-sand-400">
              {BRAND_CONTENT.malayMotto}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-sand-400 block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-sans text-sand-200">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home & Overview
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  The Brand Story
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  The Studio Experience
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Investment & Packages
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Event Archive & Photostrips
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Check Calendar Availability
                </a>
              </li>
            </ul>
          </div>

          {/* Channels & Connect */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-sand-400 block mb-2">
              Connect & Booking
            </span>
            <div className="space-y-2.5 text-xs text-sand-200">
              <a
                href={BRAND_CONTENT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                {/* Clean SVG Instagram Icon */}
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2 text-pink-400"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram: {BRAND_CONTENT.instagramHandle}</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_CONTENT.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {BRAND_CONTENT.whatsappNumber}</span>
              </a>

              <div className="pt-3 text-[11px] text-sand-400 font-mono">
                Studio Location: Pekan, Pahang, Malaysia
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Minimal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-400 font-sans">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {BRAND_CONTENT.name}. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors text-[11px] uppercase font-mono tracking-widest"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
