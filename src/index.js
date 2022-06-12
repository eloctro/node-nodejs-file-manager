
// import { createReadStream } from "fs";
// import { startMessage } from "./startMessage/index.js";
// import { readEnv } from "./readEnv/index.js";
// import { pipeline } from "stream";
// import { readLine } from "readline";
import os from 'os'
import { readStart } from "./readStart/index.js";
import { readLine } from "./readLine/index.js";

readStart(process.argv);
readLine();

// startMessage();
// const readCli = async () => {
//   process.stdin.pipe(process.stdout)
// };
// readEnv(process.env)
