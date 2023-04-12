let result = document.getElementById('result');

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function deleteLastChar() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  result.value = eval(result.value);
}

