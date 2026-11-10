import React, { useState } from 'react';
import { PACKAGES } from '../data/packages';
import { BRAND_CONTENT } from '../data/brandContent';
import { PackageItem, BookingData } from '../types';
import { MessageSquare, ShieldCheck, Copy, Check } from 'lucide-react';

interface BookingFormProps {
  initialPackage?: PackageItem | null;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialPackage }) => {
  const [formData, setFormData] = useState<BookingData>({
    customerName: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: 'Wedding & Solemnization (Akad Nikah / Resepsi)',
    venueLocation: '',
    packageId: initialPackage?.id || 'pkg-4hr',
    specialRequests: '',
  });

  const [copied, setCopied] = useState(false);

  // Update package when parent updates
  React.useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, packageId: initialPackage.id }));
    }
  }, [initialPackage]);

  const selectedPkg = PACKAGES.find((p) => p.id === formData.packageId) || PACKAGES[1];
  const depositAmount = Math.round(selectedPkg.priceRM * 0.5);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Sejenak Photobooth! 📸

I would like to check availability for an upcoming booking:

• Name: ${formData.customerName || '[Your Name]'}
• Event Date: ${formData.eventDate || '[Pending Date]'}
• Event Type: ${formData.eventType}
• Venue / Location: ${formData.venueLocation || '[Venue Location]'}
• Preferred Package: ${selectedPkg.name} (RM${selectedPkg.priceRM} · ${selectedPkg.durationHours} Hours)
• 50% Deposit Estimate: RM${depositAmount}
${formData.specialRequests ? `• Notes / Theme: ${formData.specialRequests}\n` : ''}
Could you let me know if your team is available on this date? Thank you!`;

    return encodeURIComponent(text);
  };

  const getRawMessageText = () => {
    return `Hello Sejenak Photobooth! 📸\n\nI would like to check availability for an upcoming booking:\n• Name: ${formData.customerName || '[Your Name]'}\n• Event Date: ${formData.eventDate || '[Pending Date]'}\n• Event Type: ${formData.eventType}\n• Venue / Location: ${formData.venueLocation || '[Venue Location]'}\n• Preferred Package: ${selectedPkg.name} (RM${selectedPkg.priceRM})\n\nThank you!`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = `https://wa.me/${BRAND_CONTENT.whatsappRaw}?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, '_blank');
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(getRawMessageText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.28em] text-charcoal-400 mb-4">
            <span className="font-mono">05 // RESERVATION</span>
            <span className="w-8 h-[1px] bg-sand-300" />
            <span>Check Calendar Availability</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 font-normal leading-tight mb-4">
            Reserve Your Date
          </h2>
          <p className="font-sans text-base text-charcoal-600 font-light leading-relaxed">
            Fill in your celebration details below. We connect directly via WhatsApp to confirm calendar slots and discuss bespoke frame themes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-ivory-50 p-8 sm:p-10 rounded-sm border border-sand-300 shadow-film">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              
              {/* Customer Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-[0.18em] text-charcoal-700 mb-2">
                  Full Name / Contact Person *
                </label>
                <input
                  type="text"
                  name="customerName"
                  required
                  placeholder="e.g. Nurul Hidayah & Amirul"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-ivory-100 border border-sand-300 rounded-sm text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-900 transition-colors"
                />
              </div>

              {/* Event Date & Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.18em] text-charcoal-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-ivory-100 border border-sand-300 rounded-sm text-sm text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.18em] text-charcoal-700 mb-2">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-ivory-100 border border-sand-300 rounded-sm text-sm text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors"
                  >
                    {BRAND_CONTENT.eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Venue Location */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-[0.18em] text-charcoal-700 mb-2">
                  Venue & City / State *
                </label>
                <input
                  type="text"
                  name="venueLocation"
                  required
                  placeholder="e.g. Dewan Konvensyen Sultan Haji Ahmad Shah, Pekan"
                  value={formData.venueLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-ivory-100 border border-sand-300 rounded-sm text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-900 transition-colors"
                />
              </div>

              {/* Preferred Package */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-[0.18em] text-charcoal-700 mb-2">
                  Preferred Session Package *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PACKAGES.map((pkg) => {
                    const isSelected = formData.packageId === pkg.id;
                    return (
                      <label
                        key={pkg.id}
                        className={`p-4 rounded-sm border cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-charcoal-900 bg-sand-100 ring-1 ring-charcoal-900'
                            : 'border-sand-300 bg-ivory-100 hover:border-sand-400'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-editorial text-lg text-charcoal-900 font-medium">
                            {pkg.name}
                          </span>
                          <input
                            type="radio"
                            name="packageId"
                            value={pkg.id}
                            checked={isSelected}
                            onChange={handleInputChange}
                            className="accent-charcoal-900"
                          />
                        </div>
                        <div className="flex items-baseline justify-between text-xs">
                          <span className="font-mono text-charcoal-600">{pkg.durationHours} Hours Hire</span>
                          <span className="font-semibold text-charcoal-900">RM {pkg.priceRM}</span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Notes / Theme */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-[0.18em] text-charcoal-700 mb-2">
                  Special Theme / Monogram Details (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  rows={3}
                  placeholder="Tell us about your wedding color palette, preferred frame styles, or event start time..."
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-ivory-100 border border-sand-300 rounded-sm text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-900 transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-charcoal-900 text-ivory-100 text-xs font-medium uppercase tracking-[0.22em] hover:bg-charcoal-700 transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Send WhatsApp Availability Enquiry</span>
                </button>
              </div>

              {/* Copy Alternative */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handleCopyInquiry}
                  className="text-xs text-charcoal-500 hover:text-charcoal-800 underline underline-offset-4 inline-flex items-center gap-1.5 font-mono"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Inquiry message copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Prefer to copy message text manually?</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Live Booking Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-sm bg-ivory-50 border border-sand-300 shadow-film">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-charcoal-400 border-b border-sand-200 pb-3 mb-6">
                Booking Summary & Breakdown
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-start">
                  <span className="text-charcoal-500 font-sans">Selected Package:</span>
                  <span className="text-right font-editorial text-lg text-charcoal-900 font-medium">
                    {selectedPkg.name}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-charcoal-500 font-sans">Operating Duration:</span>
                  <span className="font-mono text-charcoal-800">{selectedPkg.durationHours} Hours Active Hire</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-charcoal-500 font-sans">Physical Prints:</span>
                  <span className="font-medium text-charcoal-900">Unlimited 3-Cut Strips</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-charcoal-500 font-sans">Digital Access:</span>
                  <span className="font-medium text-charcoal-900">Live QR Downloads</span>
                </div>

                <div className="pt-4 border-t border-sand-200">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-charcoal-700 font-medium">Total Session Fee:</span>
                    <span className="font-editorial text-2xl text-charcoal-900 font-medium">
                      RM {selectedPkg.priceRM}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline text-xs text-charcoal-600">
                    <span className="flex items-center gap-1 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      50% Deposit to Confirm:
                    </span>
                    <span className="font-mono font-semibold text-charcoal-900">
                      RM {depositAmount}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-sand-200/90 text-xs text-charcoal-500 space-y-2">
                <p>
                  <strong>Deposit Policy:</strong> Bookings are secured on a first-deposit basis. Dates cannot be reserved tentatively without deposit receipt.
                </p>
                <p>
                  <strong>Location:</strong> Base rate applies to Pekan & Kuantan. Travel across Pahang or nationwide arranged with transparent travel stipend.
                </p>
              </div>
            </div>

            {/* Direct Contact Tile */}
            <div className="p-6 rounded-sm bg-sand-100/70 border border-sand-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-charcoal-500 block">
                  Direct Founder Contact
                </span>
                <span className="font-editorial text-lg text-charcoal-900">
                  {BRAND_CONTENT.founderName}
                </span>
                <span className="text-xs text-charcoal-600 block">
                  {BRAND_CONTENT.instagramHandle}
                </span>
              </div>
              <a
                href={BRAND_CONTENT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-charcoal-800 text-charcoal-900 text-xs font-mono uppercase tracking-wider hover:bg-charcoal-900 hover:text-white transition-all"
              >
                DM on IG
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
