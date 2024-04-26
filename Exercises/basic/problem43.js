//43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First number: "));
var num2 = parseInt(prompt("Enter Second number: "));
var num3 = parseInt(prompt("Enter Third number: "));

if(num1 > 0 && num2 > 0 && num3 > 0)
{
    if(num1 % 10 == num2 % 10 || num1 % 10 == num3 % 10 || num2 % 10 == num3 % 10)
    {
        console.log("Last Digit Of Three Integers are Same");
    }
    else if(num1 % 10 == num2 % 10 && num1 % 10 == num3 % 10 && num2 % 10 == num3 % 10)
    {
        console.log("Last Digit Of Three Integers are Same");
    }
    else
    {
        console.log("Last Digit Of Three Integers are not Same");
    }
}
else
{
    console.log("there is a 0 term in the given number");
}