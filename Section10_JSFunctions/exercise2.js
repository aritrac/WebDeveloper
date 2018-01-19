function factorial(num){
	var result = 1;
	while(num > 0){
		result *= num;
		num--;
	}
	return result;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));