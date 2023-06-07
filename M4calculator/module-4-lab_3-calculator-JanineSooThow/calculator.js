
function clearScreen() {
    document.getElementById("answer").value = "";
    }

function display(value) {
    document.getElementById("answer").value += value;
    }

function calculate() {
    let a = document.getElementById("answer").value;
    let b = eval(a);
    document.getElementById("answer").value = b;
    }