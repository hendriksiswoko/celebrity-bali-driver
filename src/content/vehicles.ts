import type { Vehicle } from "@/types/content";

/**
 * One entry per vehicle folder under /public/images/vehicles/.
 * Capacity, pricing and descriptions are placeholders until the client confirms them.
 * Do not invent numbers here — see PRD "Missing Information Protocol".
 */
export const vehicles: Vehicle[] = [
  {
    slug: "terios",
    imageFolder: "terios",
    name: "Daihatsu Terios",
    capacity: "2-4",
    price: { amount: "55", currency: "USD" },
    description: "[VEHICLE DESCRIPTION]",
    images: [
      { src: "/images/vehicles/terios/main.webp", alt: "Daihatsu Terios — main photo" },
      { alt: "Daihatsu Terios — front view" },
      { alt: "Daihatsu Terios — side view" },
      { alt: "Daihatsu Terios — interior" },
      { alt: "Daihatsu Terios — luggage space" },
    ],
  },
  {
    slug: "avanza-xenia",
    imageFolder: "avanza-xenia",
    name: "Avanza/Xenia",
    capacity: "2-4",
    price: { amount: "50", currency: "USD" },
    description: "[VEHICLE DESCRIPTION]",
    images: [
      { src: "/images/vehicles/avanza-xenia/main.webp", alt: "Avanza / Xenia — main photo" },
      { alt: "Avanza / Xenia — front view" },
      { alt: "Avanza / Xenia — side view" },
      { alt: "Avanza / Xenia — interior" },
      { alt: "Avanza / Xenia — luggage space" },
    ],
  },
  {
    slug: "apv",
    imageFolder: "apv",
    name: "Suzuki APV",
    capacity: "5-8",
    price: { amount: "45", currency: "USD" },
    description: "[VEHICLE DESCRIPTION]",
    images: [
      { src: "/images/vehicles/apv/main.webp", alt: "Suzuki APV — main photo" },
      { alt: "Suzuki APV — front view" },
      { alt: "Suzuki APV — side view" },
      { alt: "Suzuki APV — interior" },
      { alt: "Suzuki APV — luggage space" },
    ],
  },
  {
    slug: "innova-zenix",
    imageFolder: "innova-zenix",
    name: "Toyota Innova Zenix",
    capacity: "6",
    price: { amount: "90", currency: "USD" },
    description: "[VEHICLE DESCRIPTION]",
    images: [
      { src: "/images/vehicles/innova-zenix/main.webp", alt: "Toyota Innova Zenix — main photo" },
      { alt: "Toyota Innova Zenix — front view" },
      { alt: "Toyota Innova Zenix — side view" },
      { alt: "Toyota Innova Zenix — interior" },
      { alt: "Toyota Innova Zenix — luggage space" },
    ],
  },
  {
    slug: "toyota-hiace",
    imageFolder: "toyota-hiace",
    name: "Toyota Hiace",
    capacity: "9-15",
    price: { amount: "100", currency: "USD" },
    description: "[VEHICLE DESCRIPTION]",
    images: [
      { src: "/images/vehicles/toyota-hiace/main.webp", alt: "Toyota Hiace — main photo" },
      { alt: "Toyota Hiace — front view" },
      { alt: "Toyota Hiace — side view" },
      { alt: "Toyota Hiace — interior" },
      { alt: "Toyota Hiace — luggage space" },
    ],
  },
  {
    slug: "hiace-luxury-premio",
    imageFolder: "hiace-luxury-premio",
    name: "Toyota Hiace Luxury Premio",
    capacity: "9",
    price: { amount: "130", currency: "USD" },
    description: "[VEHICLE DESCRIPTION]",
    images: [
      { src: "/images/vehicles/hiace-luxury-premio/main.webp", alt: "Toyota Hiace Luxury Premio — main photo" },
      { alt: "Toyota Hiace Luxury Premio — front view" },
      { alt: "Toyota Hiace Luxury Premio — side view" },
      { alt: "Toyota Hiace Luxury Premio — interior" },
      { alt: "Toyota Hiace Luxury Premio — luggage space" },
    ],
  },
  {
    slug: "toyota-alphard",
    imageFolder: "toyota-alphard",
    name: "Toyota Alphard",
    capacity: "2-4",
    price: { amount: "250", currency: "USD" },
    description: "[VEHICLE DESCRIPTION]",
    images: [
      { src: "/images/vehicles/toyota-alphard/main.webp", alt: "Toyota Alphard — main photo" },
      { alt: "Toyota Alphard — front view" },
      { alt: "Toyota Alphard — side view" },
      { alt: "Toyota Alphard — interior" },
      { alt: "Toyota Alphard — luggage space" },
    ],
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}
