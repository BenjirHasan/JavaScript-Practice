// 48. Write a JavaScript program to reverse a given string. 
//solution:
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");

function reverseString(x) 
{
    return x.split("").reverse().join("");
}

var output = reverseString(userstring);
console.log(output);
