//45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));
let addition = num1 + num2;
let substract = num1 - num2;

function check(num1, num2)
{
    if(num1 == 15 || num2 == 15)
    {
        return true;
    }
    else if(addition == 15 || substract == 15)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}
var output = check(num1, num2);
console.log(output);