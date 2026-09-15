import type { Metadata } from "next";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { siteConfig } from "@/content/site";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = { title: "About Us | Celebrity Bali Driver" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-900">About {siteConfig.brand.name}</h1>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-brand-50">
        <ContentImagePlaceholder image={aboutContent.image} fill className="object-cover" />
      </div>

      <div className="mt-8 space-y-4 text-brand-800">
        {aboutContent.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
