// 61. Write a JavaScript program to concatenate two strings except for their first character.
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var userstring1 = prompt("Enter First String : ");
var userstring2 = prompt("Enter SecOND String : ");
let x = userstring1.substring(1, userstring1.length);
let y = userstring2.substring(1, userstring2.length);
console.log(x + y);