import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { MobileNav } from "@/components/layout/MobileNav";

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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-900/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <MobileNav links={NAV_LINKS} />

          <Link href="/" className="flex items-center">
            <ContentImagePlaceholder
              image={siteConfig.brand.logo}
              width={1044}
              height={479}
              className="h-9 w-auto object-contain sm:h-10"
            />
            <span className="sr-only">{siteConfig.brand.name}</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-300"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
