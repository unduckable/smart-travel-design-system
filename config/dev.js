import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import { alias } from "./shared";

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "../playground"),
  resolve: {
    alias,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
