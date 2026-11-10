import React from 'react';
import { BRAND_CONTENT } from '../data/brandContent';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 border-t border-sand-200/80 relative overflow-hidden bg-ivory-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Pre-heading */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-charcoal-400 mb-8">
          <span className="font-mono">01 // IDENTITY</span>
          <span className="w-8 h-[1px] bg-sand-300" />
          <span>The Philosophy Behind Sejenak</span>
        </div>

        {/* Narrative & Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Editorial Pull Quote & Narrative */}
          <div className="lg:col-span-7">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-charcoal-900 leading-[1.1] mb-8 font-normal">
              "Berhenti sejenak — <br />
              <span className="italic font-normal text-sand-700">
                pause for a moment, and let the memory breathe."
              </span>
            </h2>

            <div className="space-y-6 text-charcoal-600 font-sans font-light text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                In the Malay language, <em className="italic font-editorial text-xl text-charcoal-800">Sejenak</em> translates to a brief pause — a fleeting, tender instant where time seems to stand still. In a modern culture hurried by endless digital feeds and ephemeral stories that vanish in twenty-four hours, we believe the human heart still craves something tangible.
              </p>
              <p>
                Founded in Pekan, Pahang, Sejenak Photobooth was envisioned not as an impersonal vending box, but as an intimate, joyful creative installation. We craft an environment where guests forget the awkwardness of posing, embrace unbridled silliness, and hold in their hands an archival photostrip printed in twelve seconds.
              </p>
              <p className="text-charcoal-800 font-normal">
                Because years from now, when you open that book, glance at your refrigerator, or hold that worn strip of film, you won't just see how you looked — you will remember exactly how it felt.
              </p>
            </div>

            {/* Signature & Founder Note */}
            <div className="mt-12 pt-8 border-t border-sand-200 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-sand-300 bg-sand-200 flex-shrink-0">
                  <img
                    src="/sejenak-avatar.jpg"
                    alt="Sejenak Photobooth"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-editorial text-lg tracking-wide text-charcoal-900 font-medium">
                    {BRAND_CONTENT.founderName}
                  </div>
                  <div className="text-xs text-charcoal-500 uppercase tracking-widest font-mono">
                    Founder · {BRAND_CONTENT.founderHandle}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="font-editorial text-sm tracking-[0.2em] text-charcoal-400 uppercase block">
                  Crafted in
                </span>
                <span className="text-xs tracking-wider text-charcoal-700 font-medium">
                  Pekan, Pahang, Malaysia
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Atmosphere & Photo Composition */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual 1: Large Editorial Portrait */}
            <div className="relative group overflow-hidden rounded-sm border border-sand-300/80 bg-sand-200">
              <img
                src="/photos/post5_two_girls.jpg"
                alt="Real guests holding Sejenak prints in Pekan"
                className="w-full h-[360px] object-cover contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="font-mono text-[10px] tracking-widest uppercase text-sand-200 block">
                  DOCUMENTED LIVE // PEKAN
                </span>
                <span className="font-editorial text-base tracking-wide text-ivory-100">
                  The joy of holding something real in your hands.
                </span>
              </div>
            </div>

            {/* Micro Stats Matrix */}
            <div className="grid grid-cols-2 gap-3">
              {BRAND_CONTENT.story.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-sm bg-ivory-100 border border-sand-200/90 flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-charcoal-400 mb-2">
                    {stat.label}
                  </span>
                  <span className="font-editorial text-xl sm:text-2xl text-charcoal-900 font-medium">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Note on Photography Integrity */}
            <div className="p-4 rounded-sm border border-dashed border-sand-300 text-xs text-charcoal-500 font-sans leading-relaxed">
              <span className="font-semibold text-charcoal-800">Authentic Heritage:</span> All photographs shown across this site are documented from actual Sejenak pop-ups, campus events, and celebrations across Pahang.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
