const fs = require("fs");
const buffer = fs.readFileSync("data.txt", { encoding: "utf-8" });

console.log(buffer.toString());

setTimeout(() => {
  console.log("After 1000ms:", buffer);
}, 1000);

console.log("this is blocking code");
