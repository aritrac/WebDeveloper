function kebabToSnake(inputStr){
	return inputStr.replace(/-/g,"_");
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));
