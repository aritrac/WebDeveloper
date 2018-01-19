//Quiz 1
var num = 8;

function doMath(){
	num += 1;
	if(num % 5 == 0){
		return true;
	}else{
		return false;
	}
}

num += 1;
console.log(doMath());

//Quiz 2
function call1(){
	var locVar = "Hello There!";
	console.log(locVar);
}

function call2(){
	console.log(locVar);
}

call1(); //Hello There!
call2(); //Reference error!