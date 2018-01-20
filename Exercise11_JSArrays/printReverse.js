function printReverse(inputArr){
	for(var i = inputArr.length - 1; i > -1; i--){
		console.log(inputArr[i]);
	}
}

printReverse([1,2,3,4]);

printReverse(["a","b","c"]);