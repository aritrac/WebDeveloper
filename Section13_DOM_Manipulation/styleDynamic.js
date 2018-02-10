function addClass(){
	var tag = document.querySelector("h1");
	tag.classList.add("some-class");
}

function removeClass(){
	var tag = document.querySelector("h1");
	tag.classList.remove("some-class");
}

function toggleClass(){
	var tag = document.querySelector("h1");
	tag.classList.toggle("some-class");
}