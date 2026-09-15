import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/base-path";

// GitHub Pages serves this repo at /celebrity-bali-driver/, and has no
// server to run Next's image optimizer — so we export fully static HTML
// and serve images unoptimized, with every asset path prefixed accordingly.
const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
