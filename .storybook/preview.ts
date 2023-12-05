import type { Preview } from "@storybook/react";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Welcome", "Icons", "Components"],
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
