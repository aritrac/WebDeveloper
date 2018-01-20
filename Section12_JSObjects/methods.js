var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["bob", "tina"],
	//Object method
	add: function(x,y){
		return x + y;
	}
}
//Calling the object method
console.log(obj.add(10,5));


//creating a function called speak which is not part of any object
function speak(){
	return "woof";
}
console.log(speak()); // This prints 'meaow' due to namespace collision

function speak(){
	return "meaow";
}
console.log(speak()); //This also prints 'meaow' due to namespace collision

//moving the above speak functions to separate objects like so
var dogSpace = {};
dogSpace.speak = function(){
	return "woof";
}

var catSpace = {};
catSpace.speak = function(){
	return "meaow";
}

console.log(dogSpace.speak()); //This now prints woof
console.log(catSpace.speak()); //And this now prints meow

//This keyword demo
var comments = {};

comments.data = ["Good Job!","Bye","Lame..."];

function print(arr){
	arr.forEach(function(el){
		console.log(el);
	});
}

print(comments.data); //First version without this

comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});
}

comments.print(); //Second version with this