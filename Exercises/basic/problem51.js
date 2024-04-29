//51. Write a JavaScript application that transforms a provided numerical value into hours and minutes.
//solution: 
const prompt = require("prompt-sync")({sigint:true});

var number = parseInt(prompt("Enter Number : "));
var hour = Math.floor(number/60);
var minute = Math.floor(number % 60);

console.log("The Time is : " + hour + ":" + minute);