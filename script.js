const choices = document.querySelectorAll('.choice');
const resultMessage = document.querySelector('.result-message');
const scoreSpan = document.getElementById('score');
let score = 0;

choices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

function playGame(e) {
    const userChoice = e.target.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);
    showResult(winner, userChoice, computerChoice);
}

function getComputerChoice() {
    const random = Math.random();
    if (random < 0.34) {
        return 'rock';
    } else if (random < 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getWinner(user, computer) {
    if (user === computer) {
        return 'draw';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function showResult(winner, userChoice, computerChoice) {
    if (winner === 'draw') {
        resultMessage.textContent = `It's a draw! You both chose ${userChoice}.`;
    } else if (winner === 'user') {
        resultMessage.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        score++;
    } else {
        resultMessage.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        score--;
    }
    scoreSpan.textContent = score;
}
