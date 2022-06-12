// import { createReadStream, lstat } from "fs";
import path from "path";
import { stdout } from "process";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createInterface } from "readline";
import { userName, homeDir } from "../readStart/index.js";
import { ls } from "../ls/index.js";
import { cd } from "../cd/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const reader = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentDir = homeDir;

export const readLine = async () => {
  reader.on("line", (line) => {
    if (line === ".exit") {
      process.exit();
    } else if (line === "up") {
      currentDir = path.parse(currentDir).dir;
      console.log(`\nYou are currently in ${currentDir}`);
    } else if (line === "ls") {
      ls(currentDir);
    } else if (line.slice(0, 3) === "cd ") {
      // console.log(currentDir + '1');
      cd(line, currentDir).then((value) => {
        console.log(value + ' val');
        currentDir = value;
        console.log(currentDir + " 1");
      });
      console.log(currentDir + " 2");
    }
  });
};

process.on("exit", () =>
  stdout.write(`\nThank you for using File Manager, ${userName}!`)
);
