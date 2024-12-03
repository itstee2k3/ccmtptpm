// calculator.js

function getNumbers() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  return { num1, num2 };
}

function add() {
  const { num1, num2 } = getNumbers();
  if (isNaN(num1) || isNaN(num2)) {
    displayResult('Vui lòng nhập hai số hợp lệ!');
    return;
  }
  displayResult(num1 + num2);
}

function subtract() {
  const { num1, num2 } = getNumbers();
  if (isNaN(num1) || isNaN(num2)) {
    displayResult('Vui lòng nhập hai số hợp lệ!');
    return;
  }
  displayResult(num1 - num2);
}

function displayResult(message) {
  document.getElementById('result').textContent = message;
}
