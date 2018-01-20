//Normal ForEach invocation
var colors = ["Red", "Orange", "Blue", "Green"];

console.log("Normal ForEach Execution");
colors.forEach(function(color){
	console.log(color);
});

console.log("Normal ForEach With Index");
colors.forEach(function(color,idx){
	console.log(idx + " " + color);
})

//ForEach with ForLoop

console.log("Mimic forEach functionality with for loop");

function myCustomForEach(arr, func){
	for(var i = 0; i < arr.length; i++){
		func(arr[i]);
	}
}

function myMethod(inpt){
	console.log("I am custom and val = " + inpt);
}

//Calling the myCustomForEach with 3 different functions
myCustomForEach(colors, console.log);
myCustomForEach(colors, alert);
myCustomForEach(colors, myMethod);

//Creating a new function myCustomForEach2 to be added to Array.prototype
function myCustomForEach2(func){
	//this keyword refers to the array in the Array.prototype
	for(var i = 0; i < this.length; i++){
		//Calling the passed function with the Array.prototype value
		func(this[i]);
	}
}

//Adding myCustomForEach2 to Array.prototype
console.log("Adding the myCustomForEach2 to Array.prototype under the name customForEach");
Array.prototype.customForEach = myCustomForEach2;

//Now making the same above 3 calls with the Array.prototype method that we just added
//Note that the methods being passed accepts a single input
console.log("Calling the newly added custom method from Array.prototype to perform the same functionality performed above");
colors.customForEach(console.log);
colors.customForEach(alert);
colors.customForEach(myMethod);
