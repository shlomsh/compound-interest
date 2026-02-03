/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Uncomment if deploying to https://shlomsh.github.io/compound-interest-site/
  // basePath: '/compound-interest-site',

  // GitHub Pages doesn't support Next.js Image Optimization API
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
