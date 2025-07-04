/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/planeta-projeto04' : '',
  assetPrefix: isProd ? '/planeta-projeto04/' : '',
}

export default nextConfig
