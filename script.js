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

let displayVal = 0;
let firstVal = 0;
let secondVal = 0;



clear.addEventListener("click", clearAll);
plus.addEventListener("click", plusFunc);
percent.addEventListener("click", percentFunc);
divide.addEventListener("click", divideFunc);
times.addEventListener("click", timesFunc);
minus.addEventListener("click", minusFunc);
plusMinus.addEventListener("click", negativeFunc);
total.addEventListener("click", operate);

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
dot.addEventListener("click", dotFunc);

let resolveFunc = function() {
    return "empty";
};

function render() {
    if (typeof displayVal === "string") {
        display.textContent = displayVal;
    } else {
        display.textContent = (Math.round((+displayVal)*100000)/100000);
        displayVal.toString();
    };
    
};

function clearDisplay() {
  displayVal = 0;
  render();
};
function addNumber(num) {
    if (displayVal == 0) {
        displayVal = `${num}`;
        render();
    } else {
    displayVal += `${num}`;
    render();
    };
};

function clearAll() {
    firstVal = 0;
    secondVal = 0;
    resolveFunc = function() {
        return "empty";
    };
    clearDisplay();
};

function storeVal() {
    if (displayVal == 0 ){
        clearDisplay();
    } else if ( firstVal == 0) {
        firstVal = displayVal;
        clearDisplay();
    } else if ( firstVal !== 0) {
        secondVal = displayVal;
        clearDisplay();
    };
};

function operate() {
        if (firstVal ==0 && secondVal == 0) {
            console.log("working")
        } else {
            storeVal();
            resolveFunc(firstVal, secondVal);
            render();
            firstVal = displayVal;
            displayVal = 0;
            secondVal = 0;
        };
    };

function plusFunc() {
    storeVal();
    if (!firstVal == 0 && !secondVal == 0) operate();
    resolveFunc = function(firstVal, secondVal) {
        displayVal = (+firstVal) + (+secondVal);
    };
};
function minusFunc() {
    storeVal();
    if (!firstVal == 0 && !secondVal == 0) operate();
    resolveFunc = function(firstVal, secondVal) {
        displayVal = (+firstVal) - (+secondVal);
    }
};
function timesFunc() {
    storeVal();
    if (!firstVal == 0 && !secondVal == 0) operate();
    resolveFunc = function(firstVal, secondVal) {
        displayVal = (+firstVal) * (+secondVal);
    }
};
function divideFunc() {
    storeVal();
    if (!firstVal == 0 && !secondVal == 0) operate();
    resolveFunc = function(firstVal, secondVal) {
        if (secondVal == 0) {
            displayVal = "zbi²";
        } else {
        displayVal = (+firstVal) / (+secondVal);
        };
    };
};
function percentFunc() {
    if (displayVal == 0) {
        displayVal = firstVal / 100;
    } else displayVal = displayVal / 100;
    render();
};
function negativeFunc() {
    if (displayVal == 0) {
        return;
    } else if (displayVal.includes("-")) {
        displayVal = displayVal.replace("-", "");
    } else {
        displayVal = "-" + displayVal;
    };
    render();
};
function dotFunc() {
    if (displayVal == 0) {
        return;
    } else if (displayVal.includes(".")) {
        displayVal = displayVal;
    } else {
        displayVal = displayVal + ".";
    };
    render();
};