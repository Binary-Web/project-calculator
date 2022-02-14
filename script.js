const calculator = document.querySelector('.calculator');
const buttons = document.querySelector('.calc-btn');
const display = document.querySelector('.calc-display');

buttons.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const prevBtnType = calculator.dataset.prevBtnType;
        document.querySelectorAll('.btn-operator').forEach(element => {
            element.classList.remove('is-pressed');
        })
        if(!action) {
            if(displayedNum === '0' || prevBtnType === "operator") {
                calculator.dataset.prevBtnType = "num";
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + key.textContent;
            }
            calculator.dataset.prevBtnType = "number"
        } else if (
                    action === "add" ||
                    action === "subtract" ||
                    action === "multiply" ||
                    action === "divide"
        ) {
            if(prevBtnType != "operator") {

                calculator.dataset.firstNum = displayedNum;
                calculator.dataset.operator = action;
                key.classList.add('is-pressed');
                calculator.dataset.prevBtnType = "operator";
            } else {
                calculator.dataset.operator = action;
            }
        } else if (action === "decimal") {
            if(!displayedNum.includes('.')){
                display.textContent = displayedNum + ".";
            } else if (prevBtnType === "operator") {
                display.textContent = "0."
            }
            calculator.dataset.prevBtnType = "decimal"
        } else if (action === "calculate") {
            const num1 = calculator.dataset.firstNum;
            const operator = calculator.dataset.operator;
            const num2 = displayedNum;
            
            display.textContent = getResult(num1, num2, operator);

            calculator.dataset.prevBtnType = "calculate"
        } else if (action === "clear") {
            display.textContent = "0";
            calculator.dataset.firstNum = "0";
            calculator.dataset.operator = null;
            
        }
    }
    
})

function getResult(num1, num2, operator) {
    switch(operator) {
        case "add":         return parseFloat(num1) + parseFloat(num2);
        case "subtract":    return parseFloat(num1) - parseFloat(num2);
        case "multiply":    return parseFloat(num1) * parseFloat(num2);
        case "divide":      return parseFloat(num1) / parseFloat(num2);
    }
}