function manipulateText(){
	//Select the <p> tag
	var tag = document.querySelector("p");

	//Retrieve the text content
	console.log(tag.textContent); //"This is an awesome paragraph"

	//alter the textContent:
	tag.textContent = "blah blah blah";
}