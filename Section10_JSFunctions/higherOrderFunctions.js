function singSong(){
	console.log("twinkle twinkle little star");
	console.log("how I wonder what you are");
}

//We call the function 3 times manually
singSong();
singSong();
singSong();

//Now we will pass this function reference to setInterval() function, which
//will automatically call this at 1 sec interval like so

//no bracket should be provided in the function reference
setInterval(singSong,1000); //1000ms = 1sec

//Using anonymous function expression in a higher order function like so

setInterval(function(){
	console.log("I am being called every second :-)");
}, 1000);

//both the functions will be called by setInterval parallely. Calling one will not stop the others execution