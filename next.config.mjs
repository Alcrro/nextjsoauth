/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_GITHUB_ID: process.env.GITHUB_ID,
    NEXT_PUBLIC_GITHUB_SECRET: process.env.GITHUB_SECRET,
  },
};

export default nextConfig;
