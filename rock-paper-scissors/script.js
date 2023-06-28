// Rock Paper Scissors! -Tyrese Collins

let choiceArray = ['rock', 'paper', 'scissors'];
let winCount = 0;
let compWin = 0;

function gameLogic() {
    if(playerChoice() == computerChoice()){
        console.log('Round draw');
    } else if (playerChoice() === 'rock' && computerChoice() === 'scissors') {
        winCount++;
    } else if (playerChoice() == 'paper' && computerChoice === 'rock') {
        winCount++;
    } else if (playerChoice() == 'scissors' && computerChoice() == 'paper') {
        winCount++;
    } else {
        compWin++;
    }

    let wins = document.querySelector('#wins');
    let losses = document.querySelector('#losses');

    wins.textContent = winCount;
    losses.textContent = compWin;
}

// Returns choice of computer.
function computerChoice() {
    let random = Math.floor(Math.random() * 3);
    console.log(choiceArray[random].concat(' Comp'));
    return choiceArray[random];
}

function playerChoice() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            console.log(button.id);
            computerChoice();
        })
    })
}

playerChoice();