function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
     return humanChoice;
    } else {
     console.log('Invalid choice. Please choose rock, paper or scissors');
     return getHumanChoice();
    }
 }

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'scissors';
    } else {
        return 'paper';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
       if (humanChoice === computerChoice) {
            humanScore++;
            computerScore++;
            console.log(`TIE! your ${humanChoice} is the same ${computerChoice} as computer's`)
        } else if (humanChoice === 'scissors' && computerChoice === 'paper' ||
                humanChoice === 'paper' && computerChoice === 'rock' ||
                humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++;
            console.log(`Win! human's ${humanChoice} beats computer's ${computerChoice}`)
        } else {
            computerScore++;
            console.log(`Loss! human's ${humanChoice} cannot beat computer's ${computerChoice}`)
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

console.log("Round 1:");
playGame();

console.log("Round 2:");
playGame();

console.log("Round 3:");
playGame();

console.log("Round 4:");
playGame();

console.log("Round 5:");
playGame();
