// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. 
//The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 

//solution: 
const prompt = require("prompt-sync")({sigint:true});

var num = Math.ceil(Math.random() * 10); //random number between 1-10
console.log(num);
var input = parseInt(prompt("Enter a number: ")); //user input

if (input == num) 
{
    console.log("Great work!");
} 
else
{
    console.log("Not matched");
}