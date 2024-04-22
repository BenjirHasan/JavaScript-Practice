//creating an array with values
var course = ["CSE", "EEE", "IPE", "LAW"];
console.log(course);

//using array constructor
var course = new Array ("CSE", "EEE", "IPE", "LAW");
console.log(course);

//accessing particular element
var course = ["CSE", "EEE", "IPE", "LAW"];
console.log(course[0]);
console.log(course[1]);  
console.log(course[2]);
console.log(course[3]);

//accessing only detecting elements
var course = ["CSE", "EEE", "IPE", "LAW"];
var firstCourse = course[0];  //accessing first element
var lastCourse = course[3];   //accessing last element
console.log("The First Element Is : " + firstCourse);
console.log("The last Element Is : " + lastCourse);

//Modify array element
var course = ["CSE", "EEE", "IPE", "LAW"];
console.log(course);
course[2] = "pharmacy";   // changing array elements
console.log(course);
course.push("ASP.net");  //adding a element in the last of the array
course.unshift("SQT");   //adding a element in the first of the array
var firstCourse = course.shift();   //removing a element in the first of the array
var lastCourse = course.pop();   //removing a element in the last of the array
console.log(course);

var len = course.length;  //array length
console.log("Array Length is : " + len);

//iteratig with array elements
var course = ["CSE", "EEE", "IPE", "LAW"];
for( let i = 0 ; i < course.length; i++)
{
    console.log(course[i]);
}

//using forEach loop in array
var course = ["CSE", "EEE", "IPE", "LAW"];
course.forEach(function mycourse(elements)
{
    console.log(elements);
});

//array concatanation
var course1 = ["CSE", "EEE", "IPE", "LAW"];
var course2 = ["SQT", "ASP.net"];

let courses = course1.concat(course2);  //adding some elements using array concatanation
console.log("AFTER CONCATANATION, TOTAL COURSES ARE : " + courses);

//convertion of Array to String
var course = ["CSE", "EEE", "IPE", "LAW"];
console.log(course.toString());
console.log(typeof course);
