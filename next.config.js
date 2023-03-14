/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  webpack: (
    config,
  ) => {
    config.externals = [...config.externals, 'pg-native'];
    return config
  },
}

module.exports = nextConfig
