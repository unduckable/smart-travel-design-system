import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import logo from "../src/assets/logo.svg";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    darkMode: {
      darkClass: "s-dark",
      stylePreview: true,
      dark: { ...themes.dark, appBg: "#282833", previewBg: "#282833", brandImage: logo },
      light: { ...themes.light, appBg: "#fff", brandImage: logo },
    },
    options: {
      storySort: {
        order: ["Welcome", "Icons", "Foundations", "Components"],
        method: "alphabetical",
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        type: "dynamic",
        transform: (code: string) => {
          return code.startsWith("{") ? code.match(/^(.|\n)*render: ((.|\n|\t)*}\n)/)?.[2] : code;
        },
      },
    },
  },
};

export default preview;
