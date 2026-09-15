import type { Service } from "@/types/content";
import { PRICE_PLACEHOLDER } from "@/types/content";

/**
 * Core services shown on the homepage and their own pages.
 * Each maps to its own /public/images/<imageFolder>/ directory.
 */
export const services: Service[] = [
  {
    slug: "airport-transfer",
    imageFolder: "airport-transfer",
    title: "Airport Transfer",
    description:
      "Start and end your trip stress-free with a private airport transfer. Your driver tracks your flight, meets you at arrivals, and takes you straight to your hotel or villa — no queuing for taxis, no haggling over fares.",
    price: { amount: "200,000", currency: "IDR" },
    priceList: [
      { destination: "Kuta", price: { amount: "200,000", currency: "IDR" } },
      { destination: "Legian", price: { amount: "250,000", currency: "IDR" } },
      { destination: "Sanur", price: { amount: "300,000", currency: "IDR" } },
      { destination: "Nusa Dua", price: { amount: "300,000", currency: "IDR" } },
      { destination: "Seminyak", price: { amount: "300,000", currency: "IDR" } },
      { destination: "Kerobokan", price: { amount: "350,000", currency: "IDR" } },
      { destination: "Canggu", price: { amount: "400,000", currency: "IDR" } },
      { destination: "Uluwatu", price: { amount: "400,000", currency: "IDR" } },
      { destination: "Ubud", price: { amount: "450,000", currency: "IDR" } },
      { destination: "Padang Bai", price: { amount: "600,000", currency: "IDR" } },
      { destination: "Amed", price: { amount: "800,000", currency: "IDR" } },
      { destination: "Medewi", price: { amount: "900,000", currency: "IDR" } },
      { destination: "Lovina", price: { amount: "950,000", currency: "IDR" } },
    ],
    images: [
      {
        src: "/images/airport-transfer/airport-transfer-car.webp",
        alt: "Celebrity Bali Driver airport transfer fleet lineup",
      },
      { alt: "Airport pickup" },
      { alt: "Airport arrival" },
      { alt: "Airport meeting point" },
    ],
  },
  {
    slug: "luxury-airport-transfer",
    imageFolder: "luxury-airport-transfer",
    title: "Luxury Airport Transfer",
    description:
      "Arrive in style aboard our Toyota Alphard — spacious, air-conditioned, and driven by an experienced English-speaking driver. A premium first (and last) impression of Bali, with the comfort to match a long-haul flight.",
    price: { amount: PRICE_PLACEHOLDER, currency: "USD" },
    primaryVehicleSlug: "toyota-alphard",
    images: [
      { alt: "Toyota Alphard airport transfer" },
      { alt: "Luxury airport transfer" },
      { alt: "Toyota Alphard arrival" },
    ],
  },
  {
    slug: "car-charter",
    imageFolder: "car-charter",
    title: "Private Car Charter",
    description:
      "Explore Bali at your own pace with a private car and driver for the day. Design your own route, stop wherever catches your eye, and skip the fixed schedules of a group tour — just you, your group, and the island ahead.",
    price: { amount: PRICE_PLACEHOLDER, currency: "USD" },
    images: [
      { alt: "Private driver in Bali" },
      { alt: "Car charter in Bali" },
      { alt: "Daily driver service" },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
