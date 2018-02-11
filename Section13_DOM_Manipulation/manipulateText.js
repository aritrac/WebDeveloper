function manipulateText(){
	//Select the <p> tag
	var tag = document.querySelector("p");

	//Retrieve the text content
	console.log(tag.textContent); //"This is an awesome paragraph"

	//alter the textContent:
	tag.textContent = "blah blah blah";
}

function getTextFromPTag(){
	//Select the <p> tag
	var tag = document.querySelector("p");

	//Retrieve the text content
	console.log("P Tag content = " + tag.textContent);
}

function getTextFromUlTag(){
	//Select the <ul> tag
	var tag = document.querySelector("ul");

	//Retrieve the text content
	console.log("Ul Tag content = " + tag.textContent);
}

function setTextToUlTag(){
	//Setting static text to a parent Ul tag
	var tag = document.querySelector("ul");

	//Setting some static text
	tag.textContent = "This is interesting";

	//Printing out the tag state
	console.log(tag);
}

function showInnerHTML(){
	var tag = document.querySelector("ul");
	console.log(tag.innerHTML);
}

function showTextContentUl(){
	var tag = document.querySelector("ul");
	console.log(tag.textContent);
}