const button = document.getElementById("btn");

select = ["r", "p", "c"];
let val;

button.addEventListener("click", input);

function input() {
  val = prompt("Enter r c p");
  check();
}

function check() {
  let cpu = select[Math.floor(Math.random() * 3)];
  if (cpu === "r") {
    if (val == "p") {
      alert("win");
    } else if (val === cpu) {
      alert("tie");
    } else {
      alert("Lose");
    }
  } else if (cpu === "c") {
    if (val == "r") {
      alert("win");
    } else if (val === cpu) {
      alert("tie");
    } else {
      alert("Lose");
    }
  } else {
    if (val == "c") {
      alert("win");
    } else if (val === cpu) {
      alert("tie");
    } else {
      alert("Lose");
    }
  }
}
