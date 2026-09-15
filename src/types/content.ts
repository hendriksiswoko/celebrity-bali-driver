/**
 * Shared content types for Celebrity Bali Driver.
 *
 * These types are the contract between content data (src/content/*.ts)
 * and UI components. Components should only ever import data through
 * these shapes — never hardcode image paths or copy inline.
 */

/** A single image reference. Path is relative to /public, e.g. "/images/hero/hero-main.webp". */
export interface ContentImage {
  /** Path relative to /public. Omit or leave undefined if the asset does not exist yet. */
  src?: string;
  /** Required accessible description. For missing images, describe what should be there. */
  alt: string;
}

export type Currency = "USD" | "IDR";

/** Use when a real value is not yet confirmed by the client. Never invent a number. */
export const PRICE_PLACEHOLDER = "XX";

export interface Price {
  amount: string; // e.g. "45" or PRICE_PLACEHOLDER ("XX")
  currency: Currency;
}

export interface Vehicle {
  slug: string;
  /** Folder name under /public/images/vehicles/<imageFolder>/ */
  imageFolder: string;
  name: string;
  /** Free-form seat count, e.g. "6", "9-15", or "[CLIENT CONFIRMATION REQUIRED]". */
  capacity: string;
  price: Price;
  description: string;
  /** Image filenames expected in the vehicle's folder. Only files that exist should be rendered. */
  images: ContentImage[];
}

export interface TourItineraryItem {
  time?: string;
  activity: string;
}

export interface Tour {
  slug: string;
  /** Folder name under /public/images/tours/<imageFolder>/ */
  imageFolder: string;
  title: string;
  description: string;
  duration: string;
  price: Price;
  /** Free-form pricing unit/condition, e.g. "per pax (min 2 pax)" or "per car". */
  priceNote?: string;
  coverImage: ContentImage;
  gallery: ContentImage[];
  itinerary: TourItineraryItem[] | null; // null = not yet provided by client, do not invent
  included: string[];
  excluded: string[];
}

export interface Service {
  slug: string;
  /** Folder name under /public/images/<imageFolder>/ */
  imageFolder: string;
  title: string;
  description: string;
  price: Price;
  images: ContentImage[];
  primaryVehicleSlug?: string;
}

export interface Driver {
  slug: string;
  /** Folder name under /public/images/drivers/<imageFolder>/ */
  imageFolder: string;
  name: string;
  /** Display format, e.g. "+62 812-3806-0514". */
  phone?: string;
  bio: string;
  languages: string[];
  images: ContentImage[];
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorLocation?: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Only set when the customer has given explicit permission to use their photo. */
  image?: ContentImage;
  /** Set to true only after the client has confirmed this testimonial is real and approved. */
  verified: boolean;
}

export interface InstagramPost {
  id: string;
  image: ContentImage;
  caption?: string;
  link?: string;
}

export interface SocialLink {
  platform: "instagram" | "facebook" | "whatsapp" | "tiktok" | "youtube";
  url: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    logo: ContentImage;
    logoDark?: ContentImage;
    favicon?: ContentImage;
    socialShareImage?: ContentImage;
  };
  contact: {
    whatsappNumber: string; // international format, digits only, e.g. "6281234567890"
    email: string;
    address: string;
    /** Link to the Google Maps / Business listing, if one exists. */
    mapsUrl?: string;
  };
  social: SocialLink[];
};
