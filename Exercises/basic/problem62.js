// 62. Write a JavaScript program to move the last three characters to the start of a given string. 
// The string length must be greater than or equal to three.  
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enter String : ");
let x = userstring.slice(-3);
let y = userstring.slice(0, -3);
console.log(x + y);