"use strict";
const Name = document.querySelector('.add-user');
Name.addEventListener("click", namet);
function namet() {
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
        erroInvName.classList.add("invisible");
    }
}
