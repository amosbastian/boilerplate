// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");

const { BLOG_URL } = process.env;

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
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ];
  },
};

module.exports = withNx(nextConfig);
