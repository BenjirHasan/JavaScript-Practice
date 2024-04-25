//30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. 
// If "Script" appears in the string, return the string without "Script" otherwise return the original one. 
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
function newString(x)
{
    var a = x.charAt(0);
    var b = x.indexOf("Script");  //find "Script" string

    if(b!== -1)  //"Script" index is not equal -1, so means "Script" is found
    {
        var c = x.substring(0, b) + x.substring(b + 6);   // concate the two portion (before "Script" & (after "script"))
        return c;
        
    }
    else
    {
        return x;
    }
}
var finalString = newString(userstring);
console.log(finalString);
