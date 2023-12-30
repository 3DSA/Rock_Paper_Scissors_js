function getComputerChoice () {
    const choice = Math.random()
    if(choice < (1/3)) {
        return "rock";
    }
    else if(choice < 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function playRound(player, comp) {
    if(player===comp) {
        return "It's a draw!";
    }
    else if(player==="rock") {
        if(comp==="paper") {
            return "You lost!";
        }
        else { //scissors
            return "You won!";
        }
    }
    else if (player==="paper") {
        if(comp==="rock") {
            return "You won!";
        }
        else { //scissors
            return "You lost!";
        }
    }
    else { //scissors
        if(comp==="paper") {
            return "You won!";
        }
        else { //rock
            return "You lost!";
        }
    }
}
function game(gamesplayed) {
    for(let i = 0; i < gamesplayed; ++i) {
        let compChoice = getComputerChoice();
        let playerChoice = prompt("Choose rock, paper, or scissors!");
        playerChoice = playerChoice.toLowerCase();
        alert(playRound(playerChoice,compChoice)); 
    }
}

