let digitsOnScreen = document.getElementById("result");
let resultButton = document.getElementById("button-result");
let resetButton = document.getElementById("button-reset");
let delButton = document.getElementById("btn-del");

let operationButtons = document.querySelectorAll(".btn-operation");
let addition = document.getElementById("btn-plus");
let substraction = document.getElementById("btn-minus");
let multiplication = document.getElementById("btn-multiply");
let division = document.getElementById("btn-divide");

// General functions
function clearScreen() {
  let digitsOnScreen = document.getElementById("result");
  digitsOnScreen.textContent = "";
}

// Button functions
// delButton.onclick = () => {
//   clearScreen();
// };
delButton.onclick = () => {
  turnIntoDecimalFraction(digitsOnScreen.textContent);
};

resetButton.onclick = () => {
  a = "";
  b = "";
  operator = "";
  clearScreen();
};

resultButton.onclick = () => {
  compute();
  printResult();
  a = result;
  b = "";
  operator = "";
  result = "";
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
let buttonDecimal = document.getElementById("btn-comma");

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
buttonDecimal.onclick = () => {
  if (isResultPrinted) {
    clearScreen();
    isResultPrinted = false;
  }
  if (!isDecimal(digitsOnScreen.textContent)) {
    if (digitsOnScreen.textContent == "") {
      clickOnDigitKey("0.");
    } else {
      clickOnDigitKey(".");
    }
  }
};

// Number functions
function isDecimal(number) {
  const stringNumber = number.toString();
  return stringNumber.includes(".");
}

function turnIntoDecimalFraction(number) {
  let stringNumber = number.toString();
  if (isDecimal(number)) {
    let split = stringNumber.split(".");
    let numerator = parseInt(split[0] + split[1]);
    let denominator = split[1].length;
    return [numerator, denominator];
  } else {
    let numerator = number;
    let denominator = 0;
    return [numerator, denominator];
  }
}

function haveSameDenominator(number1, number2) {
  const [num1, den1] = turnIntoDecimalFraction(number1);
  const [num2, den2] = turnIntoDecimalFraction(number2);
  return den1 === den2;
}

function turnToSameDenominator(number1, number2) {
  let [num1, den1] = turnIntoDecimalFraction(number1);
  let [num2, den2] = turnIntoDecimalFraction(number2);
  if (den1 < den2) {
    num1 *= Math.pow(10, den2 - den1);
    return [num1, den1, num2, den2];
  } else {
    num2 *= Math.pow(10, den1 - den2);
    return [num1, den1, num2, den2];
  }
}

function truncateToFitScreen(number) {
  let [numerator, denominator] = turnIntoDecimalFraction(number);
  const numeratorString = numerator.toString();
  if (numeratorString.length > 14) {
    let array = numeratorString.split("");
    if (array[14] >= 5) {
      array[13] = parseInt(array[13]) + 1;
    }
    numerator = parseInt(array.slice(0, 14).join(""));
    return numerator / Math.pow(10, denominator);
  } else {
    return numerator / Math.pow(10, denominator);
  }
}

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
    b = parseFloat(digitsOnScreen.textContent);
    switch (operator) {
      case "+":
        if (isDecimal(a) || isDecimal(b)) {
          if (haveSameDenominator(a, b)) {
            let [num1, den1] = turnIntoDecimalFraction(a);
            let [num2, den2] = turnIntoDecimalFraction(b);
            result = (num1 + num2) / Math.pow(10, den1);
          } else {
            let [num1, den1, num2, den2] = turnToSameDenominator(a, b);
            result = (num1 + num2) / Math.pow(10, den1);
          }
        } else {
          result = a + b;
        }
        break;
      case "-":
        if (isDecimal(a) || isDecimal(b)) {
          if (haveSameDenominator(a, b)) {
            let [num1, den1] = turnIntoDecimalFraction(a);
            let [num2, den2] = turnIntoDecimalFraction(b);
            result = (num1 - num2) / Math.pow(10, den1);
          } else {
            let [num1, den1, num2, den2] = turnToSameDenominator(a, b);
            result = (num1 - num2) / Math.pow(10, den1);
          }
        } else {
          result = a - b;
        }
        break;
      case "*":
        if (isDecimal(a) || isDecimal(b)) {
          let [num1, den1] = turnIntoDecimalFraction(a);
          let [num2, den2] = turnIntoDecimalFraction(b);
          result = (num1 * num2) / Math.pow(10, den1 + den2);
        } else {
          result = a * b;
        }
        break;
      case "/":
        if (isDecimal(a) || isDecimal(b)) {
          let [num1, den1] = turnIntoDecimalFraction(a);
          let [num2, den2] = turnIntoDecimalFraction(b);
          result = (num1 / num2) * Math.pow(10, den2 - den1);
        } else {
          result = a / b;
        }
        break;
    }
  }
}

function printResult() {
  digitsOnScreen.textContent = truncateToFitScreen(result);
  isResultPrinted = true;
}

operationButtons.forEach((item) => {
  item.addEventListener("click", () => {
    a = parseFloat(digitsOnScreen.textContent);
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

// THEME SWITCH
let theme = localStorage.getItem("theme");
let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let theme3 = document.getElementById("theme3");
let themeCursor = document.getElementById("theme-cursor");
let themeCursorBackground = document.getElementById("theme-cursor-background");

theme1.onclick = () => {
  themeCursor.style.gridArea = "1/1/1/2";
  setTheme(1);
};

theme2.onclick = () => {
  themeCursor.style.gridArea = "1/2/1/3";
  setTheme(2);
};

theme3.onclick = () => {
  themeCursor.style.gridArea = "1/3/1/4";
  setTheme(3);
};

themeCursorBackground.onclick = () => {
  console.log("clic");
  let themeNumber = parseInt(localStorage.getItem("theme"));
  console.log(themeNumber);
  switch (themeNumber) {
    case 1:
      themeCursor.style.gridArea = "1/2/1/3";
      setTheme(2);
      themeNumber = 2;
      break;
    case 2:
      themeCursor.style.gridArea = "1/3/1/4";
      setTheme(3);
      break;
    case 3:
      themeCursor.style.gridArea = "1/1/1/2";
      setTheme(1);
      themeNumber = 1;
      break;
  }
};

function getThemeFromLS() {
  let themeSelected = localStorage.getItem("theme");
  if (!themeSelected) {
    localStorage.setItem("theme", 1);
    setTheme(1);
  } else {
    theme = localStorage.getItem("theme");
    let themeNumber = parseInt(theme);
    switch (themeNumber) {
      case 2:
        themeCursor.style.gridArea = "1/2/1/3";
        setTheme(2);
        break;
      case 3:
        themeCursor.style.gridArea = "1/3/1/4";
        setTheme(3);
        break;
      case 1:
        themeCursor.style.gridArea = "1/1/1/2";
        setTheme(1);
        break;
    }
  }
}

function setTheme(theme) {
  switch (theme) {
    case 1:
      localStorage.setItem("theme", 1);
      document.documentElement.style.setProperty(
        "--background",
        "hsl(222, 26%, 31%)"
      );
      document.documentElement.style.setProperty(
        "--screen",
        "hsl(224, 36%, 15%)"
      );
      document.documentElement.style.setProperty(
        "--keypad",
        "hsl(223, 31%, 20%)"
      );
      document.documentElement.style.setProperty(
        "--key-background",
        "hsl(30, 25%, 89%)"
      );
      document.documentElement.style.setProperty(
        "--key-shadow",
        "hsl(28, 16%, 65%)"
      );
      document.documentElement.style.setProperty(
        "--key-first-alt-background",
        "hsl(225, 21%, 49%)"
      );
      document.documentElement.style.setProperty(
        "--key-first-alt-shadow",
        "hsl(224, 28%, 35%)"
      );
      document.documentElement.style.setProperty(
        "--key-second-alt-background",
        "hsl(6, 63%, 50%)"
      );
      document.documentElement.style.setProperty(
        "--key-second-alt-shadow",
        "hsl(6, 70%, 34%)"
      );
      document.documentElement.style.setProperty("--text", "hsl(0, 0%, 100%)");
      document.documentElement.style.setProperty(
        "--text-buttons",
        "hsl(221, 14%, 31%)"
      );
      document.documentElement.style.setProperty(
        "--text-buttons-first-alt",
        "hsl(0, 0%, 100%)"
      );
      document.documentElement.style.setProperty(
        "--text-buttons-second-alt",
        "hsl(0, 0%, 100%)"
      );
      break;
    case 2:
      localStorage.setItem("theme", 2);
      document.documentElement.style.setProperty(
        "--background",
        "hsl(0, 0%, 90%)"
      );
      document.documentElement.style.setProperty("--screen", "hsl(0, 0%, 93%)");
      document.documentElement.style.setProperty("--keypad", "hsl(0, 5%, 81%)");
      document.documentElement.style.setProperty(
        "--key-background",
        "hsl(45, 7%, 89%)"
      );
      document.documentElement.style.setProperty(
        "--key-shadow",
        "hsl(35, 11%, 61%)"
      );
      document.documentElement.style.setProperty(
        "--key-first-alt-background",
        "hsl(185, 42%, 37%)"
      );
      document.documentElement.style.setProperty(
        "--key-first-alt-shadow",
        "hsl(185, 58%, 25%)"
      );
      document.documentElement.style.setProperty(
        "--key-second-alt-background",
        "hsl(25, 98%, 40%)"
      );
      document.documentElement.style.setProperty(
        "--key-second-alt-shadow",
        "hsl(25, 99%, 27%)"
      );
      document.documentElement.style.setProperty("--text", "hsl(60, 10%, 19%)");
      document.documentElement.style.setProperty(
        "--text-buttons",
        "hsl(60, 10%, 19%)"
      );
      document.documentElement.style.setProperty(
        "--text-buttons-first-alt",
        "hsl(0, 0%, 100%)"
      );
      document.documentElement.style.setProperty(
        "--text-buttons-second-alt",
        "hsl(0, 0%, 100%)"
      );
      break;
    case 3:
      localStorage.setItem("theme", 3);
      document.documentElement.style.setProperty(
        "--background",
        "hsl(268, 75%, 9%)"
      );
      document.documentElement.style.setProperty(
        "--screen",
        "hsl(268, 71%, 12%)"
      );
      document.documentElement.style.setProperty(
        "--keypad",
        "hsl(268, 71%, 12%)"
      );
      document.documentElement.style.setProperty(
        "--key-background",
        "hsl(268, 47%, 21%)"
      );
      document.documentElement.style.setProperty(
        "--key-shadow",
        "hsl(290, 70%, 36%)"
      );
      document.documentElement.style.setProperty(
        "--key-first-alt-background",
        "hsl(281, 89%, 26%)"
      );
      document.documentElement.style.setProperty(
        "--key-first-alt-shadow",
        "hsl(285, 91%, 52%)"
      );
      document.documentElement.style.setProperty(
        "--key-second-alt-background",
        "hsl(176, 100%, 44%)"
      );
      document.documentElement.style.setProperty(
        "--key-second-alt-shadow",
        "hsl(177, 92%, 70%)"
      );
      document.documentElement.style.setProperty(
        "--text",
        "hsl(52, 100%, 62%)"
      );
      document.documentElement.style.setProperty(
        "--text-buttons",
        "hsl(52, 100%, 62%)"
      );
      document.documentElement.style.setProperty(
        "--text-buttons-first-alt",
        "hsl(0, 0%, 100%)"
      );
      document.documentElement.style.setProperty(
        "--text-buttons-second-alt",
        "hsl(198, 20%, 13%)"
      );
      break;
  }
}
