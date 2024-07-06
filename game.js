// console.log("Hello world")

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    const rock = 0;
    const scissors = 1; 
    const paper = 2; 
    if (computerChoice === 0) {
        console.log("rock")
    } else if (computerChoice === 1) {
        console.log("scissors")
    } else if (computerChoice === 2) {
        console.log("paper")
    }
}

// getComputerChoice()