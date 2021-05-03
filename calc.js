const calcBody = document.getElementById('calculator-body');
console.log(calcBody);
const buttonGrid = calcBody.querySelector('button-grid');

const buttons = buttonGrid.querySelectorAll('div');

buttons.forEach(button => {
    button.classList.add('button');
});