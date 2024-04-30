// 67. Write a JavaScript program to create a new string from a given string. 
// This program removes the first and last characters of the string if the first or last character is 'P'. 
// Return the original string if the condition is not satisfied. 
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
var start = userstring.charAt(0) === 'P';
var end = userstring.charAt(userstring.length - 1) === 'P';

if(start || end)
{
    var a = userstring.slice(1, -1);
    console.log(a);

}
else
{
    console.log("String doesn't contain 'p' on 1st or last.");
    console.log(userstring);
}