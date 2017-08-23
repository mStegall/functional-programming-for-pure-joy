const path = require("path");
const Promise = require("bluebird");
const promiseRead = Promise.promisify(require("fs").readFile);
const files = require("./files");

function readFile(file) {
  return promiseRead(path.join(__dirname, "data", file + ".txt"), "utf-8");
}

const fileData = Promise.map(files, readFile)
  .map(readFile)
  .map(data => parseInt(data))
  .then(console.log);
