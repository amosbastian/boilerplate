const rootMain = require("../../../../.storybook/main");
const rootWebpackConfig = require("../../../../.storybook/webpack.config");

module.exports = {
  ...rootMain,

  stories: [...rootMain.stories, "../src/lib/**/*.stories.mdx", "../src/lib/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [...rootMain.addons, "@nrwl/react/plugins/storybook"],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // for backwards compatibility call the `rootWebpackConfig`
    // this can be removed once that one is migrated fully to
    // use the `webpackFinal` property in the `main.js` file
    config = rootWebpackConfig({ config });

    // add your own webpack tweaks if needed

    return config;
  },
};
