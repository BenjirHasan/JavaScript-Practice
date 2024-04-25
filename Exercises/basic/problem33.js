//33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
// solution :
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));

function check(num1,num2)
{
    if((num1 > 40 && num1 < 60 || num2 > 40 && num2 < 60) || 
    (num1 > 70 && num1 < 100 || num2 > 70 && num2 < 100)) 
    {
        return true;
    }
    else
    {
        return false;
    }
}
var output = check(num1,num2);
console.log(output);