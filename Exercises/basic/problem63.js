// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. 
// The string length must be greater than or equal to three. 
// solution :
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
if (userstring.length >= 3 && userstring.length % 2 !== 0) 
{
    var middle = Math.floor(userstring.length / 2);  
    var middleString = userstring.substring(middle - 1, middle + 2);
    console.log(middleString);
}
else
{
    console.log("String Length is less than 3 and not odd.");
} 
