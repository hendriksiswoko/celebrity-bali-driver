import type { ContentImage } from "@/types/content";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

/**
 * Shows a real photo when provided, otherwise a name-initials circle —
 * never a stand-in photo of a real person without their permission.
 */
export function Avatar({
  name,
  image,
  size = 48,
}: {
  name: string;
  image?: ContentImage;
  size?: number;
}) {
  if (image?.src) {
    return (
      <span
        className="relative block shrink-0 overflow-hidden rounded-full"
        style={{ width: size, height: size }}
      >
        <ContentImagePlaceholder image={image} fill className="object-cover" />
      </span>
    );
  }

  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {initials(name)}
    </span>
  );
}
