import el from "./vendor.js";

// initializtion
let result = 0;
let resultStrArr = []; // array of objects
let resultStr = "";
// let idx=0;

el.add.addEventListener("click", add);
el.sub.addEventListener("click", subtract);
el.mul.addEventListener("click", multiply);
el.div.addEventListener("click", divide);
el.reset.addEventListener("click", reset);
el.equal.addEventListener("click", equal);

// take input from field
function takeInput() {
  if (!isNaN(el.input.value)) return parseInt(el.input.value);
}

// trigger that input according to btn click
function add(e) {
  let number = takeInput();
  const obj = { num: number, sign: e.target.textContent };
  resultStrArr.push(obj);
  result += number;
  prepareStr();
  console.log(resultStrArr);
}
function subtract(e) {
  let number = takeInput();
  const obj = { num: number, sign: e.target.textContent };
  resultStrArr.push(obj);
  result -= number;
  prepareStr();
  console.log(resultStrArr);
}
function multiply(e) {
  let number = takeInput();
  const obj = { num: number, sign: e.target.textContent };
  resultStrArr.push(obj);
  result *= number;
  prepareStr();
  console.log(resultStrArr);
}
function divide(e) {
  let number = takeInput();
  const obj = { num: number, sign: e.target.textContent };
  resultStrArr.push(obj);
  result /= number;
  prepareStr();
  console.log(resultStrArr);
}
// reset field
function reset() {
  el.input.value = null;
  result = 0;
  resultStr = "";
  resultStrArr = [];
  showOutput(resultStr, result);
}
//equal field
function equal(e) {
  let Str = prepareStr();
  Str = Str.slice(0, Str.length - 2);
  Str += `${e.target.textContent} ${result}`;
  showOutput(Str, result);
}

// make a string
function prepareStr() {
  let str = "";
  resultStrArr.forEach((objVal, idx) => {
    str += `${objVal.num} ${objVal.sign} `;
  });
  // resultStr+=resultStrArr[idx].num+resultStrArr[idx].sign;
  // idx++;
  showOutput(str, result);
  return str;
}
// show output
function showOutput(resultStr, result) {
  el.result(result, resultStr);
}
