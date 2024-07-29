let num1 = '0';
let num2 = '0';
let operator=''; 
let output;

let input = document.querySelectorAll('button');
let inputDisplay = document.querySelector('.inputDisplay');
let outcomeDisplay = document.querySelector('.outcomeDisplay');

input.forEach(button => {
    button.addEventListener('click',(event)=> {
        let inputEle = event.target
        if(inputEle.classList.contains('digit') && (!operator)){
            if(num1[0]== 0){
                num1 = inputEle.textContent;
                outcomeDisplay.textContent = num1;
            } else {
                num1 += inputEle.textContent;
                outcomeDisplay.textContent = num1;
            }
            console.log(num1)
        } else if (inputEle.classList.contains('operator') && (!operator)){
            
            operator = inputEle.textContent;
            inputDisplay.textContent = num1 + operator;
            outcomeDisplay.textContent = num2;
            console.log(num1)
            console.log(operator)
        } else if(inputEle.classList.contains('digit') && operator){
            if(num2[0]== 0){
                num2 = inputEle.textContent;
                outcomeDisplay.textContent = num2;
            } else {
                num2 += inputEle.textContent;
                outcomeDisplay.textContent = num2;
            }
            console.log(num2)
        } else if (inputEle.classList.contains('equal')){
            if((!num1)&& (!num2)&&(!operator)){
                inputDisplay.textContent = '';
                outcomeDisplay.textContent = '0';
            } else if((!operator) || (!num2)){
                inputDisplay.textContent = ''
                outcomeDisplay.textContent = num1;
            } else if(operator === '/' && Number(num2)=== 0){
                alert(`Error!Can't be divided by 0!`);
                
            } else {output = operate(num1,num2,operator);
                inputDisplay.textContent = num1 + operator + num2 + '=';
                outcomeDisplay.textContent = outputNum(output);
                
                console.log(outputNum(output))
        }
        } else if (inputEle.classList.contains('operator') && operator){
            if(num2 === '0'){
                operator = inputEle.textContent;
                inputDisplay.textContent = num1 + operator;
                outcomeDisplay.textContent = num2;
            } else if(operator === '/' && Number(num2)=== 0){
                alert(`Error!Can't be divided by 0!`);
            } else {
                output = operate(num1,num2,operator);
                num1 = outputNum(output);
                num2 = '0';
                operator = inputEle.textContent;
                inputDisplay.textContent = num1 + operator
                outcomeDisplay.textContent = num2;
            }
        } else if (inputEle.classList.contains('clear')){
            num1 = '';
            num2 = '';
            operator = '';
            outcomeDisplay.textContent = '0';
            inputDisplay.textContent = '';
        }
       

    });
});




function add(num1,num2){
    return Number(num1) + Number(num2);
}

function subtract(num1,num2){
    return Number(num1) - Number(num2);
}

function multiply(num1,num2){
    return Number(num1) * Number(num2) ;
}

function divide(num1,num2){
    return Number(num1)/Number(num2);
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

function outputNum(num){
    let decimalNums = num.toString().split('.')

    if (decimalNums[1]!==undefined){
        return decimalNums[1].length > 5 ? num.toFixed(5) : num
    }
   
    return num;
}

