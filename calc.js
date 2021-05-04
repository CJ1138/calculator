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

//Operate function to perform a given action on two numbers
function operate(a,b,operator){
    if (operator == "x"){
        return multiply(a,b);
    }
}

//We need event listeners on the number buttons that display the just
//pressed key in the display. We need to treat '.' differently though as
//we don't want users to be able to add more than one decimal point!

let numberButtons = document.querySelectorAll('.number');
let screen = document.querySelector('#screen-text')
screen.innerHTML = '0';

numberButtons.forEach((item, index) => numberButtons[index].addEventListener('click', numButtonPress));

let currentNumber = '0';

function numButtonPress(e){
    let input = this.innerHTML;
    if (currentNumber.length == 15){
        return;
    }
    if(screen.innerHTML == '0'){
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
