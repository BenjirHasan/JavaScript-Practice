// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.  
//solution : 
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));
let x = Math.abs(num1 - 100);
let y = Math.abs(num2 - 100);

if( x > y)
{
    console.log(num2 + " is the closest value to 100");
}
else if(x < y)
{
    console.log(num1 + " is the closest number to 100");
}
else
{
    console.log("Both numbers are equal");
}
