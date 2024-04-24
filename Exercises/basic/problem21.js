//21. Write a JavaScript program to create another string by adding "Py" in front of a given string. 
//If the given string begins with "Py" return the original string. 
//solution:
const prompt = require("prompt-sync")({sigint:true}); 

var x = prompt("Enter String : ");
function str_check(str)
{
    if(str == null || str == undefined || str.substring(0, 2) == "Py")
    {
        return str;
    }
    else
    {
        return "Py" + str;
    }
}
var output = str_check(x);
console.log("FINAL STRING IS : " + output);
