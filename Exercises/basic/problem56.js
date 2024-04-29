// 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.  
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));
let result = num1/num2;
function divided(result)
{
    return result.toLocaleString();
}
var output = divided(result);
console.log(output);