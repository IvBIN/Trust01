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
        result.innerText = "=" + eval(numbers.innerText.replace("x", "*")
            .replace("÷", "/").replace("^", "**"));
        
    })
});
