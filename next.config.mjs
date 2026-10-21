import { redirects as redirectEntries } from "./src/resources/mockData.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return redirectEntries;
  },
  turbopack: {
    root: new URL(".", import.meta.url).pathname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "staging.birali.my",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
