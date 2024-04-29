//50. Write a JavaScript program to capitalize the first letter of each word in a given string.  
//solution:
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
function capital(x)
{
    var a = x.split(' ');
    for (var i = 0; i < a.length; i++)
    {
        a[i] = a[i][0].toUpperCase() + a[i].substring(1);
    }
    return a.join(" ");
}
var output = capital(userstring);
console.log(output);