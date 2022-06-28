"use strict";
const inputZip = document.getElementById('zipCode');
const inputCountry = document.getElementById('country');
const inputState = document.getElementById('state');
const inputCity = document.getElementById('city');
inputZip.addEventListener("change", validateZip);
inputCountry.addEventListener("change", validateCountry);
inputState.addEventListener("change", validateState);
inputCity.addEventListener("change", validateCity);
function validateState() {
    const state = document.querySelector('#state');
    var erroState = document.querySelector("#erroState");
    if (state.value == '') {
        state.classList.add("errorInput");
        erroState.classList.remove("invisible");
    }
    else {
        state.classList.remove("errorInput");
    }
}
function validateCity() {
    const city = document.querySelector('#city');
    var erroCity = document.querySelector("#erroCity");
    if (city.value == '') {
        city.classList.add("errorInput");
        erroCity.classList.remove("invisible");
    }
    else {
        city.classList.remove("errorInput");
    }
}
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
