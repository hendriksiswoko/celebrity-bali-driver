import Link from "next/link";
import type { Service } from "@/types/content";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { formatPrice, isPricePlaceholder } from "@/lib/format";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full bg-brand-50">
        <ContentImagePlaceholder
          image={service.images[0]}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-brand-900">{service.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-brand-700">{service.description}</p>
        <p className={`mt-2 text-sm font-semibold ${isPricePlaceholder(service.price) ? "text-stone-400" : "text-accent-600"}`}>
          From {formatPrice(service.price)}
        </p>
      </div>
    </Link>
  );
}
