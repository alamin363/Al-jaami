/** @type {import('next').NextConfig} */

const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "./src/styles/scss")],
  },
  images: {
    domains: ["cdn.pixabay.com", "t2.gstatic.com", "images.pexels.com","https://i.ibb.co"],
  },
};

module.exports = nextConfig;
