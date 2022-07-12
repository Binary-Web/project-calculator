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
            if(display.textContent.length > 14) {
                display.style.fontSize = '2.4rem';
            } else {
                display.style.fontSize = '3rem';
                if(displayedNum === '0' || prevBtnType === "operator") {
                    calculator.dataset.prevBtnType = "num";
                    display.textContent = keyContent;
                } else {
                    display.textContent = displayedNum + key.textContent;
                }
            }


        } else if (
                    action === "add" ||
                    action === "subtract" ||
                    action === "multiply" ||
                    action === "divide"
        ) {
            calculator.dataset.firstNum = displayedNum;
            calculator.dataset.operator = action;
            key.classList.add('is-pressed');
            calculator.dataset.prevBtnType = "operator";
        } else if (action === "decimal") {
            if(!displayedNum.includes('.')) {
                display.textContent = displayedNum + "."
            }
        } else if (action === "calculate") {
            const num1 = calculator.dataset.firstNum;
            const operator = calculator.dataset.operator;
            const num2 = displayedNum;
            
            if(operator) {

                display.textContent = getResult(num1, num2, operator);
            }

        } else if (action === "clear") {
            display.style.fontSize = 'xxx-large'
            display.textContent = 0;
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