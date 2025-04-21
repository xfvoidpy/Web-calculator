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

const clickSound = new Audio('sound/sound.mp3'); // Ses dosyasını buraya ekle

function playClickSound() {
  clickSound.play(); // Butona tıklandığında ses çalar
}

function appendNumber(value) {
  playClickSound(); // Tuşa basıldığında ses çal
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  playClickSound(); // Temizleme tuşuna basıldığında ses çal
  currentInput = '';
  display.value = '';
}

function calculate() {
  playClickSound(); // Hesaplama tuşuna basıldığında ses çal
  try {
    currentInput = eval(currentInput.replace('÷', '/').replace('×', '*')).toString();
    display.value = currentInput;
  } catch {
    display.value = 'Error';
  }
}

function toggleSign() {
  playClickSound(); // ± tuşuna basıldığında ses çal
  if (currentInput) {
    if (currentInput.startsWith('-')) {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = '-' + currentInput;
    }
    display.value = currentInput;
  }
}
