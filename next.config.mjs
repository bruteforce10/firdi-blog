/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', '@auth/prisma-adapter'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...config.externals, '@prisma/client', '@auth/prisma-adapter'];
    }
    return config;
  },
};

export default nextConfig;
