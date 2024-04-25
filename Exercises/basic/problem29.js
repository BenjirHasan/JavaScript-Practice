//29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). 
// Return true if one or more of them are in the specified range
//solution: 
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));
var num3 = parseInt(prompt("Enter Third Number : "));

function check(num1,num2,num3)
{
    if((num1 > 50 || num2 > 50 || num3 > 50) && (num1 <99 || num2 < 99 || num3 < 99))
    {
        return true;
    }
    else
    {
        return false;
    }
}
var output = check(num1,num2,num3);
console.log(output);
