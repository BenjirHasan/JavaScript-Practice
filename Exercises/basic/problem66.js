// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
var a = userstring.includes('Los');
var b = userstring.includes('New');
var c = a || b;
if(c)
{
    console.log("Given String contains 'Los' or 'New' : " + userstring);
}
else
{
    console.log("Given String doesn't contains 'Los' or 'New'.");
}