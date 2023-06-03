const add = function (num1,num2) {
    // return args.reduce((sum, num) => sum + num, 0);
    return num1+num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};


const multiply = function (num1,num2) {
    return num1 * num2;
};

const power = function (num, power) {
    return num ** power;
};

const divide = function (num1,num2){
    if(num2===0){
        return "can not divide numbers by zero"
    }else{
        return num1/num2;
    }
}

function operator(num1,num2,operator){
    if(operator==="+"){
        return add(num1,num2)
    }
    if(operator==="-"){
        return subtract(num1,num2)
    }
    if(operator==="*"){
        return multiply(num1,num2)
    }
    else if(operator==="/"){
        return divide(num1,num2)
    }
    else{
        return "";
        // "invaid operator"
    }
}

let display = document.querySelector(".display");
let displayValue = display.innerText;

let firstNum = "";
let secondNum = "";
let op = "";

function appendToDisplay(num){
    if (display.innerText.includes("+") || display.innerText.includes("-") || display.innerText.includes("*") || display.innerText.includes("/")) {
        secondNum += num;
        return display.innerText += num;
    }
    else{
        firstNum += num;
        // console.log(firstNum)
        return display.innerText += num;
    }

}


function appendOpToDisplay(ope, num2) {
    if(firstNum!==""){
        if (display.innerText.endsWith("+") || display.innerText.endsWith("-") || display.innerText.endsWith("*") || display.innerText.endsWith("/")) {
            display.innerText = display.innerText.slice(0, -1) + ope; // Replace the last operator with the current operator
        } else {
            op = ope;
            display.innerText += ope; // Append the current operator to the display
        }
    }
}



function calculate(){
    let firstNumFloat = parseFloat(firstNum);
    let secondNumFloat = parseFloat(secondNum);
    let answer = operator(firstNumFloat,secondNumFloat,op);
    display.innerText = answer;
}

let clear = document.querySelector(".clear")

function reset(){
    console.log("reset function called");
    firstNum = "";
    secondNum = "";
    op = "";
    display.innerText = "";
}

clear.addEventListener("click",reset);

function inputByKeyboard(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
      appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      appendOpToDisplay(key);
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Backspace") {
      reset();
    }
  }
  
  window.addEventListener("keydown", inputByKeyboard);