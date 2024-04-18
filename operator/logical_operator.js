// !(NOT) operator
var i = 0;

if(!i)
{
    console.log("true");
}
else
{
    console.log("false");
}
// &&(AND) operator
var x = 5;
var y = 10;

if (x > 0 && y > 0) 
{
  console.log("Both x and y are greater than 0");
} 
else 
{
  console.log("At least one of x or y is not greater than 0");
}

// ||(OR) Operator
var x = 5;
var y = 10;

if (x > 0 || y < 0) 
{
  console.log("true");
} 
else 
{
  console.log("false");
}