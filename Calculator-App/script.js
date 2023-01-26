const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
const equalButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const moduloButton = document.getElementById('percent');

let screenValue = '';
let result = '';
let operator = '';
let firstNumber = 0;
let secondNumber = 0;

for (item of buttons) {
    item.addEventListener('click', (e) => {
        if (e.target.innerText === '=') {
            if (screenValue !== '') {
                const numbers = screenValue.split(/[+\-/*%]/);
                if (numbers.length === 2) {
                    firstNumber = parseFloat(numbers[0]);
                    secondNumber = parseFloat(numbers[1]);
                    operator = screenValue.replace(/[0-9]/g, '');
                    if (operator === '+') {
                        result = add(firstNumber, secondNumber);
                    } else if (operator === '-') {
                        result = subtract(firstNumber, secondNumber);
                    } else if (operator === '*') {
                        result = multiply(firstNumber, secondNumber);
                    } else if (operator === '/') {
                        result = divide(firstNumber, secondNumber);
                    } else if (operator === '%') {
                        result = modulo(firstNumber, secondNumber);
                    }

                    screen.innerText = result;

                } else {
                    screen.innerText = 'Invalid Input';
                }

            } else {
                screen.innerText = 'Invalid Input';
            }
        } else if (e.target.innerText === 'C') {
            screenValue = '';
            screen.innerText = '';
        } else {
            screenValue += e.target.innerText;
            screen.innerText = screenValue;
        }
    });
}

addButton.addEventListener('click', (e) => {
    if(!/[+\-/*%]/.test(screenValue.slice(-1))) {
        operator = '+';
        screenValue += operator;
        screen.innerText = screenValue;
    }
});

subtractButton.addEventListener('click', (e) => {
    if(!/[+\-/*%]/.test(screenValue.slice(-1))) {
        operator = '-';
        screenValue += operator;
        screen.innerText = screenValue;
    }
});
multiplyButton.addEventListener('click', (e) => {
    if(!/[+\-/*%]/.test(screenValue.slice(-1))) {
        operator = '*';
        screenValue += operator;
        screen.innerText = screenValue;
    }
});
divideButton.addEventListener('click', (e) => {
    if(!/[+\-/*%]/.test(screenValue.slice(-1))) {
        operator = '/';
        screenValue += operator;
        screen.innerText = screenValue;
    }
});

moduloButton.addEventListener('click', (e) => {
    if(!/[+\-/*%]/.test(screenValue.slice(-1))) {
        operator = '%';
        screenValue += operator;
        screen.innerText = screenValue;
    }
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b!==0)
    return a / b;
    else return "Can't divide by zero"
}

function modulo(a, b) {
    return a % b;
}
