import type { StorybookConfig } from "@storybook/react-vite";

const blackListPatterns = [
  /aria/,
  /form/,
  /^excludeFromTabOrder$/,
  /^slot$/,
  /^keyboardActivation$/,
  /^onCompositionEnd$/,
  /^onCompositionStart$/,
  /^onCompositionUpdate$/,
];

const config: StorybookConfig = {
  stories: ["../src/storybook/welcome.mdx", "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "storybook-dark-mode",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
      },
    },
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    "storybook-addon-swc",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: (props) => blackListPatterns.every((pattern) => !pattern.test(props.name)),
    },
  },
};

export default config;
