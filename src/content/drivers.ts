import type { Driver } from "@/types/content";

/**
 * Driver roster. Add a new folder under /public/images/drivers/<slug>/
 * plus an entry here for each new driver. Do not invent names or bios —
 * only add real people with the client's confirmation.
 */
export const drivers: Driver[] = [
  {
    slug: "yogi",
    imageFolder: "yogi",
    name: "Yogi",
    bio: "A born-and-raised Bali local, Yogi brings genuine island hospitality to every trip. Guests consistently praise him as friendly, helpful and a great guide — happy to put together a tour on the spot at a fair price, and always driving safely from the first pickup to the last drop-off.",
    languages: ["English", "Bahasa Indonesia"],
    images: [{ src: "/images/drivers/yogi/portrait.webp", alt: "Yogi — portrait" }],
  },
];

export function getDriverBySlug(slug: string): Driver | undefined {
  return drivers.find((d) => d.slug === slug);
}
