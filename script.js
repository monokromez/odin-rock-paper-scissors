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

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    let scoreboard = document.querySelector(".scoreboard");
    const playerScore = document.createElement("p");

    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        scoreboard.appendChild(playerScore);
        playerScore.textContent = `It's a tie! You both chose ${humanChoice}.`;
        return [humanScore, computerScore];
    }

    if (humanChoice.toLowerCase() === "rock") {
        switch (computerChoice.toLowerCase()) {
            case "scissors":
                scoreboard.appendChild(playerScore);
                playerScore.textContent = `You win! Rock beats Scissors.`;
                humanScore++;
                break;
            case "paper":
                scoreboard.appendChild(playerScore);
                playerScore.textContent = `You lose! Paper beats Rock.`;
                computerScore++;
                break;
            default:
                break;
        }
    } else if (humanChoice.toLowerCase() === "scissors") {
        switch (computerChoice.toLowerCase()) {
            case "paper":
                scoreboard.appendChild(playerScore);
                playerScore.textContent = `You win! Scissors beats Paper.`;
                humanScore++;
                break;
            case "rock":
                scoreboard.appendChild(playerScore);
                playerScore.textContent = `You lose! Rock beats Scissors.`;
                computerScore++;
                break;
            default:
                break;
        }
    } else if (humanChoice.toLowerCase() === "paper") {
        switch (computerChoice.toLowerCase()) {
            case "scissors":
                scoreboard.appendChild(playerScore);
                playerScore.textContent = `You lose! Scissors beats Paper.`;
                computerScore++;
                break;
            case "rock":
                scoreboard.appendChild(playerScore);
                playerScore.textContent = `You win! Paper beats Rock.`;
                humanScore++;
                break;
            default:
                break;
        }
    }

    if (humanScore === 5) {
        let scoreboard = document.querySelector(".scoreboard");
        const finalScore = document.createElement("p");
        scoreboard.appendChild(finalScore);
        finalScore.textContent = `Final Score: You ${humanScore} - Computer ${computerScore}\nYou win the game!`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        let scoreboard = document.querySelector(".scoreboard");
        const finalScore = document.createElement("p");
        scoreboard.appendChild(finalScore);
        finalScore.textContent = `Final Score: You ${humanScore} - Computer ${computerScore}\nComputer wins the game!`;
        humanScore = 0;
        computerScore = 0;
    }
}

function playGame(buttonValue) {
    const humanChoice = buttonValue;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

}

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));