// 34. Write a JavaScript program to find the largest number from the two given positive integers. 
// The two numbers are in the range 40..60 inclusive. 
// solution :
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));

    if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) 
            
    {
        console.log(Math.max(num1, num2));
    } 
    else 
    {
        console.log("Enter number between 40...60");
    }