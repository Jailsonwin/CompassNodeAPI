
const inputName = document.getElementById('name') as HTMLElement;
const inputNameE = document.getElementById('nameEdit') as HTMLElement;

inputName.addEventListener("change", validateName);
inputNameE.addEventListener("change", validateNameE);

function validateName(){

    var expression = /^((\b[A-zÀ-ú']{2,40}\b)\s*){2,}$/gm;
    var regex = new RegExp(expression);

    var erroInvName = document.querySelector("#erro-input") as HTMLElement;
    var erroName = document.querySelector("#erro-name") as HTMLElement;
    const name = document.querySelector('#name') as HTMLInputElement;

    if(name.value == ''){
        name.classList.add("errorInput")
        erroInvName.classList.remove("invisible")
        erroName.classList.add("invisible")

    }else{
        name.classList.remove("errorInput")

        if (name.value.match(regex)) {
            name.classList.remove("errorInput")
            erroName.classList.add("invisible")
            
        } else {
            name.classList.add("errorInput")
            erroName.classList.remove("invisible")
        }
        erroInvName.classList.add("invisible")
    }
}



function validateNameE(){

    var expression = /^((\b[A-zÀ-ú']{2,40}\b)\s*){2,}$/gm;
    var regex = new RegExp(expression);

    var erroNameE = document.querySelector("#erroNameE") as HTMLElement;
    var erroInvalidnameE = document.querySelector("#erroInvalidnameE") as HTMLElement;
    const nameEdit = document.querySelector('#nameEdit') as HTMLInputElement;

    if(nameEdit.value == ''){
        nameEdit.classList.add("errorInput")
        erroNameE.classList.remove("invisible")
        erroInvalidnameE.classList.add("invisible")

    }else{
        nameEdit.classList.remove("errorInput")

        if (nameEdit.value.match(regex)) {
            nameEdit.classList.remove("errorInput")
            erroInvalidnameE.classList.add("invisible")
            
        } else {
            nameEdit.classList.add("errorInput")
            erroInvalidnameE.classList.remove("invisible")
        }
        erroNameE.classList.add("invisible")
    }
}