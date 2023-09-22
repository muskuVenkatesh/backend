// // Import the necessary modules here
// const fs = require("fs");

// const Solution = () => {
//   // Write your code here

//   // Create the notes.txt file and write the initial phrase to it
//   fs.writeFileSync("notes.txt", "The world has enough coders ","utf8");
//   const cont = fs.readFileSync("notes.txt","utf-8");
//   console.log(cont);
  

//   // Append the additional phrase to the existing content
//   fs.appendFileSync("notes.txt", "BE A CODING NINJA", "utf8");
  

//   // Retrieve the contents of the "notes.txt" file and display them on the console
//   const content = fs.readFileSync("notes.txt","utf8");
  
//   console.log(content);
//   // fs.unlinkSync("notes.txt");
// };

// Solution();
// module.exports = Solution;
const fs = require("fs");

const Solution = () => {
  // Create a new file and write to it
  fs.writeFileSync("notes.txt", "The world has enough coders ");

  // Read the contents of the file and log to console
  const contents = fs.readFileSync("notes.txt", "utf8");
  console.log(contents);

  // Update the contents of the file
  fs.appendFileSync("notes.txt", "BE A CODING NINJA!");

  // Read the updated contents of the file and log to console
  const updatedContents = fs.readFileSync("notes.txt", "utf8");
  console.log(updatedContents);

  // Delete the file
  fs.unlinkSync("notes.txt");

  //  Note: This code uses blocking methods for simplicity and learning purposes. In real-world applications, it's recommended to use non-blocking methods for better performance.
};
Solution();
module.exports = Solution;
