//local scope

function doSomething1(){
	var x = 10;
	console.log(x);
}
doSomething1(); //prints 10

//Putting this code in try catch, as it will stop the execution at this point and code below will be executed.
try{
	console.log(x); //undefined
}catch(error){
	console.log(error);
}

//global scope
var y = 11;

function doSomething2(){
	console.log(y);
}

doSomething2();
console.log(y);

//global scope access from child scope

var z = 13;

function doSomething3(){
	z = 14;
	console.log(z);
}
doSomething3(); //14
console.log(z); //14

//global and local scope separate from each other
var q = 20;

function doSomething4(){
	var q = 21;
	console.log(q);
}

doSomething4(); //21
console.log(q); //20