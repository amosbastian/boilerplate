// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require("next-translate");
const withNx = require("@nrwl/next/plugins/with-nx");
const withPlugins = require("next-compose-plugins");

process.env.NEXT_TRANSLATE_PATH = "apps/blog";

module.exports = withPlugins([withNx, nextTranslate], {
  nx: { svgr: true },
  basePath: "/blog",
  outputFileTracing: false,
});
