const result = document.getElementById("result");
const operation = document.getElementById("operation");

document.getElementById("ac").addEventListener("click", clearCalculator);
document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("plus").addEventListener("click", () => pressOperation("+"));
document.getElementById("rest").addEventListener("click", () => pressOperation("-"));
document.getElementById("por").addEventListener("click", () => pressOperation("*"));
document.getElementById("sla").addEventListener("click", () => pressOperation("/"));

document.getElementById("one").addEventListener("click", () => pressNumber("1"));
document.getElementById("two").addEventListener("click", () => pressNumber("2"));
document.getElementById("three").addEventListener("click", () => pressNumber("3"));
document.getElementById("four").addEventListener("click", () => pressNumber("4"));
document.getElementById("five").addEventListener("click", () => pressNumber("5"));
document.getElementById("six").addEventListener("click", () => pressNumber("6"));
document.getElementById("seven").addEventListener("click", () => pressNumber("7"));
document.getElementById("eight").addEventListener("click", () => pressNumber("8"));
document.getElementById("nine").addEventListener("click", () => pressNumber("9"));
document.getElementById("cero").addEventListener("click", () => pressNumber("0"));
document.getElementById("dot").addEventListener("click", () => pressNumber("."));

let currentInput = "";
let previousInput = "";
let selectedOperation = null;

// Función para manejar la entrada de números
function pressNumber(num) {
    currentInput += num;
    result.innerText = currentInput; // Muestra el número en la pantalla
    operation.innerText = previousInput + (selectedOperation ? ` ${selectedOperation} ` : "") + currentInput;
}

// Función para manejar las operaciones
function pressOperation(op) {
    if (currentInput === "") return; // Evita operar sin número

    if (previousInput !== "") {
        calculate(); // Si ya hay un número previo, calcular antes
    }

    selectedOperation = op;
    previousInput = currentInput;
    currentInput = "";

    operation.innerText = previousInput + " " + selectedOperation;
}

// Función para calcular el resultado
function calculate() {
    if (previousInput === "" || currentInput === "") return;

    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);
    let total = 0;

    switch (selectedOperation) {
        case "+":
            total = num1 + num2;
            break;
        case "-":
            total = num1 - num2;
            break;
        case "*":
            total = num1 * num2;
            break;
        case "/":
            total = num2 !== 0 ? num1 / num2 : "Error";
            break;
        default:
            return;
    }

    operation.innerText = previousInput + " " + selectedOperation + " " + currentInput + " =";
    result.innerText = total;

    currentInput = total.toString();
    previousInput = "";
    selectedOperation = null;
}

// Función para limpiar la calculadora
function clearCalculator() {
    currentInput = "";
    previousInput = "";
    selectedOperation = null;
    result.innerText = "0";
    operation.innerText = "";
}