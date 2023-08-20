const calculator = {
  displayNumber: "0",
  opration: null,
  firstNumber: null,
  secondNumber: false,
};
function updateDisplay() {
  document.querySelector(".txt-result").innerHTML = calculator.displayNumber;
}
function clearCalc() {
  calculator.displayNumber = "0";
  calculator.opration = null;
  calculator.firstNumber = null;
  calculator.secondNumber = false;
}

document.querySelector(".txt-first").style.opacity = "0";
function digit(number) {
  if (calculator.displayNumber == "0") {
    calculator.displayNumber = number;
  } else {
    calculator.displayNumber += number;
  }
}

function firstNumber() {
  if (calculator.opration == "X") {
    calculator.opration = "x";
  }

  document.querySelector(".txt-first").innerHTML = calculator.firstNumber + " " + calculator.opration;
  document.querySelector(".txt-first").style.opacity = "100%";
}

function endNum() {
  document.querySelector(".txt-first").style.opacity = "0";
}

function Handle(opration) {
  if (!calculator.secondNumber) {
    calculator.opration = opration;
    calculator.firstNumber = calculator.displayNumber;
    calculator.secondNumber = true;
    calculator.displayNumber = "0";
  }
}

function result() {
  if (calculator.firstNumber === null || calculator.secondNumber === null) {
    alert("kamu belum menetapkan apapun");
    return;
  }

  let hasil = 0;
  if (calculator.opration === "+") {
    hasil = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else if (calculator.opration === "x") {
    hasil = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber);
  } else if (calculator.opration === "-") {
    
    hasil = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  } else if (calculator.opration === "/") {
    hasil = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber);
  } else if (calculator.opration === "%") {
    hasil = (parseInt(calculator.firstNumber) / 100) * parseInt(calculator.displayNumber);
  } else {
    alert("kesalahan");
  }

  calculator.displayNumber = hasil;
}

function backSpace() {
  if (calculator.displayNumber.length == "1") {
    calculator.displayNumber = "0";
  } else {
    calculator.displayNumber = calculator.displayNumber.toString().slice(0, -1);
  }
}

const buttons = document.querySelectorAll(".box-num");
for (const button of buttons) {
  button.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("clear")) {
      clearCalc();
      updateDisplay();
      endNum;
      return;
    }

    if (target.classList.contains("oprasi")) {
      Handle(target.innerHTML);
      firstNumber();
      return;
    }

    if (target.classList.contains("hasil")) {
      result();
      updateDisplay();
      endNum();
      return;
    }
    if (target.classList.contains("bckspace")) {
      backSpace();
      updateDisplay();
      return;
    }

    digit(target.innerHTML);
    updateDisplay();
  });
}
