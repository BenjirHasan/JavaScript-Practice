//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
//Returns triple the absolute difference if the specified number is greater than 19.
// solution: 
const prompt = require("prompt-sync")({sigint:true}); 

var num1 = 19;
var num2 = parseInt(prompt("Enter number: "));;
var difference = Math.abs(num1 - num2);
if (num2 > num1) 
{
    console.log(difference * 3);
} 
else
{
    console.log(difference);
}
