//EXERCISE 1
var someObject = {};

//Which of the following are valid?

someObject._name = "Hedwig"; //Valid

someObject.age = 6;	//Valid

var prop = "color";	

someObject[prop] = "red";	//Valid

//someObject.123 = true;	//Invalid

console.log(someObject);

//EXERCISE 2
var newObject = {
	friends: [
		{name: "Malfoy"},
		{name: "Crabbe"},
		{name: "Goyle"}
	],
	color: "baby blue",
	isEvil: true
}

//Write code to retrieve "Malfoy" from newObject
//Go one "layer" at a time!

console.log(newObject.friends[0].name);