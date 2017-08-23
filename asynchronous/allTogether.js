const path = require("path");
const Promise = require("bluebird");
const promiseRead = Promise.promisify(require("fs").readFile);
const files = require("./files");

function readFile(file) {
  return promiseRead(path.join(__dirname, "data", file + ".txt"), "utf-8");
}

const sum = (a, b) => a + b;
const isEven = num => !(num % 2);

const fileData = Promise.map(files, readFile)
  .map(readFile)
  .map(data => parseInt(data))
  .filter(isEven)
  .reduce(sum)
  .then(console.log);
