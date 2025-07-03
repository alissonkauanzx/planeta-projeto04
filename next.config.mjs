/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // Corrigido: deve ser objeto, não boolean
  },
};

export default nextConfig;
