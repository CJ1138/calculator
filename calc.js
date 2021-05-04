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

function numButtonPress(e){
    let input = this.innerHTML;
    if(screen.innerHTML == '0'){
        screen.innerHTML = input;
    }else{
    screen.innerHTML += input;
    }
}

