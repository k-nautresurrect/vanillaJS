let count = 0;
const btn = document.querySelector("button");

//listen
btn.onclick = counterAdd;

//return
// btn.onclick = counterAdd();
console.dir(btn);
function counterAdd(event, a, b) {
  count++;
  btn.textContent = count;
  console.log(event);
}
