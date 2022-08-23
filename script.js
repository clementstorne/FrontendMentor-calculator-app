let digitsOnScreen = document.getElementById("result");
let resultButton = document.getElementById("button-result");
let resetButton = document.getElementById("button-reset");
let delButton = document.getElementById("btn-del");

let operationButtons = document.querySelectorAll(".btn-operation");
let addition = document.getElementById("btn-plus");
let substraction = document.getElementById("btn-minus");
let multiplication = document.getElementById("btn-multiply");
let division = document.getElementById("btn-divide");

function clearScreen() {
  let digitsOnScreen = document.getElementById("result");
  digitsOnScreen.textContent = "";
}

delButton.onclick = () => {
  clearScreen();
};

resetButton.onclick = () => {
  a = "";
  b = "";
  operator = "";
  clearScreen();
};

// DIGITS
let button0 = document.getElementById("btn0");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");
let button5 = document.getElementById("btn5");
let button6 = document.getElementById("btn6");
let button7 = document.getElementById("btn7");
let button8 = document.getElementById("btn8");
let button9 = document.getElementById("btn9");

function clickOnDigitKey(key) {
  digitsOnScreen.textContent += `${key}`;
}

button0.onclick = () => {
  if (isResultPrinted) {
    clearScreen();
    isResultPrinted = false;
  }
  clickOnDigitKey(0);
};
button1.onclick = () => {
  if (isResultPrinted) {
    clearScreen();
    isResultPrinted = false;
  }
  clickOnDigitKey(1);
};
button2.onclick = () => {
  if (isResultPrinted) {
    clearScreen();
    isResultPrinted = false;
  }
  clickOnDigitKey(2);
};
button3.onclick = () => {
  if (isResultPrinted) {
    clearScreen();
    isResultPrinted = false;
  }
  clickOnDigitKey(3);
};
button4.onclick = () => {
  if (isResultPrinted) {
    clearScreen();
    isResultPrinted = false;
  }
  clickOnDigitKey(4);
};
button5.onclick = () => {
  if (isResultPrinted) {
    clearScreen();
    isResultPrinted = false;
  }
  clickOnDigitKey(5);
};
button6.onclick = () => {
  if (isResultPrinted) {
    clearScreen();
    isResultPrinted = false;
  }
  clickOnDigitKey(6);
};
button7.onclick = () => {
  if (isResultPrinted) {
    clearScreen();
    isResultPrinted = false;
  }
  clickOnDigitKey(7);
};
button8.onclick = () => {
  if (isResultPrinted) {
    clearScreen();
    isResultPrinted = false;
  }
  clickOnDigitKey(8);
};
button9.onclick = () => {
  if (isResultPrinted) {
    clearScreen();
    isResultPrinted = false;
  }
  clickOnDigitKey(9);
};

// COMPUTE
let a = "";
let b = "";
let operator = "";
let result = "";
let isResultPrinted = false;

function compute() {
  if (digitsOnScreen.textContent === "") {
    digitsOnScreen.textContent = "ERROR";
  } else {
    b = parseInt(digitsOnScreen.textContent);
    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = Math.round((a / b) * Math.pow(10, 11)) / Math.pow(10, 11);
        break;
    }
  }
}

function printResult() {
  digitsOnScreen.textContent = result;
  isResultPrinted = true;
}

operationButtons.forEach((item) => {
  item.addEventListener("click", () => {
    a = parseInt(digitsOnScreen.textContent);
    clearScreen();
  });
});

addition.onclick = () => {
  operator = "+";
};

substraction.onclick = () => {
  operator = "-";
};

multiplication.onclick = () => {
  operator = "*";
};

division.onclick = () => {
  operator = "/";
};

resultButton.onclick = () => {
  compute();
  printResult();
  a = result;
  b = "";
  operator = "";
  result = "";
};

// THEME SWITCH
let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let theme3 = document.getElementById("theme3");
let themeCursor = document.getElementById("theme-cursor");

theme1.onclick = () => {
  themeCursor.style.gridArea = "1/1/1/2";
};

theme2.onclick = () => {
  themeCursor.style.gridArea = "1/2/1/3";
};

theme3.onclick = () => {
  themeCursor.style.gridArea = "1/3/1/4";
};
