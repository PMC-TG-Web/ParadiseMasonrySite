import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ParadiseMasonrySite',
  assetPrefix: '/ParadiseMasonrySite',
};

export default nextConfig;
