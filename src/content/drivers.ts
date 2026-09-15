import type { Driver } from "@/types/content";

/**
 * Driver roster. Add a new folder under /public/images/drivers/<slug>/
 * plus an entry here for each new driver. Do not invent names, phone
 * numbers or bios — only add real people with the client's confirmation.
 */
export const drivers: Driver[] = [
  {
    slug: "yogi",
    imageFolder: "yogi",
    name: "Yogi",
    phone: "+62 812-3806-0514",
    bio: "A born-and-raised Bali local, Yogi brings genuine island hospitality to every trip. Guests consistently praise him as friendly, helpful and a great guide — happy to put together a tour on the spot at a fair price, and always driving safely from the first pickup to the last drop-off.",
    languages: ["English", "Bahasa Indonesia"],
    images: [{ src: "/images/drivers/yogi/portrait.webp", alt: "Yogi — portrait" }],
  },
  {
    slug: "gusmang",
    imageFolder: "gusmang",
    name: "Gusmang",
    phone: "+62 815-2992-7926",
    bio: "Friendly and easygoing behind the wheel, Gusmang keeps every trip comfortable and safe — a familiar face on the Celebrity Bali Driver team.",
    languages: ["English", "Bahasa Indonesia"],
    images: [{ src: "/images/drivers/gusmang/portrait.webp", alt: "Gusmang — portrait" }],
  },
  {
    slug: "jeremy",
    imageFolder: "jeremy",
    name: "Jeremy",
    phone: "+62 895-3600-68148",
    bio: "Safe trip, happy guest — that's Jeremy's motto, and it shows in every ride he drives across the island.",
    languages: ["English", "Bahasa Indonesia"],
    images: [{ src: "/images/drivers/jeremy/portrait.webp", alt: "Jeremy — portrait" }],
  },
  {
    slug: "gusde",
    imageFolder: "gusde",
    name: "Gusde",
    phone: "+62 813-5357-4577",
    bio: "Calm and attentive on the road, Gusde is all about a comfortable trip and a happy customer at the end of it.",
    languages: ["English", "Bahasa Indonesia"],
    images: [{ src: "/images/drivers/gusde/portrait.webp", alt: "Gusde — portrait" }],
  },
  {
    slug: "ngurah",
    imageFolder: "ngurah",
    name: "Ngurah",
    phone: "+62 887-0778-6879",
    bio: "Ngurah handles the bigger group trips with ease, keeping things safe and comfortable from door to door.",
    languages: ["English", "Bahasa Indonesia"],
    images: [{ src: "/images/drivers/ngurah/portrait.webp", alt: "Ngurah — portrait" }],
  },
  {
    slug: "gede",
    imageFolder: "gede",
    name: "Mr Gede",
    phone: "+62 878-6240-5475",
    bio: "With years on Bali's roads, Mr Gede offers a steady, professional driving experience guests trust.",
    languages: ["English", "Bahasa Indonesia"],
    images: [{ src: "/images/drivers/gede/portrait.webp", alt: "Mr Gede — portrait" }],
  },
  {
    slug: "nyoman",
    imageFolder: "nyoman",
    name: "Mr Nyoman",
    phone: "+62 878-6240-9998",
    bio: "Mr Nyoman is known for safe, comfortable trips and a genuinely warm welcome for every guest.",
    languages: ["English", "Bahasa Indonesia"],
    images: [{ src: "/images/drivers/nyoman/portrait.webp", alt: "Mr Nyoman — portrait" }],
  },
  {
    slug: "helmi",
    imageFolder: "helmi",
    name: "Helmi",
    phone: "+62 851-8688-8378",
    bio: "A professional driver focused on a comfortable, safe journey and the best service in Bali.",
    languages: ["English", "Bahasa Indonesia"],
    images: [{ src: "/images/drivers/helmi/portrait.webp", alt: "Helmi — portrait" }],
  },
  {
    slug: "alan",
    imageFolder: "alan",
    name: "Alan",
    phone: "+62 812-2713-2028",
    bio: "Alan specializes in VVIP transfers, tours and airport pickups, delivering a polished, professional experience every time.",
    languages: ["English", "Bahasa Indonesia"],
    images: [{ src: "/images/drivers/alan/portrait.webp", alt: "Alan — portrait" }],
  },
  {
    slug: "catur",
    imageFolder: "catur",
    name: "Catur",
    phone: "+62 812-3615-3319",
    bio: "Catur brings a friendly, easygoing presence to every ride, always focused on a safe and comfortable trip.",
    languages: ["English", "Bahasa Indonesia"],
    images: [{ src: "/images/drivers/catur/portrait.webp", alt: "Catur — portrait" }],
  },
  {
    slug: "alit",
    imageFolder: "alit",
    name: "Alit",
    phone: "+62 895-4123-21033",
    bio: "Alit drives the larger group vehicles, known among guests for being a trusted, professional driver on every trip.",
    languages: ["English", "Bahasa Indonesia"],
    images: [{ src: "/images/drivers/alit/portrait.webp", alt: "Alit — portrait" }],
  },
];

export function getDriverBySlug(slug: string): Driver | undefined {
  return drivers.find((d) => d.slug === slug);
}
