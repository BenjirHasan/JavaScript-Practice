//20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  
// solution : 
const prompt = require("prompt-sync")({sigint:true}); 

var input1 = parseInt(prompt("Enter frist number: "));
var input2 = parseInt(prompt("Enter second number: "));
function check(num1, num2)
{
    if((num1>0 && num2<0) && (num1<0 && num2>0))
    {
        return true;
    }
    else
    {
        return false;
    }
}
var result = check(input1, input2);
console.log("The Result is : " + result);
