const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
})


/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
})

module.exports = nextConfig
