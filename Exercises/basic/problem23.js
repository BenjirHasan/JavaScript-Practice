// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. 
// The string length must be broader than or equal to 1.
//solution:
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
function swap(x)
{
    var a = x.charAt(0);  //1st index character
    var b = x.charAt(x.length - 1);  //last index character
    if(x.length <= 1)
    {
        return x;
    }
    else
    {
        var c = b + x.substring(1, x.length - 1) + a;   //here, last character should come first and first character should go at end, and other character should remain same position
        return c;
    }
}
var final = swap(userstring);
console.log(final);
