const inputZip = document.getElementById('zipCode') as HTMLElement;
const inputCountry = document.getElementById('country') as HTMLElement;

inputZip.addEventListener("change", validateZip);
inputCountry.addEventListener("change", validateCountry);


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