// simple type of object
var x = 
{
    value: 10
};
console.log(x.value); // Output: 10

// object properties
var me =
{
    name : 'Benjir',
    age : '27',
    study : 'Science',
    hobby : 'Reading',
    displayInfo : function()
    {
        console.log(`Display my name : ${me[`name`]}`);
        console.log(`Display my name : ${me[`hobby`]}`);
        
    }
}
me.displayInfo();

//hasOwnProperty code (inherite properties)
var info =
{
    name : 'Benjir',
    age : '27',
    study : 'Science',
    hobby : 'Reading'
    
}
console.log(info.hasOwnProperty(`name`));
console.log(info.hasOwnProperty(`status`));

//accessing object properties
var me = 
{
    name : 'Benjir',
    age : '27',
    study : 'Science',
    hobby : 'Reading',
    info : function()
    {
        return `Hello, I am ${this.name}, My age is ${this.age}, I study in ${this.study}, and My hobby is ${this.hobby} `
    }
}
console.log(me.info());
console.log(me.age);
console.log(me.hobby);

// iterating overall peoperties of an object
var me = 
{
    name : 'Benjir',
    age : '27',
    study : 'Science',
    hobby : 'Reading'
};

for(let x in me)
{
    console.log(`${x} : ${me[x]}`);
}

//deleting an object properties
var me = 
{
     name : 'Benjir',
     age : '27',
     study : 'Science',
     hobby : 'Reading'
};

for (let y in me)
console.log("Before deletion:", y + " : " + me[y]);
delete me.name;  // Deleting the object properties
console.log("After deletion:", me);