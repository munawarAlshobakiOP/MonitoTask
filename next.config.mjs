/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: false, 
      ssr: true,
    },
  },
  experimental: {
    optimizePackageImports: ['styled-components'],
  },
  transpilePackages: ['styled-components'],
}

export default nextConfig;
