# Simple Calculator Web App

This is a simple web-based calculator that allows users to perform basic arithmetic operations.

## Installation

To use the calculator, simply open the HTML file (`index.html`) in a web browser.

## Usage

The calculator interface consists of buttons for numbers, operators (+, -, X, /), percentage (%), changing sign (+ / -), decimal point (.), clear (C), delete (del), and equals (=).

- Click on number buttons to input numbers.
- Click on operator buttons to select the operation (+, -, X, /).
- Use the percentage button to calculate percentages.
- The change sign button toggles the sign of the current number.
- The decimal point button adds a decimal point to the current number.
- Clear button (C) resets the calculator.
- Delete button (del) removes the last entered digit.
- Equals button (=) performs the calculation.

## Code Structure

- `index.html`: Contains the HTML structure of the calculator interface.
- `script.js`: Contains the JavaScript logic for performing calculations.

## Functionality

The calculator supports the following operations:

- Addition (+)
- Subtraction (-)
- Multiplication (X)
- Division (/)
- Percentage calculation (%)
- Changing sign (+ / -)
- Decimal point handling

```javascript
// Sample code from script.js
function add(a, b){
  return Number((a + b).toPrecision(14));
}
