
const inputScreen = document.querySelector(".calc-inputs > p");

let nextNum = false;
var num = 0;

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
            console.log("new num")
            inputScreen.innerHTML = "";
            nextNum = false;
        }
        onNumPress(key);
    } else if((keyCode >= 42 && keyCode <= 47) && keyCode != 44){
        //ON PRESS OF MATH OPERATORS
        if(key.key === "+") {
            num += parseInt(inputScreen.innerHTML)
            inputScreen.innerHTML=num
            nextNum = true;
        } else if(key.key === "-") {
            //this part here is not yet working
            num -= parseInt(inputScreen.innerHTML)
            inputScreen.innerHTML=num
            nextNum = true;
        }

    }



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



