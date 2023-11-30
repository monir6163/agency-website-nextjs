/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agency.teamrabbil.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "flowbite.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
