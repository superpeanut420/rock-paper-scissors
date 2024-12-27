function getComputerChoice() { // randomly selects rock, paper, or scissors
    let choice = parseInt(Math.random()*3);
    if (choice == 0) {
        return "r";
    }
    else if(choice == 1) {
        return "s";
    }
    return "p"; 
}

function getHumanChoice() { // prompts user for selection
    let choice = prompt("Rock, paper, or scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice) { // calculates wins and losses
    humanChoice = humanChoice.substring(0,1).toLowerCase(); 
    if (humanChoice == "r" && computerChoice == "s") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
        return;
    }
    else if (humanChoice == "r" && computerChoice == "p") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    }
    else if (humanChoice == "p" && computerChoice == "r") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    }
    else if (humanChoice == "p" && computerChoice == "s") {
        console.log("You lose! Scissors beats paper.");
        humanScore++;
    }
    else if (humanChoice == "r" && computerChoice == "s") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }
    else if (humanChoice == "r" && computerChoice == "p") {
        console.log("You lose! Paper beats rock.");
        humanScore++;
    }
    else {
        console.log("Tie!")
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore>computerScore) {
        console.log("You win!");
    }
    else {
        console.log("You lose!");
    }
}
let humanScore = 0, computerScore = 0;
playGame();
