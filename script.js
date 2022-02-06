//NUM BUTTONS
document.addEventListener("keypress", (e) => {
    onKeyPress(e.keyCode);

})

function onKeyPress(key) {
    if(key >= 65 || key <= 90) {
        console.log("good")
    }
}


//backspace             8
//period                190
// forward slash (/)    191
//arithmetic operators 106 - 111
//letters
//      lowercase       65-90