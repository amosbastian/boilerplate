const rootMain = require("../../../../.storybook/main");

module.exports = {
  ...rootMain,
  core: {
    ...rootMain.core,
    builder: "webpack5",
  },
  stories: ["../../../**/*.stories.mdx", "../../../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [...rootMain.addons, "@nrwl/react/plugins/storybook"],
  webpackFinal: async (config, { configType }) => {
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    return config;
  },
};
