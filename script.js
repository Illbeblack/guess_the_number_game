'use strict';
const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.question').textContent = secretNum;

document.querySelector('.check').addEventListener('click',function () {
    const enteredNum = Number(document.querySelector('.number-input').value);
    
    // No input

    if (!enteredNum) {
        document.querySelector('.guess-message').textContent = "ENTER NUMBER!";
    }

    // Plaer won

    else if (enteredNum === secretNum) {
        document.querySelector('.guess-message').textContent = "You're God damn Right!";
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        document.querySelector('.question').style.width = '50rem';
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
