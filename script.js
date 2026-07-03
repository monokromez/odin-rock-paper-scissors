function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3  + 1);

    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

function getHumanChoice() {
    let humanChoice = prompt("(Current Scoring) Human Score: " + humanScore + " | Computer Score: " + computerScore + "\nPlease choose Rock, Paper, or Scissors:").toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        alert("It's a tie!");
        return [humanScore, computerScore];
    }

    if (humanChoice.toLowerCase() === "rock") {
        switch (computerChoice.toLowerCase()) {
            case "scissors":
                alert("You win! Rock beats Scissors.");
                humanScore++;
                break;
            case "paper":
                alert("You lose! Paper beats Rock.");
                computerScore++;
                break;
            default:
                break;
        }
    } else if (humanChoice.toLowerCase() === "scissors") {
        switch (computerChoice.toLowerCase()) {
            case "paper":
                alert("You win! Scissors beats Paper.");
                humanScore++;
                break;
            case "rock":
                alert("You lose! Rock beats Scissors.");
                computerScore++;
                break;
            default:
                break;
        }
    } else if (humanChoice.toLowerCase() === "paper") {
        switch (computerChoice.toLowerCase()) {
            case "scissors":
                alert("You lose! Scissors beats Paper.");
                computerScore++;
                break;
            case "rock":
                alert("You win! Paper beats Rock.");
                humanScore++;
                break;
            default:
                break;
        }
    }
}

function playGame() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    if (humanScore === 5) {
        alert("You win the game!");
    } else if (computerScore === 5) {
        alert("Computer wins the game!");
    } else {
        playGame();
    }
}

playGame();