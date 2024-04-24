// 10. Write a JavaScript program to calculate multiplication and division of two numbers

//Solution:
const prompt = require("prompt-sync")({sigint:true});

var input1 = parseInt(prompt("Enter the number of input1 : "));
var input2 = parseInt(prompt("Enter the number of input2 : "));
let a = input1 * input2;
let b = input1/input2
console.log(a);
console.log(b);
