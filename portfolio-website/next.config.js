/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dropbox.com",
        pathname: "/scl/**",
      },
    ],
  },
};

module.exports = nextConfig;
