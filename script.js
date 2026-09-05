function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    if (getRandomInt(3) === 0) {
        return "rock";
    } else if (getRandomInt(3) === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
   return prompt("rock, paper or scissors?").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("Tie!")
                break;
            
            case "paper":
                console.log("You lose!, paper beats rock.");
                return ++computerScore;
            
            case "scissors":
                console.log("You win!, rock beats scissors");
                return ++humanScore;
        }
    }

    if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You win!, paper beats rock.");
                return ++humanScore;
            
            case "paper":
                console.log("Tie.");
                break;
            
            case "scissors":
                console.log("You lose!, scissors beats paper");
                return ++computerScore;
        }
    }

    if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                console.log("You lose!, rock beats scissors.");
                return ++computerScore;
            
            case "paper":
                console.log("You win!, scissors beats paper.");
                return ++humanScore;
            
            case "scissors":
                console.log("Tie.");
                break;
        }
    }
}

function playGame () {
    for (let i = 0; i < 5; i++) {
    
        playRound(getHumanChoice(), getComputerChoice());

        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    }
    if (humanScore > computerScore) {
        console.log("Human win");
    } else if (humanScore < computerScore) {
        console.log("Computer win");
    } else {
        console.log("Tie");
    }

}

playGame();