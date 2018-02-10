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