// Rock Paper Scissors! -Tyrese Collins

let choiceArray = ['rock', 'paper', 'scissors'];
let winCount = 0;
let compWin = 0;
const buttons = document.querySelectorAll('button');
let isPlayer = true;



buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (button.id != 'new-game') {
            let choice;
            console.log(button.id);
            choice = button.id;
            gameImages(choice);
            gameLogic(choice);
        }
    })
})


function gameLogic(choice) {
    let wins = document.querySelector('#wins');
    let losses = document.querySelector('#losses');
    let compChoice = computerChoice();
    let symbol = document.querySelector('#symbols');

    gameImages(compChoice);

    if(choice == compChoice){
        console.log('Round draw');
        symbol.textContent = '=';
    } else if (choice == 'rock' && compChoice == 'scissors') {
        winCount++;
        symbol.innerHTML = `&#10003`;
    } else if (choice == 'paper' && compChoice == 'rock') {
        winCount++;
        symbol.innerHTML = `&#10003`;
    } else if (choice == 'scissors' && compChoice == 'paper') {
        winCount++;
        symbol.innerHTML = `&#10003`;
    } else {
        compWin++;
        symbol.innerHTML = `&times`;
    }

    wins.textContent = winCount;
    losses.textContent = compWin;

    if (winCount == '5' || compWin == '5') {
        const newgame = document.querySelector('.modal');
        const awardText = document.querySelector('.text')
        if (compWin >= 5){
            awardText.innerHTML = "You Lose!"
        } else if (winCount >= 5){
            awardText.innerHTML = "You Win!"
        }
        newgame.style.display = "block";
    }
}


function computerChoice() {
    let random = Math.floor(Math.random() * 3);
    console.log(choiceArray[random].concat(' (Computer)'));
    return choiceArray[random];
}

// Use
function gameImages(choice){
    let imageBox;
    if (isPlayer){
        imageBox = document.querySelector('#play-Img');
        imageBox.setAttribute('src',`/images/${choice}.png`)
        isPlayer = false;
    } else {
        imageBox = document.querySelector('#comp-Img');
        imageBox.setAttribute('src',`/images/${choice}.png`)
        isPlayer = true;
    }
}

// Restart game.
function newGame() {
    winCount = 0;
    compWin = 0;

    const wins = document.querySelector('#wins');
    const losses = document.querySelector('#losses');
    const symbol = document.querySelector('#symbols');
    const newgame = document.querySelector('.modal');

    symbol.textContent = '';
    wins.textContent = 0;
    losses.textContent = 0;

    newgame.style.display = "none";

}