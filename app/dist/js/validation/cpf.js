"use strict";
const inputCpf = document.getElementById('cpf');
inputCpf.addEventListener("change", validateCpf);
function validateCpf() {
    const cpf = document.querySelector('#cpf');
    var erroCpf = document.querySelector("#erroCpf");
    var erroInvalidcpf = document.querySelector("#erroInvalidcpf");
    var expression = /^((\d{3}).(\d{3}).(\d{3})-(\d{2}))*$/;
    var regex = new RegExp(expression);
    if (cpf.value == '') {
        cpf.classList.add("errorInput");
        erroCpf.classList.remove("invisible");
        erroInvalidcpf.classList.add("invisible");
    }
    else {
        cpf.classList.remove("errorInput");
        if (cpf.value.match(regex)) {
            cpf.classList.remove("errorInput");
            erroInvalidcpf.classList.add("invisible");
        }
        else {
            cpf.classList.add("errorInput");
            erroInvalidcpf.classList.remove("invisible");
        }
        erroCpf.classList.add("invisible");
    }
}
function maskCpf() {
    var inputCpf = document.getElementById('cpf');
    if (inputCpf.value.length == 3 || inputCpf.value.length == 7) {
        inputCpf.value += ".";
    }
    else if (inputCpf.value.length == 11) {
        inputCpf.value += "-";
    }
}
