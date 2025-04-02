//Se identifica los elementos de result y operation
const result = document.getElementById("result");
const operation = document.getElementById("operation");

//Cuando el usuario toque ac el addeventlistener ejecuta clearCalculatir
document.getElementById("ac").addEventListener("click", clearCalculator);
//Si toca calculate realiza la operación señalada
document.getElementById("equal").addEventListener("click", calculate);

//Asigna la operación dentro de calculate
document.getElementById("plus").addEventListener("click", () => pressOperation("+"));
document.getElementById("rest").addEventListener("click", () => pressOperation("-"));
document.getElementById("por").addEventListener("click", () => pressOperation("*"));
document.getElementById("sla").addEventListener("click", () => pressOperation("/"));

//En caso que el usuario toque cualquier de los numeros, estos se señalan y se agregan al currentInpu
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

//Para blaquear
let currentInput = "";
let previousInput = "";

//No hay seleccion todavía
let selectedOperation = null;

// Función que recibe el parametro num
const pressNumber = (num) => {
    //Recibe el parametro (numero) y lo agrega al actual currentInput
    currentInput += num;
    //Este se muestra en el display negro
    result.innerText = currentInput;
    // Primero identifica si ya se preocionó, en caso de no manda un "" y si sí manda la selecci+on de la operación para el actual numero y esto se muestra en operation
    operation.innerText = previousInput + (selectedOperation ? ` ${selectedOperation} ` : "") + currentInput;
}

// Función que recibe el parametro op
const pressOperation = (op) => {
    //Si en currentinput no se ha escrito en blanco, este termina su proceso hasta no recibir algo
    if (currentInput === "") return;

    //Si previos no es estrictamente igual a "" manda calculate, o sea, si alguien mando numeros si debe ejecutar calculate();
    if (previousInput !== "") {
        calculate(); 
    }

    //el tipo de operación se agrega en la variable selected
    selectedOperation = op;

    //currentInt se almacena en el display ya con el calculo hecho
    previousInput = currentInput;

    //Los numeros y operación se blanquean
    currentInput = "";

    // se añade el tipo los numeros, un espacio y luego la operación 12 + 
    operation.innerText = previousInput + " " + selectedOperation;
}

// Función para calcular el resultado
function calculate() {
    //Si previous y current no tienen nada termina el proceso
    if (previousInput === "" || currentInput === "") return;

    //Se crean dos variable y los dos recibenn un numero que van de cadena a numero y se guardan enn num1 o num2
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    //El total mientras es 0
    let total = 0;

    //se Crea un switch donde si el usuario selecciona cualquier operación esta activiará con base a la selección y hace la operación
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
            //detecta primero si van a usar / no debe de haber un cero, en caso de no hace la división, en caso que si tengo un 0 manda error
            total = num2 !== 0 ? num1 / num2 : "Error";
            break;
        default:
            return;
    }

    // muestra el numero guardado, espacio, la selección de la operaxción, espacio el actual numero a operar y un = (1+2=)
    operation.innerText = previousInput + " " + selectedOperation + " " + currentInput + " =";

    //En resultado muestra el total de la operación
    result.innerText = total;

    //En la parte de abajo o sea, currentInput muestra en cadena de texto el total
    currentInput = total.toString();

    //Blanquea el previos numeros de arriba y la selección
    previousInput = "";
    selectedOperation = null;
}

// En caso que el usuario toque esta canción, todo se limpia a regresa 0
function clearCalculator () {
    currentInput = "";
    previousInput = "";
    selectedOperation = null;
    result.innerText = "0";
    operation.innerText = "";
}