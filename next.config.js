/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    }
}

module.exports = {
    typescript: {
      ignoreBuildErrors: true,
    },
  }
