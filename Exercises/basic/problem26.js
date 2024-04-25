//26. Write a JavaScript program to create a string from a given string. 
//This is done by taking the last 3 characters and adding them at both the front and back. 
//The string length must be 3 or more.
//solution : 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
function newString(x)
{
    var a = x.charAt(0);
    var b = x.slice(-3);

    if(x.length <= 1)
    {
        return x;
    }
    else
    {
        var c = b + x.substring(0, x.length) + b;
        return c;
    }
}
var finalString = newString(userstring);
console.log(finalString);