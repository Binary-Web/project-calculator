const calculator = document.querySelector('.calculator');
const buttons = document.querySelector('.calc-btn');

buttons.addEventListener('click', e => {
    const key = e.target;
    const action = key.dataset.action;
    if(!action) {
        console.log("num!");
    } else if (
                action === "add" ||
                action === "subtract" ||
                action === "multiply" ||
                action === "divide"
    ) {
        console.log("operator key");
    } else if (action === "decimal") {
        console.log("decimal key");
    } else if (action === "calculate") {
        console.log("calculate key")
    } else if (action === "clear") {
        console.log("clear key")
    }
    
})