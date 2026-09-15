import Link from "next/link";
import { instagramPosts } from "@/content/instagram";
import { siteConfig } from "@/content/site";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";
import { Section } from "@/components/ui/Section";

export function InstagramSection() {
  if (instagramPosts.length === 0) return null;

  const instagramLink = siteConfig.social.find((s) => s.platform === "instagram")?.url;

  return (
    <Section
      title="Follow Us on Instagram"
      action={
        instagramLink && (
          <Link href={instagramLink} className="text-sm font-semibold text-brand-700 hover:text-brand-900">
            @celebritybalidriver →
          </Link>
        )
      }
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {instagramPosts.map((post) => (
          <Link
            key={post.id}
            href={post.link ?? "#"}
            className="relative block aspect-square overflow-hidden rounded-lg"
          >
            <ContentImagePlaceholder image={post.image} fill className="object-cover" />
          </Link>
        ))}
      </div>
    </Section>
  );
}
