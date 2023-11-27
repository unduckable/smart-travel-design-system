import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { transform } from "@svgr/core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rawIconsPath = path.resolve(__dirname, "../assets/icons");
const tsxIconsPath = path.resolve(__dirname, "../src/icons");
const reservedName = ["Map"];

function convertToCamelCase(inputString) {
  const strippedExt = inputString.split(".")[0];
  const group = strippedExt.split("-");
  const name = group.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");

  if (reservedName.includes(name)) return `${name}Icon`;
  return name;
}

// Function to read the directory and process each SVG file
const processIcons = async () => {
  try {
    // Read the contents of the icons directory
    const files = fs.readdirSync(rawIconsPath);

    const tsxFiles = fs.readdirSync(tsxIconsPath).filter((file) => file.endsWith(".tsx"));

    // delete old tsx files
    for (const tsxFile of tsxFiles) {
      const filePath = path.join(tsxIconsPath, tsxFile);
      fs.unlinkSync(filePath);
      console.log(`Deleted existing tsx file: ${tsxFile}`);
    }

    // Filter only SVG files
    const svgFiles = files.filter((file) => file.endsWith(".svg"));

    // Process each SVG file
    for (const svgFile of svgFiles) {
      const filePath = path.join(rawIconsPath, svgFile);

      // Read the SVG content
      const svgContent = fs.readFileSync(filePath, "utf-8");
      const camelCaseName = convertToCamelCase(svgFile);

      // Convert SVG to tsx using svgr
      const tsxContent = await transform(
        svgContent,
        {
          icon: true,
          plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
          typescript: true,
          dimensions: false,
          ref: true,
          svgProps: {},
        },
        { componentName: camelCaseName },
      );

      const sanitizedTsxContent = tsxContent.replace(/#8A8AA3/g, "currentColor");

      // Write the tsx content to a new file with a .tsx extension
      const tsxFileName = `${camelCaseName}.tsx`;
      const tsxFilePath = path.join(tsxIconsPath, tsxFileName);
      fs.writeFileSync(tsxFilePath, sanitizedTsxContent);

      console.log(`Converted ${svgFile} to ${tsxFileName}`);
    }

    console.log("Conversion completed.");
  } catch (error) {
    console.error("Error during conversion:", error);
  }
};

// Run the conversion process
processIcons();
