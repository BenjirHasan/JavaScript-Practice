// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. 
//The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 

//solution: 
const prompt = require("prompt-sync")({sigint:true});

// var num = Math.ceil(Math.random() * 10); //random number between 1-10
// console.log(num);
// var input = parseInt(prompt("Enter a number: ")); //user input

// if (input == num) 
// {
//     console.log("Great work!");
// } 
// else
// {
//     console.log("Not matched");
// }

// 10. Write a JavaScript program to calculate multiplication and division of two numbers

//Solution:
// var input1 = parseInt(prompt("Enter the number of input1 : "));
// var input2 = parseInt(prompt("Enter the number of input2 : "));
// let a = input1 * input2;
// let b = input1/input2
// console.log(a);
// console.log(b);

//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// solution: 
// var celsius = parseFloat(prompt("Enter celsius = "));

// var Fahrenheit = (celsius*(9/5)) + 32;
// console.log("The Fahrenheit temperature is : " + Fahrenheit.toFixed(2));

// var fahrenheit = parseFloat(prompt("Enter Fahrenheit = "));

// var celsius = (fahrenheit - 32) * (5/9);


// console.log("The Celciuos temperature is : " + celsius.toFixed(2));

//12. Write a JavaScript program to get the website URL (loading page).  
// solution: 
//console.log(`${document.URL}`);  // it works on web console panel

//13. Write a JavaScript exercise to create a variable using a user-defined name.
//solution:
// var name = "Benjir";
// var num = 494;
// this.name = num;
// console.log(this.name);

// 15. Write a JavaScript program to get the difference between a given number and 13, 
// if the number is broader than 13 return double the absolute difference.
//solution:
// var num = 13;
// var input = parseInt(prompt("Enter a number: "));
// var difference = Math.abs(num - input);
// if (input > num) 
// {
//     console.log(difference * 2);
// } 
// else
// {
//     console.log(difference);
// }

// 16. Write a JavaScript program to compute the sum of the two given integers. 
//If the two values are the same, then return triple their sum.  
//solution:
// var input1 = parseInt(prompt("Enter first number: "));
// var input2 = parseInt(prompt("Enter second number: "));

// function sum(num1, num2)
// {
//     let sum = num1 + num2;
//     if(num1 == num2)
//     {
//         return sum * 3;
//     }
//     else
//     {
//         return(sum);
//     }
// }
// var result = sum(input1, input2);
// console.log("The Result is : " + result);

//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
//Returns triple the absolute difference if the specified number is greater than 19.
// solution: 
// var num1 = 19;
// var num2 = parseInt(prompt("Enter number: "));;
// var difference = Math.abs(num1 - num2);
// if (num2 > num1) 
// {
//     console.log(difference * 3);
// } 
// else
// {
//     console.log(difference);
// }

//18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. 
// solution: 
// var input1 = parseInt(prompt("Enter first number: "));
// var input2 = parseInt(prompt("Enter second number: "));
// function sum(num1, num2)
// {
//     if (num1 == 50 || num2 == 50 || num1 + num2 == 50)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// var result = sum(input1, input2);
// console.log("The Resuls is : " + result);

//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 
//solution:
// var input = parseInt(prompt("Enter number: "));
// function check(num)
// {
//     if(100-num <= 20 && 400-num <=20)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// var result = check(input);
// console.log("The Result is : " + result);

//20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  
// solution : 
// var input1 = parseInt(prompt("Enter frist number: "));
// var input2 = parseInt(prompt("Enter second number: "));
// function check(num1, num2)
// {
//     if((num1>0 && num2<0) && (num1<0 && num2>0))
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// var result = check(input1, input2);
// console.log("The Result is : " + result);

//21. Write a JavaScript program to create another string by adding "Py" in front of a given string. 
//If the given string begins with "Py" return the original string. 
//solution:
// var x = prompt("Enter String : ");
// function str_check(str)
// {
//     if(str == null || str == undefined || str.substring(0, 2) == "Py")
//     {
//         return str;
//     }
//     else
//     {
//         return "Py" + str;
//     }
// }
// var output = str_check(x);
// console.log("FINAL STRING IS : " + output);

//22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string. 
//solution:
var x = prompt("Enter String : ");
console.log(x);
var a = prompt("Enter Position : ");
function remove(y,b)
{
    portion1 = y.substring(0,b);
    portion2 = y.substring(b+1, y);
    return portion1 + portion2;
}
var output = remove(a);
console.log("Final string is: " + output);
