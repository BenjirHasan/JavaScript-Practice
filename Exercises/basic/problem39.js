//39. Write a JavaScript program to compute the sum of the two given integers. 
//If the sum is in the range 50..80 return 65 otherwise return 80. 
//solution :
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));
//let sum = num1 + num2 ;

function add(num1, num2)
{
    let sum = num1 + num2;

    if(sum >=50 && sum <= 80)
    {
        return 65;
    }
    else
    {
        return 80;
    }
}
var result = add(num1,num2)
console.log(result);

// solution V2
var num1 = parseInt(prompt("Enter First Number : "));
var num2 = parseInt(prompt("Enter Second Number : "));
let sum = num1 + num2;

if(sum >= 50 && sum <=80)
{
    console.log(65);
}
else
{
    console.log(80);
}
