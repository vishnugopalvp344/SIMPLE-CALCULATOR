
let num1Input = document.getElementById('num1');
let num2Input = document.getElementById('num2');
let operatorSelect = document.getElementById('operator');
let resultDiv = document.getElementById('result');

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return 'Error: Division by zero!';
  }
}

function printResult(result) {
  resultDiv.innerText = result;
}

function calculate() {
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value);
  let operator = operatorSelect.value;

  let result;
  switch (operator) {
    case 'add':
      result = add(num1, num2);
      break;
      case 'subtract':
        result = subtract(num1, num2);
        break;
      case 'multiply':
        result = multiply(num1, num2);
        break;
      case 'divide':
        result = divide(num1, num2);
        break;
      default:
        result = 'Error: Invalid operator!';
    }
  
    printResult(result);
  }
  
  document.getElementById('equal-btn').addEventListener('click', calculate);
  
  