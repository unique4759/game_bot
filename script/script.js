'use strict';

/**
 * Checks parameter for number.
 * 
 * @param {*} n 
 */
function isNum(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function minMaxNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCount() {
    let count = 0;
    return function() {
        return ++count;
    };
}

function startGame(attepms) {
    let myNumber = minMaxNumber(1, 100);
    console.log(myNumber);
    let counter = getCount();

    return (function nextNumber() {
        let count = counter();
        let userNumber = prompt('Угадай число от 1 до 100');

        if (isNum(userNumber)) {
            let replayGame = false;

            if(count < attepms) {
                let countAttempt = attepms - count;
                let num = +userNumber;

                if(num > myNumber) {
                    alert('Загаданное число меньше, осталось попыток: ' + countAttempt);
                    return nextNumber();
                }
                if(num < myNumber) {
                    alert('Загаданное число больше, осталось попыток: ' + countAttempt);
                    return nextNumber();
                }

                replayGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            } else {
                replayGame = confirm('Попытки закончились, хотите сыграть еще?');
            }
            
            if (replayGame) startGame(attepms);
        } else {
            if(userNumber !== null) {
                alert('Введи число!');
                nextNumber();
            }
        }
        return alert('До скорого!');
    }());
}

startGame(10);