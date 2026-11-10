import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { Experience } from './components/Experience';
import { PhotostripShowcase } from './components/PhotostripShowcase';
import { Packages } from './components/Packages';
import { Gallery } from './components/Gallery';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { PackageItem } from './types';

export const App: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    const expSection = document.getElementById('experience');
    if (expSection) {
      expSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 selection:bg-sand-300 selection:text-charcoal-900 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreClick={scrollToExperience}
          onBookClick={scrollToBooking}
        />

        {/* Brand Story Section */}
        <BrandStory />

        {/* Experience & Studio Services Section */}
        <Experience onBookClick={scrollToBooking} />

        {/* Interactive Photostrip Showcase */}
        <PhotostripShowcase />

        {/* Packages & Pricing Section */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* Photography Archive / Gallery with Lightbox */}
        <Gallery />

        {/* Booking & WhatsApp Inquiry Section */}
        <BookingForm initialPackage={selectedPackage} />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;
