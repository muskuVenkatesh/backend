// 1. import mode fs to read the file in os
const fs = require("fs");
// 2. to read file content using block code
// const buffer = fs.readdirSync("data.txt",{encoding:"utf8"});
// console.log(buffer);

// creating and writing  file
fs.writeFileSync("details.txt","name:venkatesh, age:23");
// append new data to a file

fs.appendFileSync("details.txt", "name:siri, age:23");
fs.appendFileSync("data.txt", "name:siri, age:23");

// delete a file 
// fs.unlinkSync("data.txt");