/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Helps with GoDaddy static hosting
  eslint: {
    ignoreDuringBuilds: true, // Optional: skip ESLint warnings during build
  },
  images: {
    unoptimized: true, // ✅ Disable image optimization
  },
};

module.exports = nextConfig;
