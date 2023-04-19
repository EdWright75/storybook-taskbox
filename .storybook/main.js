module.exports = {
  // stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  stories: [`../src/components/**/*.stories.@(js|jsx)`, `../src/pages/**/*.stories.@(js|jsx)`],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app",
  // Used to assess accessibility
  "@storybook/addon-a11y", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  features: {
    interactionsDebugger: true
  },
  docs: {
    autodocs: true
  }
};