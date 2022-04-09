/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.weatherapi.com']
  },
  exclude: [
    'templates/**'
  ]
}

module.exports = nextConfig
