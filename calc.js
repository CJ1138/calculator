//Get page elements
const numberButtons = document.querySelectorAll('.number');
const screen = document.querySelector('#screen-text')
const clearButton = document.getElementById('clr');
const deleteButton = document.getElementById('del');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const decimalButtin = document.getElementById('decimal');

/*

Things we need:

- Something to check if the program is in its initial state
- Something to say what happens when the program is in its initial state (i.e
    to control how numbers should be initially displayed, and to do nothing except in the case of a number or a decimal)
- Something to check if an answer is onscreen
- A variable to hold the current operator (to be set to null when the memory is cleared)
- A variable to track the number of characters onscreen and logic to say when its full
- A variable to say when there's a decimal onscreen
- A variable to store the current number (i.e. the number stored when an operator is pressed)
- Fucntions to do the maths

*/

// Variables to track current program state:

var initialState;
var numEntered;
var currentOperator;
var numDisplayed;
var answerDisplayed;
var decimalDisplayed;

function setInitialState(){
    initialState = true;
    numEntered = null;
    currentOperator = null;
    numDisplayed = "";
    answerDisplayed = false;
    decimalDisplayed = false;
    screen.innerHTML = "0";
}
setInitialState();

//Logic for when user pushes number key
//TODO - Add logic for when an answer is onscreen
numberButtons.forEach(function numListeners(button){
    button.addEventListener('click', function clickNumber(event){
        if (numDisplayed.length <= 15){
            if (initialState){
                screen.innerHTML = this.id;
                numDisplayed = this.id;
            } else {
                screen.innerHTML += this.id;
                numDisplayed += this.id;
            }
            initialState = false;
        } else {
            return;
        }
    })
})

//Logic for when user presses CLR key
clearButton.addEventListener('click', function clickClear(){
    setInitialState();
})

//Logic for when user presses DEL key
//TODO - Add logic for when an answer is onscreen (bearing in mind numentered + 0 = numentered)
deleteButton.addEventListener('click', function clickDelete(){
    if(!initialState){
        if (numDisplayed.length > 1){
            numDisplayed = numDisplayed.substring(0, numDisplayed.length-1);
            screen.innerHTML = numDisplayed;
        } else {
            setInitialState();
        }
    }
})

//TODO - Logic for when decimal key is pressed
//TODO - Logic for when operator key is pressed
//TODO - Logic for when equals key is pressed

