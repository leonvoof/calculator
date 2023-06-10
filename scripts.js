let display = document.getElementById("calc")
let qwert = document.getElementById("eq")
let num1 = 0
let num2 = 0
let op = ""
let wipe = true

function buttonClick(num) {
     if(wipe) {
         display.innerText = "";
         wipe = false
     }
     display.innerText = display.innerText + num
}

function sign() {
    if(display.innerText === "") return;
    display.innerText = parseFloat(display.innerText) * -1;
}

function clearDisplay(){
    display.innerText = ""
    qwert.innerText = ""
    num1 = 0
    num2 = 0
    op = ""
}

function backspace(){
    len = display.innerText.length
    display.innerText = display.innerText.slice(0,len-1)
}

function add() {
    if (num1 !== 0){
        equals()
        num1 = parseFloat(display.innerText)
    } else {
        num1 = parseFloat(display.innerText)
        display.innerText = ""
    }
    op = "+"
}

function minus() {
    if (num1 !== 0){
        equals()
        num1 = parseFloat(display.innerText)
    } else {
        num1 = parseFloat(display.innerText)
        display.innerText = ""
    }
    op = "-"
}

function multiply() {
    if (num1 !== 0){
        equals()
        num1 = parseFloat(display.innerText)
    } else {
        num1 = parseFloat(display.innerText)
        display.innerText = ""
    }
    op = "*"
}

function divide() {
    if (num1 !== 0){
        equals()
        num1 = parseFloat(display.innerText)
    } else {
        num1 = parseFloat(display.innerText)
        display.innerText = ""
    }
    op = "/"
}

function equals() {
    num2 = parseFloat(display.innerText)
    if (op === "+"){
        display.innerText = num1 + num2
        qwert.innerText = num1+" "+op+" "+num2+" ="
     }
    else if (op ==="-"){
        display.innerText = num1 - num2
        qwert.innerText = num1+" "+op+" "+num2+" ="
    }
    else if (op ==="*"){
        display.innerText = num1 * num2
        qwert.innerText = num1+" "+op+" "+num2+" ="
    }
    else if (op ==="/"){
        display.innerText = num1 / num2
        qwert.innerText = num1+" "+op+" "+num2+" ="
    }

    num1 = 0
    num2 = 0
    opt = ""
    wipe = true
}