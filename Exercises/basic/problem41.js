// 41. Write a JavaScript program to check a set of three numbers; 
//if the three numbers are the same return 30; otherwise return 20; 
//and if two numbers are the same return 40.
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));
var num3 = parseInt(prompt("Enter Third Number : "));

if(num1 == num2 && num2 == num3 && num1 == num3)
{
    console.log(30);
}
else if(num1 == num2 || num2 == num3 || num1 == num3)
{
    console.log(40);
}
else
{
    console.log(20);
}