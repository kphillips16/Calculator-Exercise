let rs = require("readline-sync");

const operators = ["/", "*", "-", "+"];

let operator = getOp(operators);
let firstNum = getNums("first");
let secondNum = getNums("second");

function getOp(ops) {
   let input = rs.question("What operation would you like to perform? ");
   if (ops.includes(input)) {
      return input;
   } else {
      console.log("That is not a valid operation - try again");
      return getOp(ops);
   }
}

function getNums(str) {
   let input = rs.question("Please enter the " + str + " number- ");
   if (!isNaN(input)) {
      return Number(input);
   }
   console.log("This is not a number - try again");
   return getNums(str);
}

function calculate(operator, firstNum, secondNum) {
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

console.log("The result is: " + calculate(operator, firstNum, secondNum));
