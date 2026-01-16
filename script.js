let word;
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

const num = getComputerChoice();




switch(num){
    case 0:
        word = "rock";
        break;
    case 1:
        word = "paper";
        break;

    case 2:
        word = "scissors";
        break;

    default:
        console.log("Invalid value");
}


