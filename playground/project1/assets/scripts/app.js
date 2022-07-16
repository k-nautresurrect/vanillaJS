import el from "./vendor.js";

// initializtion
let result = 0;
let resultStrArr = []; // array of objects
let resultStr = "";

el.add.addEventListener("click", add);
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
// make a string
function prepareStr() {
  //   resultStrArr.forEach((objVal, idx) => {
  //     resultStr = `${objVal.num} ${objVal.sign} `;
  //   });
  showOutput(resultStr, result);
}
// show output
function showOutput(resultStr, result) {
  el.result(result, resultStr);
}
