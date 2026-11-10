export interface PackageItem {
  id: string;
  name: string;
  durationHours: number;
  priceRM: number;
  depositPercentage: number;
  description: string;
  popular?: boolean;
  inclusions: string[];
  recommendedFor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'photostrips' | 'events' | 'candids' | 'details';
  src: string;
  alt: string;
  caption: string;
  location?: string;
  aspect: 'square' | 'portrait' | 'tall';
}

export interface BookingData {
  customerName: string;
  phone: string;
  email: string;
  eventDate: string;
  eventType: string;
  venueLocation: string;
  packageId: string;
  specialRequests: string;
}

export interface PhotostripTheme {
  id: string;
  name: string;
  background: string;
  textColor: string;
  accentColor: string;
  fontFamily: string;
  borderStyle: string;
  headerText: string;
  footerText: string;
}
