// 52. Write a JavaScript program to convert letters of a given string alphabetically.
// solution: 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
console.log(userstring.split('').sort().join(''));
