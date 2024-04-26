//46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.
// solution: 
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));
if (!((num1 % 7 == 0 || num1 % 11 == 0) && (num2 % 7 == 0 || num2 % 11 == 0))) 
{
    if ((num1 % 7 == 0 || num1 % 11 == 0) || (num2 % 7 == 0 || num2 % 11 == 0)) 
    {
        console.log("One number is a multiple of 7 or 11");
    } 
    else 
    {
        console.log("Neither number is a multiple of 7 or 11");
    }
} 
else if(num1 != num2) 
{
    console.log("Both numbers are not the same");
}
else
{
    console.log("Both number are same");
}