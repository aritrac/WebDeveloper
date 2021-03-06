var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var resetButton = document.getElementById("reset");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input[type='number']");

numInput.addEventListener("change",function(){
	winningScore = Number(this.value);
	if(winningScore > 0)
		winningScoreDisplay.textContent = winningScore;
	else
		winningScore = 5;
	reset();
});

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			gameOver = true;
			p1Display.classList = "winner";
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
			p2Display.classList = "winner";
		}
		p2Display.textContent = p2Score;
	}
});
resetButton.addEventListener("click", function(){
	winningScore = 5;
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Display.textContent = "0";
	p2Display.textContent = "0";
	numInput.value = null;
});

function reset(){
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Display.textContent = "0";
	p2Display.textContent = "0";
}