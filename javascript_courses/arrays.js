let listaGenerica = [];
let lenguajesDeProgramacion = ["Javascript", "C", "C++", "Kotlin", "Python"];
let allNums = 0;

lenguajesDeProgramacion.push("Java");
lenguajesDeProgramacion.push("Ruby");
lenguajesDeProgramacion.push("GoLang");

function createNumArray() {
    let arraySize = 8;
    let numArray = [];
    for (let index = 0; index < arraySize; index++) {
        let randNum = Math.floor(Math.random() * 10) + 1;
        numArray.push(randNum);
        console.log(...numArray);

        setAllNumbers(randNum);
    }
    return numArray;
}

function setAllNumbers(num) {
    allNums += num;
}

function getAllNumbers() {
    return allNums;
}

function cleanAllNumbersVariable() {
    allNums = 0;
}

function showAllArrayElements(){
    console.log(lenguajesDeProgramacion);
}

function calcularPromedio() {
    let array = createNumArray();
    let allNums = getAllNumbers();
    let promedio = allNums / array.length;
    console.log("El promedio es: " + promedio);
    cleanAllNumbersVariable();
}

function minMaxArrayNum() {
    let array = createNumArray();

    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);
    console.log("min value: " + minValue);
    console.log("max value: " + maxValue);
    cleanAllNumbersVariable();
}

function plusAllArrayNumbers() {
    let array = createNumArray();
    let allNums = getAllNumbers();

    console.log("la suma de todos los nums es: " + allNums);
    cleanAllNumbersVariable();
}

function findNumber(num) {
    let array = createNumArray();
    array.includes(num) ? console.log("index: " + array.indexOf(num)) : console.log("no encontrado " + -1);
    cleanAllNumbersVariable();
}

function concatenarArray() {
    let array1 = createNumArray();
    let array2 = createNumArray();
    cleanAllNumbersVariable();

    let newArray = array1.concat(array2);
    console.log("new array: " + newArray);

    newArray.forEach(element => {
        setAllNumbers(element);  
    });
    let sumaNewArray = getAllNumbers();
    console.log("la suma de los elementos del newArray es: " + sumaNewArray);
    cleanAllNumbersVariable();
}

function squareArrayElements() {
    let array = createNumArray();
    let newArray = array.map(element => element * element);
    console.log("squared array: " + newArray);
}

showAllArrayElements();
console.log("---------------------------------------");
calcularPromedio();
console.log("---------------------------------------");
minMaxArrayNum();
console.log("---------------------------------------");
plusAllArrayNumbers();
console.log("---------------------------------------");
findNumber(5);
console.log("---------------------------------------");
concatenarArray();
console.log("---------------------------------------");
squareArrayElements();
console.log("---------------------------------------");