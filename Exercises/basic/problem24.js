//24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  
//solution:
const prompt = require("prompt-sync")({sigint:true});

var userstring = prompt("Enetr String : ");
var a = userstring.charAt(0);
console.log(a + userstring + a);