import { readdir } from "fs";
import path from "path";
// import { dirname }  from 'path'

export const ls = async (currentDir) => {
  // console.log(currentDir);

  await readdir(currentDir, (err, files) => {
    if (err) {
      throw err;
    }

    for (const file of files) {
      console.log(file);
    }
    console.log(`\nYou are currently in ${currentDir}`);
  });
};
