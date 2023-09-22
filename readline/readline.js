// 1. Impor tradline 
const readline = require("readline");

// 2. Configure interface to conect with terminal
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 3. reading values
interface.question("Enter the First number",(num1)=>{
    interface.question("Enter the seconf number",(num2)=>{
         const sum = Number(num1)+Number(num2)
         console.log(sum);
    });
});