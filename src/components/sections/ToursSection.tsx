import Link from "next/link";
import { tours } from "@/content/tours";
import { TourCard } from "@/components/cards/TourCard";
import { Section } from "@/components/ui/Section";

export function ToursSection({ limit }: { limit?: number }) {
  const list = limit ? tours.slice(0, limit) : tours;

  return (
    <Section
      title="Popular Tours"
      subtitle="Full-day and half-day tour packages with a private driver, all across Bali."
      wrapperClassName="bg-brand-50/60"
      action={
        <Link href="/tours" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
          View all tours →
        </Link>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>
    </Section>
  );
}
