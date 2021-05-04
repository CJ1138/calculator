//Basic maths functions

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}


//We need event listeners on the number buttons that display the just
//pressed key in the display. We need to treat '.' differently though as
//we don't want users to be able to add more than one decimal point!

let numberButtons = document.querySelectorAll('.number');
let screen = document.querySelector('#screen-text')
screen.innerHTML = '0';

numberButtons.forEach((item, index) => numberButtons[index].addEventListener('click', numButtonPress));

let currentNumber = '0';
let lastAnswer = 0;
let lastOperator = '';

function numButtonPress(e){
    let input = this.innerHTML;
    if (currentNumber.length == 15){
        return;
    }
    if(screen.innerHTML == '0' || lastOperator == ''){
        currentNumber = input;
        screen.innerHTML = currentNumber;
    }else{
        currentNumber += input;
        screen.innerHTML = currentNumber;
    }
}

let clearButton = document.getElementById('clr');
let deleteButton = document.getElementById('del');

clearButton.addEventListener('click', clear);

function clear(){
    currentNumber = '0';
    screen.innerHTML = currentNumber;
}

deleteButton.addEventListener('click', del);

function del() {
    if (currentNumber.length == 1){
        currentNumber = '0';
    } else {
        currentNumber = currentNumber.slice(0, -1);
    }
    screen.innerHTML = currentNumber;
}

//When someone presses an operator button (plus, minus etc) we need to keep the first number on the screen,
//then, when they start typing more, store the number on the screen somewhere, record the required operator
//and display the new number. Pressing = at this point should execute the required sum, howevever we also 
//need to be able to chain sums. We don't need to be able to undo, so all we really need is to keep the result
//of the last equation to use on the next. Pressing an operator key should show the answer to the previous
//equation on the screen

//Define a function to add the current number on the screen to the next number entered
//First add an event listener to all the operator buttons
let operatorButtons = document.querySelectorAll('.operator');

console.log(operatorButtons);

operatorButtons.forEach((item, index) => operatorButtons[index].addEventListener('click', operate));

//Operate function to perform a given action on two numbers
function operate(e){
        currentNumber = screen.innerHTML;
        lastOperator = this.id;
        console.log(currentNumber);
        console.log(lastOperator);
}

