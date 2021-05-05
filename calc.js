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
resetScreen();
unsetOperator()
let operatorSet = 'no'


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

function resetScreen(){
    screen.innerHTML = '0';
}

function unsetOpHighlight(){
    operatorButtons.forEach((item, index) => operatorButtons[index].classList.remove('op-clicked'));
}

//Returns calculator to intitial state
function clear(){
    currentNumber = '0';
    prevNumber = '0';
    operatorToggle = 'off';
    equalsToggle = 'off';
    lastAnswer = 0;
    unsetOpHighlight()
    resetScreen();
    let operatorSet = 'no'
}

//Based on current value of lastOperator calls one of the basic maths functions
//on currentNumber and prevNumber
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

//Runs when a number button is pressed
function numButtonPress(e){
    if(operatorSet == 'yes'){
        unsetOpHighlight();
    }
    //Declares a var called input and sets it to the current value on the screen
    let input = this.innerHTML;
    //Exits out of this function if the screen is already full (MAYBE ADD A VISUAL CHANGE)
    if (currentNumber.length == 15){
        return;
    }
    //Overwrites currentNumber with the last entered value
    //Replaces screen text with the last entered value
    //Does this only if screen displays '0' or if an operator or equals was just pressed
    if(screen.innerHTML == '0' || operatorToggle == 'on' || equalsToggle == 'on'){
        currentNumber = input;
        screen.innerHTML = input;
    }else{
    //If none of the above conditions is met, concatente the last entered number on the screen
    //Also upate the value of currentNumber (a string) by concating the last entered number on the end
        currentNumber += input;
        screen.innerHTML += input;
    }
    //Set that the last entered key was not equals or an operator
    operatorToggle = 'off';
    equalsToggle = 'off';
}

//Runs when the delete button is pressed
function del() {
    //If only one number is on the screen, set the current number to 0 
    if (screen.innerHTML.length == 1){
        currentNumber = '0';
    //If more than one number is on the screen, just deleted the last char of current number
    } else {
        currentNumber = currentNumber.slice(0, -1);
    }
    //Update the screen to the present value of current number
    screen.innerHTML = currentNumber;
}

function operatorPressed(e){
    unsetOpHighlight()
    this.classList.add('op-clicked');
    
    if(operatorSet == 'yes'){
        operate();
        currentNumber = lastAnswer;
        screen.innerHTML = lastAnswer;
        unsetOpHighlight()
    }

    prevNumber = currentNumber;
    currentNumber = screen.innerHTML;
    lastOperator = this.id;
    operatorToggle = 'on';
    operatorSet = 'yes';
    this.classList.add('op-clicked');
}

function equalsPressed(){
    unsetOpHighlight()
    operate();
    screen.innerHTML = lastAnswer;
    currentNumber = lastAnswer;
    equalsToggle = 'on';

}

//When someone enters a number and presses + then enters another 