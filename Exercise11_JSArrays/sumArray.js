function sumArray(inputArr){
	var sum = 0;
	inputArr.forEach(function(inpt){
		sum += inpt;
	});
	return sum;
}

console.log(sumArray([1,2,3]));
console.log(sumArray([10,3,10,4]));
console.log(sumArray([-5,100]));