function add(a, b){
  return Number((a + b).toPrecision(14));
}

function subtract(a, b){
  return Number((a - b).toPrecision(14));
}

function multiply(a, b){
  return Number((a * b).toPrecision(14));
}

function divide(a, b){
  return Number((a / b).toPrecision(14));
}

function percent(a){
  return Number((a / 100).toPrecision(14));
}

function changeSign(a){
  return Number((-1 * a).toPrecision(14));
}

function operate(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return add(Number(firstOperand), Number(secondOperand));
  } else if (operator === '-') {
    return subtract(Number(firstOperand), Number(secondOperand));
  } else if (operator === 'X') {
    return multiply(Number(firstOperand), Number(secondOperand));
  } else if (operator === '/') {
    return divide(Number(firstOperand), Number(secondOperand));
  }
}

let operatorHolder = '';
let operandOneHolder = [];
let operandTwoHolder = [];

function clearHolders() {
  operatorHolder = '';
  operandOneHolder = [];
  operandTwoHolder = [];
}

function displayResult(arr) {
  if (Array.isArray(arr)) {
    display.textContent = arr.join('');
  } else {
    display.textContent = operandOneHolder.join('');
  }
}

function saveResult(number, arr='arr1') {
  if (arr === 'arr1'){
    // console.log(number)
    operandOneHolder.push(...String(number).split(''));
  } else if (arr === 'arr2'){
    // console.log(number)
    operandTwoHolder.push(...String(number).split(''));
  }
}



const display = document.getElementById('display');
display.textContent = '0';

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  clearHolders()
  display.textContent = '0';
  // display.textContent = operandOneHolder.join('');
})


const numberButtons = document.getElementsByClassName('number');
const numberButtonsList = [...numberButtons];

numberButtonsList.map((button) => {
  button.addEventListener('click', (event) => {
    const keyPressed = event.target;
    // console.log(operatorHolder);
    if (operatorHolder === '=') {
      // console.log('I was Triggered');
      clearHolders();
    }
    if (operandOneHolder.length <= 10 && operatorHolder.length === 0) {
      operandOneHolder.push(keyPressed.textContent);
      display.textContent = operandOneHolder.join('');
    } else if (operandTwoHolder.length <= 10 && operatorHolder.length === 1) {
      operandTwoHolder.push(keyPressed.textContent);
      display.textContent = operandTwoHolder.join('');
    }
  });
});


const operatorButtons = document.getElementsByClassName('operator');
const operatorButtonsList = [...operatorButtons];

operatorButtonsList.map((button) => {
  button.addEventListener('click', (event) => {
    // console.log(operatorHolder);
    const keyPressed = event.target;
    if (operandOneHolder.length !== 0 && operatorHolder.length === 0) {
      operatorHolder = keyPressed.textContent;
    } else if (operandOneHolder.length !== 0 && operatorHolder.length !== 0 && operandTwoHolder.length !== 0) {
      equalsButton.click();
    }
    operatorHolder = keyPressed.textContent;
  });
});


const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
  if (operatorHolder === '=' || operandTwoHolder.length === 0) {
    displayResult();
  } else {
  const result = operate(operandOneHolder.join(''), operandTwoHolder.join(''), operatorHolder);
  clearHolders();
  saveResult(result);
  displayResult();
  operatorHolder = '=';
  }
});

const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
  if (operandOneHolder.length !== 0 && operatorHolder.length === 0) {
    operandOneHolder.pop();
    displayResult();
  } else if (operandOneHolder.length !== 0 && operatorHolder.length !== 0 && operandTwoHolder.length !== 0) {
    operandTwoHolder.pop();
    displayResult(operandTwoHolder);
  }
})


const instantOperators = document.getElementsByClassName('instant');
const instantOperatorsList = [...instantOperators];

instantOperatorsList.map((button) => {
  button.addEventListener('click', (event) => {
    if (event.target.textContent === '%' && operatorHolder.length === 0) {
      const result = percent(operandOneHolder.join(''));
      clearHolders()
      saveResult(result);
      displayResult();
      // console.log('percent clicked for operand 1');
    } else if (event.target.textContent === '%' && operatorHolder.length !== 0 && operandTwoHolder.length !== 0) {
      const result = percent(operandTwoHolder.join(''));
      operandTwoHolder = [];
      saveResult(result, 'arr2');
      displayResult(operandTwoHolder);
      // console.log('percent clicked for operand 2');
    } else if (event.target.textContent === '+ / -' && operatorHolder.length === 0) {
      const result = changeSign(operandOneHolder.join(''));
      clearHolders()
      saveResult(result);
      displayResult();
      // console.log("You're on fire");
    } else if (event.target.textContent === '+ / -' && operatorHolder.length !== 0 && operandTwoHolder.length !== 0) {
      const result = changeSign(operandTwoHolder.join(''));
      operandTwoHolder = [];
      saveResult(result, 'arr2');
      displayResult(operandTwoHolder);
    }
  });
});


const decimalButton = document.getElementById('decimal');

decimalButton.addEventListener('click', () => {
  if (operatorHolder.length === 0 && !operandOneHolder.includes('.')){
    if (operandOneHolder.length === 0) {
      operandOneHolder.push(...['0']);
      displayResult();
      operandOneHolder.push(...['.']);
      displayResult();
    } else {
      operandOneHolder.push(...['.']);
      displayResult();
    }
  } else if (operatorHolder.length !== 0 && !operandTwoHolder.includes('.')) {
    if (operandTwoHolder.length === 0) {
      operandTwoHolder.push(...['0']);
      displayResult();
      operandTwoHolder.push(...['.']);
      displayResult();
    } else {
      operandTwoHolder.push(...['.']);
      displayResult(operandTwoHolder);
    }
  }
})

// create instant operators that act imediately on whatever is on display and return the value