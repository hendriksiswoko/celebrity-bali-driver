import type { Metadata } from "next";
import Link from "next/link";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { siteConfig } from "@/content/site";
import { buildWhatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Contact Us | Celebrity Bali Driver" };

const contactImage = { alt: "Celebrity Bali Driver — contact us" };

export default function ContactPage() {
  const whatsappLink = buildWhatsappLink("Hi, I'd like to ask about booking a driver in Bali.");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-900">Contact Us</h1>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-brand-50">
        <ContentImagePlaceholder image={contactImage} fill className="object-cover" />
      </div>

      <div className="mt-8 grid gap-2 text-brand-800">
        <p>
          <span className="font-semibold text-brand-900">Email:</span> {siteConfig.contact.email}
        </p>
        <p>
          <span className="font-semibold text-brand-900">Address:</span> {siteConfig.contact.address}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {whatsappLink ? (
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Chat on WhatsApp
          </Link>
        ) : (
          <p className="text-stone-400">[CLIENT CONFIRMATION REQUIRED — WhatsApp number]</p>
        )}

        {siteConfig.contact.mapsUrl && (
          <Link
            href={siteConfig.contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
          >
            View on Google Maps
          </Link>
        )}
      </div>
    </div>
  );
}
