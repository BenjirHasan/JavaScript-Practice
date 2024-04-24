//22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string. 
//solution:
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
var readposition = parseInt(prompt("Enter Position : "));
var x = userstring.substring(0, readposition-1) + userstring.substring(readposition);
//var x = userstring.slice(userstring.length, readposition);
console.log("Modified String is : " + x);