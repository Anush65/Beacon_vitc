import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "Beacon_vitc";
const isProd = process.env.NODE_ENV === "production";
const configuredBasePath = process.env.BASE_PATH?.trim();
const basePath = configuredBasePath || (isProd ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
