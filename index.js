let rs = require("readline-sync");

let operator = "";
let firstNum = undefined;
let secondNum = undefined;

function getOp() {
   let input = rs.question("What operation would you like to perform? ");
   if (input === "/" || input === "*" || input === "-" || input === "+") {
      return (operator = input);
   } else {
      console.log("That is not a valid operation - try again");
      getOp();
   }
}

function getNums() {
   if (firstNum === undefined) {
      let input = rs.question("Please enter the first number- ");
      if (!isNaN(input)) {
         return (firstNum = Number(input));
      }
   } else if (secondNum === undefined) {
      let input = rs.question("Please enter the second number- ");
      if (!isNaN(input)) {
         return (secondNum = Number(input));
      }
   }
   console.log("This is not a number - try again");
   getNums();
}

function calculate() {
   getOp();
   getNums();
   getNums();
   let num = 0;
   if (operator === "/") {
      num = firstNum / secondNum;
      if (num.toString().length > 6) {
         return num.toFixed(5);
      }
      return num;
   } else if (operator === "*") {
      num = firstNum * secondNum;
      if (num.toString().length > 6) {
         return num.toFixed(5);
      }
      return num;
   } else if (operator === "+") {
      num = firstNum + secondNum;
      if (num.toString().length > 6) {
         return num.toFixed(5);
      }
      return num;
   } else if (operator === "-") {
      num = firstNum - secondNum;
      if (num.toString().length > 6) {
         return num.toFixed(5);
      }
      return num;
   }
}

console.log("The result is: " + calculate());
