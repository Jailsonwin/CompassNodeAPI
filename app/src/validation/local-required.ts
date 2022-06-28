const inputZip = document.getElementById('zipCode') as HTMLElement;
const inputCountry = document.getElementById('country') as HTMLElement;
const inputState = document.getElementById('state') as HTMLElement;
const inputCity = document.getElementById('city') as HTMLElement;

inputZip.addEventListener("change", validateZip);
inputCountry.addEventListener("change", validateCountry);
inputState.addEventListener("change", validateState);
inputCity.addEventListener("change", validateCity);




function validateState(){

    const state = document.querySelector('#state') as HTMLInputElement;
    var erroState = document.querySelector("#erroState") as HTMLElement;

    if(state.value == ''){
        state.classList.add("errorInput")
        erroState.classList.remove("invisible")
    }else{
        state.classList.remove("errorInput")
    }
}

function validateCity(){

    const city = document.querySelector('#city') as HTMLInputElement;
    var erroCity = document.querySelector("#erroCity") as HTMLElement;

    if(city.value == ''){
        city.classList.add("errorInput")
        erroCity.classList.remove("invisible")
    }else{
        city.classList.remove("errorInput")
    }
}

function validateZip(){

    const zip = document.querySelector('#zipCode') as HTMLInputElement;
    var erroZip = document.querySelector("#erroZip") as HTMLElement;

    if(zip.value == ''){
        zip.classList.add("errorInput")
        erroZip.classList.remove("invisible")
    }else{
        zip.classList.remove("errorInput")
    }
}

function validateCountry(){

    const country = document.querySelector('#country') as HTMLInputElement;
    var erroCoutry = document.querySelector("#erroCoutry") as HTMLElement;

    if(country.value == ''){
        country.classList.add("errorInput")
        erroCoutry.classList.remove("invisible")
    }else{
        country.classList.remove("errorInput")
    }
}