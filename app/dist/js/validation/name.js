"use strict";
const inputName = document.getElementById('name');
inputName.addEventListener("change", validateName);
function validateName() {
    var expression = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
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
        }
        erroInvName.classList.add("invisible");
    }
}
