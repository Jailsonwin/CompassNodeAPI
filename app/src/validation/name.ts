
const inputName = document.getElementById('name') as HTMLElement;



inputName.addEventListener("change", validateName);

function validateName(){

    var expression = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
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