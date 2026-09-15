import type { Metadata } from "next";
import { drivers } from "@/content/drivers";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";

export const metadata: Metadata = { title: "Our Drivers | Celebrity Bali Driver" };

export default function DriversPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-900">Our Drivers</h1>
      <p className="mt-2 max-w-2xl text-brand-700">
        Experienced, licensed drivers who know Bali inside and out.
      </p>

      {drivers.length === 0 ? (
        <p className="mt-10 text-stone-400">[CLIENT CONFIRMATION REQUIRED]</p>
      ) : (
        <div className="mt-10 space-y-16">
          {drivers.map((driver) => (
            <div key={driver.slug} className="grid gap-8 sm:grid-cols-[320px_1fr] sm:gap-12">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-brand-50 sm:max-w-[320px]">
                <ContentImagePlaceholder
                  image={driver.images[0]}
                  fill
                  sizes="(min-width: 640px) 320px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">{driver.name}</h2>
                <p className="mt-4 text-lg leading-relaxed text-brand-800 sm:text-xl">{driver.bio}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {driver.languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
