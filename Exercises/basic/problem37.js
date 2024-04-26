//37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. 
//If the string length is less than 3 convert all the characters to upper case.
//solution:
const prompt = require("prompt-sync")({sigint:true});
 
var userstring = prompt("Enter String : ");

if(userstring.length < 3)
{
    console.log (userstring.toUpperCase());
}
else
{
    console.log (userstring.substring(0, 3).toLowerCase() + userstring.substring(3).toUpperCase());
}