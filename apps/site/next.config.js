// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require("next-translate");
const withNx = require("@nrwl/next/plugins/with-nx");
const withPlugins = require("next-compose-plugins");
const { withSentryConfig } = require("@sentry/nextjs");

process.env.NEXT_TRANSLATE_PATH = "apps/site";

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withPlugins(
  [withNx, nextTranslate, (nextConfig) => withSentryConfig(nextConfig, SentryWebpackPluginOptions)],
  {
    outputFileTracing: false,
    nx: { svgr: true },
    images: {
      domains: ["placekitten.com"],
    },
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: `/:path*`,
        },
        {
          source: "/blog",
          destination: `${
            process.env.NODE_ENV === "production"
              ? process.env.NEXT_PUBLIC_BASE_URL_BLOG ?? "http://localhost:4200"
              : "http://localhost:4200"
          }/blog`,
        },
        {
          source: "/blog/:path*",
          destination: `${
            process.env.NODE_ENV === "production"
              ? process.env.NEXT_PUBLIC_BASE_URL_BLOG ?? "http://localhost:4200"
              : "http://localhost:4200"
          }/blog/:path*`,
        },
      ];
    },
  },
);
