import os from 'os'

let userName;
let homeDir = os.homedir();


export const readStart = async (args) => {
  userName = args.slice(2, 3)[0].split("=")[1];
  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`\nYou are currently in ${homeDir}`);
};

export { userName, homeDir };
