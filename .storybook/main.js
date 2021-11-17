const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [],
  addons: [
    "storybook-addon-next-router",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@nrwl/react/plugins/storybook",
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};
