/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1380, 1920, 2048, 3840],
    domains: ["image.freepik.com", "img.freepik.com", "localhost"],
  },
  trailingSlash: true,
  reactStrictMode: true,
};
