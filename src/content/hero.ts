import type { ContentImage } from "@/types/content";

/**
 * Homepage hero photography, sourced from /public/images/hero/.
 * `slides` drives the hero carousel — add, remove, or reorder freely;
 * the carousel adapts to however many images are here (minimum 1).
 * `focalPoint` keeps the subject in frame when the wide banner crops
 * these portrait-ish source photos — adjust per image if a subject
 * still looks cropped oddly on very wide or very narrow screens.
 */
export const heroImages: {
  slides: ContentImage[];
} = {
  slides: [
    {
      src: "/images/hero/hero-1.webp",
      alt: "Guests riding ATV through a jungle river in Bali",
      focalPoint: "50% 20%",
    },
    {
      src: "/images/hero/hero-2.webp",
      alt: "Guest on a jet ski inside a sea cave near Nusa Lembongan",
      focalPoint: "50% 70%",
    },
    {
      src: "/images/hero/hero-3.webp",
      alt: "Family enjoying a scenic viewpoint in Ubud, Bali",
      focalPoint: "50% 65%",
    },
    {
      src: "/images/hero/hero-4.webp",
      alt: "Guests watching the sunrise from Mount Batur",
      focalPoint: "45% 60%",
    },
  ],
};
