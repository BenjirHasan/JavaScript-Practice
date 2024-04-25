// 31. Write a JavaScript program to find the largest of three given integers.
//solution :
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));
var num3 = parseInt(prompt("Enter Third Number : "));

if(num1 >= num2 && num1 >= num3)
{
    console.log(num1 + " is the heighest number");
}
else if(num2 >= num1 && num2 >= num3)
{
    console.log(num2 + " is the heighest number");
}
else
{
    console.log(num3 + " is the heighest number");
}
