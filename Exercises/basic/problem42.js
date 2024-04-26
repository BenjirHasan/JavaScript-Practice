// 42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
//Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
// solution: 
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));
var num3 = parseInt(prompt("Enter Third Number : "));

if(num1 < num2 && num2 < num3)
{
    console.log("Srtict Mode Applied : number is increasing");
}
else if(num1 > num2 || num1 < num2 || num2 < num3)
{
    console.log("Soft Mode Applied : number is increasing");
}
else
{
    console.log("No Mode Applied");
}