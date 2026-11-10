import { PackageItem } from '../types';

export const PACKAGES: PackageItem[] = [
  {
    id: 'pkg-2hr',
    name: 'The Two-Hour Session',
    durationHours: 2,
    priceRM: 700,
    depositPercentage: 50,
    description: 'Perfect for intimate gatherings, birthday celebrations, private dinner parties, and short-format engagements.',
    popular: false,
    recommendedFor: 'Intimate celebrations & private gatherings',
    inclusions: [
      '2 hours of continuous photobooth operation',
      'Unlimited instant 3-cut physical photostrip prints',
      'Custom frame template design tailored to your event',
      'Studio-grade softbox flash and camera setup',
      'Instant digital QR gallery for guest phone downloads',
      'Dedicated on-site booth host and technical support',
      '50% deposit required upon date confirmation',
    ],
  },
  {
    id: 'pkg-4hr',
    name: 'The Four-Hour Experience',
    durationHours: 4,
    priceRM: 1000,
    depositPercentage: 50,
    description: 'Our most requested signature experience for weddings, corporate banquets, evening galas, and festival celebrations.',
    popular: true,
    recommendedFor: 'Weddings, grand celebrations & large gatherings',
    inclusions: [
      '4 hours of continuous photobooth operation',
      'Unlimited instant 3-cut physical photostrip prints for all guests',
      'Custom bespoke event frame typography & monogram design',
      'Studio-grade softbox flash and camera setup',
      'Instant digital QR gallery with full-resolution archive access',
      'Dedicated on-site booth host throughout the session',
      '50% deposit required upon date confirmation',
    ],
  },
];

export const BRAND_TERMS = {
  depositNote: 'A 50% non-refundable deposit is required to reserve and confirm your event date in our calendar.',
  balanceNote: 'Remaining 50% balance to be settled prior to or on the event date.',
  locationNote: 'Based in Pekan, Pahang. Travel across Pahang, Terengganu, Klang Valley & Peninsular Malaysia available with nominal travel fees.',
  promoNote: 'RM5 discount available when following and tagging @sejenakphotobooth on Instagram.',
};
