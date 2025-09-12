/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

module.exports = nextConfig
