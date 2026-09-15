import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";

const NAV_LINKS = [
  { href: "/services/airport-transfer", label: "Airport Transfer" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/tours", label: "Tours" },
  { href: "/drivers", label: "Drivers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center">
          <ContentImagePlaceholder
            image={siteConfig.brand.logo}
            width={1044}
            height={479}
            className="h-9 w-auto object-contain sm:h-10"
          />
          <span className="sr-only">{siteConfig.brand.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-900/80 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-brand-700">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
