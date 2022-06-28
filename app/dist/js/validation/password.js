"use strict";
const inputPass = document.getElementById('password');
inputPass.addEventListener("change", validatePass);
function validatePass() {
    const pass = document.querySelector('#password');
    var erroPass = document.querySelector("#erroPass");
    var erroInvalidpass = document.querySelector("#erroInvalidpass");
    var expression = /^[0-9a-zA-Z$*&@#]{6,}$/;
    var regex = new RegExp(expression);
    if (pass.value == '') {
        pass.classList.add("errorInput");
        erroPass.classList.remove("invisible");
        erroInvalidpass.classList.add("invisible");
    }
    else {
        pass.classList.remove("errorInput");
        if (pass.value.match(regex)) {
            pass.classList.remove("errorInput");
            erroInvalidpass.classList.add("invisible");
        }
        else {
            pass.classList.add("errorInput");
            erroInvalidpass.classList.remove("invisible");
        }
        erroPass.classList.add("invisible");
    }
}
