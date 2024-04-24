//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// solution: 
const prompt = require("prompt-sync")({sigint:true});

var celsius = parseFloat(prompt("Enter celsius = "));

var Fahrenheit = (celsius*(9/5)) + 32;
console.log("The Fahrenheit temperature is : " + Fahrenheit.toFixed(2));

var fahrenheit = parseFloat(prompt("Enter Fahrenheit = "));

var celsius = (fahrenheit - 32) * (5/9);


console.log("The Celciuos temperature is : " + celsius.toFixed(2));
