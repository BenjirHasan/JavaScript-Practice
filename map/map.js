//basic map Object
var x = new Map();
x.set("First Name", "Benjir");
x.set("Last Name", "Hasan");
x.set("Website", "www.benjir.com");
console.log(x);

//has()/get()/delete() method in Map
var x = new Map();
x.set("First Name", "Benjir");
x.set("Last Name", "Hasan");
x.set("Website", "www.benjir.com");
x.set("Friend 1", "Adrita");
x.set("Friend 2", "Mridul");
console.log(x);
console.log("x has First Name ? " + x.has("First Name"));
console.log("x has Website ? " + x.has("Website"));
console.log("x get a friend : " + x.get("Friend 1"));
console.log("Delete Friend 3 : " + x.delete("Friend 3"));
console.log("Delete Friend 1 : " + x.delete("Friend 1"));
console.log(x);
x.clear();
console.log(x);

// Map with iterative elements
var company = new Map();
company.set("name : ", " Bs23");
company.set("no_of_employee : ", 400);
company.set("category : ", " IT Solution");
function getInfo(x, y)   // here x means the key of the element and y means the value of the element
{
	console.log(y + "=>" + x);
}
company.forEach(getInfo);
