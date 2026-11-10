import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types';
import { Lightbox } from './Lightbox';
import { Maximize2, MapPin } from 'lucide-react';
import { BRAND_CONTENT } from '../data/brandContent';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Archives' },
    { id: 'photostrips', label: 'Physical Photostrips' },
    { id: 'candids', label: 'Candids & Smiles' },
    { id: 'details', label: 'Keepsake Details' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-ivory-50 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-sand-200">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-charcoal-400 mb-4">
              <span className="font-mono">04 // ARCHIVE</span>
              <span className="w-8 h-[1px] bg-sand-300" />
              <span>Real Event Captures</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 font-normal leading-tight">
              Moments We've Kept.
            </h2>
          </div>
          
          <div className="mt-6 md:mt-0 text-left md:text-right">
            <span className="text-xs uppercase tracking-widest font-mono text-charcoal-500 block">
              Documented in Pahang
            </span>
            <a
              href={BRAND_CONTENT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-charcoal-700 underline underline-offset-4 hover:text-charcoal-900 font-medium"
            >
              Explore more on Instagram {BRAND_CONTENT.instagramHandle}
            </a>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.16em] transition-all font-medium ${
                activeFilter === tab.id
                  ? 'bg-charcoal-900 text-ivory-100 shadow-sm'
                  : 'bg-ivory-100 text-charcoal-600 hover:bg-sand-200/80 border border-sand-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredItems.map((item, index) => {
            // Give different cards slight visual rhythm
            const isTall = item.aspect === 'tall' || index % 3 === 0;

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-sm bg-sand-200 border border-sand-300/80 shadow-film transition-all duration-500 hover:shadow-elevated"
              >
                {/* Image */}
                <div className={`overflow-hidden ${isTall ? 'h-[440px]' : 'h-[340px]'}`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 contrast-[1.06]"
                    loading="lazy"
                  />
                </div>

                {/* Subtle Film Grain & Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-ivory-100">
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-sand-300">
                    <span>FRAME 0{index + 1}</span>
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div>
                    <h3 className="font-editorial text-2xl font-normal leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-sand-200 font-sans font-light line-clamp-2">
                      {item.caption}
                    </p>
                    {item.location && (
                      <div className="mt-2.5 flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-sand-300">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Subtle Static Frame Stamp (Always Visible) */}
                <div className="p-3 bg-ivory-100/90 border-t border-sand-200/80 flex items-center justify-between text-[10px] text-charcoal-600 font-mono">
                  <span className="truncate max-w-[200px]">{item.title}</span>
                  <span className="uppercase tracking-wider text-charcoal-400">Archival</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-charcoal-500 font-sans">
            Every celebration brings its own laughter. Click any frame to inspect in full resolution.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={activeItem}
        onClose={() => setActiveItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
