import React, { useState } from 'react';
import { PHOTOSTRIP_THEMES } from '../data/galleryData';
import { Palette } from 'lucide-react';

export const PhotostripShowcase: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(PHOTOSTRIP_THEMES[0]);
  const [photoSetIndex, setPhotoSetIndex] = useState(0);

  const photoSets = [
    {
      label: 'Festival & Campus Pop-Up',
      photos: [
        { src: '/photos/post1_group.jpg', alt: 'Four friends smiling together' },
        { src: '/photos/post2_friends.jpg', alt: 'Friends candid in booth' },
        { src: '/photos/post3_holding_strips.jpg', alt: 'Guest holding physical prints' },
      ],
    },
    {
      label: 'Celebration & Besties',
      photos: [
        { src: '/photos/post5_two_girls.jpg', alt: 'Two besties smiling' },
        { src: '/photos/post7_couple.jpg', alt: 'Couple posing playfully' },
        { src: '/photos/post8_trio.jpg', alt: 'Trio laughter' },
      ],
    },
  ];

  const currentSet = photoSets[photoSetIndex];

  return (
    <section className="py-20 bg-ivory-50 border-y border-sand-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-200/60 text-charcoal-700 text-xs tracking-[0.2em] uppercase font-mono mb-4">
            <Palette className="w-3.5 h-3.5 text-sejenak-blue" />
            <span>Interactive Frame Previewer</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal mb-4">
            The Signature 3-Cut Photostrip
          </h2>
          <p className="font-sans text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
            Every photostrip is customized to your event theme. Toggle between real frame designs below to see how our layout transforms each captured moment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Theme Selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-[0.2em] text-charcoal-500 mb-3">
                1. Select Frame Aesthetic
              </label>
              <div className="grid grid-cols-2 gap-3">
                {PHOTOSTRIP_THEMES.map((theme) => {
                  const isActive = selectedTheme.id === theme.id;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme)}
                      className={`p-3.5 rounded-sm text-left border transition-all flex items-center justify-between ${
                        isActive
                          ? 'border-charcoal-900 bg-ivory-100 shadow-sm ring-1 ring-charcoal-900'
                          : 'border-sand-200 bg-ivory-50/50 hover:border-sand-400'
                      }`}
                    >
                      <div>
                        <span className="block text-xs font-medium text-charcoal-900">
                          {theme.name}
                        </span>
                        <span className="text-[10px] text-charcoal-500 font-mono">
                          {theme.fontFamily === 'serif' ? 'Editorial Serif' : 'Modern Clean'}
                        </span>
                      </div>
                      <div
                        className="w-4 h-4 rounded-full border border-sand-400 shadow-inner"
                        style={{ backgroundColor: theme.background }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Photo Set Switcher */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-[0.2em] text-charcoal-500 mb-3">
                2. Switch Real Photo Cuts
              </label>
              <div className="flex gap-2">
                {photoSets.map((set, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPhotoSetIndex(idx)}
                    className={`flex-1 py-2.5 px-3 rounded-sm text-xs font-medium transition-all ${
                      photoSetIndex === idx
                        ? 'bg-charcoal-900 text-ivory-100 shadow-sm'
                        : 'bg-sand-100 text-charcoal-700 hover:bg-sand-200'
                    }`}
                  >
                    {set.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Design Spec Details */}
            <div className="p-4 rounded-sm bg-sand-100/70 border border-sand-200 text-xs space-y-2 text-charcoal-600 font-sans">
              <div className="flex justify-between border-b border-sand-200 pb-1.5">
                <span className="font-mono text-charcoal-500">Dimensions:</span>
                <span className="font-medium text-charcoal-800">2 × 6 inches (Standard Strip)</span>
              </div>
              <div className="flex justify-between border-b border-sand-200 pb-1.5">
                <span className="font-mono text-charcoal-500">Print Finish:</span>
                <span className="font-medium text-charcoal-800">Lustre Archival Gloss</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-charcoal-500">Customization:</span>
                <span className="font-medium text-charcoal-800">Tailored Monogram & Theme</span>
              </div>
            </div>
          </div>

          {/* Interactive Live Photostrip Render */}
          <div className="lg:col-span-7 flex justify-center py-4">
            <div
              className="w-[280px] sm:w-[310px] p-4 rounded-sm shadow-photostrip-paper transition-all duration-500 border"
              style={{
                backgroundColor: selectedTheme.background,
                color: selectedTheme.textColor,
                borderColor: 'rgba(0,0,0,0.12)',
              }}
            >
              {/* Strip Header */}
              <div className="text-center pb-3 pt-1 border-b border-current/20 mb-3">
                <span
                  className={`block text-xs uppercase tracking-[0.25em] font-semibold ${
                    selectedTheme.fontFamily === 'serif' ? 'font-editorial' : 'font-sans'
                  }`}
                >
                  {selectedTheme.headerText}
                </span>
                <span className="text-[8px] font-mono tracking-widest uppercase opacity-75">
                  PEKAN · PAHANG · EST. 2025
                </span>
              </div>

              {/* 3 Photos */}
              <div className="space-y-3">
                {currentSet.photos.map((p, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-black/20"
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      className="w-full h-full object-cover contrast-[1.08] transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-1 left-1.5 text-[8px] font-mono bg-black/50 text-white px-1 rounded">
                      FRAME 0{i + 1}
                    </div>
                  </div>
                ))}
              </div>

              {/* Strip Footer */}
              <div className="pt-3 mt-3 border-t border-current/20 text-center">
                <span
                  className={`block text-[10px] tracking-[0.2em] uppercase font-medium ${
                    selectedTheme.fontFamily === 'serif' ? 'font-editorial text-xs' : 'font-sans'
                  }`}
                >
                  {selectedTheme.footerText}
                </span>
                <div className="flex items-center justify-center gap-1.5 mt-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: selectedTheme.accentColor }}
                  />
                  <span className="text-[7px] font-mono tracking-widest uppercase opacity-70">
                    SEJENAKPHOTOBOOTH.COM
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
