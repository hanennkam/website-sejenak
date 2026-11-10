import React from 'react';
import { Camera, Layers, UserCheck, ArrowRight } from 'lucide-react';

interface ExperienceProps {
  onBookClick: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onBookClick }) => {
  const experiences = [
    {
      step: '01',
      title: 'Studio-Grade Flash Lighting',
      subtitle: 'Soft, Flattering Illumination',
      description: 'Unlike generic photobooths with harsh ring-lights or smartphone lenses, our setup uses professional softbox diffusion. The light wraps naturally around every guest, producing crisp, luminous skin tones and rich shadow definition.',
      image: '/photos/post2_friends.jpg',
      tag: 'OPTICAL EXCELLENCE',
      badge: 'Pro Diffusion Flash',
    },
    {
      step: '02',
      title: 'Archival 3-Cut Physical Prints',
      subtitle: 'Dye-Sublimation Photo Chemistry',
      description: 'Every guest walks away with a tangible, silky-touch 3-cut vertical photostrip. Printed using Japanese dye-sublimation technology with an instant-cured protective coating that is water-resistant, smudge-proof, and fade-resistant.',
      image: '/photos/post6_fan_strips.jpg',
      tag: 'TANGIBLE ARTIFACT',
      badge: 'Dry-Sub Prints in 12s',
    },
    {
      step: '03',
      title: 'Bespoke Frame Art & Monograms',
      subtitle: 'Tailored Exclusively for Your Event',
      description: 'Your gathering is unique. We craft custom border designs, refined typography, elegant date stamps, and event logos that echo your wedding stationery, corporate aesthetic, or celebration palette.',
      image: '/photos/post3_holding_strips.jpg',
      tag: 'CUSTOM CURATION',
      badge: 'Personalized Graphics',
    },
    {
      step: '04',
      title: 'Live QR Instant Phone Cloud',
      subtitle: 'Seamless Digital Archiving',
      description: 'The physical strip is immediate; the digital copy is instantaneous. Guests simply tap their camera to the live QR code on our booth screen to download full-resolution digital files and animated GIF reels right onto their smartphones.',
      image: '/photos/post4_crowd.jpg',
      tag: 'INSTANT CLOUD',
      badge: 'Direct Phone Save',
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-sand-200">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-charcoal-400 mb-4">
              <span className="font-mono">02 // SERVICE ARCHITECTURE</span>
              <span className="w-8 h-[1px] bg-sand-300" />
              <span>Elevated Event Experiences</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 font-normal leading-tight">
              An Elevated Studio. <br />
              <span className="italic font-normal text-charcoal-700">Not just a rented machine.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 font-sans text-sm sm:text-base text-charcoal-600 max-w-md font-light leading-relaxed">
            We curate an open-air photography space where people connect, smile naturally, and receive a timeless physical keepsake of your milestone.
          </p>
        </div>

        {/* 4 Pillars - Alternating Editorial Layout */}
        <div className="space-y-20 sm:space-y-28">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={exp.step}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Photo Frame */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group overflow-hidden rounded-sm bg-sand-200 shadow-film border border-sand-300/80">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 bg-charcoal-900/80 backdrop-blur-sm text-ivory-100 px-3 py-1 text-[10px] uppercase font-mono tracking-widest rounded-sm">
                      {exp.tag}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-ivory-100/90 backdrop-blur-sm text-charcoal-800 px-3 py-1.5 text-xs font-sans tracking-wide rounded-sm shadow-sm">
                      {exp.badge}
                    </div>
                  </div>
                </div>

                {/* Narrative Details */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-sejenak-blue font-semibold">
                      STEP {exp.step}
                    </span>
                    <span className="w-6 h-[1px] bg-sand-300" />
                    <span className="text-[11px] uppercase tracking-widest text-charcoal-400 font-sans">
                      {exp.subtitle}
                    </span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-4xl text-charcoal-900 font-normal mb-5 leading-snug">
                    {exp.title}
                  </h3>

                  <p className="font-sans text-charcoal-600 font-light leading-relaxed mb-6 text-base">
                    {exp.description}
                  </p>

                  <div className="pt-4 border-t border-sand-200 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-mono text-charcoal-500">
                      Standard in All Packages
                    </span>
                    <button
                      onClick={onBookClick}
                      className="text-xs uppercase tracking-[0.16em] font-medium text-charcoal-900 hover:text-charcoal-600 inline-flex items-center gap-1.5"
                    >
                      <span>Inquire Session</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Experience Highlights Strip */}
        <div className="mt-24 p-8 sm:p-10 rounded-sm bg-ivory-50 border border-sand-200 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="w-10 h-10 rounded-full bg-sand-200 flex items-center justify-center text-charcoal-800 mb-4">
              <UserCheck className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h4 className="font-editorial text-xl text-charcoal-900 mb-2 font-medium">
              Attentive On-Site Host
            </h4>
            <p className="text-xs text-charcoal-600 font-sans leading-relaxed">
              Our team arrives early to set up, manages line flow gracefully, assists your guests with fun poses, and ensures flawless print quality throughout your event.
            </p>
          </div>

          <div>
            <div className="w-10 h-10 rounded-full bg-sand-200 flex items-center justify-center text-charcoal-800 mb-4">
              <Camera className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h4 className="font-editorial text-xl text-charcoal-900 mb-2 font-medium">
              Minimalist Spatial Footprint
            </h4>
            <p className="text-xs text-charcoal-600 font-sans leading-relaxed">
              Clean open-air design that adapts to ballroom entrances, garden marquees, hotel foyers, or festival pavilions without cluttering your venue styling.
            </p>
          </div>

          <div>
            <div className="w-10 h-10 rounded-full bg-sand-200 flex items-center justify-center text-charcoal-800 mb-4">
              <Layers className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h4 className="font-editorial text-xl text-charcoal-900 mb-2 font-medium">
              Unlimited Keepsake Prints
            </h4>
            <p className="text-xs text-charcoal-600 font-sans leading-relaxed">
              No arbitrary print quotas during your booked hire period. Every guest who steps into the booth receives their own physical photostrip to take home.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
