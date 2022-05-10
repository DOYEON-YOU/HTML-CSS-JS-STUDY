function add(char) {
  let display = document.getElementById("procedure");
  display.value = display.value + char;
}

function calculate() {
  let display = document.getElementById("procedure");
  let result = eval(display.value);
  document.getElementById("result").value = result;
}

function ale() {
  let value = document.getElementById("result").value;
  if (value >= 1) {
    alert("양수입니다.");
  } else if (value < 0) {
    alert("음수입니다.");
  } else {
    alert("0입니다.");
  }
  document.getElementById("result").value = "";
  document.getElementById("procedure").value = "";
}

function clearAll() {
  document.getElementById("result").value = "";
  document.getElementById("procedure").value = "";
}

function backSpace() {
  let display = document.getElementById("procedure");
  let disValue = display.value;
  let delNum = disValue.substring(0, disValue.length - 1);
  display.value = delNum;
}