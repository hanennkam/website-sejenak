import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-charcoal-900/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 sm:top-8 sm:right-8 p-3 rounded-full bg-white/10 text-ivory-100 hover:bg-white/20 transition-all z-20"
        aria-label="Close image lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-ivory-100 hover:bg-white/25 transition-all z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-ivory-100 hover:bg-white/25 transition-all z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-sm shadow-2xl border border-white/15 bg-black/40">
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[72vh] max-w-full object-contain"
          />
        </div>

        {/* Caption & Metadata */}
        <div className="mt-4 text-center text-ivory-100 max-w-xl px-4">
          <h3 className="font-editorial text-2xl font-normal tracking-wide">
            {item.title}
          </h3>
          <p className="text-xs text-sand-300 font-sans mt-1">
            {item.caption}
          </p>
          {item.location && (
            <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-sand-400 mt-2">
              <MapPin className="w-3 h-3" />
              <span>{item.location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
