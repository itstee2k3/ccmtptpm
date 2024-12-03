function getNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
  }
  
  function multiply() {
    const { num1, num2 } = getNumbers();
    if (isNaN(num1) || isNaN(num2)) {
      displayResult('Vui lòng nhập hai số hợp lệ!');
      return;
    }
    displayResult(num1 * num2);
  }
  
  function divide() {
    const { num1, num2 } = getNumbers();
    if (isNaN(num1) || isNaN(num2)) {
      displayResult('Vui lòng nhập hai số hợp lệ!');
      return;
    }
    if (num2 === 0) {
      displayResult('Không thể chia cho 0!');
      return;
    }
    displayResult(num1 / num2);
  }

  function displayResult(message) {
    document.getElementById('result').textContent = message;
  }
  

  