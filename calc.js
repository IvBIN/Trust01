"use strict";
const numbers = document.querySelector(".numbers");
const result = document.querySelector(".result");
const allClear = document.querySelector(".btn-ac");
const del = document.querySelector(".btn-clear");
const buttons = document.querySelectorAll(".btn-calc");
const equal = document.querySelector(".btn-equal");
const btnTheme = document.querySelector(".btn-theme");
const moreBtn = document.querySelector(".moreBtn");
const theme = document.querySelector("#theme");

buttons.forEach(function (button){
    button.addEventListener("click", function (event){
        numbers.classList.add("active");
        result.classList.remove("active");
        let value = event.target.dataset.num;
        numbers.innerText += value;
        equals();
    })
});

equal.addEventListener('click', function (){
    if (numbers.innerText === ''){
        numbers.innerText = 0;
    } else {
        numbers.classList.remove("active");
        result.classList.add("active");
    }
});

allClear.addEventListener('click', remove);

function remove(){
    numbers.innerText = '';
    result.innerText = 0;
    numbers.classList.remove("active");
    result.classList.add("active");
};

del.addEventListener('click', function (){
    if (!result.classList.contains("active")){
        if (numbers.innerText.length !== 1){
            numbers.innerText = numbers.innerText.slice(0, -1);
            result.innerText = result.innerText.slice(0, -1);
            equals();
        } else {
            remove();
        }
    }
});

function equals(){
    result.innerText = "=" + eval(numbers.innerText.replace("x", "*")
        .replace("÷", "/").replace("^", "**"));
};

document.querySelector(".btn-modal").addEventListener('click', function (){
    if (moreBtn.classList.contains("moreActive")) {
        moreBtn.classList.remove("moreActive")
    } else {
        moreBtn.classList.add("moreActive");
    }
});

btnTheme.addEventListener('click', function (){
   if (theme.getAttribute('href') === './light.css') {
       theme.href = './dark.css';
       btnTheme.innerText = "🌞";
   }
});