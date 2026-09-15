import Link from "next/link";
import type { Vehicle } from "@/types/content";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { formatPrice, isPricePlaceholder } from "@/lib/format";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link
      href={`/vehicles/${vehicle.slug}`}
      className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full bg-brand-50">
        <ContentImagePlaceholder
          image={vehicle.images[0]}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-brand-900">{vehicle.name}</h3>
        <p className="mt-1 text-sm text-brand-700">
          Capacity: {vehicle.capacity === "[CLIENT CONFIRMATION REQUIRED]" ? vehicle.capacity : `${vehicle.capacity} pax`}
        </p>
        <p
          className={`mt-2 text-sm font-semibold ${
            isPricePlaceholder(vehicle.price) ? "text-stone-400" : "text-accent-600"
          }`}
        >
          {formatPrice(vehicle.price)}
        </p>
      </div>
    </Link>
  );
}
