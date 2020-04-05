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
function startGame(num, newGame = false) {
    let myNumber = Math.round(Math.random() * 100) + 1;

    if(newGame) {
        myNumber = Math.round(Math.random() * 100) + 1;
    }
    console.log(myNumber);

    let userNumber = prompt('Угадай число от 0 до 100');
    let numberAttempts = num;

    if(userNumber !== null) {
        function processGame() {
            if(isNum(userNumber)) {
                if(userNumber > myNumber) {
                    numberAttempts--;

                    if(!numberAttempts) {
                        replayGame();
                    } else {
                        alert('Загаданное число меньше, осталось попыток: ' + numberAttempts);
                        startGame(numberAttempts);
                    }
                }
                else if(userNumber < myNumber) {
                    numberAttempts--;

                    if(!numberAttempts) {
                        replayGame();
                    } else {
                        alert('Загаданное число больше, осталось попыток: ' + numberAttempts);
                        startGame(numberAttempts);
                    }
                }
                else {
                    let replayGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

                    if(replayGame) {
                        startGame(10, true);
                    }
                    else {
                        alert('До скорого!');
                        return;
                    }
                }
            }
            else {
                let validate = confirm('Введи число!');

                if(validate) {
                    numberAttempts--;

                    startGame(numberAttempts);
                }
                else {
                    alert('До скорого!');
                    return;
                }
            } 
        }
        return processGame(); 
    }
    else {
        alert('До скорого!');
        return;
    }
}
startGame(10, true);

/**
 * Check replay game.
 */
function replayGame() {
    let replay = confirm('Попытки закончились, хотите сыграть еще?');

    if(replay) {
        startGame(10, true);
    } 
    
    alert('До скорого!');
    return;
}