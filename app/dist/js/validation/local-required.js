"use strict";
const inputZip = document.getElementById('zipCode');
const inputCountry = document.getElementById('country');
inputZip.addEventListener("change", validateZip);
inputCountry.addEventListener("change", validateCountry);
function validateZip() {
    const zip = document.querySelector('#zipCode');
    var erroZip = document.querySelector("#erroZip");
    if (zip.value == '') {
        zip.classList.add("errorInput");
        erroZip.classList.remove("invisible");
    }
    else {
        zip.classList.remove("errorInput");
    }
}
function validateCountry() {
    const country = document.querySelector('#country');
    var erroCoutry = document.querySelector("#erroCoutry");
    if (country.value == '') {
        country.classList.add("errorInput");
        erroCoutry.classList.remove("invisible");
    }
    else {
        country.classList.remove("errorInput");
    }
}
