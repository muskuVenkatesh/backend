const path = require("path");
const fs = require("fs");

// const pathJoin = path.join("src","data.txt");
// console.log(pathJoin);
const pathResolved = path.resolve("src","file.txt");
console.log(pathResolved);

// fs.appendFile("file.txt","hey developer",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("file is updated");
    fs.readFile(pathResolved,(err,data)=>{
        if(err){
            console.log(err);
        }else{
        console.log(data.toString());
        }
    });