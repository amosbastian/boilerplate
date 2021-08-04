// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require("next-translate");
const withNx = require("@nrwl/next/plugins/with-nx");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withNx, nextTranslate], {
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
});
