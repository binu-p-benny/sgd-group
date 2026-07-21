/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/products/aluminium-window-systems',
        destination: '/products/slim-window-systems',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
