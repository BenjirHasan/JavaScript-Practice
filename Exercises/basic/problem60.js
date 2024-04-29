// 60. Write a JavaScript program to create a new string without the first and last characters of a given string.  
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enetr String : ");
if (userstring.length > 2) 
{
    var removeString = userstring.slice(1, -1);
    console.log("Removing first and last characters:", removeString);
} 
else 
{
    console.log("Can't remove first and last characters:");
}