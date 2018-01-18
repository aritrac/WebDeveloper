//FOR LOOP EXAMPLES

var colors = ["red","orange","yellow","green"];

for(var i = 0; i < colors.length; i++){
	console.log(colors[i]);
}

//FOR EACH EXAMPLES
//Passing anonymous function to forEach
colors.forEach(function(color){
	//color is a placeholder, call it whatever you want
	console.log(color);
})

function printColor(color){
	console.log("*******************");
	console.log(color);
	console.log("*******************");
}

//Passing function reference to forEach
colors.forEach(printColor);