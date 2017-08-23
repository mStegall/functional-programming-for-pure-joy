const fs = require("fs");
const path = require("path");
const Promise = require("bluebird");
// const promiseWrite = fs.writeFileSync;
const promiseWrite = Promise.promisify(fs.writeFile);

function getRandomInt() {
  return Math.floor(Math.random() * 1000);
}

const numbers = Array(1000).fill(0).map(getRandomInt);

Promise.map(numbers, function(number, index) {
  return promiseWrite(path.join(__dirname, "data", index + ".txt"), number);
}).then(() => console.log("Done!"));
