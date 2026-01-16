function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }

}



function getHumanChoice(){
    let input = prompt("Choose between Rock, Paper and Scissors");
    if(input === null){
        return "Game over";
    }
    return input.toLowerCase();
}




function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    if(humanChoice.toLowerCase() === computerChoice){
        console.log("It's a tie!");
    } else if(
        (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") || 
        (humanChoice.toLowerCase() === "scissors" && computerChoice ==="paper") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice ==="rock")
    ){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

    for(let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice,computerChoice);

        console.log(`Score - You: ${humanScore} Computer: ${computerScore}`);
    }

    console.log("--- Finish ---");
    if (humanScore > computerScore) {
        console.log("You won!");
    } else if (computerScore > humanScore) {
        console.log("Computer won!");
    } else {
        console.log("It's a tie!");
    }

}



playGame();















