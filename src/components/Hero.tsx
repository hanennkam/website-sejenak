import React from 'react';
import { ArrowDown, Sparkles, Calendar } from 'lucide-react';
import { BRAND_CONTENT } from '../data/brandContent';

interface HeroProps {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onBookClick }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex flex-col justify-between">
      {/* Subtle Background Film Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-40 film-grain" />
      
      {/* Delicate Editorial Watermark / Coordinates */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full mb-6">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-charcoal-400 border-b border-sand-200/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sejenak-blue inline-block animate-pulse" />
            <span>Pekan, Pahang · Nationwide Booking</span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[10px]">
            ARCHIVAL DYE-SUB PHOTOBOOTH
          </span>
          <span className="font-editorial italic capitalize text-charcoal-600">
            "Berhenti sejenak"
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle Brand Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-sand-100 border border-sand-300/70 text-charcoal-700 text-xs tracking-[0.16em] uppercase mb-8">
              <Sparkles className="w-3.5 h-3.5 text-sejenak-gold" />
              <span>Premium Event Photobooth Studio</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] text-charcoal-900 font-normal mb-6">
              Moments pass. <br />
              <span className="italic font-normal text-charcoal-700">Memories stay.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-lg sm:text-xl text-charcoal-600 max-w-xl font-light leading-relaxed mb-8">
              {BRAND_CONTENT.supportingCopy} We bring high-fidelity studio flash, archival 3-cut physical prints, and instant digital downloads to your weddings, celebrations, and intimate gatherings.
            </p>

            {/* Key Micro Perks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-y border-sand-200/80 mb-10 text-xs">
              <div>
                <span className="block font-editorial text-xl sm:text-2xl text-charcoal-900 font-medium">3-Cut</span>
                <span className="text-charcoal-500 uppercase tracking-wider text-[10px]">Archival Photostrips</span>
              </div>
              <div>
                <span className="block font-editorial text-xl sm:text-2xl text-charcoal-900 font-medium">Studio Flash</span>
                <span className="text-charcoal-500 uppercase tracking-wider text-[10px]">Flattering Soft Lighting</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-editorial text-xl sm:text-2xl text-charcoal-900 font-medium">Live QR</span>
                <span className="text-charcoal-500 uppercase tracking-wider text-[10px]">Instant Phone Downloads</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onBookClick}
                className="px-8 py-4 rounded-full bg-charcoal-900 text-ivory-100 text-xs uppercase tracking-[0.22em] font-medium hover:bg-charcoal-700 transition-all text-center shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-sand-300" />
                <span>Reserve Your Event Date</span>
              </button>

              <button
                onClick={onExploreClick}
                className="px-8 py-4 rounded-full border border-charcoal-900/30 hover:border-charcoal-900 text-charcoal-900 text-xs uppercase tracking-[0.22em] font-medium hover:bg-sand-100/60 transition-all text-center"
              >
                The Experience
              </button>
            </div>

            {/* Authentic Brand Attribution */}
            <div className="mt-8 flex items-center gap-3 text-xs text-charcoal-500">
              <img
                src="/sejenak-avatar.jpg"
                alt="Sejenak Photobooth Official Profile"
                className="w-7 h-7 rounded-full border border-sand-300 object-cover"
              />
              <span>
                As featured on{' '}
                <a
                  href={BRAND_CONTENT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-charcoal-800 underline underline-offset-2 hover:text-charcoal-900"
                >
                  {BRAND_CONTENT.instagramHandle}
                </a>{' '}
                · Pekan, Pahang
              </span>
            </div>
          </div>

          {/* Right Column: Tangible Photostrip & Editorial Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            {/* Subtle glow / shadow backdrop */}
            <div className="absolute w-72 h-96 bg-sand-200/50 rounded-full blur-3xl -z-10" />

            {/* Physical Photostrip Replica (Tilted with Realistic Tactile Feel) */}
            <div className="relative group">
              {/* Main Physical Strip Card */}
              <div className="w-[260px] sm:w-[280px] bg-ivory-50 p-3 sm:p-3.5 rounded-sm shadow-photostrip-paper border border-sand-300/80 transform rotate-[-2.5deg] group-hover:rotate-0 transition-transform duration-500 ease-out">
                {/* Photostrip Header */}
                <div className="text-center py-2 border-b border-sand-200/60 mb-2.5">
                  <span className="font-editorial text-sm tracking-[0.28em] uppercase text-charcoal-800 font-semibold block">
                    SEJENAK
                  </span>
                  <span className="text-[8px] tracking-[0.3em] uppercase text-charcoal-400 font-mono">
                    PHOTOBOOTH · PRINT 01
                  </span>
                </div>

                {/* 3 Real Photographic Cuts */}
                <div className="flex flex-col gap-2.5">
                  {/* Cut 1 */}
                  <div className="relative aspect-[4/3] bg-charcoal-800 overflow-hidden rounded-[1px]">
                    <img
                      src="/photos/post1_group.jpg"
                      alt="Sejenak Photobooth Event Group"
                      className="w-full h-full object-cover grayscale contrast-[1.08] hover:grayscale-0 transition-all duration-500"
                    />
                    <span className="absolute bottom-1 right-1.5 text-[8px] font-mono text-white/70 tracking-widest bg-black/40 px-1 py-0.5 rounded">
                      01 // FLASH
                    </span>
                  </div>

                  {/* Cut 2 */}
                  <div className="relative aspect-[4/3] bg-charcoal-800 overflow-hidden rounded-[1px]">
                    <img
                      src="/photos/post2_friends.jpg"
                      alt="Friends laughing candidly in the booth"
                      className="w-full h-full object-cover contrast-[1.08]"
                    />
                    <span className="absolute bottom-1 right-1.5 text-[8px] font-mono text-white/70 tracking-widest bg-black/40 px-1 py-0.5 rounded">
                      02 // CANID
                    </span>
                  </div>

                  {/* Cut 3 */}
                  <div className="relative aspect-[4/3] bg-charcoal-800 overflow-hidden rounded-[1px]">
                    <img
                      src="/photos/post3_holding_strips.jpg"
                      alt="Guest holding physical prints"
                      className="w-full h-full object-cover contrast-[1.08]"
                    />
                    <span className="absolute bottom-1 right-1.5 text-[8px] font-mono text-white/70 tracking-widest bg-black/40 px-1 py-0.5 rounded">
                      03 // KEEPSAKE
                    </span>
                  </div>
                </div>

                {/* Photostrip Footer Monogram & Timestamp */}
                <div className="mt-3 pt-2 border-t border-sand-200/60 flex items-center justify-between text-[8px] tracking-[0.2em] font-mono text-charcoal-500 uppercase">
                  <span>MOMENTS PASS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sejenak-blue" />
                  <span>MEMORIES STAY</span>
                </div>
              </div>

              {/* Second Overlapping Strip Behind (Gives Depth) */}
              <div className="hidden sm:block absolute -top-4 -right-6 w-[240px] bg-[#181715] p-3 rounded-sm shadow-md border border-charcoal-700/50 transform rotate-[6deg] -z-10 opacity-80 pointer-events-none">
                <div className="text-center py-1.5 mb-2 border-b border-charcoal-700">
                  <span className="font-editorial text-xs tracking-[0.25em] text-sand-200 uppercase">
                    SEJENAK · NOIR
                  </span>
                </div>
                <div className="aspect-[4/3] bg-charcoal-800 overflow-hidden mb-2">
                  <img
                    src="/photos/post6_fan_strips.jpg"
                    alt="Stack of prints"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="text-[7px] text-sand-400 font-mono tracking-widest text-center">
                  LIMITED EVENT RUN · PEKAN
                </div>
              </div>

              {/* Floating Stamp Tag */}
              <div className="absolute -bottom-5 -left-6 bg-ivory-100 border border-sand-300 px-3.5 py-2 rounded-sm shadow-sm transform rotate-[-4deg] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-ping" />
                <span className="text-[10px] uppercase tracking-[0.18em] font-mono text-charcoal-800">
                  2026/2027 Calendar Open
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-8 flex items-center justify-between text-xs text-charcoal-400">
        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 hover:text-charcoal-700 transition-colors uppercase tracking-[0.2em] text-[10px]"
        >
          <span>Scroll to Explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
        <span className="text-[10px] tracking-[0.25em] uppercase font-mono">
          SEJENAK PHOTOBOOTH · EST. 2025
        </span>
      </div>
    </section>
  );
};
