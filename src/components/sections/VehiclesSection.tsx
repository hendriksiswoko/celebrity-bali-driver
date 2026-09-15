import Link from "next/link";
import { vehicles } from "@/content/vehicles";
import { VehicleCard } from "@/components/cards/VehicleCard";
import { Section } from "@/components/ui/Section";

export function VehiclesSection({ limit }: { limit?: number }) {
  const list = limit ? vehicles.slice(0, limit) : vehicles;

  return (
    <Section
      title="Our Fleet"
      subtitle="From compact city cars to premium MPVs, choose the vehicle that fits your group."
      action={
        <Link href="/vehicles" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
          View all vehicles →
        </Link>
      }
    >
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {list.map((vehicle) => (
          <VehicleCard key={vehicle.slug} vehicle={vehicle} />
        ))}
      </div>
    </Section>
  );
}
