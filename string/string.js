//slice()/splice() method [it is an array method]
var num = [10, 20, 30, 40, 50];
var x = num.slice(2, 5);   //extract element from index 2 to index 4, here 2 is index number, 5 is element number
console.log(x);

var y = num.splice(2, 2, 'a','b','c');   //remove 2 elements which start from index 2 and next two elements and add some other elements there
console.log(y);
console.log(num);

//replace() method [it is a string method]
var name = "'Benjir', 'Hasan', 'Tahrina', 'Esrat'";
var x = name.replace("Esrat", "Adrita");
console.log(x);

//uppercase()/lowercase() method [string method]
var name = "'benjir', 'hasan', 'tahrina', 'esrat'";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// trim()/trimStart()/trimEnd() method  [string method]
var x = "i am a engineer        ";
console.log(x.length);
var y = x.trim();
console.log(y.length);
var a = x.trimStart();
console.log(a.length);
var b = x.trimEnd();
console.log(b.length);

//padStart()/padEnd() method
var x = "Benjir";
x = x.padStart(12, "Hasan ");
console.log(x);
var y = "Esrat";
y = y.padEnd(11, " Jahan");
console.log(y);