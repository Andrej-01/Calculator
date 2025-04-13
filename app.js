// console.log('Hello Calc!')

const BtnAc = document.getElementById('ac')
const Btn = document.getElementById('c')
const BtnEqually = document.getElementById('equally')
const BtnPoint = document.getElementById('point')

let input = document.getElementById('input')
const output = document.getElementById('output')

const BtnPlus = document.getElementById('plus')
const BtnMinus = document.getElementById('minus')
const BtnMultiply = document.getElementById('multiply')
const BtnShare = document.getElementById('share')

const BtnZero = document.getElementById('zero')
const BtnOne = document.getElementById('one')
const BtnTwo = document.getElementById('two')
const BtnThree = document.getElementById('three')
const BtnThour = document.getElementById('thour')
const BtnFive = document.getElementById('five')
const BtnSix = document.getElementById('six')
const BtnSeven = document.getElementById('seven')
const BtnEight = document.getElementById('eight')
const BtnNine = document.getElementById('nine')

BtnAc.onclick = function () {
    input.innerHTML = BtnAc.value
    output.innerHTML = BtnAc.value
}

Btn.onclick = function () {
    input.innerHTML = Btn.value  
}

BtnEqually.onclick = function () {
    if (input.textContent == ''){
        return
    }
    output.innerHTML = eval(input.textContent)
}

BtnPoint.onclick = function () {
    input.innerHTML += BtnPoint.value
}

BtnPlus.onclick = function () {
    input.innerHTML += BtnPlus.value
}

BtnMinus.onclick = function () {
    input.innerHTML += BtnMinus.value
}

BtnMultiply.onclick = function () {
    input.innerHTML += BtnMultiply.value
}

BtnShare.onclick = function () {
    input.innerHTML += BtnShare.value
}


BtnZero.onclick = function () {
    input.innerHTML += BtnZero.value
}

BtnOne.onclick = function () {
    input.innerHTML += BtnOne.value
}

BtnTwo.onclick = function () {
    input.innerHTML += BtnTwo.value
}

BtnThree.onclick = function () {
    input.innerHTML += BtnThree.value
}

BtnThour.onclick = function () {
    input.innerHTML += BtnThour.value
}

BtnFive.onclick = function () {
    input.innerHTML += BtnFive.value
}

BtnSix.onclick = function () {
    input.innerHTML += BtnSix.value
}

BtnSeven.onclick = function () {
    input.innerHTML += BtnSeven.value
}

BtnEight.onclick = function () {
    input.innerHTML += BtnEight.value
}

BtnNine.onclick = function () {
    input.innerHTML += BtnNine.value
}