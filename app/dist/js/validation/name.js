"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputName = document.getElementById('name');
const inputNameE = document.getElementById('nameEdit');
inputName.addEventListener("change", validateName);
inputNameE.addEventListener("change", validateNameE);
function validateName(e) {
    var expression = /^((\b[A-zÀ-ú']{2,40}\b)\s*){2,}$/gm;
    var regex = new RegExp(expression);
    var erroInvName = document.querySelector("#erro-input");
    var erroName = document.querySelector("#erro-name");
    const name = document.querySelector('#name');
    if (name.value == '') {
        name.classList.add("errorInput");
        erroInvName.classList.remove("invisible");
        erroName.classList.add("invisible");
    }
    else {
        name.classList.remove("errorInput");
        if (name.value.match(regex)) {
            name.classList.remove("errorInput");
            erroName.classList.add("invisible");
        }
        else {
            name.classList.add("errorInput");
            erroName.classList.remove("invisible");
            e.preventDefault();
        }
        erroInvName.classList.add("invisible");
    }
}
function validateNameE() {
    var expression = /^((\b[A-zÀ-ú']{2,40}\b)\s*){2,}$/gm;
    var regex = new RegExp(expression);
    var erroNameE = document.querySelector("#erroNameE");
    var erroInvalidnameE = document.querySelector("#erroInvalidnameE");
    const nameEdit = document.querySelector('#nameEdit');
    if (nameEdit.value == '') {
        nameEdit.classList.add("errorInput");
        erroNameE.classList.remove("invisible");
        erroInvalidnameE.classList.add("invisible");
    }
    else {
        nameEdit.classList.remove("errorInput");
        if (nameEdit.value.match(regex)) {
            nameEdit.classList.remove("errorInput");
            erroInvalidnameE.classList.add("invisible");
        }
        else {
            nameEdit.classList.add("errorInput");
            erroInvalidnameE.classList.remove("invisible");
        }
        erroNameE.classList.add("invisible");
    }
}
