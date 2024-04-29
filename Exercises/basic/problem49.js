//49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
//solution: (take help from solution and chatgpt )
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");

function replaceString(x) 
{
    var a = x.split("");
    for (var i = 0; i < a.length; i++) 
    {
        switch (a[i]) 
        {
            case 'z':
                a[i] = 'a';
                break;
            case 'Z':
                a[i] = 'A';
                break;
            default:
                a[i] = String.fromCharCode(1 + a[i].charCodeAt(0));
        }
        switch (a[i]) 
        {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                a[i] = a[i].toUpperCase();
        }
    }
    return a.join("");
}

var output = replaceString(userstring);
console.log(output);

// solution V2:
var userstring = prompt("Enter String : ");
function replaceString(y)
{
    return y.replace(/[a-z A-Z]/g, function(x)
    {
        var a = x <"a" ? 65:97;
    return String.fromCharCode((x.charCodeAt(0) - a + 1)%26 + a);
    });
    
}
var output = replaceString(userstring);
console.log(output);
