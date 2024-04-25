//28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). 
// Return true if either of them falls within the range.
// solution :
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));

function check(num1,num2)
{
    if((num1 > 50|| num2 > 50) && (num1 < 99 || num2 < 99))
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