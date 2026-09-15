import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { vehicles, getVehicleBySlug } from "@/content/vehicles";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { formatPrice, isPricePlaceholder } from "@/lib/format";
import { buildWhatsappLink } from "@/lib/whatsapp";
import Link from "next/link";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  return { title: vehicle ? `${vehicle.name} | Celebrity Bali Driver` : "Vehicle Not Found" };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  const whatsappLink = buildWhatsappLink(`Hi, I'd like to book the ${vehicle.name}.`);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-50">
            <ContentImagePlaceholder image={vehicle.images[0]} fill priority className="object-cover" />
          </div>
          {vehicle.images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {vehicle.images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg bg-brand-50">
                  <ContentImagePlaceholder image={img} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-bold text-brand-900">{vehicle.name}</h1>
          <p className="mt-2 text-brand-700">
            Capacity: {vehicle.capacity === "[CLIENT CONFIRMATION REQUIRED]" ? vehicle.capacity : `${vehicle.capacity} pax`}
          </p>
          <p className={`mt-1 text-xl font-semibold ${isPricePlaceholder(vehicle.price) ? "text-stone-400" : "text-accent-600"}`}>
            {formatPrice(vehicle.price)}
          </p>
          <p className="mt-6 text-brand-800">{vehicle.description}</p>

          {whatsappLink ? (
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600"
            >
              Book via WhatsApp
            </Link>
          ) : (
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600"
            >
              Contact Us to Book
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
