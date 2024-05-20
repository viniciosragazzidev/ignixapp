/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "via.assets.soom",
      },
      {
        hostname: "via.assets.so",
      },
    ],
  },
};

export default nextConfig;
