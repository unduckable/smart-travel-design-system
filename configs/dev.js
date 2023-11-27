import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { alias } from "./shared";

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "../playground"),
  resolve: {
    alias,
  },
});
