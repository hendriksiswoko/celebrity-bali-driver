import Link from "next/link";
import type { Tour } from "@/types/content";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { formatPrice, isPricePlaceholder } from "@/lib/format";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full bg-brand-50">
        <ContentImagePlaceholder
          image={tour.coverImage}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-brand-900">{tour.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-brand-700">{tour.description}</p>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-brand-700">{tour.duration}</span>
          <span className={`font-semibold ${isPricePlaceholder(tour.price) ? "text-stone-400" : "text-accent-600"}`}>
            {formatPrice(tour.price)}
            {tour.priceNote && <span className="ml-1 font-normal text-brand-600">{tour.priceNote}</span>}
          </span>
        </div>
      </div>
    </Link>
  );
}
