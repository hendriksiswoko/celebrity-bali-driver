import type { SiteConfig } from "@/types/content";

/**
 * Global brand, contact and social configuration.
 * Update these values (and the matching /public/images/brand/ files)
 * as the single source of truth — do not hardcode contact details
 * or social links inside components.
 */
export const siteConfig: SiteConfig = {
  brand: {
    name: "Celebrity Bali Driver",
    tagline: "Make your trip to Bali a breeze with our safe and reliable car rental and driver services",
    logo: { src: "/images/brand/logo.png", alt: "Celebrity Bali Driver logo" },
    // Round "Celebrity Team" badge variant, used on dark backgrounds like the footer.
    logoDark: { src: "/images/brand/celebrity-team-badge.webp", alt: "Celebrity Bali Driver team badge" },
    favicon: { src: "/images/brand/logo.png", alt: "Celebrity Bali Driver favicon" },
    socialShareImage: { alt: "Celebrity Bali Driver" },
  },
  contact: {
    whatsappNumber: "6281238060514",
    email: "mangyogi29@gmail.com",
    // Confirmed by client from the "Yogi bali driver" Google Business listing.
    address: "Jl. Tirta Kuning, Wanagiri, Kec. Sukasada, Kabupaten Buleleng, Bali 81161",
    mapsUrl:
      "https://www.google.com/maps/place/Yogi+bali+driver/@-8.2281831,115.1070673,17z",
  },
  social: [
    { platform: "instagram", url: "https://instagram.com/celebritybalidriver" },
    { platform: "whatsapp", url: "https://wa.me/6281238060514" },
  ],
};
