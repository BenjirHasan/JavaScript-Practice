// 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.  
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
var copy = parseInt(prompt("Enter copy number : "));

if(userstring <= 0)
{
    console.log("Invalid. Number must be positive.")
}
else
{
   console.log(userstring.repeat(copy));
}