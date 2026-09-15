import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services, getServiceBySlug } from "@/content/services";
import { getVehicleBySlug } from "@/content/vehicles";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { formatPrice, isPricePlaceholder } from "@/lib/format";
import { buildWhatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return { title: service ? `${service.title} | Celebrity Bali Driver` : "Service Not Found" };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const whatsappLink = buildWhatsappLink(`Hi, I'd like to book the ${service.title}.`);
  const primaryVehicle = service.primaryVehicleSlug ? getVehicleBySlug(service.primaryVehicleSlug) : undefined;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl bg-brand-50">
        <ContentImagePlaceholder image={service.images[0]} fill priority className="object-cover" />
      </div>

      {service.images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {service.images.slice(1).map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg bg-brand-50">
              <ContentImagePlaceholder image={img} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-brand-900">{service.title}</h1>
          <p className="mt-4 text-brand-800">{service.description}</p>

          {primaryVehicle && (
            <Link
              href={`/vehicles/${primaryVehicle.slug}`}
              className="mt-6 inline-block rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50"
            >
              Primary vehicle: {primaryVehicle.name} →
            </Link>
          )}

          {service.priceList && (
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-brand-900">Price by Destination</h2>
              <div className="mt-3 overflow-hidden rounded-xl border border-brand-100">
                <table className="w-full text-sm">
                  <tbody>
                    {service.priceList.map((item, i) => (
                      <tr
                        key={item.destination}
                        className={i % 2 === 0 ? "bg-white" : "bg-brand-50/60"}
                      >
                        <td className="px-4 py-2.5 font-medium text-brand-900">{item.destination}</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-accent-600">
                          {formatPrice(item.price)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <div className="h-fit rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-brand-700">{service.priceList ? "Starting from" : "Price"}</p>
          <p className={`text-xl font-semibold ${isPricePlaceholder(service.price) ? "text-stone-400" : "text-accent-600"}`}>
            {formatPrice(service.price)}
          </p>

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
