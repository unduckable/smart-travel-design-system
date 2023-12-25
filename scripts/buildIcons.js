import fs from "fs";
import path, { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { build } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rawIconsPath = path.resolve(__dirname, "../src/icons");

const getIcons = async () => {
  try {
    // Read the contents of the icons directory
    const icons = fs.readdirSync(rawIconsPath).filter((file) => file.endsWith(".tsx"));

    return icons;
  } catch (error) {
    console.error("Error encounter when accessing icons directory: ", error);
  }
};

(async () => {
  const icons = await getIcons();
  for (const iconFile of icons) {
    const iconName = iconFile.replace(".tsx", "");
    await build({
      build: {
        outDir: resolve("./dist/icons"),
        lib: {
          entry: resolve(rawIconsPath, `./${iconFile}`),
          name: iconName,
          fileName: iconName,
          formats: ["es", "umd"],
        },
        emptyOutDir: false,
        rollupOptions: {
          external: ["react", "react/jsx-runtime", "react-dom"],
          output: {
            globals: {
              react: "react",
              "react-dom": "ReactDOM",
              "react/jsx-runtime": "react/jsx-runtime",
            },
          },
        },
      },
    });
  }
})();
