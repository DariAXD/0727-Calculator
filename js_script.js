let num1 = '';
let num2 = '';
let operator=''; 
let output;


let input = document.querySelectorAll('button');
let inputDisplay = document.querySelector('.inputDisplay');
let outcomeDisplay = document.querySelector('.outcomeDisplay');

function inputNum(num, inputValue){
    if(!num) num = '0';

    if(inputValue ==='.'){
        num.includes('.') ? num :  num += '.';
        

    } else if(inputValue === 'Backspace' || inputValue === 'C' ){
        outcomeDisplay.textContent.length === 1 ? 
        outcomeDisplay.textContent = '0' 
        :  outcomeDisplay.textContent =  outcomeDisplay.textContent.slice(0,-1)
        num =  outcomeDisplay.textContent;

    } else if(num[0]== 0 && num[1]!=='.'){
        num = inputValue;

    } else {
        num += inputValue;
    }
    outcomeDisplay.textContent = num;
    return num
}


function mainCalculation(inputValue,inputType){
        if(inputType ==='digit' && (!operator)){
            num1 = inputNum(num1, inputValue);
            console.log(num1)

        } else if (inputType ==='operator' && (!operator)){
            
            operator = inputValue;
            inputDisplay.textContent = num1 + operator;
            outcomeDisplay.textContent = '0';

            console.log(num1)
            console.log(operator)

        } else if(inputType ==='digit' && operator){
                num2 = inputNum(num2, inputValue);
                console.log(num2)

        } else if (inputType ==='equal'){
            if((!num1)&& (!num2)&&(!operator)){
                inputDisplay.textContent = '0';
                outcomeDisplay.textContent = '0';

            } else if((!operator)){

                outcomeDisplay.textContent = num1;

            }  else if(operator === '/' && Number(num2)=== 0){
                alert(`Error!Can't be divided by 0!`);
                
            } else {
                output = operate(num1,num2,operator);
                inputDisplay.textContent = num1 + operator + num2;
                outcomeDisplay.textContent = outputNum(output);
                
                console.log(outputNum(output))
        }
        } else if (inputType ==='operator' && operator){
            if(num2 == ''){
                operator = inputValue;
                inputDisplay.textContent = num1 + operator;
                outcomeDisplay.textContent = '0';

            } else if(operator === '/' && Number(num2)=== 0){
                alert(`Error!Can't be divided by 0!`);
            } else {
                output = operate(num1,num2,operator);
                num1 = outputNum(output);
                num2 = '';
                operator = inputValue;
                inputDisplay.textContent = num1 + operator
                outcomeDisplay.textContent = '0';
            }
        } else if (inputType ==='allClear'){
            num1 = '';
            num2 = '';
            operator = '';
            outcomeDisplay.textContent = '0';
            inputDisplay.textContent = '0';

        } 
}



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
        
        case '-' && '−':
            return subtract(num1,num2);
            break;

        case 'x'&& '*' && '×':
            return multiply(num1,num2);
            break;

        case '/' && '÷':
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




let inputValue = '';
let inputType = '';

window.addEventListener('keyup',(event)=>{
    let keyInput = event.key;
    
    const digits = ['0','1','2','3','4','5','6','7','8','9','.','Backspace'];
    const keyOperator = ['+','-','x',"/",'*','÷','×']
    const keyEqual = ['=']

    if(digits.includes(keyInput)){
        inputValue = keyInput;
        inputType = 'digit';
    } else if(keyOperator.includes(keyInput)){
        inputValue = keyInput;
        inputType = 'operator';
    } else if(keyEqual.includes(keyInput)){
        inputValue = keyInput;
        inputType = 'equal';
    } 
    
    console.log(inputValue);
    console.log(inputType);
    mainCalculation(inputValue,inputType)
})

input.forEach(button => {
    button.addEventListener('click',(event)=> {

        let inputEle = event.target
        

        if(inputEle.classList.contains('digit')){
            inputValue = inputEle.textContent;
            inputType = 'digit';
        } else if (inputEle.classList.contains('operator')){
            inputValue = inputEle.textContent;
            inputType = 'operator';
        } else if (inputEle.classList.contains('equal')){
            inputValue = inputEle.textContent;
            inputType = 'equal';
        } else if ( inputEle.classList.contains('allClear')){
           inputValue = inputEle.textContent;
           inputType = 'allClear';
        }

        console.log(inputValue);
        console.log(inputType);
        mainCalculation(inputValue,inputType)
    
    })
})
