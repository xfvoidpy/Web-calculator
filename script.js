let display = document.getElementById('display');
let currentInput = '';

function appendNumber(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}

function calculate() {
  try {
    currentInput = eval(currentInput.replace('÷', '/').replace('×', '*')).toString();
    display.value = currentInput;
  } catch {
    display.value = 'Error';
  }
}

function toggleSign() {
  if (currentInput) {
    if (currentInput.startsWith('-')) {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = '-' + currentInput;
    }
    display.value = currentInput;
  }
}
