//ternary operator
var x = 20;
var y = (x >= 18) ? //one conditional 
    "true" : "false";

console.log(y);

var x = 30;
var y = (x > 20) ? //multi conditional 
    "true" : "false";
    (x = 30) ?
    "true" : "false";
    (x < 50) ?
    "true" : "false";

console.log(y);

//relational operator
var Data = { 
	name: "Rahul", 
	age: 21, 
	city: "Noida"
};  
console.log("name" in Data);  
console.log("address" in Data);

//string operator
var x = "Benjir"; 
var y = "Hasan"; 
let z = (x + y); 
console.log(z);