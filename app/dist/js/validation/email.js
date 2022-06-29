"use strict";
const inputEmail = document.getElementById('email');
inputEmail.addEventListener("change", validateEmail);
function validateEmail() {
    const email = document.querySelector('#email');
    var erroEmail = document.querySelector("#erroEmail");
    var erroInvalidemail = document.querySelector("#erroInvalidemail");
    var expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var regex = new RegExp(expression);
    if (email.value == '') {
        email.classList.add("errorInput");
        erroEmail.classList.remove("invisible");
        erroInvalidemail.classList.add("invisible");
    }
    else {
        email.classList.remove("errorInput");
        if (email.value.match(regex)) {
            email.classList.remove("errorInput");
            erroInvalidemail.classList.add("invisible");
        }
        else {
            email.classList.add("errorInput");
            erroInvalidemail.classList.remove("invisible");
        }
        erroEmail.classList.add("invisible");
    }
}
