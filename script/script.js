'use strict';

/**
 * Checks parameter for number.
 * 
 * @param {*} n 
 */
function isNum(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Process game.
 */
function startGame() {
    let myNumber = Math.round(Math.random() * 100) + 1;
    let userNumber = prompt('Угадай число от 0 до 100');

    if(userNumber !== null) {
        function processGame() {
            if(isNum(userNumber)) {
                if(userNumber > myNumber) {
                    alert('Загаданное число меньше');
                    startGame();
                }
                else if(userNumber < myNumber) {
                    alert('Загаданное число больше');
                    startGame();
                }
                else {
                    alert('Угадал');
                    return;
                }
            }
            else {
                let validate = confirm('Введи число!');

                if(validate) {
                    startGame();
                }
                else {
                    return;
                }
            } 
        }
        return processGame(); 
    }
    else {
        return;
    }
}
startGame();