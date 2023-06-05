'use strict';

let secretNum;
let score = 20;
let bestScore = 0;

//Secret number

function getSecretNum () {
    secretNum = Math.trunc(Math.random() * 20) + 1;
};
getSecretNum ();

//Change text in guess-message

function displayGuessMessage (text) {
    document.querySelector('.guess-message').textContent = text;
}

document.querySelector('.check').addEventListener('click',function () {
    const enteredNum = Number(document.querySelector('.number-input').value);
    // No input

    if (!enteredNum) {
        displayGuessMessage ("ENTER NUMBER!");
    }

    // Plaer won

    else if (enteredNum === secretNum) {
        displayGuessMessage ("You're God damn Right!");
        document.querySelector('.question').textContent = secretNum;
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        document.querySelector('.question').style.width = '50rem';
        if (score > bestScore) {
            bestScore = score;
            document.querySelector('.best-score').textContent = bestScore;
        }
    }

    // Wrong entered number

    else if(enteredNum !== secretNum) {
        if (score > 1) {
            displayGuessMessage (enteredNum > secretNum ? "Overdo!" : "It's not enough!");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayGuessMessage ("Game over");
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
    displayGuessMessage ("Let's start!");
    document.querySelector('.number-input').value = '';
    document.querySelector('.score').textContent = 20;
    score = 20;

    //default style

    document.querySelector('.question').style.width = '25rem';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
