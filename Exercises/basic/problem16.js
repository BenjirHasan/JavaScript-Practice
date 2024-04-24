// 16. Write a JavaScript program to compute the sum of the two given integers. 
//If the two values are the same, then return triple their sum.  
//solution:
const prompt = require("prompt-sync")({sigint:true}); 

var input1 = parseInt(prompt("Enter first number: "));
var input2 = parseInt(prompt("Enter second number: "));

function sum(num1, num2)
{
    let sum = num1 + num2;
    if(num1 == num2)
    {
        return sum * 3;
    }
    else
    {
        return(sum);
    }
}
var result = sum(input1, input2);
console.log("The Result is : " + result);