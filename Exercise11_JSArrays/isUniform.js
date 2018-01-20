function isUniform(inputArr){
	var prev;
	var isUniform = true;
	if(inputArr.length == 1)
		return true;
	inputArr.forEach(function(inpt,i){
			if(i == 0){
				prev = inpt;
			}else{
				if(prev != inpt && isUniform){
					isUniform = false;
				}else{
					prev = inpt;
				}
			}
		}
	);
	return isUniform;
}

console.log(isUniform([1]));
console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform(["a","b","p"]));
console.log(isUniform(["b","b","b"]));