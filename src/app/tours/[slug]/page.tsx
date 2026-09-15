import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { tours, getTourBySlug } from "@/content/tours";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { formatPrice, isPricePlaceholder } from "@/lib/format";
import { buildWhatsappLink } from "@/lib/whatsapp";

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
          <p className="mt-4 text-brand-800">{tour.description}</p>

          <h2 className="mt-8 text-lg font-semibold text-brand-900">Itinerary</h2>
          {tour.itinerary === null ? (
            <p className="mt-2 text-sm text-stone-400">[CLIENT CONFIRMATION REQUIRED]</p>
          ) : (
            <ol className="mt-2 space-y-2 text-brand-800">
              {tour.itinerary.map((item, i) => (
                <li key={i} className="flex gap-3">
                  {item.time && <span className="w-16 shrink-0 font-medium text-brand-700">{item.time}</span>}
                  <span>{item.activity}</span>
                </li>
              ))}
            </ol>
          )}

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-brand-900">Included</h3>
              <ul className="mt-2 list-inside list-disc text-brand-800">
                {tour.included.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-brand-900">Excluded</h3>
              <ul className="mt-2 list-inside list-disc text-brand-800">
                {tour.excluded.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-fit rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-brand-700">Duration</p>
          <p className="font-semibold text-brand-900">{tour.duration}</p>
          <p className="mt-4 text-sm text-brand-700">Price</p>
          <p className={`text-xl font-semibold ${isPricePlaceholder(tour.price) ? "text-stone-400" : "text-accent-600"}`}>
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
