function max(inputArr){
	var max = Number.MIN_VALUE;

	inputArr.forEach(function(inpt){
		if(inpt > max)
			max = inpt;
	});

	return max;
}

console.log(max([1,2,3]));
console.log(max([10,3,10,4]));
console.log(max([-5,100]));