import Link from "next/link";
import type { Tour } from "@/types/content";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { formatPrice, isPricePlaceholder } from "@/lib/format";

const PLACEHOLDER = "[CLIENT CONFIRMATION REQUIRED]";

export function TourCard({ tour }: { tour: Tour }) {
  const hasDuration = tour.duration && tour.duration !== PLACEHOLDER;

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full bg-brand-50">
        <ContentImagePlaceholder
          image={tour.coverImage}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {hasDuration && (
          <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {tour.duration}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-brand-900">{tour.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-brand-700/90">{tour.description}</p>

        <div className="mt-4 flex items-end justify-between border-t border-brand-100 pt-3">
          <span className="text-xs font-medium uppercase tracking-wide text-brand-600">
            {tour.priceNote ? "From" : "Price"}
          </span>
          <span
            className={`text-xl font-bold ${isPricePlaceholder(tour.price) ? "text-stone-400" : "text-accent-600"}`}
          >
            {formatPrice(tour.price)}
            {tour.priceNote && (
              <span className="ml-1 text-xs font-normal text-brand-600">{tour.priceNote}</span>
            )}
          </span>
        </div>
      </div>
    </Link>
  );
}
