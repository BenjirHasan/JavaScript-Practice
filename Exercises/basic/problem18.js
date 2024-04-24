//18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. 
// solution: 
const prompt = require("prompt-sync")({sigint:true}); 

var input1 = parseInt(prompt("Enter first number: "));
var input2 = parseInt(prompt("Enter second number: "));
function sum(num1, num2)
{
    if (num1 == 50 || num2 == 50 || num1 + num2 == 50)
    {
        return true;
    }
    else
    {
        return false;
    }
}
var result = sum(input1, input2);
console.log("The Resuls is : " + result);