let onMemory = {
    number: `aici`
}

function focus() {
    document.querySelector("#theNumbers").focus()
}

function justOneCaracter (event) {
    if(event.key>="0" && event.key<"9"){

    } else {
        event.preventDefault()
    }
}

function draw () {
    let screen = document.querySelector("#screen")
    let caracters = document.querySelectorAll("#symbols")
    let symbols = [];
    for (let val of caracters) {
        symbols.push(val.textContent)
    }
    screen.innerHTML=``
}

function plus(idx, event) {
    let input = document.querySelector("#theNumbers")
    let contentOfInput=input.value
    let screen = document.querySelector("#screen2")
    let screenContent = screen.textContent
    let symbol = document.querySelectorAll("#symbols")
    let val = symbol[idx].textContent
    let isInvalid = false 
    let lastElementOfScreen = screenContent.substring(screenContent.length-1)

    if (lastElementOfScreen.includes("/") || lastElementOfScreen.includes("*") || lastElementOfScreen.includes("-") || lastElementOfScreen.includes("/")) {
        isInvalid = true
        if(contentOfInput !== ``) {
            isInvalid = false
        }
    } 

    if (isInvalid === false && contentOfInput !== '') {
        screen.innerHTML += `${contentOfInput}${val}`
    } else {
        event.preventDefault()
    }

    document.querySelector("#screen3").reset()
    focus()
}

function numbers (idx) {
    let input = document.querySelector("#theNumbers")
    let num = document.querySelectorAll("#number")
    let show = document.querySelector("#screen2")
    show.classList.remove("red")
    let numbers = [];
    if (onMemory.number !== ``) {
        onMemory.number = ``
        show.innerHTML = ``
    }
    for(let val of num){
        numbers.push(val.textContent)
    }
    input.value+=numbers[idx] 
    // cred ca aici trebuie sa adaug ca atunci cand adaug ceva in input sa dea innerHTML 
}

function equal (event) {
    let input = document.querySelector("#theNumbers").value
    let finalValue = document.querySelector("#screen2")
    let show = ``
    if (finalValue.textContent === ``) {
        alert(`Va rugam sa introduceti cifre in caseta pentru a procesa rezultatul ! `)
    }

    if (finalValue.textContent !== ``) {
        show = (finalValue.textContent += input)
        var result = eval(show).toFixed(2)
        document.querySelector("#screen3").reset()
        finalValue.innerHTML = `${result}`
        finalValue.classList.add("red")
        onMemory.number = String(result)
        
    } else {
        console.log("Aici intra in functie")
        event.preventDefault()
    }  
}

document.querySelector("[type='button']").addEventListener("click", () => {
    document.querySelector("#screen2").innerHTML = ``;
    focus();
})