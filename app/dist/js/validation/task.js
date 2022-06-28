"use strict";
const inputDesc = document.getElementById('description');
const inputTime = document.getElementById('time');
inputTime.addEventListener("change", validateTime);
inputDesc.addEventListener("change", validateDesc);
function validateDesc() {
    const description = document.querySelector('#description');
    var erroDescription = document.querySelector("#erroDescription");
    if (description.value == '') {
        description.classList.add("errorInput");
        erroDescription.classList.remove("invisible");
    }
    else {
        description.classList.remove("errorInput");
        erroDescription.classList.add("invisible");
    }
}
function validateTime() {
    const time = document.querySelector('#time');
    var erroTime = document.querySelector("#erroTime");
    if (time.value == '') {
        time.classList.add("errorInput");
        erroTime.classList.remove("invisible");
    }
    else {
        time.classList.remove("errorInput");
        erroTime.classList.add("invisible");
    }
}
