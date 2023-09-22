// write data
const fs = require("fs")
fs.writeFile("data.txt","Hey venkatesh",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file is written");
});
// read file
fs.readFile("data.txt",(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString());
});
// update file
fs.appendFile("data.txt"," \nhey siri",(err,data)=>{
    if(err){
        console.log(err)
    }
    // console.log(data.toString());
});
fs.unlinkSync("data.txt",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("File is")
})