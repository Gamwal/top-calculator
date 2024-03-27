function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function operate(firstOperand, secondOperand, operator) {
  return
}

let operandHolder = [];
let numberHolder = [];

const operatorButtons = document.querySelectorAll('button');
const operatorButtonsList = [...operatorButtons];

const numberButtons = document.getElementsByClassName('number');
const numberButtonsList = [...numberButtons];

numberButtonsList.map((button) => {
  button.addEventListener('click', (event) => {
    const keyPressed = event.target;
    // console.log(keyPressed.textContent);
    numberHolder.push(keyPressed.textContent);
    display.textContent = numberHolder.join('');
  });
});

operatorButtonsList.map((button) => {
  button.addEventListener('click', (event) => {
    const keyPressed = event.target;
    console.log(keyPressed.textContent);
    operandHolder.push(keyPressed.textContent);

    // display.textContent = numberHolder.join('');
  });
});

const display = document.getElementById('display');
display.textContent = '0123456789';