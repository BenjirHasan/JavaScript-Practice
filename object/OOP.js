// object literal
let me = 
{
    first_name: 'Benjir',
    last_name: 'Hasan',
    function1: function () //method
    {
        return (`The name of the person is :  ${this.first_name} ${this.last_name}`);
    },

    phone_number:   // Object within object
    {
        mobile: '12345',
        landline: '6789',
        function2: function () 
        {
            return (`The phone number of the person is : ${this.mobile} ${this.landline}`);
        }
    }
};
console.log(me.function1());
console.log(me.phone_number.function2());

// using object constructor
function Person(firstName, lastName, age) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let person1 = new Person('BENJIR', 'HASAN', 27);  // Create instances of the object using the constructor
let person2 = new Person('MRIDUL', 'KUMAR', 25);


console.log("First name : " + person1.firstName); 
console.log("Last name : " + person1.lastName);  
console.log("Age : " + person1.age);       
console.log("INFO : " , person1);

console.log("First name : " + person2.firstName); 
console.log("Last name : " + person2.lastName);  
console.log("Age: " + person2.age);       
console.log("INFO : " , person2);

// using object.create() method
let personPrototype =   // Define a prototype object
{
    introduce: function() 
    {
        return `Hi, my name is ${this.firstName} ${this.lastName}, My age is : ${this.age}, My hobby is : ${this.hobby}.`;
    }
};


let person = Object.create(personPrototype);  // Create an object using Object.create() and assign properties
person.firstName = 'Benjir';
person.lastName = 'Hasan';
person.age = '27';
person.hobby = 'Reading';

console.log(person.introduce()); // Accessing the method defined in the prototype 

// using classes using ES6 
class Vehicle {    // Defining class using ES6
    constructor(name, brand, engine, tire) 
    {
        this.name = name;
        this.brand = brand;
        this.engine = engine;
        this.tire = tire; // Corrected letiable name from 'tayer' to 'tire'
    }

    getDetails() 
    {
        return `The name of the vehicle is ${this.name}.`;
    }
}
let bike3 = new Vehicle('Hayabusa', 'Suzuki', '1340cc', 'Apollo');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc', 'Ceat');

console.log(bike3.name); 
console.log(bike2.brand); 
console.log(bike1.getDetails()); 

// Abstraction example
function vehicle (name, brand, engine, tier) 
{
	let Name = name;
	let Brand = brand;
    let Engine = engine;
	let Tier = tier;

     this.getName = function()  //to get access to vehicle name
     {
        return Name;
     }
     
	this.getDetails_vehicle1 = function () 
    {
		return (`Vehicle name is : ${name} ; Brand name is : ${brand} ; Engine name is : ${engine} ; Tier used : ${tier}`);
	}

	this.getDetails_vehicle2 = function () 
    {
		return (`Vehicle name is : ${name} ; Brand name is : ${brand} ; Engine name is : ${engine} ; Tier used : ${tier}`);
	}
}
let vehicle3 = new vehicle('Ninja', 'Kawasaki', '3500cc', 'Apolo');
let vehicle2 = new vehicle('Hayabusa', 'Suzuki', '1340cc', 'Ceat');
console.log(vehicle3.getName());
console.log(vehicle3.getDetails_vehicle1());
console.log(vehicle2.getDetails_vehicle2());

//inheritance
class Vehicle   // Define a parent class
{
    constructor(name, brand, engine, tier) 
    {
        this.name = name;
        this.brand = brand;
        this.engine = engine;
        this.tier = tier;
    }

    getVehicleDetails() 
    {
        return `The name of the Vehicle is : ${this.name} ; Brand is : ${this.brand} ; Engine is : ${this.engine} ; and Tier used : ${this.tier}.`;
    }
}

class Bike extends Vehicle   // Define a subclass that inherits from Vehicle
{
    constructor(name, brand, engine, tier, type)
    {
        super(name, brand, engine, tier); // Call the parent class constructor
        this.type = type;
    }

    getBikeDetails() 
    {
        return `This ${this.type} bike is named : ${this.name} ; Brand is : ${this.brand} ; Engine is : ${this.engine} ; and Tier used : ${this.tier}.`;
    }
}
let vehicle1 = new Vehicle('Car', 'Toyota', 'V6', 'Apolo');    // Create instances of the classes
let bike1 = new Bike('Ninja', 'Kawasaki', '350cc', 'Apolo', 'sports');

console.log(vehicle1.getVehicleDetails());
console.log(bike1.getVehicleDetails()); // Inherited method from parent class
console.log(bike1.getBikeDetails()); // Method specific to the subclass
