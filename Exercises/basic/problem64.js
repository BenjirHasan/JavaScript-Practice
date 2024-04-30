// 64. Write a JavaScript program to concatenate two strings and return the result. 
// If the length of the strings does not match, then remove the characters from the longer string. 
// solution: 
const prompt = require("prompt-sync")({sigint:true});

var userstring1 = prompt("Enter First String : ");
var userstring2 = prompt("Enter Second String : ");

if(userstring1.length != userstring2.length)
{
    let x = Math.min(userstring1.length, userstring2.length);
    var newString = userstring1.substring(0, x) + userstring2.substring(0, x); 
}
else
{
    console.log(userstring1 + userstring2);
}
console.log(newString);