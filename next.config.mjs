/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: '/NewMun-VII',
  basePath: '/NewMun-VII',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}
export default nextConfig
