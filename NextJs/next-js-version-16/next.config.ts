import type { NextConfig } from 'next';
import getHeaders from './config/headers';

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  },
  headers: async () => getHeaders(),
};

export default nextConfig;
