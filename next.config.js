/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to support API routes
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

module.exports = nextConfig
