'use strict';

document.querySelector('.check').addEventListener('click',function () {
    const enteredNumber = Number(document.querySelector('.number-input').value);
    
    if (!enteredNumber) {
        document.querySelector('.guess-message').textContent = 'ENTER NUMBER!';
    }
})
