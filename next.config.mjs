/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add support for SVG imports as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
