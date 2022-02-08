
const inputScreen = document.querySelector(".calc-inputs > p");

let nextNum = false;
let waitNum1 = true;
let waitNum2 = false;
let currentOperator = null;
let num1 = 0;
let num2 = 0;
let result = 0;
//NUM BUTTONS
document.addEventListener("keypress", (e) => {
    onKeyPress(e);

})

function onKeyPress(key) {
    const keyCode = key.keyCode;
    //to filter the not needed keys
    if(keyCode >= 48 && keyCode <= 57) {
        //console.log(nextNum)
        if(nextNum) {
            inputScreen.innerHTML = "";
            nextNum = false;
        }
        onNumPress(key);
    } else if((keyCode >= 42 && keyCode <= 47) && keyCode != 44){
        //ON PRESS OF MATH OPERATORS


    }
}

function calculate(num1, num2, operator) {

}

function onNumPress(key) {
    inputScreen.innerHTML += key.key;
}

function onMathPress(key) {
    let num1 = 0;
    let num2 = 0;
    console.log("mayat mathpressss");
    if(inputScreen.innerHML != "") {
        if(key.key === "+") {
            num1 = parseInt(inputScreen.innerHTML);
        }
    }
}



