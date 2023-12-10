import path from "path";
import { defineConfig } from "vite";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
  plugins: [commonjs()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
