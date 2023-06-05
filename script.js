'use strict';

let secretNum;
let score = 20;
let bestScore = 0;

function getSecretNum () {
    secretNum = Math.trunc(Math.random() * 20) + 1;
};
getSecretNum ();

document.querySelector('.check').addEventListener('click',function () {
    const enteredNum = Number(document.querySelector('.number-input').value);
    // No input

    if (!enteredNum) {
        document.querySelector('.guess-message').textContent = "ENTER NUMBER!";
    }

    // Plaer won

    else if (enteredNum === secretNum) {
        document.querySelector('.guess-message').textContent = "You're God damn Right!";
        document.querySelector('.question').textContent = secretNum;
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        document.querySelector('.question').style.width = '50rem';
        if (score > bestScore) {
            bestScore = score;
            document.querySelector('.best-score').textContent = bestScore;
        }
    }

    //To high

    else if (enteredNum > secretNum) {
        if (score > 1) {
            document.querySelector('.guess-message').textContent = "Overdo!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.guess-message').textContent = "Game over";
            document.querySelector('.score').textContent = 0;
        }
    }

    // Too low
    else if (enteredNum < secretNum) {
        if (score > 1) {
            document.querySelector('.guess-message').textContent = "It's not enough!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.guess-message').textContent = "Game over";
            document.querySelector('.score').textContent = 0;
        }
    }
});

//Restart button

document.querySelector('.again').addEventListener('click', function () {
    //new secret number

    getSecretNum ();

    //default html

    document.querySelector('.question').textContent = '???';
    document.querySelector('.guess-message').textContent = "Let's start!";
    document.querySelector('.number-input').value = '';
    document.querySelector('.score').textContent = 20;
    score = 20;

    //default style

    document.querySelector('.question').style.width = '25rem';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
