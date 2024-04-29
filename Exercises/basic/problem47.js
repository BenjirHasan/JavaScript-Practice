// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000.
// solution:
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter Number : "));

if(num1 >= 40 && num1 <= 10000)
{
    console.log("number exist");
}
else
{
    console.log("number not exist");
}