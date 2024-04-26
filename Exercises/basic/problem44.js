// 44. Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two. 
// solution :
const prompt = require("prompt-sync")({sigint:true});

var num1 = parseInt(prompt("Enter First number: "));
var num2 = parseInt(prompt("Enter Second number: "));
var num3 = parseInt(prompt("Enter Third number: "));

function Greatest(num1,num2,num3) 
{
    if ((num1 >= 20 && num1 < num2 && num1 < num3) ||
        (num2 >= 20 && num2 < num1 && num2 < num3) ||
        (num3 >= 20 && num3 < num1 && num3 < num2)) 
        {
            return true;
        } 
    else 
    {
        return false;
    }
}

var output = Greatest(num1, num2, num3);
console.log(output);
