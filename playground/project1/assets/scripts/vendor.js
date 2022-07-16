const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
const equalBtn = document.getElementById("btn-equal");
const resetBtn = document.getElementById("btn-reset");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

let elements = {
  input: userInput,
  add: addBtn,
  sub: subtractBtn,
  mul: multiplyBtn,
  div: divideBtn,
  equal: equalBtn,
  reset: resetBtn,
  result: outputResult,
};

export default elements;
