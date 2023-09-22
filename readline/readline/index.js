const readline = require("readline");

const Solution = () => {
  // Write your code here
  const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  interface.question('Enter the first number: ', (num1) => {
    interface.question('Enter the second number: ', (num2) => {
      const maximum = Math.max(Number(num1), Number(num2)); // Use Math.max()
      console.log(`The maximum of the two numbers is: ${maximum}`);
 // Print the maximum value
      interface.close(); // Close the interface when done
    });
  });
};

Solution();
module.exports = Solution;

