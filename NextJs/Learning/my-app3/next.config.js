/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/dimitrov93/test-repo/main/images/**',
          },
        ],
      },    
}

module.exports = nextConfig
