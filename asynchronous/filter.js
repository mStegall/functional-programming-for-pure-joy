const path = require("path");
const Promise = require("bluebird");
const promiseRead = Promise.promisify(require("fs").readFile);
const files = require("./files");

function readFile(file) {
  return promiseRead(path.join(__dirname, "data", file + ".txt"), "utf-8");
}

function length(array) {
  return array.length;
}

const isEven = num => !(num % 2);

const fileData = Promise.map(files, readFile)
  .map(data => parseInt(data))
  .filter(isEven)
  .then(length)
  .then(console.log);