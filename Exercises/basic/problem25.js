//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  
//solution:
const prompt = require("prompt-sync")({sigint:true});

var num = parseInt(prompt("Enter Number : "));
if(num %3 == 0 || num %7 == 0)   //here, we check the condition for the number that multiplies of 3 or 7
{
   console.log("The Nmuber is Multiple of 3 or 7" + num); 
}
else
{
    console.log("The Nmuber is not Multiple of 3 or 7");
}