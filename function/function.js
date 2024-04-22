// function addition(num1, num2) //creating function
// {
//     return num1 + num2;
// }
// console.log(addition(5, 2));  //function call

// function expression
// var square = function(num1)
// {
//     return num1 * num1; 
// }
// var x = square(5); //expression
// console.log(x);

// function as variable values
// function celsius(fahrenheit)
// {
//     return (fahrenheit - 32) * 5/9;
// }
//  var temp_fahrenheit = 77;
//  var temp_celsius = celsius(temp_fahrenheit);
// console.log("The Temperature is : " + temp_celsius + " Celsius");

//Arrow Function
// function Name(name)   //normal function
// {
//     return "My name is : " + name;
// }

// var myname = (name) =>  //arrow function
// {
//     return " Hello, My name is : " + name;
// }
// console.log(myname("Benjir"));

//function with parameters
// function add(x, y)
// {
//     return x + y;
// }
// console.log(add(10, 20));

// //function with default parameter
// function myname(name = "Benjir")
// {
//     return "My name is : " + name;
// }
// console.log(myname());
// console.log(myname("Hridoy"));

// //function with rest parameter
// function sum (...num)
// {
//     return num.reduce((total, num) => total + num, 0);
// }
// console.log(sum(10,20,30,40,50));

//function with ternary operator
// function heighest(num)
// {
//     return num >= 20 ?
//     'Heighest' : 'Lowest';
// }
// console.log(heighest(30));
// console.log(heighest(15));

//nested function
// function names(fname)
// {
//     function msg()
//     {
//         console.log("Hello " + fname + " How are you?");
//     }
//     return msg();
// }
// console.log(names("Benjir"));

//Immidiately invoked function expression
// var a = (function()
// {
//     return "I am trying IIFE in javascript";
// })();
// console.log(a);

//function calls with arguments
// var employee =
// {
//     details : function(level, experience)  //details() method is use for encapsulate object literals
//     {
//         return this.id
//         + this. name
//         + level
//         + experience;
//     }
// }
// var emp1 =    //declear object
// {
//     id: "01",
//     name: " Benjir",
// }
// var emp2 = 
// {
//      id: "02",
//     name: " Hridoy",
// }

// var x = employee.details.call( emp1, " Boss ", " 20 yeras");
// var y = employee.details.call( emp2, " Engineer ", " 5 years");
// console.log(x);
// console.log(y);

//function constructor
// function people(name, age, job)
// {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }
// var people1 = new people("Benjir", 27, "Engineer");
// var people2 = new people("Hridoy", 25, "Doctor");

// console.log(people1);
// console.log(people1.job);
// console.log(people2);
// console.log(people2.job);

//async Function (ref: chatgpt)
async function fetchData(url) 
{
  try {
    const response = await fetch(url); // Fetches data from the URL asynchronously

    if (!response.ok) 
    {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parses the JSON response asynchronously
    return data;
  } catch (error) 
  {
    throw error;  // Throw the error to be caught by the caller
  }
}
const url = 'https://api.example.com/data'; // Replace with your actual API endpoint

fetchData(url)
  .then(data => 
      {
    console.log('Fetched data:', data);
  })
  .catch(error => 
      {
    console.error('Error:', error);
  });
