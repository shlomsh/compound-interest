/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Deploying to https://shlomsh.github.io/compound-interest/
  basePath: '/compound-interest',

  // GitHub Pages doesn't support Next.js Image Optimization API
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
