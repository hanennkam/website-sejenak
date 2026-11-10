import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Camera } from 'lucide-react';
import { BRAND_CONTENT } from '../data/brandContent';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Story', href: '#story' },
    { label: 'Experience', href: '#experience' },
    { label: 'Packages', href: '#packages' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#booking' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory-100/95 backdrop-blur-md border-b border-sand-200/80 py-3.5 shadow-sm'
          : 'bg-transparent py-5 lg:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Sejenak Photobooth Home"
          >
            <div className="w-8 h-8 rounded-full border border-charcoal-700/20 bg-ivory-200 flex items-center justify-center text-charcoal-800 group-hover:border-charcoal-900 transition-colors">
              <Camera className="w-4 h-4 stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-xl sm:text-2xl tracking-[0.25em] font-medium text-charcoal-900 group-hover:text-charcoal-700 transition-colors">
                {BRAND_CONTENT.wordmark}
              </span>
              <span className="text-[9px] tracking-[0.28em] uppercase text-charcoal-500 font-sans font-medium">
                Photobooth · Pahang
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-charcoal-600 hover:text-charcoal-900 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-charcoal-900 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Book Now CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal-900 text-ivory-100 text-xs font-medium uppercase tracking-[0.18em] hover:bg-charcoal-700 transition-all shadow-sm hover:shadow active:scale-[0.98]"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-charcoal-800 hover:text-charcoal-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-ivory-100/98 backdrop-blur-lg border-b border-sand-300 px-6 py-8 shadow-xl transition-all">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-editorial tracking-[0.15em] text-charcoal-800 hover:text-charcoal-900 uppercase border-b border-sand-200/50 pb-2 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-charcoal-400 font-sans">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3.5 rounded-full bg-charcoal-900 text-ivory-100 text-xs font-medium uppercase tracking-[0.2em] text-center shadow-sm"
              >
                Book Your Event Date
              </button>
              
              <div className="flex items-center justify-between pt-3 text-[11px] text-charcoal-500 font-sans">
                <span>Pekan, Pahang</span>
                <a
                  href={BRAND_CONTENT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal-900 underline underline-offset-4"
                >
                  {BRAND_CONTENT.instagramHandle}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
