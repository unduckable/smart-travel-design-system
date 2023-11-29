import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { transform } from "@svgr/core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rawIconsPath = path.resolve(__dirname, "../src/icons");

const getIconList = async () => {
  try {
    // Read the contents of the icons directory
    const tsxFiles = fs.readdirSync(rawIconsPath).filter((file) => file.endsWith(".tsx"));

    // delete old tsx files
    for (const tsxFile of tsxFiles) {
      const name = tsxFile.split(".")[0];
      console.log(`import ${name} from "../icons/${name}"`);

      //       console.log(`
      // <IconItem name="${name}">
      //   <Icon source={${name}} />
      // </IconItem>
      //       `);
    }

    console.log("Getting list completed.");
  } catch (error) {
    console.error("Error during getting list:", error);
  }
};

getIconList();
