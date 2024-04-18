//basic for loop
let x;  //declear variable
for (x = 5; x < 10; x++)  //(initialize variable; set condition; increment/decreament)
{
    console.log("the value is : " + x);
}

//declear value of the variable outside for loop

let y = 3;
for ( ; y <= 5; y--)
{
    console.log("the value of x is : " + y)
}

//updating counter variable

var subject = ["Maths", " ", "English"," ", "Bangla"," ", "political science", " ", "science"];
let a = 0;
let len = subject.length;
let gfg = " ";

for ( ; a <len; a++)
{
    gfg += subject[a];
    
}
console.log(gfg);