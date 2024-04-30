// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3. 
// solution: 
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));
var num3 = parseInt(prompt("Enter Third Number : "));
var sum = [num1 + num2 + num3];
console.log(sum);

//solution V2:
var num = prompt("Enter Numbers : ");
var nums = num.split(" ").map(Number);
if (nums.length >= 3)
{
    var sum = nums[0] + nums[1] + nums[2];
    console.log(sum);
}
else
{
    console.log("enter at least 3 integer");
}