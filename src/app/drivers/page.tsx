import type { Metadata } from "next";
import { drivers } from "@/content/drivers";
import { DriverCard } from "@/components/cards/DriverCard";

export const metadata: Metadata = { title: "Our Drivers | Celebrity Bali Driver" };

export default function DriversPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-900">Our Drivers</h1>
      <p className="mt-2 max-w-2xl text-brand-700">
        Experienced, licensed drivers who know Bali inside and out.
      </p>

      {drivers.length === 0 ? (
        <p className="mt-10 text-stone-400">[CLIENT CONFIRMATION REQUIRED]</p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {drivers.map((driver) => (
            <DriverCard key={driver.slug} driver={driver} />
          ))}
        </div>
      )}
    </div>
  );
}
