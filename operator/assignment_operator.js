//assignment operator
var x = 5;
var y = 6;
console.log(y);
console.log(x = y + 4);  //addition assignment operator

var x = 5;
var y = 6;
console.log(y);
console.log(x = y - 4);  //sunstraction assignment operator

var x = 5;
var y = 6;
console.log(y = y * 2);
console.log(x = x * 4);  //multiplication assignment operator

var x = 10;
var y = 6;
console.log(y = y / 2);
console.log(x = x / 2);  //division assignment operator

var x = 10;
var y = 6;
console.log(y %= 2);
console.log(x %= 3);  //modulus assignment operator

var x = 10;
var y = 6;
console.log(y **= 2);
console.log(x **= 2);  //exponential assignment operator

var x = 10;
var y = 6;
console.log(y = y / 2);
console.log(x = x / 2);  //division assignment operator

var x = 5;
var y = 10;
var z = 15;

if (x < y && y < z)  //logical AND assignment operator
{
  console.log("z is the heighest number");
} 
else 
{
  console.log("x is the lowest number");
}

var x = 5;
var y = 10;
var z = 15;

if (x > y || x > z)  //logical OR assignment operator
{
  console.log("x is the heighest number");
} 
else if(y > z)
{
  console.log("y is the heighest number");
}
else
{
  console.log("z is the heighest number");
}
