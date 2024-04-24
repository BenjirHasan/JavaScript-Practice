//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 
//solution:
const prompt = require("prompt-sync")({sigint:true}); 

var input = parseInt(prompt("Enter number: "));
function check(num)
{
    if(100-num <= 20 && 400-num <=20)
    {
        return true;
    }
    else
    {
        return false;
    }
}
var result = check(input);
console.log("The Result is : " + result);