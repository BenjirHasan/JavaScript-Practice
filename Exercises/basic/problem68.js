// 68. Write a JavaScript program to create a new string using the first and last n characters from a given string. 
// The string length must be larger than or equal to n. 
// solution: 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
var n = parseInt(prompt("Enter n value : "));

if(userstring.length >= n)
{
    var a = userstring.substring(0, n) + userstring.substring(userstring.length - n);
    console.log("New String : " + a);
}
else
{
    console.log("userstring is less than n.");
}