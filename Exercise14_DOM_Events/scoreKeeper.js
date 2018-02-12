var playTo;
var player1Score;
var player2Score;
var hasWon = false;

function hsWon(){
	if(player1Score == playTo || player2Score == playTo){
		hasWon = true;
	}
	if(player1Score == playTo - 1)
		togglePlayer1Score();
	if(player2Score == playTo - 1)
		togglePlayer2Score();
}

function init(){
	playTo = 5;
	player1Score = 0;
	player2Score = 0;
	hasWon = false;
	updatePlayto();
	updateScore();
	var numberSpinner = document.querySelector("#numSpinner");
	numberSpinner.value = null;
	document.querySelector("#player1").addEventListener("click",player1Click);
	document.querySelector("#player2").addEventListener("click",player2Click);
	document.querySelector("#reset").addEventListener("click",init);
	document.querySelector("#numSpinner").addEventListener("change",numValueChange);
	document.querySelector("#player1Sc").className = "orig";
	document.querySelector("#player2Sc").className = "orig";
}

function numValueChange(){
	var val = document.querySelector("#numSpinner").value;
	playTo = val;
	updatePlayto();
}

function updatePlayto(){
	var h3 = document.querySelector("h3");
	h3.textContent = "Playing to: " + playTo;
}

function updateScore(){
	var h1 = document.querySelector("#player1Sc");
	var h2 = document.querySelector("#player2Sc");
	h1.textContent = player1Score;
	h2.textContent = player2Score;
}

function reset(){
	init();
}

function player1Click(){
	hsWon();
	if(!hasWon){
		player1Score++;
		updateScore();
	}
}

function player2Click(){
	hsWon();
	if(!hasWon){
		player2Score++;
		updateScore();
	}
}

function togglePlayer1Score(){
	document.querySelector("#player1Sc").className = "won";
}

function togglePlayer2Score(){
	document.querySelector("#player2Sc").className = "won";
}


