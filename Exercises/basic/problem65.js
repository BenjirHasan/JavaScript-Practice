// 65. Write a JavaScript program to test whether a string ends with "Script". 
// The string length must be greater than or equal to 6
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
var b = userstring.includes('Script');

if(userstring.length >= 6)
{
    if(b)
    {
        console.log("String ends with 'script'");
    }
    else
    {
        console.log("String doesn't ends with 'script'");
    }
}
else
{
    console.log("Given String is less than 6.");
}
