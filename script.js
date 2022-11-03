const display = document.querySelector(".display");

const clear = document.querySelector(".clear");
const plusMinus = document.querySelector(".plus-minus");
const percent = document.querySelector(".percent");
const divide = document.querySelector(".divide");
const times = document.querySelector(".times");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const total = document.querySelector(".total");

const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num0 = document.querySelector(".num0");
const dot = document.querySelector(".dot");

let displayValue = 0;
let firstValue = 0;
let secondValue = 0;

clear.addEventListener("click", clearAll);
plus.addEventListener("click", plusFunc); /*
percent.addEventListener("click", percentFunc);
divide.addEventListener("click", divideFunc);
times.addEventListener("click", timesFunc);
minus.addEventListener("click", minusFunc);
plusMinus.addEventListener("click", negativeFunc); */
total.addEventListener("click", totalFunc);

num1.addEventListener("click", () => addNumber(1));
num2.addEventListener("click", () => addNumber(2));
num3.addEventListener("click", () => addNumber(3));
num4.addEventListener("click", () => addNumber(4));
num5.addEventListener("click", () => addNumber(5));
num6.addEventListener("click", () => addNumber(6));
num7.addEventListener("click", () => addNumber(7));
num8.addEventListener("click", () => addNumber(8));
num9.addEventListener("click", () => addNumber(9));
num0.addEventListener("click", () => addNumber(0));
//dot.addEventListener("click", dotFunc);

function render() {
    display.textContent = displayValue;
};

function clearAll() {
    firstValue = 0;
    secondValue = 0;
    clearDisplay();
};

function clearDisplay() {
  displayValue = 0;
  render();
};

function addNumber(num) {
    if (displayValue === 0) {
        displayValue = num;
        render();
    } else {
    displayValue += `${num}`;
    render();
    };
};

function storeValue() {
    if (firstValue ===0 ){
        firstValue = displayValue;
        clearDisplay();
    } else {
        secondValue = displayValue;
        clearDisplay();
    }
};
function totalFunc() {
    console.log("zbi");
}
function plusFunc() {
    storeValue();
    totalFunc = (firstValue, secondValue) => (+firstValue) + (+secondValue);
};

function totalFunc(method) {
    total = (+firstValue) +method+ (+secondValue);
    console.log(total);
}