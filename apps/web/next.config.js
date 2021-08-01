// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: { svgr: true },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/blog",
        destination: `${process.env.NEXT_PUBLIC_BLOG_URL}/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `${process.env.NEXT_PUBLIC_BLOG_URL}/blog/:path*`,
      },
    ];
  },
};

module.exports = withNx(nextConfig);
