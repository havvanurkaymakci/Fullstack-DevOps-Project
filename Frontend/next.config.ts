// next.config.js (veya .ts)

const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 webpack(config: any) {
  config.resolve.alias['@'] = path.join(__dirname, 'src');
  return config;
},


  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:8000/api/:path*',
      },
    ];
  },

  images: {
    domains: ['127.0.0.1', 'localhost'],
  },
};

module.exports = nextConfig;
