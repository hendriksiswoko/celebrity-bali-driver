import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";

const SOCIAL_LABELS: Record<string, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  whatsapp: "WhatsApp",
  tiktok: "TikTok",
  youtube: "YouTube",
};

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <ContentImagePlaceholder
            image={siteConfig.brand.logoDark ?? siteConfig.brand.logo}
            width={800}
            height={800}
            className="h-16 w-16 object-contain"
          />
          <p className="mt-3 text-sm text-white/70">{siteConfig.brand.tagline}</p>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-white">Contact</p>
          <ul className="mt-2 space-y-1 text-white/70">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.address}</li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-white">Follow</p>
          {siteConfig.social.length === 0 ? (
            <p className="mt-2 text-white/70">[CLIENT CONFIRMATION REQUIRED]</p>
          ) : (
            <ul className="mt-2 space-y-1">
              {siteConfig.social.map((link) => (
                <li key={link.platform}>
                  <Link href={link.url} className="text-white/70 hover:text-white">
                    {SOCIAL_LABELS[link.platform]}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50 sm:px-6">
        © {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
