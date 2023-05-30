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
        return "invaid operator"
    }
}