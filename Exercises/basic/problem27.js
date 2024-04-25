// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
//solution: 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
var a = "Java";
var b = a + userstring;

if(a + userstring == b)
{
    console.log(b);
}

else
{
    console.log(userstring);
}