import type { Metadata } from "next";
import { vehicles } from "@/content/vehicles";
import { VehicleCard } from "@/components/cards/VehicleCard";

export const metadata: Metadata = { title: "Our Fleet | Celebrity Bali Driver" };

export default function VehiclesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-900">Our Fleet</h1>
      <p className="mt-2 max-w-2xl text-brand-700">
        Choose the vehicle that best fits your group size and travel style.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.slug} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}
