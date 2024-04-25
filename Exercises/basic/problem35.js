//35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
var specifystring = prompt("Enter String to Specify : ");

function specify(x, y) 
{
    if (x.length >= 4)   // check the given string length is more than 4
    {
        var a = x.substring(1, 4);  //specify position fron 2nd to 4th position
        
        if (a.includes(y)) 
        { 
            return 'exist';
        } 
        else 
        {
            return false;
        }
    } 
    else 
    {
        return false;
    }
}

var output = specify(userstring, specifystring);
console.log(output);