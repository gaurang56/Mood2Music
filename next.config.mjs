/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Mood2Music/' : '',
    trailingSlash: true,
  }
  
  export default nextConfig;