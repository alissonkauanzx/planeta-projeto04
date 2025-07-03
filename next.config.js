/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações essenciais para o seu projeto
  reactStrictMode: true,
  compress: true,
  
  // Configurações de otimização de imagens
  images: {
    domains: [
      'localhost',           // Para desenvolvimento local
      'seusite.com',         // Seu domínio de produção
      'assets.example.com'   // Domínio de assets externos
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '.amazonaws.com', // Para imagens da AWS S3
      },
    ],
    minimumCacheTTL: 60,
    formats: ['image/webp'],
  },

  // Configurações do Webpack
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });
    return config;
  },

  // Configurações de headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ],
      },
    ];
  },

  // Configurações experimentais (se necessário)
  experimental: {
    serverActions: {},
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Configurações de compilação
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;