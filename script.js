//NUM BUTTONS
document.addEventListener("keypress", (e) => {
    onKeyPress(e);

})

function onKeyPress(key) {
    const keyCode = key.keyCode;
    console.log(keyCode)
    //to filter the not needed keys
    //THIS IS FOR LOWER AND UPPTERCASE LTTERS (key >= 65 && key <=90) || (key >= 97 && key <= 122))
    if(keyCode >= 48 && keyCode <= 57) {
        onNumPress(key);
    } else if(keyCode >= 106 && keyCode <= 111){
        console.log("mathop")
        onMathPress(key);
    }
}

function onNumPress(key) {
    const inputScreen = document.querySelector(".calc-inputs > p");
    inputScreen.innerHTML += key.key
}

function onMathPress(key) {
    console.log("mayat mathpressss")
    const chars = "/*-+.";
    const invalidChars = chars.split("");
    console.log(invalidChars)
    if(inputScreen.innerHML != "") {

    }
}

