import Image from "next/image";
import type { ContentImage as ContentImageType } from "@/types/content";
import { withBasePath } from "@/lib/asset-path";

interface Props {
  image: ContentImageType | undefined;
  className?: string;
  /** Use "fill" for a parent with relative positioning + fixed aspect ratio, or pass width/height. */
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

/**
 * Renders a real photo when `image.src` is set, otherwise a clearly
 * labeled placeholder box instead of a broken image. Every section that
 * shows content photography should render images through this component
 * rather than <img>/<Image> directly, so missing assets never break layout.
 */
export function ContentImagePlaceholder({
  image,
  className = "",
  fill,
  width,
  height,
  sizes,
  priority,
}: Props) {
  if (!image?.src) {
    return (
      <div
        className={`flex items-center justify-center border border-dashed border-stone-300 bg-stone-100 text-center text-xs text-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-600 ${
          fill ? "absolute inset-0" : ""
        } ${className}`}
        style={!fill ? { width, height } : undefined}
        role="img"
        aria-label={image?.alt ?? "Image not yet available"}
      >
        <span className="px-2">[IMAGE REQUIRED]{image?.alt ? `: ${image.alt}` : ""}</span>
      </div>
    );
  }

  const src = withBasePath(image.src);

  if (fill) {
    return (
      <Image src={src} alt={image.alt} fill sizes={sizes} priority={priority} className={className} />
    );
  }

  return (
    <Image
      src={src}
      alt={image.alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
