function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }

}





const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
document.body.appendChild(paper);
document.body.appendChild(rock);
document.body.appendChild(scissors);

rock.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock",computerChoice);
})

paper.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper",computerChoice);
})

scissors.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors",computerChoice);
})


const result = document.createElement("div");
result.id = "result";
document.body.appendChild(result);

const roundMessage = document.createElement("p");
const scoreDisplay = document.createElement("p");
result.appendChild(roundMessage);
result.appendChild(scoreDisplay);




let humanScore = 0;
 let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
    let message = "";
    
    const choice = humanChoice.toLowerCase();

    if (choice === computerChoice) {
        message = "It's a tie!";
    } else if (
        (choice === "rock" && computerChoice === "scissors") || 
        (choice === "scissors" && computerChoice === "paper") ||
        (choice === "paper" && computerChoice === "rock")
    ) {
        message = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        message = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }


    roundMessage.textContent = message;
    scoreDisplay.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

    

    if (humanScore === 5) {
        const humanWins = document.createElement("p");
        humanWins.textContent = "🏆 You won the game!";
        result.appendChild(humanWins);
        resetGame();

    } else if (computerScore === 5) {
        const computerWins = document.createElement("p");
        computerWins.textContent = "💻 Computer won the game!";
        result.appendChild(computerWins);
        resetGame();
    }
}




function resetGame() {
    humanScore = 0;
    computerScore = 0;
    
    
}


























