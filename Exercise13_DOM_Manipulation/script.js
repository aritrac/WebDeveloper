//4 different ways of selecting the first p tag
function selectIn4DiffWays(){
	var selTagWay1 = document.getElementById("first");
	console.log(selTagWay1);

	var selTagWay2 = document.getElementsByClassName("special");
	console.log(selTagWay2[0]);

	var selTagWay3 = document.querySelector("body p.special");
	console.log(selTagWay3);

	var selTagWay4 = document.querySelector(".special");
	console.log(selTagWay4);

	var selTagWay5 = document.querySelector("h1 + p");
	console.log(selTagWay5);
}

selectIn4DiffWays();