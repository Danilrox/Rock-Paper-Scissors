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