//Get page elements
let numberButtons = document.querySelectorAll('.number');
let screen = document.querySelector('#screen-text')
let clearButton = document.getElementById('clr');
let deleteButton = document.getElementById('del');
let operatorButtons = document.querySelectorAll('.operator');
let equalsButton = document.getElementById('equals');

//Initial variables and states
let currentNumber = '0';
let prevNumber = '0';
let lastAnswer = 0;
let lastOperator = '';
let operatorToggle = 'off';
let equalsToggle = 'off';
screen.innerHTML = '0';

//Add listeners
numberButtons.forEach((item, index) => numberButtons[index].addEventListener('click', numButtonPress));
operatorButtons.forEach((item, index) => operatorButtons[index].addEventListener('click', operatorPressed));
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', del);
equalsButton.addEventListener('click', equalsPressed);


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

//Main functions
function clear(){
    currentNumber = '0';
    lastNumber = '0';
    operatorToggle = 'off';
    equalsToggle = 'off';
    lastAnswer = 0;
    screen.innerHTML = '0';
}

function operate(){
    x = parseInt(prevNumber);
    y = parseInt(currentNumber);
    if(lastOperator == 'add'){
        lastAnswer = add(x, y);
    }else if(lastOperator == 'subtract'){
        lastAnswer = subtract(x,y);
    }else if(lastOperator == 'divide'){
        lastAnswer = divide(x,y);
    }else if(lastOperator = 'multiply'){
        lastAnswer = multiply(x,y);
    }
}

function numButtonPress(e){
    let input = this.innerHTML;
    if (currentNumber.length == 15){
        return;
    }
    if(screen.innerHTML == '0' || operatorToggle == 'on' || equalsToggle == 'on'){
        currentNumber = input;
        screen.innerHTML = currentNumber;
    }else{
        currentNumber += input;
        screen.innerHTML = currentNumber;
    }
    operatorToggle = 'off';
    equalsToggle = 'off';
}

function del() {
    if (currentNumber.length == 1){
        currentNumber = '0';
    } else {
        currentNumber = currentNumber.slice(0, -1);
    }
    screen.innerHTML = currentNumber;
}

function operatorPressed(e){
    if(operatorToggle == 'on'){
        operate();
        screen.innerHTML = lastAnswer;
    }
    prevNumber = currentNumber;
    currentNumber = screen.innerHTML;
    lastOperator = this.id;
    operatorToggle = 'on';
}

function equalsPressed(){
    operate();
    screen.innerHTML = lastAnswer;
    currentNumber = lastAnswer;
    equalsToggle = 'on';

}

