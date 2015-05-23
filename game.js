function game(){
    var userChoice = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
		computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
		computerChoice = "paper";
    } else {
		computerChoice = "scissors";
    };

    if (userChoice === computerChoice) {
        alert("You both chose " + userChoice + ". This game is a tie!");
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            alert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nRock crushes Scissors. You win!");
        } else {
            alert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nPaper covers Rock. You lose!");
        }
    } else if (userChoice === "paper"){
        if (computerChoice === "rock"){
            alert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nPaper covers Rock. You win!");
        } else {
            alert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nScissors cut Paper. You lose!");
        }
    } else if (userChoice === "scissors"){
        if (computerChoice === "rock"){
            alert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nRock crushes Scissors. You lose!");
        } else {
            alert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nScissors cut Paper. You win!");
        }
    } else {
    	alert("Since you did not choose Paper, Rock, or Scissors, you lose!");
    }	
    }