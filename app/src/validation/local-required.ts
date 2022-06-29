const inputZip = document.getElementById('zipCode') as HTMLElement;
const inputCountry = document.getElementById('country') as HTMLElement;
const inputState = document.getElementById('state') as HTMLElement;
const inputCity = document.getElementById('city') as HTMLElement;
const inputComplement = document.getElementById('complement') as HTMLElement;
const inputNumber = document.getElementById('number') as HTMLElement;
const inputAddress = document.getElementById('address') as HTMLElement;

inputZip.addEventListener("change", validateZip);
inputCountry.addEventListener("change", validateCountry);
inputState.addEventListener("change", validateState);
inputCity.addEventListener("change", validateCity);
inputComplement.addEventListener("change", validateComplement);
inputNumber.addEventListener("change", validateNumber);
inputAddress.addEventListener("change", validateAddress);


function validateComplement(){

    const complement = document.querySelector('#complement') as HTMLInputElement;
    var erroComplement = document.querySelector("#erroComplement") as HTMLElement;

    if(complement.value == ''){
        complement.classList.add("errorInput")
        erroComplement.classList.remove("invisible")
    }else{
        complement.classList.remove("errorInput")
    }
}

function validateNumber(){

    const number = document.querySelector('#number') as HTMLInputElement;
    var erroNumber = document.querySelector("#erroNumber") as HTMLElement;

    if(number.value == ''){
        number.classList.add("errorInput")
        erroNumber.classList.remove("invisible")
    }else{
        number.classList.remove("errorInput")
    }
}

function validateAddress(){

    const address = document.querySelector('#address') as HTMLInputElement;
    var erroAddress = document.querySelector("#erroAddress") as HTMLElement;

    if(address.value == ''){
        address.classList.add("errorInput")
        erroAddress.classList.remove("invisible")
    }else{
        address.classList.remove("errorInput")
    }
}

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