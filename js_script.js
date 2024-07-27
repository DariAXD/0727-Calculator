let num1 = 0;
let num2 = 0;
let operator;

let input = document.querySelectorAll('button');
let display = document.querySelector('.display');

input.forEach(button => {
    button.addEventListener('click',(event)=> {
        let collectInput = event.target.textContent;
        console.log(collectInput);
        display.textContent = collectInput;

    });
});



function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1 * num2 ;
}

function divide(num1,num2){
    return num2 === 0? 'Error' : num1 / num2;
}

function operate(num1,num2,operator){
    switch(operator){
        case '+':
            return add(num1,num2);
            break;
        
        case '-':
            return subtract(num1,num2);
            break;

        case '*':
            return multiply(num1,num2);
            break;

        case '/':
            return divide(num1,num2);
            break;
    }
}
