function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice < 1) {
        return "Rock";
    } else if (choice < 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let first = prompt("Rock, Paper, or Scissors?");
    let choice = first.toLowerCase();
    if (choice == "rock") {
        return "Rock";
    } else if (choice == "paper") {
        return "Paper";
    } else if (choice == "scissors") {
        return "Sciccors"
    } else {
        console.log("Invalid choice, try again");
        getHumanChoice();
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(hmn, cpu) {
        if (hmn == "Rock" && cpu == "Scissors" || hmn == "Paper" && cpu == "Rock" || hmn == "Scissors" && cpu == "Paper") {
            console.log("You win! " + hmn + " beats " + cpu);
            humanScore += 1;
        } else if (cpu == "Rock" && hmn == "Scissors" || cpu == "Paper" && hmn == "Rock" || cpu == "Scissors" && hmn == "Paper") {
            console.log("You lose! " + cpu + " beats " + hmn);
            computerScore += 1;
        } else {
            console.log("It's a tie!")
        }
    }

    while (humanScore < 3 && computerScore < 3) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore = 3) {
        console.log("Congrats! You beat the computer " + humanScore + " to " + computerScore);
    } else if (computerScore = 3) {
        console.log("Yikes, beaten by the computer " + computerScore + " to " + humanScore);
    } else {
        console.log("How did this game end??");
    }
}

playGame();