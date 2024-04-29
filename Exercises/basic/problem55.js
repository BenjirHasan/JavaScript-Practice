// 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's. 
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
var p = 0;
var t = 0;

for (i = 0; i < userstring.length; i++)
{
    if(userstring[i] == 'p' || userstring[i] == 'P')
    {
        p++;
    }
    else if(userstring[i] == 't' || userstring[i] == 'T')
    {
        t++;
    }
}
var equal = p === t;
if(equal)
{
    console.log("Given String has same number of 'p' & 't'");
}
else
{
    console.log("Given String has not same number of 'p' & 't'");
}
console.log("Total number of 'p' is : " + p);
console.log("Total number of 't' is : " + t);
