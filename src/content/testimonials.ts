import type { Testimonial } from "@/types/content";

/**
 * Sourced from the "Yogi bali driver" Google Maps listing (5.0, 14 reviews)
 * and approved by the client for publication on 2026-09-15.
 * Only add further entries here once the client has confirmed the quote
 * (and photo, if any) is real and approved — never fabricate one.
 */
export const testimonials: Testimonial[] = [
  {
    id: "google-paulius-reinatas",
    authorName: "Paulius Reinatas",
    quote:
      "Very friendly and helpful driver and guide. Exceeded all our expectations. Safely driven around all locations, even suggested activities that we didn't plan.",
    rating: 5,
    verified: true,
  },
  {
    id: "google-kadek-indah-widari",
    authorName: "Kadek indah Widari",
    quote:
      "Absolutely amazing experience! The staff were so kind and professional, making everything run smoothly. Highly recommended for anyone visiting Bali.",
    rating: 5,
    verified: true,
  },
  {
    id: "google-gus-andika",
    authorName: "Gus Andika",
    quote:
      "Good driver and friendly. I didn't have an itinerary but Yogi arranged a great tour at a good price — best recommended.",
    rating: 5,
    verified: true,
  },
];
