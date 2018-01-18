var arr = [];	//1st way of declaring empty array

var newArr = new Array();	//Second way of declaring empty array

//push and pop demo - HAPPENS AT END
//PUSH
arr.push("One");
console.log(arr);
arr.push("Three");
console.log(arr);
arr.push("Ten");
console.log(arr);
arr.push("Fifteen");
console.log(arr);
//POP
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);

//shift and unshift demo - HAPPENS AT START
//UNSHIFT or ADD
newArr.unshift("One");
console.log(newArr);
newArr.unshift("Two");
console.log(newArr);
newArr.unshift("Three");
console.log(newArr);
newArr.unshift("Four");
console.log(newArr);
//SHIFT OR DELETE
newArr.shift();
console.log(newArr);
newArr.shift();
console.log(newArr);
newArr.shift();
console.log(newArr);
newArr.shift();
console.log(newArr);

//indexOf demo
var colors = ["Red","Blue","Green","Yellow"];

console.log("Red is at " + colors.indexOf("Red"));
console.log("Green is at " + colors.indexOf("Green"));
console.log("Purple is at " + colors.indexOf("Purple"));

//slice demo
var objects = ["wow",null,undefined, true, 23.42, 45, -9];
var mySelection = objects.slice(1,4);
var mySecondSelection = objects.slice(3);
console.log(mySelection);
console.log(mySecondSelection);
console.log(objects);
console.log(objects.slice());
