// join method
var course = ["CSE", "EEE", "IPE", "LAW"];
console.log(course.join('/'));

//delete Objectfrom Array
var employee = 
{
    fname: "Benjir",
    lname: "Hasan",
    age: 27,
    job: "Engineer",
    salary: 5000
}
console.log(delete employee.salary);
console.log(delete employee.hobby);  //hobby is not exist as property, but still JS take it as property while deleting
console.log(employee);

//flat method
var array = [['1', '2'], ['3', '4', '5', ['6'], '7']];
var flatarray = array.flat(Infinity);
console.log(flatarray);

//push/unshift/pop/shift method
var course = ["CSE", "EEE", "IPE", "LAW"];
course.push("SQT");
course.unshift("ASP.net");
console.log(course);
course.pop();
course.shift();
console.log(course);

//splice method
var course = ["CSE", "EEE", "IPE", "LAW"];
course.splice(1, 3);  //we remove 3 elements from index 1
course.splice(1, 0, "English", "Bangla", "Accounting");  //we add 3 elements in index 1 and here '0' means we don't want ro remove any elements
console.log(course);

//array.some() method
var numbers = [10, 20, 30, 40, 50];
var isGreaterThanThirty = numbers.some((number) =>   // Check if at least one number is greater than 30
    {
  return number > 30;
});

console.log(isGreaterThanThirty); 

var hasNegativeNumber = numbers.some((number) =>   // Check if at least one number is negative
    {
  return number < 0;
});

console.log(hasNegativeNumber); 

// array.reduce() method
var num = [1,2,3,4,5,];
var sum = num.reduce((x, y) =>  //here x is the previous value, y is the current value
{
    return x + y;
},2);                  // here we set x = 2;
console.log(sum);

// using array.map() method
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); 