// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string. 
// solution:
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
if (/a.{3}b|b.{3}a/.test(userstring))
{
    console.log("The Character 'a' and 'b' are separeted");
}
else
{
    console.log("The Character 'a' and 'b' are not separeted");
}

// solution V2:
var userstring = prompt("Enter String : ");
function test(x)
{
    for (let i = 0; i < x.length - 3; i++) 
    {
        if (x[i] === 'a' && x[i + 4] === 'b') 
        {
          return true;
        }
    }
      return false;
}
var output = test(userstring);
console.log(output);