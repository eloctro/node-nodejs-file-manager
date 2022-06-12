import fs from "fs";
import path from "path";

export const cd = async (line, currentDir) => {
  let dir = line.slice(3);
  let newCurentDir = path.join(currentDir, dir);
  // console.log(newCrrentDir + ' new');
  // console.log(currentDir + ' dir');
  fs.stat(newCurentDir, (err) => {
    if (!err) {
      // console.log("Дир есть!!!");
      // console.log(newCrrentDir);
      console.log(`\nYou are currently in ${newCurentDir}`);
      currentDir = newCurentDir;
      console.log(currentDir + ' 3');
    } else if (err.code === "ENOENT") {
      console.log("Operation failed");
      console.log(`\nYou are currently in ${currentDir}`);
    }
  });
  console.log(currentDir + " 4");
  return currentDir;
};
