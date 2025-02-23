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

function playRound(humanChoice, computerChoice) { // calculates wins and losses
    humanChoice = humanChoice.substring(0,1).toLowerCase(); 
    if (humanChoice == "r" && computerChoice == "s") {
        txt.textContent = "+1 Rock beats scissors.";
        humanScore++;
        return;
    }
    else if (humanChoice == "r" && computerChoice == "p") {
        txt.textContent = "-1 Paper beats rock.";
        computerScore++;
    }
    else if (humanChoice == "p" && computerChoice == "r") {
        txt.textContent = "+1 Paper beats rock.";
        humanScore++;
    }
    else if (humanChoice == "p" && computerChoice == "s") {
        txt.textContent = "-1 Scissors beats paper.";
        computerScore++;
    }
    else if (humanChoice == "s" && computerChoice == "p") {
        txt.textContent = "+1 Scissors beats paper.";
        humanScore++;
    }
    else if (humanChoice == "s" && computerChoice == "r") {
        txt.textContent = "-1  Rock beats scissors.";
        computerScore++;
    }
    else {
        txt.textContent = "Tie!";
    }
}

let humanScore = 0, computerScore = 0;
const txt = document.querySelector(".txt");
const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
        score.innerHTML = `Human: ${humanScore} <br> Computer: ${computerScore}`;
        if (humanScore > 4) {
            txt.textContent = "Congrats, you win!"
            humanScore = 0, computerScore = 0;
        }
        else if (computerScore > 4) {
            txt.textContent = "Shit, you lost!"
            humanScore = 0, computerScore = 0;
        }
        
    });
});


