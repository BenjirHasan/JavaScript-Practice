// 59. Write a JavaScript program to extract the first half of a even string. 
// solution:
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
if(userstring.length % 2 == 0)
{
    console.log(userstring.slice(0, userstring.length / 2));
}
else
{
    console.log(userstring);
}