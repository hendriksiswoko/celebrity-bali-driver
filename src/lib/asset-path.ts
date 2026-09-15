import { BASE_PATH } from "@/lib/base-path";

// With `output: "export"` + `images.unoptimized: true`, next/image renders
// a plain <img> and does NOT automatically prefix the src with basePath the
// way it does for internally-generated assets (favicon, JS/CSS chunks) —
// so every content image path needs this applied by hand.
export function withBasePath(src: string): string {
  if (/^https?:\/\//.test(src)) return src;
  return `${BASE_PATH}${src}`;
}
