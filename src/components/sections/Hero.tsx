import Link from "next/link";
import { heroImages } from "@/content/hero";
import { siteConfig } from "@/content/site";
import { HeroCarousel } from "@/components/sections/HeroCarousel";

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-900">
      <HeroCarousel slides={heroImages.slides} />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/60 to-brand-900/20" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-300">Bali, Indonesia</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
          {siteConfig.brand.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-brand-100">{siteConfig.brand.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-300"
          >
            Book Your Driver
          </Link>
          <Link
            href="/tours"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
