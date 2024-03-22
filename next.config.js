/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['mongoose'],
  },

  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}
