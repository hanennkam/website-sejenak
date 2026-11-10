import React from 'react';
import { Check, Tag, ArrowRight, ShieldCheck } from 'lucide-react';
import { PACKAGES } from '../data/packages';
import { PackageItem } from '../types';

interface PackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 sm:py-32 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.28em] text-charcoal-400 mb-4">
            <span className="font-mono">03 // INVESTMENT</span>
            <span className="w-8 h-[1px] bg-sand-300" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 font-normal leading-tight mb-5">
            Thoughtfully Crafted Packages
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal-600 font-light leading-relaxed max-w-xl mx-auto">
            Honest rates with unlimited 3-cut physical prints, studio-grade soft lighting, custom frame designs, and dedicated on-site hospitality.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-sm transition-all duration-300 flex flex-col justify-between p-8 sm:p-10 ${
                  isPopular
                    ? 'bg-ivory-50 border-2 border-charcoal-900 shadow-elevated'
                    : 'bg-ivory-50/70 border border-sand-300/80 shadow-film hover:border-sand-400'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-8 bg-charcoal-900 text-ivory-100 text-[10px] uppercase font-mono tracking-[0.22em] px-4 py-1 rounded-full shadow-sm">
                    Most Requested For Weddings
                  </div>
                )}

                <div>
                  {/* Package Duration & Title */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-charcoal-500">
                      {pkg.durationHours} Hours Session
                    </span>
                    <span className="text-xs font-mono text-charcoal-400">
                      50% Deposit to Book
                    </span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-4xl text-charcoal-900 font-normal mb-3">
                    {pkg.name}
                  </h3>

                  <p className="text-sm text-charcoal-600 font-sans font-light leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Price Block */}
                  <div className="py-6 border-y border-sand-200/80 mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="font-editorial text-4xl sm:text-5xl text-charcoal-900 font-medium">
                        RM {pkg.priceRM}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-charcoal-500 font-mono">
                        / Session
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-charcoal-500 font-sans flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>
                        RM {Math.round(pkg.priceRM * 0.5)} initial deposit to lock event date
                      </span>
                    </div>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-3.5 mb-10">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-charcoal-400 block mb-2">
                      Package Inclusions:
                    </span>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-700 font-light">
                        <div className="w-4 h-4 rounded-full bg-sand-200 text-charcoal-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selection CTA */}
                <div>
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-4 rounded-full text-xs uppercase tracking-[0.22em] font-medium transition-all flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-charcoal-900 text-ivory-100 hover:bg-charcoal-700 shadow-md'
                        : 'bg-sand-200 text-charcoal-900 hover:bg-sand-300'
                    }`}
                  >
                    <span>Select {pkg.durationHours}-Hour Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="mt-3 text-[10px] text-center text-charcoal-400 font-mono">
                    Recommended for: {pkg.recommendedFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Promo Banner & Booking Terms Note */}
        <div className="max-w-4xl mx-auto mt-14 p-6 sm:p-7 rounded-sm bg-sand-100/70 border border-sand-300 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-sejenak-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <Tag className="w-4 h-4 stroke-[2]" />
            </div>
            <div>
              <div className="text-xs uppercase font-mono tracking-wider font-semibold text-charcoal-900 mb-1">
                Special Instagram Promotion
              </div>
              <p className="text-xs text-charcoal-600 font-sans leading-relaxed">
                Follow <strong className="text-charcoal-900">@sejenakphotobooth</strong> and tag us in your event story or post to receive an instant <strong className="text-charcoal-900">RM5 OFF</strong> discount on your booking!
              </p>
            </div>
          </div>

          <div className="text-right flex-shrink-0">
            <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500 block">
              Booking Policy
            </span>
            <span className="text-xs text-charcoal-700 font-medium">
              50% Deposit · 50% Balance
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
