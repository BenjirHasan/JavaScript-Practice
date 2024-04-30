// 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var num = prompt("Enter Numbers : ");
var nums = num.split(" ").map(Number);
if (nums.length >= 3)
{
    console.log(nums[2] , nums[1] , nums[0]);
    
}
else
{
    console.log("enter at least 3 integer");
}