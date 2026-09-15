import Link from "next/link";
import type { Driver } from "@/types/content";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { buildWhatsappLinkForPhone } from "@/lib/whatsapp";

export function DriverCard({ driver }: { driver: Driver }) {
  const whatsappLink = driver.phone
    ? buildWhatsappLinkForPhone(driver.phone, `Hi ${driver.name}, I'd like to book a trip in Bali.`)
    : null;

  return (
    <div className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm">
      <div className="relative aspect-[4/5] w-full bg-brand-50">
        <ContentImagePlaceholder
          image={driver.images[0]}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-brand-900">{driver.name}</h3>
        <p className="mt-1 line-clamp-3 text-sm text-brand-700">{driver.bio}</p>
        <p className="mt-2 text-xs text-brand-600">{driver.languages.join(", ")}</p>

        {whatsappLink && (
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white transition-transform hover:scale-105"
          >
            WhatsApp {driver.phone}
          </Link>
        )}
      </div>
    </div>
  );
}
