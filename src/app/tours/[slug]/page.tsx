import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { tours, getTourBySlug } from "@/content/tours";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { formatPrice, isPricePlaceholder } from "@/lib/format";
import { buildWhatsappLink } from "@/lib/whatsapp";

const PLACEHOLDER = "[CLIENT CONFIRMATION REQUIRED]";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  return { title: tour ? `${tour.title} | Celebrity Bali Driver` : "Tour Not Found" };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const whatsappLink = buildWhatsappLink(`Hi, I'd like to book the ${tour.title}.`);
  const gallery = [tour.coverImage, ...tour.gallery];
  const hasDuration = tour.duration && tour.duration !== PLACEHOLDER;
  const included = tour.included.filter((item) => item !== PLACEHOLDER);
  const excluded = tour.excluded.filter((item) => item !== PLACEHOLDER);
  const itinerary = tour.itinerary?.filter((item) => item.activity !== PLACEHOLDER) ?? null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl bg-brand-50">
        <ContentImagePlaceholder image={tour.coverImage} fill priority className="object-cover" />
      </div>

      {gallery.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {gallery.slice(1).map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg bg-brand-50">
              <ContentImagePlaceholder image={img} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-brand-900">{tour.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-800">{tour.description}</p>

          {itinerary && itinerary.length > 0 && (
            <>
              <h2 className="mt-10 text-xl font-bold text-brand-900">Itinerary</h2>
              <ol className="mt-4 space-y-3">
                {itinerary.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-brand-800">
                      {item.time && <span className="mr-2 font-semibold text-brand-700">{item.time}</span>}
                      {item.activity}
                    </span>
                  </li>
                ))}
              </ol>
            </>
          )}

          {(included.length > 0 || excluded.length > 0) && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {included.length > 0 && (
                <div>
                  <h3 className="font-bold text-brand-900">Included</h3>
                  <ul className="mt-3 space-y-2">
                    {included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-brand-800">
                        <span className="mt-1 text-accent-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {excluded.length > 0 && (
                <div>
                  <h3 className="font-bold text-brand-900">Excluded</h3>
                  <ul className="mt-3 space-y-2">
                    {excluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-brand-600">
                        <span className="mt-1 text-brand-300">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="h-fit rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
          {hasDuration && (
            <>
              <p className="text-sm font-medium text-brand-600">Duration</p>
              <p className="font-semibold text-brand-900">{tour.duration}</p>
            </>
          )}
          <p className={`text-sm font-medium text-brand-600 ${hasDuration ? "mt-4" : ""}`}>
            {tour.priceNote ? "Starting from" : "Price"}
          </p>
          <p className={`text-2xl font-bold ${isPricePlaceholder(tour.price) ? "text-stone-400" : "text-accent-600"}`}>
            {formatPrice(tour.price)}
          </p>
          {tour.priceNote && <p className="text-sm text-brand-600">{tour.priceNote}</p>}

          {whatsappLink ? (
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-full bg-brand-700 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-brand-600"
            >
              Book via WhatsApp
            </Link>
          ) : (
            <Link
              href="/contact"
              className="mt-6 block rounded-full bg-brand-700 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-brand-600"
            >
              Contact Us to Book
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
