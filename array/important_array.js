// array.some() method
var num = [10, 20, 30 , 40 , 50];
var x = num.some((num) =>   // check array elements are greater than 50
{
    return num > 50;
});
console.log(x);

// array.reduce() method
var num = [10, 20, 30, 40, 50];
var add = num.reduce(y)  

    function y(total, current)  // here total value is by default 0, current value is sum of array
    {
        return total + current;
    }
console.log(add);

// array.map() method
var num = [10, 20, 30, 40, 50];

    function double(y)  // calling a function y that return double value of array
    {
        return y *2;
    }
    var doubledNumbers = num.map(double);  // here map() method will map the doubled value that function returns and print
console.log(doubledNumbers);

// array.map() method V2
var num = [10, 20, 30, 40, 50];
console.log(num);
var num2 = num.map(function(y)  // here map() method will map the doubled value that function returns and print
{
    return y * 3;
});
console.log(num2);

//array.includes() method
var num = [10, 20, 30, 40, 50];
console.log(num.includes(10));  // check whether element "10" is in the array or not
console.log(num.includes(60));

//array.sort() method
var name = ["Benjir", "Hasan", "Tahrina", "Eshrat"];
console.log(name);
name.sort();            // sort the array elements in alphabertical order
console.log(name);

//array.filter() method
var name = ["Benjir", "Hasan", "Tahrina", "Eshrat"];
console.log(name);
var newName = name.filter(function(y, z)  //here y is the element and z is the index number of the array
{
    return z === 0 || z === 2;   // filter the array elements and print only 1st and 3rd element
});
console.log(newName);         

// array find()/findIndex() method
var name = ["Benjir", "Hasan", "Tahrina", "Eshrat"];
var f = name.find(function(x)
{
    return x === "Benjir";
});
console.log(f);
var v = name.findIndex(function(x)
{
    return x === "Eshrat";
});
console.log(v);

// array reverse() method
var x = [44, 587, 861, 9];
console.log(x);
var y = x.reverse();
console.log("Reversed array: " + y);
