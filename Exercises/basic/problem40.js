// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));
let addition = num1 + num2;
let substract = num1 - num2;

if(num1 == 8 || num2 == 8)
{
    console.log("One of the number from two integer is 8");
}
else if(addition == 8)
{
    console.log("The addition is : " + addition);
}
else
{
    console.log("The substract is : " + substract);
}
