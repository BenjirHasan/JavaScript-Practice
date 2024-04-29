// 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. 
// The string length must be 3 and above. 
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
if(userstring.length < 3)
{
    console.log("Invalid String. character must be more than 3.");
} 
else
{
    var character = userstring.substring(userstring.length -3);
    var repeatString = character.repeat(4);
}
console.log("New String is : " + repeatString)