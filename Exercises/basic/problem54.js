// 54. Write a JavaScript program to count the number of vowels in a given string.
// solution: 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
var vowels = 0;
for (i = 0; i < userstring.length; i++)
{
    if(userstring[i] === 'a' || userstring[i] === 'e' || userstring[i] === 'i' || userstring[i] === 'o' || userstring[i] === 'u' || userstring[i] === 'A' || userstring[i] === 'E' || userstring[i] === 'I' || userstring[i] === 'O' || userstring[i] === 'U')
    {
        vowels++
    }
}
console.log("The Number of Vowels is : " + vowels);