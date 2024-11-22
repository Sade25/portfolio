/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // If you want to use source maps in production:
  productionBrowserSourceMaps: true,
  // Uncomment if you want to enable strict mode:
  // reactStrictMode: true, 
}

module.exports = nextConfig