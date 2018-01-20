var name = ["AB","CD","EF"];
var age = [23,24,32];
var city = ["asansol","burdwan","dispur"];

//Creating a person object to store each value at an object level

var Person = {
	name : "AB",
	age : 23,
	city : "asansol"
};

//Printing out an object property in two ways

//bracket notation, similar to arrays
console.log("Type1");
console.log(Person["name"]);
console.log(Person["age"]);
console.log(Person["city"]);

//dot notation
console.log("Type2");
console.log(Person.name);
console.log(Person.age);
console.log(Person.city);

//reference notation
var nm = "name";
var ag = "age";
var ct = "city";
console.log("Type3");
console.log(Person[nm]);
console.log(Person[ag]);
console.log(Person[ct]);

//Methods to initialize objects
//Type 1
var customer = {};
customer.name = "Aritra";
customer.age = 45;
customer.city = "Florida";

console.log(customer);

//Type 2
var customer = {
	name : "Ari",
	age : 46,
	city : "Flor"
}

console.log(customer);

//Type 3
var customer = new Object();
customer.name = "Ankita";
customer.age = 45;
customer.city = "Asansol";

console.log(customer);

//Objects can hold any type of data like number, string, boolean, arrays, and nested objects
var junkObject = {
	age: 57,
	color: "purple",
	isHungry: true,
	friends: ["Horatio","Hamlet"],
	pet: {
		name: "Rusty",
		species: "Dog",
		age: 2
	}
};