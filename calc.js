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
var initialState = true;
var numEntered = null;
var currentOperator = null;
var numDisplayed = null;
var answerDisplayed = false;

