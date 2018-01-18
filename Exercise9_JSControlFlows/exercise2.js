//Print all numbers between -10 and 19
function problem1(){
	console.clear();
	console.log("Problem 1");
	var count = -10;
	while(count <= 19){
		console.log(count);
		count++;
	}
}

//Print all even numbers between 10 and 40
function problem2(){
	console.clear();
	console.log("Problem 2");	
	var count = 10;
	while(count <= 40){
		console.log(count);
		count += 2;
	}
}

//Print all odd numbers between 300 and 333
function problem3(){
	console.clear();
	console.log("Problem 3");
	var count = 301;
	while(count <= 333){
		console.log(count);
		count += 2;
	}
}

//Print all numbers divisible by 5 and 3 between 5 and 50
function problem4(){
	console.clear();
	console.log("Problem 4");
	var count = 5;
	while(count <= 50){
		if(count % 5 == 0 && count % 3 == 0){
			console.log(count);
		}
		count += 5;
	}
}