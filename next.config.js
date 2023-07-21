/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./components/image.ts",
  },
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  output: "export",
};

module.exports = nextConfig;
