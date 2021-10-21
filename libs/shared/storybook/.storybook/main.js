const rootMain = require("../../../../.storybook/main");

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(...["../../../**/*.stories.mdx", "../../../**/*.stories.@(js|jsx|ts|tsx)"]);
rootMain.core = { ...rootMain.core, builder: "webpack5" };

module.exports = rootMain;
