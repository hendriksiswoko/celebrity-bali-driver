import type { Metadata } from "next";
import { tours } from "@/content/tours";
import { TourCard } from "@/components/cards/TourCard";

export const metadata: Metadata = { title: "Tour Packages | Celebrity Bali Driver" };

export default function ToursPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-900">Tour Packages</h1>
      <p className="mt-2 max-w-2xl text-brand-700">
        Private, driver-guided tours across Bali and Nusa Penida.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tours.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>
    </div>
  );
}
