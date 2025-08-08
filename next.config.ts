import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const repo = "/yanel-yapura-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Para GitHub Pages (project page)
  basePath: isProd ? repo : undefined,
  assetPrefix: isProd ? `${repo}/` : undefined,
};

export default nextConfig;
