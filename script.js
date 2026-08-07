let humanScore = 0;
let computerScore = 0;
let isGameOver = false;

// DOM Elements
const humanScoreEl = document.getElementById("human-score");
const computerScoreEl = document.getElementById("computer-score");
const roundMessageEl = document.getElementById("round-message");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetContainer = document.getElementById("reset-container");
const gameOverMessage = document.getElementById("game-over-message");
const resetBtn = document.getElementById("reset-btn");

// Event Listeners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
resetBtn.addEventListener("click", resetGame);

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    if (isGameOver) return;

    const computerChoice = getComputerChoice();
    let message = "";

    if (humanChoice === computerChoice) {
        message = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        message = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        humanScoreEl.textContent = humanScore;
    } else {
        message = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        computerScoreEl.textContent = computerScore;
    }

    roundMessageEl.textContent = message;

    checkGameOver();
}

function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        isGameOver = true;
        disableButtons(true);
        resetContainer.classList.remove("hidden");

        if (humanScore === 5) {
            gameOverMessage.textContent = "🏆 You won the game!";
            gameOverMessage.style.color = "#2ecc71"; // Green
        } else {
            gameOverMessage.textContent = "💻 Computer won the game!";
            gameOverMessage.style.color = "#e74c3c"; // Red
        }
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    isGameOver = false;

    humanScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
    roundMessageEl.textContent = "Choose your weapon!";
    
    resetContainer.classList.add("hidden");
    disableButtons(false);
}

function disableButtons(disable) {
    rockBtn.disabled = disable;
    paperBtn.disabled = disable;
    scissorsBtn.disabled = disable;
}
