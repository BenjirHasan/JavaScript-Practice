// 15. Write a JavaScript program to get the difference between a given number and 13, 
// if the number is broader than 13 return double the absolute difference.
//solution:
const prompt = require("prompt-sync")({sigint:true}); 

var num = 13;
var input = parseInt(prompt("Enter a number: "));
var difference = Math.abs(num - input);
if (input > num) 
{
    console.log(difference * 2);
} 
else
{
    console.log(difference);
}
