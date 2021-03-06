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
	//Example1 -> ID Selector
	var tag = document.querySelector("#highlight");
	console.log(tag);

	//Example2 -> Class Selector
	var tag2 = document.querySelector(".bolded");
	console.log(tag2);

	//Example3 -> Tag Selector
	var tag3 = document.querySelector("h1");
	console.log(tag3);

	//Example4 -> Hierarchy Selector
	//Select all anchor tags within a li tag with class special
	var tag4 = document.querySelector("li a.special");
	console.log(tag4);
}

function getByQuerySelectorAll(){
	//Example1 -> All h1 tags will be selected
	var tag1 = document.querySelectorAll("h1");
	console.log(tag1);

	//Example2 -> Class elements having class bolded will be selected
	var tag2 = document.querySelectorAll(".bolded");
	console.log(tag2);
}

//Setting styles using style DOM property
function setStylesDynamically(){
	var tag = document.getElementById("highlight");

	//Manipulate
	tag.style.color = "blue";
	tag.style.border = "10px solid red";
	tag.style.fontSize = "70px";
	tag.style.background = "yellow";
	tag.style.marginTop = "200px";
}

function setStylesUsingCSSClass(){
	var tag = document.getElementById("highlight");
	//add the css class to the selected element instead of setting each css property like the above method
	tag.classList.add("some-class");
}