// 38. Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. 
// The grading criteria are as follows:
//     1. If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
//     2 . If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
//     3 . If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.
// solution : 
const prompt = require("prompt-sync")({sigint:true});

var marks = parseInt(prompt("Enetr Marks : "));
var examType = "Final-exam";

if (marks >= 90)
{
    if(examType == "Final-exam")
    {
        console.log("It is a Final-exam");
        console.log("Your Obtain Marks is : " + marks);
        console.log("You Got A+");
    }
    
    else
    {
        console.log("It is not Final-exam");
    }
}
else
{
    if (marks >=89 && marks <= 100)
    {
        console.log("Your Grade is A+");
    }
    else
    {
        console.log("You miss A+");
    }
}
