const process = require("node:process");

const [major, minor] = process.versions.node.split(".").map(Number);
const supported = major > 20 || (major === 20 && minor >= 9);

if (!supported) {
  console.error(
    `Cal.diy requires Node.js >=20.9.0 (current ${process.version}). Install Node.js 22 LTS, then run: nvm install 22 && nvm use 22`
  );
  process.exit(1);
}
