import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILEPATH = path.resolve(__dirname, "./libs/imdb_top_1000.json");

console.log(FILEPATH);

//helper function for accessing data

async function getData() {
  try {
    const data = await fs.readFile(FILEPATH, "utf8");
    return JSON.parse(data);
  } catch {
    console.error("Error reading file:", error);
    return null;
  }
}

//helper function for editing data

async function writeData(data) {
  try {
    await fs.writeFile(FILEPATH, JSON.stringify(data), "utf8");
    return true;
  } catch (error) {
    console.error("Error writing file:", error);
    return false;
  }
}

export { getData, writeData };
