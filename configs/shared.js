import path from "path";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import tailwindcssNesting from "tailwindcss/nesting";

export const alias = {
  "@": path.resolve(__dirname, "../"),
};

export const css = {} || {
  postcss: {
    plugins: [tailwindcssNesting, tailwindcss, autoprefixer],
  },
};
