var gameCount = 0;
var wins = 0, ties = 0, losses = 0;

document.getElementById("rock").addEventListener("click", function(){userClicked(1);});
document.getElementById("paper").addEventListener("click", function(){userClicked(2);});
document.getElementById("scissors").addEventListener("click", function(){userClicked(3);});

function randomInt(){
	var randomNum = Math.random();
	var randomInt;

	if(randomNum<=0.3333333){
		randomInt = 1;
	}

	else if(randomNum>0.3333333 && randomNum<= 0.6666666){
		randomInt = 2;
	}

	else{
		randomInt = 3;
	}
	return randomInt;
}

function userClicked(num){
	gameCount++;
	var computerChoice = randomInt();
	var compString = "";
	var userString = "";
	if(computerChoice == 1){compString = "rock";}
	if(computerChoice == 2){compString = "paper";}
	if(computerChoice == 3){compString = "scissors";}
	if(num == 1){userString = "rock";}
	if(num == 2){userString = "paper";}
	if(num == 3){userString = "scissors";}
	if(computerChoice == num){
		document.getElementById("result").innerHTML = "The computer chose: " + compString + ", you chose: " + userString + ", result: tie";
		ties++;
	}
	else if((computerChoice == 1 && num == 2) || (computerChoice == 2 && num == 3) || (computerChoice == 3 && num == 1)){
		document.getElementById("result").innerHTML = "The computer chose: " + compString + ", you chose: " + userString + ", result: you win";
		wins++;
	}
	else{
		document.getElementById("result").innerHTML = "The computer chose: " + compString + ", you chose: " + userString + ", result: you lose";
		losses++;
	}
	document.getElementById("gameCount").innerHTML = "Number of games played: " + gameCount;
	document.getElementById("score").innerHTML = "Wins: " + wins + ", Ties: " + ties + ", Losses: " + losses;
}
