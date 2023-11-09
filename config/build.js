import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageContent from "../package.json";
import { alias } from "./shared";

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  resolve: { alias },
  build: {
    lib: {
      entry: resolve(__dirname, "../src/index.ts"),
      formats: ["es", "umd"],
      name: packageContent.name,
      fileName: (format) => `index.${format}.js`,
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "react/jsx-runtime",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
