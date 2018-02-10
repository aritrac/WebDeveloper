//getElementById method

function getById(){
	var tag = document.getElementById("highlight");
	console.log(tag);
	console.dir(tag);
}

function getElesByClassName(){
	var tagNew = document.getElementsByClassName("bolded");
	console.log(tagNew[0]);
	console.log(tagNew[1]);
}

function getElesByTagName(){
	var tagMew = document.getElementsByTagName("li");
	console.log(tagMew);
	var h1s = document.getElementsByTagName("h1");
	console.log(h1s);
}

function getByQuerySelector(){
	//Example1
	var tag = document.querySelector("#highlight");
	console.log(tag);
}